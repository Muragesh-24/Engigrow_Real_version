import React from 'react'
import "../src/app/globals.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900  px-2 h-[3rem] shadow-sm border-b flex items-center">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="text-xl font-bold text-white">EngiGrow</div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm text-white font-medium">
          <a href="/" className="hover:text-amber-100">Discussion</a>
          <a href="/Collaboration" className="hover:text-amber-100">Collaboration</a>
        <a href="/logout" className="hover:text-amber-100">Logout</a>
        </div>
        {/* Mobile Navigation */}
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden p-2 ">
            <div className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <FontAwesomeIcon icon={faBars} size="lg" className="text-gray-800 dark:text-white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:hidden">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/">Discussion</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/Collaboration">Collaboration</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/profile">My Profile</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/viewed">Who Viewed My Profile</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/settings">Settings</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/logout">Logout</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar
