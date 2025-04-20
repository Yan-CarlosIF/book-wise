import { prisma } from "@/lib/prisma";

export async function GET() {
  const books = await prisma.book.findMany();

  return Response.json({ books });
}
