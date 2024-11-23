"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PackageOpen, ShoppingBag } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Cart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Sheet>
      <SheetTrigger asChild className="relative">
        <Button
          variant="link"
          size="icon"
          className="overflow-hidden rounded-full p-2"
        >
          <ShoppingBag />
          {mounted && [].length != 0 && (
            <span className="absolute -top-2 -right-2 text-xs text-white bg-primary rounded-full px-2 py-1 font-semibold">
              0
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-center items-center gap-4 text-center">
          <span className="flex items-center gap-x-2 text-muted-foreground">
            <PackageOpen size={28} />
            Your cart is empty.
          </span>
          <Button variant="link" asChild>
            <Link href={"/"}>Start shopping now</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
