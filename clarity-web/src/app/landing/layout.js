import Nav from "@/components/nav/Nav";
import { judson } from "@/styles/fonts";

export default function Layout({ children }) {
  return (
    <>
      <Nav showButton />
      <main className={`${judson.className}`}>{children} </main>
    </>
  );
}
