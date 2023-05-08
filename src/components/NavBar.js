import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[w] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomIcon = ({ children, className, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.0 }}
      className={`${className} w-6`}
    >
      {children}
    </motion.a>
  );
};

function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <CustomIcon className="mr-3" href={"/"}>
          <TwitterIcon />
        </CustomIcon>
        <CustomIcon className="mx-3" href={"/"}>
          <GithubIcon />
        </CustomIcon>
        <CustomIcon className="mx-3" href={"/"}>
          <LinkedInIcon />
        </CustomIcon>
        <CustomIcon className="mx-3 bg-light rounded-full" href={"/"}>
          <PinterestIcon />
        </CustomIcon>
        <CustomIcon className="mx-3" href={"/"}>
          <DribbbleIcon />
        </CustomIcon>
        <CustomIcon className="ml-3" href={"/"}>
          <PinterestIcon />
        </CustomIcon>

        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
