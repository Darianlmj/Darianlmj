'use client';

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import {
  MenuIcon,
  ChevronDownIcon,
  SparklesIcon,
  FolderClosedIcon,
  CameraIcon,
  ImagesIcon
} from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const HighlightsMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='ghost'>
        Highlights <ChevronDownIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='w-36'>
      <DropdownMenuGroup>
        <Link href='/'>
          <DropdownMenuLabel>Software Dev</DropdownMenuLabel>
        </Link>
        <Link href='/#experience'>
          <DropdownMenuItem>
            <SparklesIcon />
            <span>Experience</span>
          </DropdownMenuItem>
        </Link>
        <Link href='/#projects'>
          <DropdownMenuItem>
            <FolderClosedIcon />
            <span>Projects</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Link href='/photography'>
          <DropdownMenuLabel>Photography</DropdownMenuLabel>
        </Link>
        <Link href='/photography#photos'>
          <DropdownMenuItem>
            <CameraIcon />
            <span>Photographs</span>
          </DropdownMenuItem>
        </Link>
        <Link href='/photography#collections'>
          <DropdownMenuItem>
            <ImagesIcon />
            <span>Collection</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function NavBar() {
  return (
    <header className='flex justify-between items-center shrink-0 w-full px-6 py-2 sticky top-0 left-0 z-50 backdrop-blur-md rounded-b-sm'>
      <span className='font-bold'>DL</span>
      <div className='flex gap-2 items-center'>
        <div className='block lg:hidden'>
          <ThemeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='lg:hidden'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetTitle>Menu</SheetTitle>
            <div className='grid gap-2 py-6'>
              <Link
                href='#about'
                className='group w-full inline-flex h-9 items-center justify-start rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                prefetch={false}
              >
                About
              </Link>
              <Link
                href='#contact'
                className='group w-full inline-flex h-9 items-center justify-start rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                prefetch={false}
              >
                Let&apos;s Connect
              </Link>
              <DropdownMenuSeparator />
              <Link href='/'>
                <p className='text-sm font-bold py-2'>Software Dev</p>
              </Link>
              <Link
                href='/#experience'
                className='group w-full inline-flex gap-2 h-9 items-center justify-start rounded-md bg-transparent px-4 py-2 text-sm font-medium'
                prefetch={false}
              >
                <SparklesIcon className='w-4 h-4 text-slate-900 dark:text-slate-100' />
                <span>Experience</span>
              </Link>
              <Link
                href='/#projects'
                className='group w-full inline-flex gap-2 h-9 items-center justify-start rounded-md bg-transparent px-4 py-2 text-sm font-medium'
                prefetch={false}
              >
                <FolderClosedIcon className='w-4 h-4 text-slate-900 dark:text-slate-100' />
                <span>Projects</span>
              </Link>
              <DropdownMenuSeparator />
              <Link href='/'>
                <p className='text-sm font-bold py-2'>Photography</p>
              </Link>
              <Link
                href='/photography#photos'
                className='group w-full inline-flex gap-2 h-9 items-center justify-start rounded-md bg-transparent px-4 py-2 text-sm font-medium'
                prefetch={false}
              >
                <CameraIcon className='w-4 h-4 text-slate-900 dark:text-slate-100' />
                <span>Photographs</span>
              </Link>
              <Link
                href='/photography#collection'
                className='group w-full inline-flex gap-2 h-9 items-center justify-start rounded-md bg-transparent px-4 py-2 text-sm font-medium'
                prefetch={false}
              >
                <ImagesIcon className='w-4 h-4 text-slate-900 dark:text-slate-100' />
                <span>Collection</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <nav className='ml-auto hidden lg:flex gap-2'>
          <Link
            href='#about'
            className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            prefetch={false}
          >
            About
          </Link>
          <Link
            href='#contact'
            className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            prefetch={false}
          >
            Let&apos;s Connect
          </Link>
          <HighlightsMenu />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
