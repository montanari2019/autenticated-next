
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const session = useSession({
    required: false,
    
  });


  // useEffect(()=>{

  //   if(session.status === "authenticated"){
  //     route.push("/home");
    
  //   }
    
  // },[session])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        
      </div>

      <div>
            <button onClick={() => signIn("google")} >Autenticação com google</button>
        </div>
      <div>
            <button>Autenticação com apple</button>
        </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  );
}
