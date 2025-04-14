"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './Footer.module.css'
import { useTranslation } from '@/hook/useLanguageStore';
import Image from "next/image";
import Link from 'next/link';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import useProjectStore from '@/hook/useProjectStore';

const projects = [
    {
        id: 0,
        date: '20.05.2024',
        title: '«In Pulse»: web-site design',
        description: 'Web-site',
        img: '/img/interface/bg-footer-case4.png',
        imgMobile: '/img/interface/bg-footer-case4.mobile.png',
        glare: '/img/interface/bg-footer-bag4.png',
        link: 'https://www.behance.net/gallery/198984227/In-Pulse-web-site-design',
        tags: [{ name: 'Marketing' }, { name: 'Branding' }, { name: 'Illustations' }]
    },
    {
        id: 1,
        date: '10.08.2024',
        title: 'Content for Saku Monsters / Pt. 1',
        description: 'Illustration and animation',
        img: '/img/interface/bg-footer-case2.png',
        imgMobile: '/img/interface/bg-footer-case2.mobile.png',
        glare: '/img/interface/bg-footer-bag2.png',
        link: 'https://www.behance.net/gallery/204696285/Content-for-Saku-Monsters-Pt-1',
        tags: [{ name: 'UX/UI Disign' }, { name: 'Branding' }, { name: 'Illustations' }]
    },
    {
        id: 2,
        date: 'Soon',
        title: 'Mel’s Bar: website for the gambling platform',
        description: 'Web-site',
        img: '/img/interface/bg-footer-case3.png',
        imgMobile: '/img/interface/bg-footer-case3.mobile.png',
        glare: '/img/interface/bg-footer-bag3.png',
        link: 'https://www.behance.net/gallery/213083385/UXUI-Website-redesign-for-online-casino-Mels-Bar',
        tags: [{ name: 'Marketing' }, { name: 'Branding' }, { name: 'Illustations' }]
    }
]

