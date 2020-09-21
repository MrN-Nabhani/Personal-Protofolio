import React, { useRef, useState, useEffect } from "react";
import NavMenu from "./styles/NavMenu";
import Logo from "./styles/Logo";
import Links, { NavLink } from "./styles/Links";
import MobileMenu from "./MobileNav/MobileMenu.jsx";

const links = [
  <NavLink href="/Personal-Protofolio/#about">About</NavLink>,
  <NavLink href="/Personal-Protofolio/#projects">Projects</NavLink>,
  <NavLink href="/Personal-Protofolio/#illustrations">Illustations</NavLink>,
  <NavLink href="/Personal-Protofolio/#contact">Contact</NavLink>,
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
