import DashNavbar from "@/components/dashboard/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashNavbar />
      {children}
    </main>
  );
}
