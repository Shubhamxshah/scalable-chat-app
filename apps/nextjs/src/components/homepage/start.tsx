'use client'

import { Button } from "@repo/ui/components/base/button"
import { authClient } from "@/app/lib/auth-client"
import {Github} from "lucide-react"

export function Start() {
  const handleGithubLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
        errorCallbackURL: "/",
      });
    } catch (err) {
      console.error("GitHub login failed:", err);
    }
  };

  return (
    <Button onClick={handleGithubLogin}>
      <Github className="mr-2" />
      Login with GitHub
    </Button>
  );
}
