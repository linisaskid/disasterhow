'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileIcon() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!session) {
    return (
      <div className="flex items-center space-x-4">
        <Link href="/login" className="nav-link text-gray-900 dark:text-gray-100">
          Login
        </Link>
        <Link href="/signup" className="modern-button">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
          {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase() || '?'}
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 z-50 backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 border border-white/10 dark:border-gray-700/10">
          <div className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200 border-b border-white/10 dark:border-gray-700/10">
            {session.user?.name || session.user?.email}
          </div>
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={() => {
              signOut();
              setIsDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
} 