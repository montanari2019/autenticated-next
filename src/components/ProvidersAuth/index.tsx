import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"



export async function getServerSideAuthProps() {

  const session = await getServerSession(authOptions)

  if(!session){
    console.log("Sessão invalida")
    //   redirect('/') 
  }
  else{
    return session
  }
  
}