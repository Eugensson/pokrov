import { Navbar } from "@/app/(admin)/_components/navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="w-full h-full flex flex-col justify-center items-center gap-y-10">
      <Navbar />
      {children}
    </nav>
  );
};

export default AdminLayout;
