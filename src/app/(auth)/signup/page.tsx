

import  RegisterForm  from '@/components/register-form'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const Signup =async () => {
   const session = await auth.api.getSession({
      headers:  await headers()})
  
    if (!!session){
      redirect("/")
    }
  return (
      <RegisterForm/>
  )
}

export default Signup