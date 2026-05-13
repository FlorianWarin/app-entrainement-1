import type {NextRequest} from 'next/server'
import {PrismaClient} from "../../../../generated/prisma/client"
import {PrismaPg} from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL})
const prisma = new PrismaClient({adapter});

export async function GET(request: Request,{params}: { params: Promise<{id: string}>}) {

    const {id} = await params
    const user = await prisma.user.findUnique({where: { id: Number(id)}});
    return Response.json(user);

}



