"use client"
import AboutMe from "@/app/aboutme/page";
import styles from "./page.module.css";
import NavBar from "@/components/navbar";
import Foto from "@/app/foto/page";
import Projecten from "@/app/projecten/page"
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);

  const apiUrl = 'https://www.boredapi.com/api/activity';


  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(json => setData(json))
    .catch(error => console.log(error));
  }, [])

  async function callApi(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

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

    <div>
     <div className="flex-grow flex items-center justify-center">
        { JSON.stringify(data, null, 2) }
      </div>
      </div>
    </>
      </div>
    </main>
  );
}
