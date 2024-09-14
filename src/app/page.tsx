import LoginForm from "@/components/loginForm";
import Tabs from "@/components/tabs";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page() {
  let logIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      logIn = true;
    }
  } catch (error) {
    console.log("home", error);
  } finally {
  }

  return (
    <main className="container mx-auto px-4 md:px-0">
      <LoginForm />
      <Tabs />
    </main>
  );
}
