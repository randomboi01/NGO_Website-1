import React from "react";
import { Contributors } from "../components/Contributors";
import { NavBar } from "../components/Navbar";
// import { NavBarLoggedIn } from "../components/NavbarLoggedIn";


const Testimonial = (props) => {
  return (
    <div>
      <NavBar />

      <Contributors />
    </div>
  );
};

export default Testimonial;
