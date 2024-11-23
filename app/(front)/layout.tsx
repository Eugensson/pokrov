import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
