"use client";

import * as React from "react";
import {
    ChevronLeft,
    ChevronRight,
    Calendar,
    MessageSquare,
    Megaphone,
} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const impactCards = [
    {
        id: 1,
        title: "Sales Campaigns and Outreach",
        description:
            "Reach thousands to promote new products and promotions at a fraction of the cost!",
        icon: Megaphone,
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        id: 2,
        title: "Esther Howard",
        description:
            "Remind clients of their appointments in clinics, hotels, or delivery services and reduce cancellations.",
        icon: Calendar,
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: 3,
        title: "Jenny Wilson",
        description:
            "Automatically collect customer feedback through natural and conversational voice interactions to enhance your services.",
        icon: MessageSquare,
        gradient: "from-cyan-500/20 to-teal-500/20",
    },
    {
        id: 4,
        title: "Sales Campaigns and Outreach",
        description:
            "Reach thousands to promote new products and promotions at a fraction of the cost!",
        icon: Megaphone,
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        id: 5,
        title: "Esther Howard",
        description:
            "Remind clients of their appointments in clinics, hotels, or delivery services and reduce cancellations.",
        icon: Calendar,
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: 6,
        title: "Jenny Wilson",
        description:
            "Automatically collect customer feedback through natural and conversational voice interactions to enhance your services.",
        icon: MessageSquare,
        gradient: "from-cyan-500/20 to-teal-500/20",
    },
];

export function Impact() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [api, setApi] = React.useState<any>();

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 md:mb-16">
                    Where Nabrah Makes an Impact
                </h2>

                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    setApi={setApi}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {impactCards.map((card) => {
                            const IconComponent = card.icon;
                            return (
                                <CarouselItem
                                    key={card.id}
                                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="h-full">
                                        <Card
                                            className={`h-full p-6 md:p-8 bg-gradient-to-br ${card.gradient} border-slate-700 hover:border-slate-500 transition-colors duration-300`}
                                        >
                                            <div className="flex flex-col gap-4 h-full">
                                                {/* Icon */}
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                                    {card.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm md:text-base text-slate-300 leading-relaxed flex-grow">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>

                    {/* Navigation - Visible on all screens */}
                    <div className="flex gap-2 justify-center mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="w-10 h-10 border border-slate-600 hover:bg-slate-800"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="w-10 h-10 border border-slate-600 hover:bg-slate-800"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
