import React from 'react'
import { Briefcase } from 'lucide-react'
import AuthForm from '@/components/AuthForm'

function SignIn() {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
     <div>
        <AuthForm origin="signUp" />
     </div>
    </section>
  )
}

export default SignIn