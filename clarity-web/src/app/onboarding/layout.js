import Nav from "@/components/nav/Nav";
export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
