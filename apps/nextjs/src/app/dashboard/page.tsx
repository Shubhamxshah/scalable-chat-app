import React from 'react'
import { auth } from "@/app/lib/auth"
import { headers } from "next/headers";
import SignOut from '@/components/dashboard/signout';
import { redirect } from 'next/navigation';


const DashBoard = async () => {
  const session = await auth.api.getSession({
   // @ts-expect-error idk
    headers: headers(),
  })
  if (!session){
    redirect('/')
  }
  return (
    <div>DashBoard <SignOut />
    <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

export default DashBoard
