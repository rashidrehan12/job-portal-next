"use server"

import { prisma } from "@/lib/prisma"

export async function checkOnboarding(userId){
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { role: true }
        })
         return user.role;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

export async function onboardingSubmission({requestedRole, userId}){
    try {
    
        const onboarding = await prisma.user.update({
            where: { id: userId },
            data: { role: requestedRole }
        })
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
        
    }
}