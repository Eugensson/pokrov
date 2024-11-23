import { Nav } from "@/components/nav";
import { Social } from "@/components/social";

export const Footer = () => {
  return (
    <footer className="bg-footer h-fit bg-center bg-cover relative">
      <div className="absolute top-0 w-full h-full bg-black/[0.85] z-0" />
      <div className="container border-t-2 py-2 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 z-10">
          <Nav className="text-slate-50" />
          <Social />
          <p className="text-xs mx-auto text-slate-50/40">
            &copy; Copyright 2024, All Rights Reserved by Pokrov
          </p>
        </div>
      </div>
    </footer>
  );
};
