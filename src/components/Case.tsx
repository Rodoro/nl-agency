"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './Case.module.css'
import { useTranslation } from '@/hook/useLanguageStore';
import Link from 'next/link';

const CaseMobile = () => {
    const { getTranslation } = useTranslation();
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipSize, setTooltipSize] = useState(0);
    const ref = useRef(null);

    const handleMouseMove = (event: any) => {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        const handleMouseOver = () => setShowTooltip(true);
        const handleMouseLeave = () => setShowTooltip(false);
        const element: any = ref.current;
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');

        if (tooltipElement) {

            if (showTooltip) {
                tooltipElement.style.opacity = '1';
                tooltipElement.style.transform = 'scale(1)';
                tooltipElement.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            } else {
                tooltipElement.style.opacity = '0';
                tooltipElement.style.transform = 'scale(0.3)';
            }
        }
    }, [showTooltip]);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');
        if (tooltipElement) {
            if (showTooltip) {
                tooltipElement.animate({
                    left: tooltipPosition.x - 50 + 'px',
                    top: tooltipPosition.y - 50 + 'px'
                }, { duration: 400, fill: 'forwards' });

            }
        }
    }, [tooltipPosition.x, tooltipPosition.y, showTooltip])

    return (

        <div className="w-full h-full relative">
            <div ref={ref} onMouseMove={handleMouseMove} className="lg:hidden absolute m-auto left-4 h-full w-full bg-contain bg-no-repeat bg-left bg-[url(/img/interface/bg-footer-case1.png)] cursor-pointer">
                <Link className="absolute z-20 w-full h-full cursor-pointer flex flex-row items-end gap-2" href={'/cases'}>

                </Link>
                <div
                    className={" tooltip fixed bg-white text-black rounded-full p-2 text-center flex items-center justify-center z-30"}
                    style={{
                        width: `80px`,
                        height: `80px`,
                        transition: 'top 5s ease, left 5s ease',
                        pointerEvents: 'none',
                    }}
                >
                    {getTranslation('component.case.view')}
                </div>
            </div>
        </div>
    )
}

export default CaseMobile


const Case = () => {
    const { getTranslation } = useTranslation();
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipSize, setTooltipSize] = useState(0);
    const ref = useRef(null);

    const handleMouseMove = (event: any) => {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        const handleMouseOver = () => setShowTooltip(true);
        const handleMouseLeave = () => setShowTooltip(false);
        const element: any = ref.current;
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');

        if (tooltipElement) {

            if (showTooltip) {
                tooltipElement.style.opacity = '1';
                tooltipElement.style.transform = 'scale(1)';
                tooltipElement.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            } else {
                tooltipElement.style.opacity = '0';
                tooltipElement.style.transform = 'scale(0.1)';
            }
        }
    }, [showTooltip]);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');
        if (tooltipElement) {
            if (showTooltip) {
                tooltipElement.animate({
                    left: tooltipPosition.x - 80 + 'px',
                    top: tooltipPosition.y - 80 + 'px'
                }, { duration: 1000, fill: 'forwards' });
                // tooltipElement.style.top = tooltipPosition.y - 50 + 'px';
                // tooltipElement.style.left = tooltipPosition.x - 50 + 'px';
            }
        }
    }, [tooltipPosition.x, tooltipPosition.y, showTooltip])

    return (

        <div className="w-full h-full relative">
            <div ref={ref} onMouseMove={handleMouseMove} className="hidden lg:block absolute m-auto right-0 h-full w-[758px] bg-contain bg-no-repeat bg-right bg-[url(/img/interface/bg-footer-case1.png)] cursor-pointer">
                <Link className="absolute z-20 w-full h-full cursor-pointer flex flex-row items-end gap-2" href={'/cases'}>
                    <div className={style.button + " ml-9 mb-7"}>UX/UI Disign</div>
                    <div className={style.button + " mb-7"}>Marketing</div>
                    <div className={style.button + " mb-7"}>Branding</div>
                    <div className={style.button + " mb-7"}>Illustrtions</div>
                </Link>
                <div
                    className={" tooltip fixed bg-white text-black rounded-full p-2 text-center flex items-center justify-center z-30"}
                    style={{
                        width: `130px`,
                        height: `130px`,

                        pointerEvents: 'none',
                    }}
                >
                    <b>{getTranslation('component.case.view')}</b>
                </div>
            </div>
        </div>
    )
}

export { Case, CaseMobile }
