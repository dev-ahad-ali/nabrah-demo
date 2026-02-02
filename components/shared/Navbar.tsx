import Image from "next/image";
import Link from "next/link";
import { NoiseBackground } from "../ui/noise-background";
import { MobileMenu } from "./MobileMenu";

function MainNavbar() {
    return (
        <header className="absolute top-0 left-0 right-0 w-full z-50 py-4 h-fit bg-linear-to-r from-gray-800/60 via-gray-700/30 to-gray-600/10 backdrop-blur-md">
            <nav className="max-w-300 mx-auto px-4 flex items-center justify-between">
                <div className="block lg:hidden">
                    <MobileMenu />
                </div>
                <ul className="lg:flex items-center gap-4 hidden">
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
                    className="relative px-4 py-1 lg:pr-12 flex items-center gap-4"
                >
                    <span className="bg-white rounded-full w-fit">
                        <Image
                            src={"./logo.svg"}
                            width={50}
                            height={50}
                            alt="Nabrah Logo"
                            className="lg:block hidden"
                        />
                    </span>
                    <span className="lg:text-4xl text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
                        Nabrah
                    </span>
                    <span className="absolute hidden lg:block w-2 h-2 rounded-full bg-blue-800 -right-1 top-1/2 -translate-y-1/2"></span>
                </Link>
                <ul className="flex items-center gap-12">
                    <li className="lg:block hidden">
                        <Link
                            href="/"
                            className="text-white/80 text-2xl font-medium relative px-4 pr-12 py-1 hover:text-white duration-300"
                        >
                            Pricing
                            <span className="absolute block w-2 h-2 rounded-full bg-blue-800 -right-1 top-1/2 -translate-y-1/2"></span>
                        </Link>
                    </li>
                    <li>
                        <NoiseBackground
                            containerClassName="w-fit lg:p-2 rounded-full mx-auto"
                            gradientColors={[
                                "rgb(255, 100, 150)",
                                "rgb(100, 150, 255)",
                                "rgb(255, 200, 100)",
                            ]}
                        >
                            <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] lg:text-xl font-bold">
                                <span className="hidden lg:inline">
                                    Book A{" "}
                                </span>
                                Demo
                            </button>
                        </NoiseBackground>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavbar;
