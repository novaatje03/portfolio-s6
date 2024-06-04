
import AboutMe from "@/app/aboutme/page";
import styles from "./page.module.css";
import NavBar from "@/components/navbar";
import Foto from "@/app/foto/page";
import Projecten from "@/app/projecten/page"


export default function Home() {

    return (
      <main className={styles.main}>
      <div className={styles.description}>
    <>
    
    <NavBar />
    <div id="Inhoud">
      <Foto />
    
    <AboutMe />

    </div>
    <div id="ProjectenOverzicht">
      <div id="Projecten">
      <div id="MasterMind">
        <a href="/projecten"><img id="VerzuimNavigatorFoto" src="/verzuimnavigatorfoto.png"/></a>
        <h1>Master Mind</h1>
      </div>
      <div id="Verzuimnavigator">
        <a href="/projecten"><img id="VerzuimNavigatorFoto" src="/verzuimnavigatorfoto.png"/></a>
        <h1>Verzuimnavigator</h1>
      </div>
      </div>
      
    </div>
    </>
      </div>
    </main>
  );
}
