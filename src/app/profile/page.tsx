import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'

const Profile = async () => {
     const session = await auth.api.getSession({
        headers: await headers()
     })
  return (
   
    <div>{JSON.stringify(session,null,2)}</div>
  )
}

export default Profile