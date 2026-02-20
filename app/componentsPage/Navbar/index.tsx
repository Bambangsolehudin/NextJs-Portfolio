"use client";

import React, { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { techIcons } from "../Projects/projectsData";

const Logo = techIcons?.ReactJS;

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > window.innerHeight * 0.6;
      setIsScrolled(scrolledPastHero || pathname !== "/");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isHeroTransparent = isHome && !isScrolled;

  const navPositionClasses = "fixed top-0 left-0";

  const navBgClasses = isHeroTransparent
    ? "bg-transparent text-white md:shadow-none shadow-2xl backdrop-blur-md md:backdrop-blur-none"
    : isScrolled
      ? "bg-black/40 text-white shadow-2xl backdrop-blur-xl border-b border-white/10"
      : "bg-black/90 md:bg-[var(--background)] text-white md:text-[color:var(--foreground)] shadow";

  const linkBaseClasses =
    "relative inline-block transition-colors duration-300 group focus:outline-none";

  const desktopLinkColor = isHeroTransparent || isScrolled
    ? "text-white"
    : "text-[color:var(--foreground)]";

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <nav
      className={`${navPositionClasses} ${navBgClasses} w-full z-50 py-3 md:py-4 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="flex justify-between items-center h-14 md:h-16">
            <button
              type="button"
              className="flex items-center"
              onClick={() => handleNavigate("/")}
            >
              {Logo && <img className="h-8" src={Logo} alt="logo" />}
              <span className="sr-only">Go to homepage</span>
            </button>
            <div className="hidden md:flex items-center md:space-x-6 text-xs md:text-base">
              {links.map(({ label, path }) => {
                const isActive = pathname === path;
                return (
                  <button
                    type="button"
                    key={path}
                    onClick={() => handleNavigate(path)}
                    className={`${linkBaseClasses} ${desktopLinkColor} ${isActive
                        ? "opacity-100"
                        : isScrolled
                          ? "opacity-60 hover:opacity-100"
                          : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-current transition-all duration-300 transform -translate-x-1/2 ${isActive ? "w-full" : "group-hover:w-full"
                        }`}
                    ></span>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className={`md:hidden relative w-11 h-11 flex flex-col justify-center items-center gap-1.5 rounded-full border transition-colors ${isHeroTransparent || isScrolled
                  ? "border-white/40 text-white"
                  : "border-black/10 text-[color:var(--foreground)]"
                }`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-80"
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              ></span>
            </button>
          </div>
          {isMenuOpen && (
            <div
              className={`md:hidden absolute left-0 right-0 mt-4 flex flex-col space-y-2 rounded-2xl border px-5 py-5 text-base shadow-2xl backdrop-blur ${isHeroTransparent
                  ? "bg-black/70 text-white border-white/10"
                  : isScrolled
                    ? "bg-black/85 text-white border-white/10"
                    : "bg-[var(--background)]/95 text-[color:var(--foreground)] border-black/5"
                }`}
            >
              {links.map(({ label, path }) => {
                const isActive = pathname === path;
                return (
                  <button
                    type="button"
                    key={`${path}-mobile`}
                    onClick={() => handleNavigate(path)}
                    className={`text-left px-3 py-2 rounded-xl transition-colors ${isActive
                        ? isHeroTransparent || isScrolled
                          ? "bg-white/10 text-white"
                          : "bg-black/5"
                        : isHeroTransparent || isScrolled
                          ? "text-white/70 hover:bg-white/5"
                          : "opacity-80 hover:opacity-100"
                      }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
