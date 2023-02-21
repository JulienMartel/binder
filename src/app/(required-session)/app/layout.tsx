export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid h-screen w-screen place-items-center p-4">
      {children}
    </main>
  );
}
