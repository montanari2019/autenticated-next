'use client'

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation";


export default function HomeAutenticada(){

    const session = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/");
        },
      });
  
    return (
        <div>
            <h1>Home aunteticada Google</h1>
            <button onClick={() => signOut({ callbackUrl:'/'})} >LOG OUT GOOGLE</button>
        </div>
    )
}