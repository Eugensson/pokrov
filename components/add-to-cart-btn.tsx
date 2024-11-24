"use client";

import { Button } from "@/components/ui/button";

export const AddToCartBtn = () => {
  return (
    <Button
      type="button"
      size="lg"
      className="w-full"
      onClick={() => {
        console.log("Add to cart");
      }}
    >
      Add to cart
    </Button>
  );
};
