

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function  Home() {
  const session = await auth.api.getSession({
          headers: await headers()
       })
       if (!session){
          redirect("/signin")
       }
  return (
  <div>
    <Button>Click me</Button>
  </div>
  );
}
