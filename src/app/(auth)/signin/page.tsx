

import LoginForm from "@/components/login-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const Signin =async () => {
  const session = await auth.api.getSession({
    headers:  await headers()})

  if (!!session){
    redirect("/")
  }
  return <LoginForm />;
};

export default Signin;
