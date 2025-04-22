import Input from "@/app/components/input";
import HomeHeader from "../components/home-header";
import LastReadCard from "./components/last-read";
import Image from "next/image";
import ProfileFooter from "./footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/home/inicio");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      ratings: {
        include: {
          book: true,
        },
      },
    },
  });

  const mostReadedCategories = await prisma.categoriesOnBooks.groupBy({
    by: ["categoryId"],
    _count: {
      categoryId: true,
    },
    where: {
      book: {
        ratings: {
          some: {
            user_id: user?.id,
          },
        },
      },
    },
    orderBy: {
      _count: {
        categoryId: "desc",
      },
    },
    take: 1,
  });

  const categoryId =
    mostReadedCategories.length > 0 ? mostReadedCategories[0].categoryId : null;

  const mostReadedCategory = categoryId
    ? await prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      })
    : { name: "Nenhum livro lido" };

  return (
    <>
      <HomeHeader />
      <div className="mt-10 flex gap-16">
        <div className="flex w-3/5 flex-col">
          <Input className="w-full" placeholder="Buscar livro avaliado" />

          <div className="scrollbar-hide mt-8 h-[calc(100vh-250px)] space-y-6 overflow-y-scroll rounded-xs">
            {user?.ratings.length! > 0 ? (
              user?.ratings.map((rate) => <LastReadCard rate={rate} />)
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h1 className="mt-4 text-2xl font-bold text-gray-100">
                  Nenhum livro avaliado ainda
                </h1>
              </div>
            )}
          </div>
        </div>

        <aside className="flex h-[555px] w-[308px] flex-col items-center border-l border-gray-700">
          <div className="from-gradient1 to-gradient2 h-18 w-18 rounded-full bg-gradient-to-b p-[2px]">
            <Image
              src={session.user?.image!}
              alt="foto de perfil"
              width={72}
              height={72}
              className="rounded-full"
            />
          </div>

          <div className="mt-5 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-100">
              {session.user?.name}
            </h1>
            <span className="text-sm text-gray-400">
              membro desde {user?.created_at.getFullYear()}
            </span>
          </div>

          <div className="bg-gradient-horizontal my-8 h-1 w-8 rounded-full"></div>
          <ProfileFooter
            user={user!}
            mostReadedCategory={mostReadedCategory?.name!}
          />
        </aside>
      </div>
    </>
  );
}
