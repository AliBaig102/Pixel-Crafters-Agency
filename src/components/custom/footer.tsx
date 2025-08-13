import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterSection {
  title: string;
  links: { name: string; href: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "Digital Marketing", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Brand Strategy", href: "#" },
      { name: "UI/UX Design", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 rounded-t-3xl">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary">
                  Pixel Crafters
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  We craft digital experiences that drive results. From stunning
                  websites to powerful marketing campaigns, we help businesses
                  thrive in the digital world.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">hello@pixelcrafters.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <div className="bg-primary rounded-2xl p-6 shadow-xl">
                <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-white/90 text-sm mb-6">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-gray-100 font-medium transition-all duration-200">
                    Subscribe
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Pixel Crafters Agency. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="#"
                className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
