
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession,  } from "next-auth"

import { redirect } from "next/navigation"



export default async function MiddlewareAuth({ children,}: {children: React.ReactNode}){

    const sessao = await getServerSession(authOptions)

    console.log("--------------------------------")
    console.log("Testando sessão: ", sessao)
    console.log("--------------------------------")

    // if(!sessao) {
    //   redirect("/")
    // }


    
  

    return (
        <>
            {children}
        </>
     
    )
}