import { Rating } from "@prisma/client";
import { NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body: Omit<Rating, "id" | "created_at"> = await request.json();

    if (!body) {
      return new Response(null, { status: 400, statusText: "Bad Request" });
    }

    await prisma.rating.create({
      data: {
        description: body.description,
        rate: body.rate,
        book_id: body.book_id,
        user_id: body.user_id,
        created_at: new Date(),
      },
    });

    return new Response(null, { status: 201, statusText: "New Rate Created" });
  } catch (error) {
    console.error("Erro ao criar rating:", error);
    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
