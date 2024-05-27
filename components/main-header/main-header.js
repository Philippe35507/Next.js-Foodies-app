import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
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
            <Link href="/meals">Browse Meals</Link>
          </il>
          <il>
            <Link href="/community">Foodies Community</Link>
          </il>
        </ul>
      </nav>
    </header>
    </>
  );
}
