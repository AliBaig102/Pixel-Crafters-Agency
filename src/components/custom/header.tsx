"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, User, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-xl fixed z-[99999] top-2 left-1/2 -translate-x-1/2 shadow dark:shadow-gray-900/20">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Pixel Crafters</h1>
        </div>

        {/* Location Selector */}
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <div>
            <div className="text-gray-500 dark:text-gray-400">
              Select location
            </div>
            <div className="font-medium text-gray-900 dark:text-white">
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
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus-within:ring-2! focus-within:ring-primary! focus-within:border-transparent"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 bg-primary hover:bg-primary/90"
            >
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Right Side - Theme Switcher and Login */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-purple-50 dark:hover:bg-gray-800"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>

          {/* Login */}
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-purple-50 dark:hover:bg-gray-800 rounded-full px-4"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Log In</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
