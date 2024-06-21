"use client"
import Footer from '@/containers/Footer'
import Link from 'next/link'
import React from 'react'
import style from './Page.module.css'
import Image from "next/image";
import { useTranslation } from '@/hook/useLanguageStore';

const page = () => {
    const { getTranslation } = useTranslation();
    return (
        <div className="w-full">
            <div className="flex flex-row justify-center bg-black h-[842px] bg-[url(/img/interface/bg-cases.mobile.webp)] md:bg-[url(/img/interface/bg-cases.webp)] mb:bg-contain xl:bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col w-full h-full justify-between px-4 md:px-12 xl:px-20 max-w-[1440px]">
                    <div className='my-12' />
                    <div className='flex md:hidden flex-col justify-between h-full my-14 mt-4'>
                        <div className='flex flex-col gap-3'>
                            <div className="flex flex-col gap-4">
                                <div className="opacity-[0.34] text-xs text-white leading-[140%]">{getTranslation('footer.text2')}</div>
                                <div className="text-white text-[32px] font-semibold leading-[140%]">{getTranslation('footer.text3')}</div>
                                <div className="gap-2 flex flex-row items-center">
                                    <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path d="M1.49628 7.21514C1.49628 5.80557 1.49628 5.10153 1.93425 4.66356C2.37222 4.22559 3.07626 4.22559 4.48583 4.22559H13.4545C14.8641 4.22559 15.5681 4.22559 16.0061 4.66356C16.4441 5.10153 16.4441 5.80557 16.4441 7.21514C16.4441 7.56716 16.4441 7.74355 16.3349 7.85341C16.2251 7.96253 16.0479 7.96253 15.6967 7.96253H2.24367C1.89165 7.96253 1.71526 7.96253 1.6054 7.85341C1.49628 7.74355 1.49628 7.56641 1.49628 7.21514ZM1.49628 13.9416C1.49628 15.3512 1.49628 16.0553 1.93425 16.4932C2.37222 16.9312 3.07626 16.9312 4.48583 16.9312H13.4545C14.8641 16.9312 15.5681 16.9312 16.0061 16.4932C16.4441 16.0553 16.4441 15.3512 16.4441 13.9416V10.2047C16.4441 9.85268 16.4441 9.67629 16.3349 9.56643C16.2251 9.45731 16.0479 9.45731 15.6967 9.45731H2.24367C1.89165 9.45731 1.71526 9.45731 1.6054 9.56643C1.49628 9.67629 1.49628 9.85343 1.49628 10.2047V13.9416Z" fill="white" />
                                            <path d="M5.23251 2.73096V4.97312M12.7064 2.73096V4.97312" stroke="white" strokeWidth="1.49478" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                    <div className="h-[1.1875rem] opacity-[0.3] text-white text-xs md:text-base font-medium leading-[140%]">01.24.2020 - 01.10.2024</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-start gap-4">
                                <div className={style.button}>UX/UI Disign</div>
                                <div className={style.button}>Marketing</div>
                                <div className={style.button}>Branding</div>
                                <div className={style.button}>Illustrtions</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <Link className="text-white cursor-pointer relative bg-[#DACDFF]/[.03] w-max py-4 pl-16 pr-[88px] rounded-full linerBorderGradient" href={"/"}>
                                {getTranslation('page.cases.text1')}
                                <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col justify-center gap-9'>
                        <div className="flex flex-col gap-4">
                            <div className="opacity-[0.34] text-white leading-[140%]">{getTranslation('footer.text2')}</div>
                            <div className="w-[460px] text-white text-[2.5rem] font-semibold leading-[140%]">{getTranslation('footer.text3')}</div>
                            <div className="gap-2 flex items-center">
                                <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.3">
                                        <path d="M1.49628 7.21514C1.49628 5.80557 1.49628 5.10153 1.93425 4.66356C2.37222 4.22559 3.07626 4.22559 4.48583 4.22559H13.4545C14.8641 4.22559 15.5681 4.22559 16.0061 4.66356C16.4441 5.10153 16.4441 5.80557 16.4441 7.21514C16.4441 7.56716 16.4441 7.74355 16.3349 7.85341C16.2251 7.96253 16.0479 7.96253 15.6967 7.96253H2.24367C1.89165 7.96253 1.71526 7.96253 1.6054 7.85341C1.49628 7.74355 1.49628 7.56641 1.49628 7.21514ZM1.49628 13.9416C1.49628 15.3512 1.49628 16.0553 1.93425 16.4932C2.37222 16.9312 3.07626 16.9312 4.48583 16.9312H13.4545C14.8641 16.9312 15.5681 16.9312 16.0061 16.4932C16.4441 16.0553 16.4441 15.3512 16.4441 13.9416V10.2047C16.4441 9.85268 16.4441 9.67629 16.3349 9.56643C16.2251 9.45731 16.0479 9.45731 15.6967 9.45731H2.24367C1.89165 9.45731 1.71526 9.45731 1.6054 9.56643C1.49628 9.67629 1.49628 9.85343 1.49628 10.2047V13.9416Z" fill="white" />
                                        <path d="M5.23251 2.73096V4.97312M12.7064 2.73096V4.97312" stroke="white" strokeWidth="1.49478" strokeLinecap="round" />
                                    </g>
                                </svg>
                                <div className="h-[1.1875rem] opacity-[0.3] text-white font-medium leading-[140%]">01.24.2020 - 01.10.2024</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className={style.button}>UX/UI Disign</div>
                            <div className={style.button}>Marketing</div>
                            <div className={style.button}>Branding</div>
                            <div className={style.button}>Illustrtions</div>
                        </div>
                        <Link className="text-white cursor-pointer relative bg-[#DACDFF]/[.03] w-max py-4 pl-16 pr-[88px] rounded-full linerBorderGradient" href={"#bot"}>
                            {getTranslation('page.cases.text1')}
                            <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-around md:justify-end gap-16 md:gap-28 items-center mb-12">
                        <div className="flex flex-col items-start">
                            <div className="text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.cases.text2')}</div>
                            <div className="opacity-[0.3] text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.cases.text3')}</div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.cases.text4')}</div>
                            <div className="opacity-[0.3] text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.cases.text5')}</div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.cases.text6')}</div>
                            <div className="opacity-[0.3] text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.cases.text7')}</div>
                        </div>
                        <Link href={"#bot"} className="hidden md:block">
                            <svg width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2_441)">
                                    <rect width={51} height={51} rx="25.5" fill="black" fillOpacity="0.23" />
                                    <rect x="0.689341" y="0.689341" width="49.6213" height="49.6213" rx="24.8107" stroke="url(#paint0_linear_2_441)" strokeOpacity="0.4" strokeWidth="1.37868" />
                                    <path d="M25.2483 34.0517C25.5844 34.3749 26.1188 34.3644 26.4419 34.0283L31.7076 28.552C32.0307 28.2159 32.0203 27.6816 31.6842 27.3584C31.3482 27.0353 30.8138 27.0458 30.4907 27.3818L25.81 32.2497L20.9422 27.5691C20.6061 27.2459 20.0717 27.2564 19.7486 27.5925C19.4255 27.9285 19.4359 28.4629 19.772 28.786L25.2483 34.0517ZM24.691 18.239L24.9894 33.4598L26.6774 33.4267L26.379 18.2059L24.691 18.239Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_b_2_441" x={-22} y={-22} width={95} height={95} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation={11} />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_441" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_441" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2_441" x1="0.0487325" y1="-0.154101" x2="25.2247" y2="50.7972" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-white px-7 py-8 flex flex-row justify-center'>
                <div className='max-w-[1440px] w-full'>
                    <div className='border-[#0F1322]/[.15] border-[1px] rounded-[45px] relative py-28 px-[20%]'>
                        <div className='absolute left-0 right-0 top-0 bottom-0 m-auto h-[301px] rounded-3xl overflow-hidden'>
                            <div className="relative rounded-[50px] overflow-hidden items-center flex flex-row justify-center">
                                <Image className='rounded-[50px] overflow-hidden' src={"/img/interface/bg-main-baner.png"} alt={"baner"} width={233} height={300} />
                                <svg className="absolute z-10 bottom-0 rounded-[50px]" width={233} height={300} viewBox="0 0 233 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g style={{ mixBlendMode: 'screen' }} filter="url(#filter0_f_2_492)">
                                        <circle cx={70} cy={232} r={100} fill="#FF6C2D" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_2_492" x={-211} y={-49} width={562} height={562} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation={87} result="effect1_foregroundBlur_2_492" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className="absolute bottom-0 z-10 w-[18.75rem] h-[18.8125rem]" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 22.51%, #fff 96.73%)' }} />
                            </div>
                        </div>
                        <div className='max-w-[950px] min-h-[390px] w-full grid grid-cols-1 lg:grid-cols-2'>
                            <div className="opacity-[0.7] justify-self-start text-[#0f1322] text-center text-sm md:text-base w-full lg:w-auto font-medium leading-[normal]">{getTranslation('page.main.text11')}</div>
                            <div className="z-10 self-end relative text-[#809490] text-sm md:text-[1.5625rem] leading-[140%] text-start indent-32 ">
                                <svg className="absolute md:top-1 left-[105px] md:left-24 m-auto w-4 h-4 md:w-auto md:h-auto" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8439 8.70986V0.399414H9.15607V8.70986L1.87283 6.13076L0 11.6472L7.49133 14.3696L2.77457 20.9606L7.3526 24.3994L12 17.9517L16.6474 24.3994L21.2254 20.9606L16.5087 14.3696L24 11.6472L22.1272 6.13076L14.8439 8.70986Z" fill="#FF4D00" />
                                </svg>
                                <span className="text-[#0F1322]">{getTranslation('page.main.text13')}</span>{getTranslation('page.main.text14')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white px-7 pb-8 flex flex-row justify-center'>
                <div className='max-w-[1440px] w-full'>
                    <div className='border-[#0F1322]/[.15] border-[1px] rounded-[45px] relative py-28 px-[20%] flex flex-col items-center justify-center'>
                        <div className=" text-[#1c1c1c]/[.40] text-[52px] md:text-[5.4375rem] font-semibold leading-[140%]" style={{ filter: 'blur(4.5px)' }}>{getTranslation('page.cases.text8')}</div>
                        <div className={style.textExplore + " text-[#1c1c1c] text-[70px] md:text-[7.25rem] font-semibold leading-[140%]"}>{getTranslation('page.cases.text9')}</div>
                        <div className=" text-[#1c1c1c]/[.40] text-[52px] md:text-[5.4375rem] font-semibold leading-[140%]" style={{ filter: 'blur(4.5px)' }}>{getTranslation('page.cases.text10')}</div>
                    </div>
                </div>
            </div>
            <div className="bot bg-white">
                <Footer />
            </div>
        </div>
    )
}

export default page
