import React, { useRef, useState, useEffect } from "react";
import NavMenu from "./styles/NavMenu";
import Logo from "./styles/Logo";
import Links from "./styles/Links";
import MobileMenu from "./MobileNav/MobileMenu.jsx";

const links = [
  <a href="/#about">About</a>,
  <a href="/#projects">Projects</a>,
  <a href="/#illustrations">Illustations</a>,
  <a href="/#contact">Contact</a>,
];
export default function NavBar() {
  const scrollInfoRef = useRef(null);
  const [isAttached, setAttachment] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setAttachment(window.pageYOffset === 0);
    });
  });

  return (
    <NavMenu attached={isAttached} ref={scrollInfoRef}>
      <Logo href="#">
        <img src={"Assets/logo/MrN_logo.jpg"} alt="*" />
        &nbsp;
        <h2> Mr.N Nabhani </h2>
      </Logo>

      <Links>{links}</Links>

      <MobileMenu links={links}/>
    </NavMenu>
  );
}
