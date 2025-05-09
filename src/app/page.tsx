"use client"
import LogoSlider from "@/components/LogoSlider";
import ColorText from "@/components/common/ColorText";
import ArrowIcon from "@/components/icons/Arrow";
import Button from "@/components/interfaces/Button";
import Footer from "@/containers/Footer";
import Navbar from "@/containers/Navbar";
import { useTranslation } from "@/hook/useLanguageStore";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { getTranslation } = useTranslation();
  return (
    <main>
      <div className='relative w-full bg-black flex flex-row justify-center bg-cover md:bg-auto bg-center md:bg-right bg-no-repeat px-4 md:px-12 xl:px-20 '>
        <div className="absolute md:w-max h-full md:h-[803px] right-auto bottom-0 top-0 md:right-0 overflow-x-hidden">
          <video poster="/img/interface/bg-main.webp" autoPlay playsInline muted preload='none' loop height={"803"} className="hidden md:block max-h-[803px] overflow-x-hidden">
            <source src={'/img/interface/bg-main-video.webm'} type="video/webm" />
            <source src={'/img/interface/bg-main-video.mp4'} type="video/mp4" />
          </video>
          <video poster="/img/interface/bg-main.mobile.webp" autoPlay playsInline muted preload='none' loop height={"803"} className="block md:hidden max-h-full md:max-h-[803px] overflow-x-hidden w-full max-w-full" style={{ objectFit: 'cover' }}>
            <source src={'/img/interface/bg-main-video.mobile.webm'} type="video/webm" />
            <source src={'/img/interface/bg-main-video.mobile.mp4'} type="video/mp4" />
          </video>
        </div>
        <div className="w-full max-w-[1440px] h-[803px] flex flex-col justify-between z-[5]">
          <div />
          <div id="top" className="gap-8 flex-col hidden md:flex">
            <div className="flex flex-row items-center justify-start">
              <ArrowIcon />
              <div className="opacity-[0.6] text-white text-center text-sm font-medium leading-[105%] uppercase">{getTranslation('page.main.text3')}</div>
            </div>
            <div className="text-white text-[3.3125rem] font-medium leading-[105%]">
              {getTranslation('page.main.text1')}<br />{getTranslation('page.main.text2')}<br />{getTranslation('page.main.text2.1')}
            </div>
            <div className="w-max max-w-[413px] opacity-[0.6] text-white leading-[140%]">{getTranslation('page.main.text4')}</div>
            {/* <Link className="text-white cursor-pointer relative bg-[#DACDFF]/[.03] w-max py-4 pl-16 pr-[88px] rounded-full linerBorderGradient" href={"#bot"}>
              {getTranslation('nav.explore')}
              <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full z-20 m-auto" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                </svg>
              </div>
            </Link> */}
            <Button href={"#bot"}>
              {getTranslation('nav.explore')}
            </Button>
          </div>
          <div id="top" className="gap-8 flex-col flex md:hidden h-full my-14 mt-20 justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center">
                <ArrowIcon />
                <div className="opacity-[0.6] text-white text-center text-xs font-medium leading-[105%] uppercase">{getTranslation('page.main.text3')}</div>
              </div>
              <div className="text-white text-center text-3xl font-medium leading-[105%]">
                {getTranslation('page.main.text1')}<br />{getTranslation('page.main.text2')}<br />{getTranslation('page.main.text2.1')}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="w-max max-w-[260px] opacity-[0.6] text-xs text-white text-center leading-[140%]">{getTranslation('page.main.text4')}</div>
              {/* <Link className="text-white cursor-pointer relative bg-[#DACDFF]/[.03] w-max py-4 pl-16 pr-[88px] rounded-full linerBorderGradient" href={"#bot"}>
                {getTranslation('nav.explore')}
                <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                  </svg>
                </div>
              </Link> */}
              <Button href={"#bot"}>
                {getTranslation('nav.explore')}
              </Button>
            </div>
          </div>
          <div className="flex flex-row justify-around md:justify-end items-center gap-16 md:gap-28 mb-12">
            <div className="flex flex-col items-start">
              <div className="text-white text-[12px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.main.text5')}</div>
              <div className="opacity-[0.3] text-white text-[12px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.main.text6')}</div>
            </div>
            {/* <div className="flex flex-col items-start">
              <div className="text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.main.text7')}</div>
              <div className="opacity-[0.3] text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.main.text8')}</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.main.text9')}</div>
              <div className="opacity-[0.3] text-white text-[8px] md:text-sm font-semibold leading-[normal]">{getTranslation('page.main.text10')}</div>
            </div> */}
            <Link href={"#bot"} className=" hidden md:block transition-all rounded-full hover:scale-95 hover:bg-[#fff]/[.1]">
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
      {/* <div className="bg-white md:px-20 py-8 flex flex-row justify-center w-full">
        <LogoSlider />
      </div> */}
      <div className="bg-white px-8 pb-8 flex flex-row justify-center w-full">
        <div className="max-w-[1440px]  mt-7 w-full py-9 lg:py-36 px-10 lg:px-28 border-[#0F1322]/[.15] border-[1px] flex flex-col lg:flex-row justify-between items-center lg:items-start rounded-[45px] gap-6">
          <div className="opacity-[0.7] text-[#0f1322] text-center text-sm md:text-base w-full lg:w-auto font-medium leading-[normal]">{getTranslation('page.main.text11')}</div>
          <div className="flex flex-col gap-11 lg:items-start w-full max-w-[480px]">
            <div className="w-max max-w-52 flex justify-center items-center gap-1.5 py-3 px-8 rounded-full bg-[#e6efef] text-[#0f1322] text-xs md:text-base font-medium leading-[140%]">
              {getTranslation('page.main.text12')}
            </div>
            <div className="max-w-[479px] relative text-[#809490] text-sm md:text-[1.5625rem] leading-[140%] text-start indent-32 ">
              <svg className="absolute md:top-1 left-[105px] md:left-24 m-auto w-4 h-4 md:w-auto md:h-auto" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8439 8.70986V0.399414H9.15607V8.70986L1.87283 6.13076L0 11.6472L7.49133 14.3696L2.77457 20.9606L7.3526 24.3994L12 17.9517L16.6474 24.3994L21.2254 20.9606L16.5087 14.3696L24 11.6472L22.1272 6.13076L14.8439 8.70986Z" fill="#FF4D00" />
              </svg>
              <span className="text-[#0F1322]">{getTranslation('page.main.text13')}</span><ColorText text={getTranslation('page.main.text14')} />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full max-w-72">
            <div className="relative rounded-[50px] overflow-hidden items-center flex flex-row justify-center">
              <Image src={"/img/interface/bg-main-baner.png"} alt={"baner"} width={233} height={300} />
              <svg className="absolute z-10 bottom-0" width={233} height={300} viewBox="0 0 233 300" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
        </div>
      </div>
      <div className="bot bg-white">
        <Footer />
      </div>
    </main>
  );
}
