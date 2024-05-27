import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
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
  );
}
