import Nav from "@/components/nav/Nav";
import styles from "./onboarding.module.scss";
import BackgroundImage from "@/components/backgroundImage/BackgroundImage";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.mainLayout}>
        <BackgroundImage />
        {children}{" "}
      </main>
    </>
  );
}
