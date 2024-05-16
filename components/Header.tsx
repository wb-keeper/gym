import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-primary-200 h-[100px]">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" width={117} height={55} alt="logo" />
        </Link>
        <MobileNav containerStyles="text-white xl:hidden" />
        <Nav containerStyles="text-white flex gap-4 hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
