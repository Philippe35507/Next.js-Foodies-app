"use client"
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
const path = usePathname ()

  return (
    <>    
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <il>
            <Link href="/meals" className={path.startsWith("/meals") ? classes.active : undefined}>Browse Meals</Link>
          </il>
          <il>
            <Link href="/community" className={path === "/community" ? classes.active : undefined}>Foodies Community</Link>
          </il>
        </ul>
      </nav>
    </header>
    </>
  );
}
