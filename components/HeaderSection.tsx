import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeaderSection() {
  return (
    <header className="relative z-10 flex items-center justify-between p-6 relative">
      <div className="flex items-center justify-between w-full gap-4">
        <Image
          src="/logo-colored-cropped.svg"
          alt="Mint Clinic"
          width={100}
          height={30}
          className="h-8 w-auto"
        />
        <button className="text-primary p-2">
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}