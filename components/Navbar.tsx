import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-gradient-to-r from-dark-1 to-purple-1/20
      backdrop-blur-sm px-6 py-4 lg:px-10 border-b border-white/10 shadow-lg">
      <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-all">
        <div className="rounded-full bg-gradient-to-r from-orange-1 to-purple-1 p-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="yoom logo"
            className="max-sm:size-10"
          />
        </div>
        <p className="text-[26px] font-extrabold bg-gradient-to-r from-white to-sky-1
          bg-clip-text text-transparent max-sm:hidden">
          MEET ROOM
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10 rounded-full border-2 border-purple-1"
              }
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;