const CaseView = () => {
    const { getTranslation } = useTranslation();
    const [project, setProject] = useState(projects[0])
    const scrollRef = useRef<HTMLDivElement>(null)
    const scrollRef2 = useRef<HTMLDivElement>(null)
    const [positionCursor, setPositionCursor] = useState(-22)
    const [isClient, setIsClient] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const textRef = useRef<HTMLDivElement>(null)
    const text0Ref = useRef<HTMLDivElement>(null)
    const text1Ref = useRef<HTMLDivElement>(null)
    const text2Ref = useRef<HTMLDivElement>(null)
    const text3Ref = useRef<HTMLDivElement>(null)

    const textRefMob = useRef<HTMLDivElement>(null)
    const text0RefMob = useRef<HTMLDivElement>(null)
    const text1RefMob = useRef<HTMLDivElement>(null)
    const text2RefMob = useRef<HTMLDivElement>(null)
    const text3RefMob = useRef<HTMLDivElement>(null)

    const [isComponentInView, setIsComponentInView] = useState(false);
    const componentRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const mobileCarouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true)
        useProjectStore.setState({ currentProject: projects[0] });
    }, [])

    const handleWheel = (e: WheelEvent) => {
        if (!isHovered || !carouselRef.current) return;
        e.preventDefault();

        const delta = e.deltaY;
        const newIndex = delta > 0
            ? Math.min(currentSlide + 1, projects.length - 1)
            : Math.max(currentSlide - 1, 0);

        if (newIndex !== currentSlide) {
            setCurrentSlide(newIndex);
            handleSlideChange(newIndex);
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!mobileCarouselRef.current) return;
        e.preventDefault();
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        const mobileCarousel = mobileCarouselRef.current;

        if (carousel) {
            carousel.addEventListener('wheel', handleWheel as any, { passive: false });
        }

        if (mobileCarousel) {
            mobileCarousel.addEventListener('touchmove', handleTouchMove as any, { passive: false });
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener('wheel', handleWheel as any);
            }
            if (mobileCarousel) {
                mobileCarousel.removeEventListener('touchmove', handleTouchMove as any);
            }
        };
    }, [currentSlide, isHovered]);

    const handleSlideChange = (currentIndex: number) => {
        if (textRef?.current && text0Ref?.current && text1Ref?.current && text2Ref?.current) {
            let current = 0;
            switch (currentIndex) {
                case 0:
                    text0Ref.current.style.opacity = '1';
                    text1Ref.current.style.opacity = '0';
                    text2Ref.current.style.opacity = '0';
                    break;
                case 1:
                    current = text0Ref.current.offsetHeight + 36;
                    text0Ref.current.style.opacity = '0';
                    text1Ref.current.style.opacity = '1';
                    text2Ref.current.style.opacity = '0';
                    break;
                case 2:
                    current += text0Ref.current.offsetHeight + 36;
                    current += text1Ref.current.offsetHeight + 36;
                    text0Ref.current.style.opacity = '0';
                    text1Ref.current.style.opacity = '0';
                    text2Ref.current.style.opacity = '1';
                    break;
                case 3:
                    current += text0Ref.current.offsetHeight + 36;
                    current += text1Ref.current.offsetHeight + 36;
                    current += text2Ref.current.offsetHeight + 36;
                    text0Ref.current.style.opacity = '0';
                    text1Ref.current.style.opacity = '0';
                    text2Ref.current.style.opacity = '0';
                    break;
            }
            if (textRef.current) {
                textRef.current.style.opacity = '1';
                textRef.current.style.transform = `translateY(-${current}px)`;
                textRef.current.style.transition = 'opacity 0.3s ease-in-out, transform 0.6s ease-in-out';
            }
        }

        // Анимация слайдов
        if (carouselRef.current) {
            const slides = carouselRef.current.querySelectorAll('div > div');
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    // Текущий слайд - плавно появляется сверху
                    slide.style.opacity = '1';
                    slide.style.transform = 'translateY(0)';
                    slide.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
                } else if (index < currentIndex) {
                    // Прошлый слайд - уходит вверх
                    slide.style.opacity = '0';
                    slide.style.transform = 'translateY(-20px)';
                    slide.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                } else {
                    // Следующий слайд - появляется снизу
                    slide.style.opacity = '0';
                    slide.style.transform = 'translateY(20px)';
                    slide.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                }
            });
        }

        useProjectStore.setState({ currentProject: projects[currentIndex] });
        setProject(projects[currentIndex]);
        updateCursorPosition(currentIndex);
    };

    const handleSlideChangeMobile = (currentIndex: number) => {
        if (textRefMob?.current && text0RefMob?.current && text1RefMob?.current && text2RefMob?.current) {
            let current = 0;
            switch (currentIndex) {
                case 0:
                    text0RefMob.current.style.opacity = '1';
                    text1RefMob.current.style.opacity = '0';
                    text2RefMob.current.style.opacity = '0';
                    break;
                case 1:
                    current = text0RefMob.current.offsetHeight;
                    text0RefMob.current.style.opacity = '0';
                    text1RefMob.current.style.opacity = '1';
                    text2RefMob.current.style.opacity = '0';
                    break;
                case 2:
                    current += text0RefMob.current.offsetHeight;
                    current += text1RefMob.current.offsetHeight;
                    text0RefMob.current.style.opacity = '0';
                    text1RefMob.current.style.opacity = '0';
                    text2RefMob.current.style.opacity = '1';
                    break;
                case 3:
                    current += text0RefMob.current.offsetHeight;
                    current += text1RefMob.current.offsetHeight;
                    current += text2RefMob.current.offsetHeight;
                    text0RefMob.current.style.opacity = '0';
                    text1RefMob.current.style.opacity = '0';
                    text2RefMob.current.style.opacity = '0';
                    break;
            }
            if (textRefMob.current) {
                textRefMob.current.style.opacity = '1';
                textRefMob.current.style.transform = `translateY(-${current}px)`;
                textRefMob.current.style.transition = 'opacity 0.3s ease-in-out, transform 0.7s ease-out';
            }
        }
        useProjectStore.setState({ currentProject: projects[currentIndex] });
        setProject(projects[currentIndex]);
        updateCursorPosition(currentIndex);
    };

    const updateCursorPosition = (index: number) => {
        if (scrollRef?.current || scrollRef2?.current) {
            const current = window.innerWidth <= 1024 ? scrollRef2.current : scrollRef.current;
            setPositionCursor(current ? (current.offsetHeight / (projects.length - 1)) * index - 22 : -22);
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <>
            <div ref={componentRef} className="relative hidden lg:flex flex-row justify-between mt-20 mb-8">
                <Cursor isGelly={true} cursorSize={1} cursorBackgrounColor='#ffffff00' cursorInnerColor='black' colorAnimationDuration={1.5} />
                <div className='flex flex-row'>
                    {/* Полоса */}
                    <div ref={scrollRef}>
                        <svg width="2" height="485" viewBox="0 0 2 485" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M1 0L1.00002 485" stroke="white" strokeDasharray="5 5" />
                        </svg>
                    </div>
                    {/* Страницы */}
                    <div className='flex flex-col h-full justify-between'>
                        {projects.map((item, index) => (
                            <div key={index}>
                                <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H8" stroke="white" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    {/* Курсор */}
                    <svg className="absolute -left-12 m-auto -top-5 transition-all duration-700" style={{ top: positionCursor }} width={43} height={45} viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" filter="url(#filter0_f_2_543)">
                            <path d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z" fill="#FF4D00" />
                        </g>
                        <path opacity="0.05" d="M37.5 22.5L10.5 38.0885L10.5 6.91154L37.5 22.5Z" fill="#FF4D00" />
                        <path d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z" fill="#FF4D00" />
                    </svg>
                </div>
                <div className='inline-flex flex-col absolute w-[495px] h-[280px] overflow-hidden z-10'>
                    <div ref={textRef} className='transition-all'>
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                style={{ opacity: index === currentSlide ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}
                                className="gap-3 inline-flex flex-col items-start ml-24 mt-9 z-10"
                                ref={index === 0 ? text0Ref : index === 1 ? text1Ref : index === 2 ? text2Ref : text3Ref}
                            >
                                <div className="opacity-[0.34] text-white leading-[140%]">{item.description}</div>
                                <div className={`${index !== 3 ? "w-[345px]" : "w-[300px]"} text-white text-[2.375rem] font-semibold leading-[140%]`}>
                                    {item.title}
                                </div>
                                <div className="gap-2 flex items-center">
                                    <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z" fill="white" />
                                            <path d="M4.95898 2.125V4.25M12.0423 2.125V4.25" stroke="white" strokeWidth="1.41667" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                    <div className="w-[5.0625rem] h-[1.1875rem] opacity-[0.3] text-white font-medium leading-[140%]">
                                        {item.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link
                    data-cursor-size={80}
                    data-cursor-text={getTranslation('component.case.view')}
                    data-cursor-color={'#ffffff'}
                    className="w-[834px] h-full relative cursor-pointer pointer-events-auto"
                    href={project.link}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        ref={carouselRef}
                        className="w-full max-h-[485px] h-full absolute left-0 overflow-hidden"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`absolute w-full h-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    transform: index === currentSlide
                                        ? 'translateY(0)'
                                        : index < currentSlide
                                            ? 'translateY(-20px)'
                                            : 'translateY(20px)',
                                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
                                }}
                            >
                                <Image
                                    quality={100}
                                    src={project.img}
                                    fill
                                    className="object-contain"
                                    alt="project"
                                />
                            </div>
                        ))}
                    </div>
                </Link>
            </div>

            {/* Мобильная версия */}
            <div className="w-full h-full flex flex-row relative justify-center">
                <div className="flex lg:hidden flex-col mt-10 mb-8 ml-10 max-w-[360px]">
                    <div className='flex flex-row w-full relative h-[260px]'>
                        <Link
                            href={project.link}
                            className='w-full h-full mr-8 absolute z-10 relative cursor-pointer pointer-events-auto'
                        >
                            <div
                                ref={mobileCarouselRef}
                                className="w-full max-h-[260px] h-full absolute left-0 cursor-pointer overflow-hidden"
                            >
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className={`absolute w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <div
                                            className="relative w-full h-full bg-no-repeat bg-contain bg-right"
                                            style={{ backgroundImage: `url(${project.imgMobile})` }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div className='inline-flex flex-col h-[320px] overflow-hidden mt-8 z-10'>
                        <div ref={textRefMob} className='transition-all'>
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ opacity: index === currentSlide ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}
                                    className="gap-3 inline-flex flex-col items-start z-10"
                                    ref={index === 0 ? text0RefMob : index === 1 ? text1RefMob : index === 2 ? text2RefMob : text3RefMob}
                                >
                                    <div className="opacity-[0.34] text-white text-xs leading-[140%]">
                                        {item.description}
                                    </div>
                                    <div className="text-white text-[27px] font-semibold leading-[140%]">
                                        {item.title}
                                    </div>
                                    <div className="gap-2 flex items-center">
                                        <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <path d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z" fill="white" />
                                                <path d="M4.95898 2.125V4.25M12.0423 2.125V4.25" stroke="white" strokeWidth="1.41667" strokeLinecap="round" />
                                            </g>
                                        </svg>
                                        <div className="w-[5.0625rem] h-[1.1875rem] opacity-[0.3] text-white text-xs font-medium leading-[140%]">
                                            {item.date}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-start gap-2 my-7">
                                        {item.tags.map((tag, tagIndex) => (
                                            <div className={style.button} key={tagIndex}>
                                                {tag.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseView