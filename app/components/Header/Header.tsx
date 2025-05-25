"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import AuthModal from "../AuthModal";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState<"login" | "signup" | "forgot">("login");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
        } py-4`}
      >
        <div className="max-w-screen-xl mx-auto">
          <nav>
            <div className="flex justify-between items-center">
              {/* Brand */}
              <Link href="/" className="text-3xl font-bold">
                KLASS ART
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-12">
                <div className="flex gap-8 font-medium">
                  <Link href="/">Services</Link>
                  <Link href="/">Products</Link>
                  <Link href="/">Subscription</Link>
                  <Link href="/">Dashboard</Link>
                </div>
                <div className="flex gap-6 items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setFormType("login");
                      setShowModal(true);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="border-2 border-current px-6 py-2 rounded-full hover:bg-gray-100 transition-all"
                    onClick={() => {
                      setFormType("signup");
                      setShowModal(true);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden block"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white text-black p-6 lg:hidden flex flex-col gap-4 shadow-lg z-40">
                <Link href="/">Services</Link>
                <Link href="/">Products</Link>
                <Link href="/">Subscription</Link>
                <Link href="/">Dashboard</Link>
                <button
                  className="border-2 px-6 py-2 rounded-full hover:bg-gray-100"
                  onClick={() => {
                    setFormType("login");
                    setShowModal(true);
                  }}
                >
                  Login
                </button>
                <button
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
                  onClick={() => {
                    setFormType("signup");
                    setShowModal(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Auth Modal */}
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          formType={formType}
          setFormType={setFormType}
        />
      )}
    </>
  );
};
