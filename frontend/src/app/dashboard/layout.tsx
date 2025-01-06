import DashNavbar from "@/components/dashboard/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white overflow-hidden">
      <DashNavbar />
      <section className="lg:max-w-7xl mx-auto py-5">{children}</section>
    </main>
  );
}
