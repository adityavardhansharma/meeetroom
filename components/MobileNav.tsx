'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <div className="rounded-full p-2 hover:bg-white/5 transition-all cursor-pointer">
            <Image
              src="/icons/hamburger.svg"
              width={36}
              height={36}
              alt="hamburger icon"
              className="cursor-pointer sm:hidden"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-gradient-to-b from-dark-1 to-purple-1/20">
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-all">
            <div className="rounded-full bg-gradient-to-r from-orange-1 to-purple-1 p-1">
              <Image
                src="/icons/logo.svg"
                width={32}
                height={32}
                alt="yoom logo"
              />
            </div>
            <p className="text-[26px] font-extrabold bg-gradient-to-r from-white to-sky-1
              bg-clip-text text-transparent">
              YOOM
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-xl w-full max-w-60 transition-all',
                          'hover:bg-white/5 hover:scale-105',
                          {
                            'bg-gradient-to-r from-blue-1 to-purple-1/50 shadow-lg': isActive,
                          }
                        )}
                      >
                        <div className={cn(
                          'rounded-lg p-2',
                          isActive ? 'bg-white/20' : 'bg-white/5'
                        )}>
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className="opacity-90"
                          />
                        </div>
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;