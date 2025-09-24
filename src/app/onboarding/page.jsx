"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { use } from 'react'
import { onboardingSubmission } from '../actions/onboarding'

async function Onboarding({ userId }) {

  const handleOnboardingSubmission = async ({requestedRole}) => {
    const updateResponse = await onboardingSubmission({requestedRole, userId});
    console.log(updateResponse);
     }

  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <Card className='w-full sm:w-1/3'>
        <CardHeader>
          <CardTitle>Welcome to CarrerConnect</CardTitle>
          <CardDescription>Choose one which defines you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button onClick={()=> handleOnboardingSubmission({requestedRole:"JOB_SEEKER"})} className="w-full">
            I'm a Job Seeker
          </Button>
          <Button onClick={()=> handleOnboardingSubmission({requestedRole:"EMPLOYER"})} className="w-full ">
            I'm a Employer
          </Button>
        </CardContent>
      </Card>
     
    </div>
  )
}

export default Onboarding