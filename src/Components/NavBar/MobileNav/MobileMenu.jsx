import React, { useState } from "react";
import MenuBtn from "./MenuBtn";
import MenuListItems from "./MenuListItems";

const MobileMenu = ({ links }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <>
      <MenuBtn onClick={toggleMenu}>|||</MenuBtn>
      {menu && <MenuListItems onClick={toggleMenu}>{links}</MenuListItems>}
    </>
  );
};

export default MobileMenu;
