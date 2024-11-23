"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";

export const SearchForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const input = form.elements.namedItem("q") as HTMLInputElement;

    if (!input.value.trim()) {
      e.preventDefault();
      toast({
        title: "Please enter a search term.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      action="/shop"
      method="GET"
      className={cn("w-full max-w-lg", className)}
      onSubmit={handleSubmit}
    >
      <div className="relative h-12">
        <Input
          className="w-full h-full pr-10"
          placeholder="Search products..."
          defaultValue={query === "all" ? "" : query}
          name="q"
        />
        <Button
          type="submit"
          size="icon"
          variant="link"
          className="absolute top-1/2 -translate-y-1/2 right-1 text-muted-foreground hover:text-primary"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
};
