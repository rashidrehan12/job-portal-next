import UserSettingsPage from '@/components/pages/user-settings-page';
import CompanySettingsPage from '@/components/pages/company-settings-page';
import { getAuthAccount } from '@/lib/auth'
import { prisma } from '@/lib/prisma';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

async function SettingsPage() {
    const session = await getAuthAccount();

    if(!session || !session.user) return notFound();

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true } 
    })

    if(!user) return redirect('/sign-in')

    if(user.role == 'EMPLOYER'){
        return <CompanySettingsPage></CompanySettingsPage>
    } else if(user.role == 'JOB_SEEKER'){
        return <UserSettingsPage></UserSettingsPage>;
    } else notFound();
}

export default SettingsPage