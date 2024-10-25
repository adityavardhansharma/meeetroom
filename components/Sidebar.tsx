'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between
      bg-gradient-to-b from-dark-1 to-purple-1/20 backdrop-blur-sm p-6 pt-28
      text-white max-sm:hidden lg:w-[264px] border-r border-white/10">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-xl justify-start transition-all duration-300',
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
                  width={24}
                  height={24}
                  className="opacity-90"
                />
              </div>
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;