import Nav from "@/components/nav/Nav";
import styles from "./onboarding.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.mainLayout}>{children}</main>
    </>
  );
}
