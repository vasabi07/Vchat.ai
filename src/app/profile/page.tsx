import { auth } from '@/lib/auth'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const Profile = async () => {
     const session = await auth.api.getSession({
        headers: await headers()
     })
     if (!session){
        redirect("/signin")
     }
  return (
   
    <div>{JSON.stringify(session,null,2)}</div>
  )
}

export default Profile