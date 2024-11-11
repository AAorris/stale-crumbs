export default function Layout({
  children,
  nav,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
}) {
  return (
    <>
      <nav className="p-4 max-w-[400px] mx-auto">{nav}</nav>
      <main className="p-4 max-w-[400px] mx-auto">{children}</main>
    </>
  );
}
