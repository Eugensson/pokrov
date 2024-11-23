import { Poppins } from "next/font/google";
import { LockKeyhole } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <LoginButton mode="modal" asChild>
      <Button variant="secondary" size="lg">
        Sign in
      </Button>
    </LoginButton>
  );
}
