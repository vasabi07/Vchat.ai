"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/prisma"
import { headers } from "next/headers"

export const getAgents = async () =>{
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        throw new Error("Unauthorized")
    }
    const agents = await db.agent.findMany({
        where: {
            userId: session.user.id
        }
    })
    return agents
}

export const createAgent = async (name: string, instructions: string) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        throw new Error("Unauthorized")
    }
    const agent = await db.agent.create({
        data: {
            name,
            instructions,
            userId: session.user.id
        }
    })
    return agent
}
export const deleteAgent = async (id: string) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        throw new Error("Unauthorized")
    }
    const agent = await db.agent.delete({
        where: {
            id,
            userId: session.user.id
        }
    })
    return agent
}

export const getOneAgent = async (id: string) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        throw new Error("Unauthorized")
    }
    const agent = await db.agent.findFirst({
        where: {
            id,
            userId: session.user.id
        }
    })
    return agent
}