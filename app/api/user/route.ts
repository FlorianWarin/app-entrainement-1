import type {NextRequest} from 'next/server'
import {PrismaClient} from "../../../generated/prisma/client"
import {PrismaPg} from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL})
const prisma = new PrismaClient({adapter});


export async function GET() {
    
    const users = await prisma.user.findMany({ select: {id: true, name:true}})
    console.log(users)
    return Response.json(users)

}

export async function POST(request: NextRequest) {

    const body = await request.json()

    const name= body.name
    
    const newUser = await prisma.user.create({
        data: {
            name: name,
        },
        
    });

    return new Response(name, {status:200})

}

export async function DELETE(request: NextRequest) {

    const body = await request.json()
    const id = body.id;
    
    const newUser = await prisma.user.delete({

        where: {
            id:Number(id),
        },
        
    });

    return new Response("OK", {status:200})

}

export async function PUT(request: NextRequest) {

    const body = await request.json()
    const id= body.id
    const name=body.name


    const updateUser = await prisma.user.update({
        where: {id : Number(id)},
        data: {name : name},
    })

    return new Response("OK",{status:200})
}

