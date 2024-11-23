import { User } from "lucide-react";

import { Logo } from "@/components/logo";
import { Cart } from "@/components/cart";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { UserButton } from "@/components/auth/user-button";
import { LoginButton } from "@/components/auth/login-button";

import { currentUser } from "@/lib/auth";

export const Header = async () => {
  const user = await currentUser();

  return (
    <header className="sticky top-0 z-50 h-fit bg-background border-b-2">
      <div className="container flex items-center justify-between gap-4">
        <Logo className="max-w-20" />
        <SearchForm />
        <div className="flex items-center gap-5">
          <Cart />
          {user ? (
            <UserButton />
          ) : (
            <LoginButton mode="modal" asChild>
              <Button
                variant="link"
                size="icon"
                className="overflow-hidden rounded-full p-2"
              >
                <User size={24} aria-label="Avatar" />
              </Button>
            </LoginButton>
          )}
        </div>
      </div>
    </header>
  );
};
