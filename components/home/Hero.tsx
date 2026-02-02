"use client";
import React from "react";
import MainContainer from "../containers/MainContainer";
import { ShootingStars } from "../ui/shooting-starts";
import { StarsBackground } from "../ui/stars-background";
import { Badge } from "../ui/badge";
import { Button } from "../ui/moving-border";
import Image from "next/image";

function Hero() {
    return (
        <div className="min-h-screen relative">
            <MainContainer>
                <div className="grid place-items-center min-h-screen w-full">
                    <div>
                        <Badge className="bg-black py-2 px-4">
                            <Badge className="bg-white text-black text-xl font-bold">
                                new
                            </Badge>
                            <span className="text-xl ms-2">
                                Seamless, Smart and Scalable Voice Interactions
                            </span>
                        </Badge>
                        <h1 className="text-7xl flex flex-col font-bold text-center gap-4 mt-2">
                            <span className="text-white">
                                Keep your agent on the ground and
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-400 to-red-400">
                                Let AI take care of the phones
                            </span>
                        </h1>
                        <p className="text-white/70 font-medium text-center max-w-6xl text-xl mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Exercitationem praesentium magnam accusantium
                            ipsam, ex nesciunt saepe fugit eum cum vel nihil
                            voluptas, amet sequi. Harum voluptatem, eius atque
                            nobis iste sequi nemo tenetur at, qui reprehenderit
                            doloremque vel unde mollitia magni ab pariatur
                            adipisci sit perferendis numquam quasi ducimus
                            cumque?
                        </p>

                        <div className="flex justify-center gap-4 mt-4">
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
                            >
                                Book A Demo
                            </Button>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
                            >
                                Take Product Tour
                            </Button>
                        </div>
                    </div>
                </div>
            </MainContainer>
            <ShootingStars />
            <StarsBackground />
            <Image
                src={"/assets/hero-bgshape.png"}
                width={700}
                height={1200}
                alt="shape"
                className="absolute -top-50 bottom-0 -rotate-45 left-1/4 h-400 -z-1 opacity-75"
            />
        </div>
    );
}

export default Hero;
