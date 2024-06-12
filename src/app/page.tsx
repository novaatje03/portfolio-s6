
import AboutMe from "@/app/aboutme/page";
import styles from "./page.module.css";
import NavBar from "@/components/navbar";
import Foto from "@/app/foto/page";
import Projecten from "@/app/projecten/page"


export default function Home() {

    return (
      <main className={styles.main}>
      <div className={styles.description}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <>
    
    <NavBar />
    <div id="Inhoud">
      <Foto />
    <AboutMe />
    </div>
    <Projecten />
    </>
      </div>
    </main>
  );
}
