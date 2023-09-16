import { NavbarProps } from "~/components/Navbar/Schema";

export default function Navbar({}: NavbarProps){

import React, { useState } from "react";
import MenuLineIcon from "remixicon-react/MenuLineIcon";

const Layout = () => {
  return (
    <div class="container1">
            <nav>
                <img src="assets/logo.png" alt="logo" class="logo">
                <ul>
                    <li><a href="#header">Events</a></li>
                    <li><a href="#about">Dashboard</a></li>
                    <li><a href="#skills">Contact</a></li>
                    <li><a href="#projects">Login</a></li>
                    <li><a href="#contact">Sign Up</a></li>
                </ul>
            </nav>
        </div>
  );
};

