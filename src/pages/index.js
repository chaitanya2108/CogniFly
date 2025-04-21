import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import logoTitle from "../assets/CogniFly.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="CogniFly Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <Image src={logoTitle} alt="CogniFly" width={112} height={30} />
        <h1 className={styles.title}>Welcome to CogniFly</h1>
      </main>
    </div>
  );
}
