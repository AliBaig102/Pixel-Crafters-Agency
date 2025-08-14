"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, User, Moon, Sun, Menu, X, UserPlus } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="container backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-3 sm:px-4 py-3 rounded-xl fixed z-[99999] top-2 left-1/2 -translate-x-1/2 shadow-lg dark:shadow-gray-900/20 max-w-[95vw] ">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Image
            src="/images/logo.png"
            alt="Pixel Crafters"
            width={100}
            height={100}
            className="size-12 rounded-lg"
          />
          <h1 className="text-xl font-extrabold text-primary tracking-tight leading-none">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Pixel
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              Crafters.
            </span>
          </h1>
        </div>

        {/* Location Selector */}
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">
              Select location
            </div>
            <div className="font-medium text-gray-900 dark:text-white text-sm">
              Taiwan
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 bg-primary hover:bg-primary/90"
            >
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Right Side - Theme Switcher and Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-gray-800"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>

          {/* Login */}
          <Link href="/login">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-gray-800 rounded-full px-4"
            >
              <User className="w-4 h-4" />
              <span>Log In</span>
            </Button>
          </Link>

          {/* Sign Up */}
          <Link href="/signup">
            <Button
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 ">
            <Image
              src="/images/logo.png"
              alt="Pixel Crafters"
              width={100}
              height={100}
              className="size-12 rounded-lg"
            />
            <h1 className="text-xl font-extrabold text-primary tracking-tight leading-none">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Pixel
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
                Crafters.
              </span>
            </h1>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            {/* Search Toggle (Mobile) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="sm:hidden rounded-full w-9 h-9 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-gray-800"
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* Theme Switcher */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-gray-800"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full w-9 h-9 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar (Tablet - always visible, Mobile - toggleable) */}
        <div className={`mt-3 sm:block ${isSearchOpen ? "block" : "hidden"}`}>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 bg-primary hover:bg-primary/90"
            >
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {/* Location Selector */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                  Select location
                </div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  Taiwan
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="space-y-2">
              <Link href="/login" className="block">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-gray-800 rounded-lg p-3 h-auto"
                >
                  <User className="w-5 h-5" />
                  <span>Log In</span>
                </Button>
              </Link>
              <Link href="/signup" className="block">
                <Button
                  className="w-full justify-start gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg p-3 h-auto"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Sign Up</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
