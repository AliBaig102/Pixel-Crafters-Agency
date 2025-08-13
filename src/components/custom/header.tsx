"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="container bg-white border border-gray-200 px-4 py-3 rounded-md fixed z-[99999] top-2 left-1/2 -translate-x-1/2">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-black">LOGO</h1>
        </div>

        {/* Location Selector */}
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-gray-600" />
          <div>
            <div className="text-gray-600">Select location</div>
            <div className="font-medium text-black">Taiwan</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 bg-primary hover:bg-primary/90"
            >
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Right Side - Login and Cart */}
        <div className="flex items-center gap-4">
          {/* Login */}
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Log In</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
