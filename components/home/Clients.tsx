"use client";

import Image from "next/image";
import { Marque } from "../shared/Marque";

const clients = [
    {
        name: "Ali express",
        image: "/assets/clients/aliexpress.png",
    },
    {
        name: "Ali express",
        image: "/assets/clients/apple.png",
    },
    {
        name: "Ali express",
        image: "/assets/clients/samsung.png",
    },
    {
        name: "Ali express",
        image: "/assets/clients/ebay.png",
    },
    {
        name: "Ali express",
        image: "/assets/clients/nike.png",
    },
    {
        name: "Ali express",
        image: "/assets/clients/walmart.png",
    },
    {
        name: "Ali express",
        image: "/assets/clients/amazon.png",
    },
];

export function Client() {
    return (
        <>
            <h3 className="uppercase text-white text-center py-4 lg:py-8 px-4 lg:text-2xl font-semibold bg-linear-to-t from-gray-800/80 via-gray-600/50 to-gray-300/00 -mt-4 backdrop-blur-md">
                Trusted by companies in 100+ countries around the globe
            </h3>
            <Marque direction="right" speed="slow">
                {clients.map((item, idx) => (
                    <li key={idx} className="min-w-48 flex justify-center">
                        <Image
                            src={item.image}
                            width={200}
                            height={40}
                            alt={item.name}
                            className="w-fit h-12 grayscale hover:grayscale-0 duration-200"
                        />
                    </li>
                ))}
            </Marque>
        </>
    );
}
