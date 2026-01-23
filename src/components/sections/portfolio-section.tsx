'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const portfolioItems = [
    { id: 'portfolio-fw-1', coupleName: 'Tom + Angela', page: 1 },
    { id: 'portfolio-fw-2', coupleName: 'Sara + Nick', page: 1 },
    { id: 'portfolio-fw-3', coupleName: 'Rizal + Yasmin', page: 1 },
    { id: 'portfolio-fw-4', coupleName: 'Kristina + Mike', page: 1 },
    { id: 'portfolio-fw-5', coupleName: 'Rob + Ashley', page: 1 },
    { id: 'portfolio-fw-6', coupleName: 'Zayn + Izzah', page: 1 },
    { id: 'portfolio-fw-7', coupleName: 'Omar + Aisha', page: 2 },
    { id: 'portfolio-fw-8', coupleName: 'Khairul + Mira', page: 2 },
    { id: 'portfolio-fw-9', coupleName: 'Syafiq + Nadiya', page: 2 },
    { id: 'portfolio-fw-10', coupleName: 'Adam + Hani', page: 2 },
];

const PortfolioSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);
    const totalPages = Math.max(...portfolioItems.map(item => item.page));

    const handlePageChange = (pageNum: number) => {
        if (pageNum === currentPage) return;
        
        setCurrentPage(pageNum);

        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const itemsToShow = portfolioItems.filter(item => item.page === currentPage);

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="bg-[#FDFBF8] px-[3%] py-24 overflow-hidden border-t-4 border-b-4 border-accent"
        >
            <div className="text-center mb-24">
                <h2 className="font-serif text-4xl md:text-5xl text-foreground uppercase tracking-widest font-normal">
                    Enchanted Events
                </h2>
            </div>
            
            <div key={currentPage} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                {itemsToShow.map((item, index) => {
                    const image = PlaceHolderImages.find((img) => img.id === item.id);
                    if (!image) return null;

                    return (
                        <Link
                            href="#"
                            key={item.id}
                            className="flex flex-col text-center group animate-in fade-in-0 slide-in-from-bottom-10 duration-700"
                            style={{ animationDelay: `${index * 100}ms`}}
                        >
                            <div className="w-full aspect-[5/4] overflow-hidden relative mb-6 bg-gray-100">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description || item.coupleName}
                                    fill
                                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                            <div>
                                <span className="font-serif text-2xl uppercase tracking-[0.1em] text-foreground mb-3 block">
                                    {item.coupleName}
                                </span>
                                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gray-500 border-b border-gray-300 pb-2 transition-colors group-hover:border-foreground group-hover:text-foreground">
                                    Explore Event
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-32 pr-[2%] flex justify-center md:justify-end items-center group">
                <div className="h-px bg-muted-gold w-24 mr-6 transition-all duration-300 group-hover:w-36"></div>
                <div className="flex gap-8 font-serif text-lg">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <div
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={cn(
                                'cursor-pointer text-gray-500 transition-colors hover:text-foreground',
                                currentPage === pageNum && 'text-foreground font-semibold'
                            )}
                        >
                            {String(pageNum).padStart(2, '0')}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
