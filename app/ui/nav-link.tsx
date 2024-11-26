'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Artículos', href: '/articulos' },
  { name: 'Newsletter', href: '/newsletter', lang: 'en' },
  { name: 'Coaching', href: '/coaching', lang: 'en' }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex grow items-end justify-center gap-2 rounded-3xl p-3 text-sm hover:bg-white transition duration-500 hover:duration-700 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-white": pathname === link.href,
              },
            )}
          >
            <p lang={link.lang}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
