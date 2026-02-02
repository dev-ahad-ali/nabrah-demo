"use client";
import MainContainer from "../containers/MainContainer";
import { ShootingStars } from "../ui/shooting-starts";
import { StarsBackground } from "../ui/stars-background";
import { Badge } from "../ui/badge";
import MovingBorderButton from "../ui/moving-border";
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

                        <div className="flex justify-center gap-8 mt-4">
                            <MovingBorderButton>Book A Demo</MovingBorderButton>
                            <MovingBorderButton>
                                Take Product Tour Tour
                            </MovingBorderButton>
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
            <div className="grid grid-cols-2 items-center">
                <div className="ps-10">
                    <div className="bg-white rounded-full w-fit">
                        <Image
                            src={"/logo.svg"}
                            width={100}
                            height={100}
                            alt="Nabrah logo"
                        />
                    </div>
                    <h2 className="flex flex-col gap-4 text-7xl font-bold mt-4 text-white">
                        <span>Revolutionize Your</span>
                        <span className="bg-clip-text text-transparent bg-radial from-gray-500 via-gray-300 to-gray-600">
                            Voice Communication
                        </span>
                        <span>With NABRAH AI</span>
                    </h2>
                </div>
                <Image
                    src={"/assets/hero-img.png"}
                    width={1200}
                    height={800}
                    alt="img"
                />
            </div>
        </div>
    );
}

export default Hero;
