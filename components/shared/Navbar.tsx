import Image from "next/image";
import Link from "next/link";
import MovingBorderButton, { Button } from "../ui/moving-border";

function MainNavbar() {
    return (
        <header className="bg-black/40 absolute top-0 left-0 right-0 w-full z-50">
            <nav className="container mx-auto px-4 flex items-center justify-between">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link
                            href="/"
                            className="text-white/80 text-2xl font-medium relative px-4 pr-12 py-1 hover:text-white duration-300"
                        >
                            Home
                            <span className="absolute block w-2 h-2 rounded-full bg-blue-800 -right-1 top-1/2 -translate-y-1/2"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="text-white/80 text-2xl font-medium relative px-4 pr-12 py-1 hover:text-white duration-300"
                        >
                            Features
                            <span className="absolute block w-2 h-2 rounded-full bg-blue-800 -right-1 top-1/2 -translate-y-1/2"></span>
                        </Link>
                    </li>
                </ul>
                <Link
                    href="/"
                    className="relative px-4 py-1 pr-12 flex items-center gap-4"
                >
                    <Image
                        src={"./logo.svg"}
                        width={50}
                        height={50}
                        alt="Nabrah Logo"
                    />
                    <span className="text-4xl font-bold text-blue-800">
                        Nabrah
                    </span>
                    <span className="absolute block w-2 h-2 rounded-full bg-blue-800 -right-1 top-1/2 -translate-y-1/2"></span>
                </Link>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link
                            href="/"
                            className="text-white/80 text-2xl font-medium relative px-4 pr-12 py-1 hover:text-white duration-300"
                        >
                            Pricing
                            <span className="absolute block w-2 h-2 rounded-full bg-blue-800 -right-1 top-1/2 -translate-y-1/2"></span>
                        </Link>
                    </li>
                    <li>
                        <MovingBorderButton>Book A Demo</MovingBorderButton>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavbar;
