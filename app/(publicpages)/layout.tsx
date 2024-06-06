import NavigationMenuBar from "@/app/components/NavigationMenuBar";

export default function PublicPagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavigationMenuBar />
      {children}
    </section>
  );
}
