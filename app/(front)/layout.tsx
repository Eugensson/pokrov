export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-grow h-full container mx-auto justify-center items-center">
      {children}
    </main>
  );
}
