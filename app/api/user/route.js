import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    const user = await prisma.User.findMany()
    return NextResponse.json(user)
}