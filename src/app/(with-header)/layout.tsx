import Header from "../components/header";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
} 