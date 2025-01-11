import DashNavbar from "@/components/dashboard/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white overflow-hidden">
      <DashNavbar />
      <section className="lg:max-w-7xl px-5 md:px-0 mx-auto md:py-5 py-3">
        {children}
      </section>
    </main>
  );
}
