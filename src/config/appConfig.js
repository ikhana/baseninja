import React from 'react';
import Header from '../components/sections/Header';
import Opener from '../components/sections/Opener';
import TextParallax from '../components/sections/TextParallax';
import TextImg from '../components/sections/TextImage';
import ImgGallery from '../components/sections/ImageGallery';
import Video from '../components/sections/Video';
import Accordion from '../components/sections/Accordion';
import Footer from '../components/sections/Footer';

import TelegramIcon from '../components/icons/Telegram';
import XIcon from '../components/icons/X';
import DexToolsIcon from '../components/icons/DexTools';
import SushiSwapIcon from '../components/icons/SushiSwap';
import EtherscanIcon from '../components/icons/Etherscan';

const APP_TITLE = 'Base Ninjas';
const APP_TAB_TITLE = 'Base Ninjas on BASE';
const TOKEN_SYMBOL = 'BNINJA';
const MAX_CONTAINER_WIDTH_PX = 1200;
const CONTAINER_GUTTER_HORIZONTAL_REM = 1.25;

const socials = {
  links: [
    { id: 'TELEGRAM', title: 'Telegram', url: 'https://t.me/BaseNinjasPortal', iconComponent: TelegramIcon },
    { id: 'X', title: 'X', url: 'https://x.com/_BaseNinjas', iconComponent: XIcon },
    { id: 'PumpFun', title: 'PumpFUn', url: 'https://app.uniswap.org/#/swap?outputCurrency=0x1234567890', iconComponent: SushiSwapIcon },
    { id: 'DEX_TOOLS', title: 'DexTools', url: 'https://www.dextools.io/app/en/base/pair-explorer/0x1234567890', iconComponent: DexToolsIcon },
    { id: 'SOLSCAN', title: 'Solscan', url: 'https://basescan.org/address/0x1234567890', iconComponent: EtherscanIcon },
  ],
};

const sections = [
  {
    component: () => <Header config={{
      isFixed: true,
      bgColor: 'rgba(28, 28, 28, 0.1)',
      bgBlur: '8px',
      logoSrc: 'logow.png',
      logoWidthMinPx: 60,
      logoWidthMaxPx: 96,
      logoTitle: APP_TITLE,
      socials,
    }} />,
  },
  {
    component: () => <Opener config={{
      alignId: 'TEXT_RIGHT',
      alignContent: 'center',
      title: 'Sol Ninjas'.toUpperCase(),
      titleColorId: 'quaternary.main',
      subTitle: 'The stealthiest memecoin on Solana, ready to strike from the shadows',
      subTitleColorId: 'quaternary.main',
      isTitleBeforeSubTitle: true,
      imgSrc: 'Openergif.gif',
      imgWidthPx: 600,
      bgColor: 'transparent',
      bgImgSrc: 'bg00.jpg',
      isBgImgVideoMask: true,
      bgImgOpacity: 1,
      bgImgOpacityVideoMask: 0.2,
      bgVideoSrc: '',
    }} />,
  },
  {
    component: () => <TextParallax config={{
      title: '',
      titleBgColor: '',
      bgColor: 'transparent',
      bgImgSrc: 'Casi.png',
      minHeight: '100vh',
    }} />,
  },
  {
    component: () => <TextImg config={{
      alignId: 'LEFT',
      alignContent: 'flex-start',
      title: '',
      titleColorId: '',
      titleBgColor: '',
      subTitle: 'Who are the Sol Ninjas?',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        'Emerging from the depths of the Solana blockchain, the Sol Ninjas are a mysterious and elusive group of warriors.',
        'Trained in the art of stealth and precision, they navigate the complex landscape of the memecoin world with unmatched skill.',
        'With their keen instincts and lightning-fast reflexes, the Sol Ninjas are always one step ahead of the competition.',
        'As the Solana ecosystem grows, the Sol Ninjas stand ready to strike, leaving their mark on the blockchain and claiming their rightful place among the elite.',
      ],
      imgSrc: 'ninjaGif2.gif',
      imgWidthPx: 400,
      bgColor: 'transparent',
      bgImgSrc: 'bg-3.jpg',
    }} />,
  },
  {
    component: () => <TextParallax config={{
      title: '',
      titleBgColor: '',
      bgColor: 'transparent',
      bgImgSrc: 'DJbg.jpg',
      minHeight: '100vh',
    }} />,
  },
  {
    component: () => <TextImg config={{
      alignId: 'LEFT',
      alignContent: 'flex-start',
      title: '',
      titleColorId: '',
      titleBgColor: '',
      subTitle: 'The Way of the Sol Ninja',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        'The path of the Sol Ninja is one of discipline, patience, and unwavering commitment.',
        'As a holder of $SNINJA, you become part of an elite group of warriors, bound together by a shared code of honor.',
        'Engage with the community, share your knowledge, and help others along their journey.',
        'Together, we will harness the power of the Solana blockchain and unleash the true potential of the Sol Ninjas.',
        'In the shadows, we wait. In the shadows, we grow stronger. In the shadows, we prepare for the ultimate battle.',
      ],
      imgSrc: 'ninjaGif3.gif',
      imgWidthPx: 400,
      bgColor: 'transparent',
      bgImgSrc: 'Desert.jpg',
    }} />,
  },
  {
    component: () => <ImgGallery config={{
      title: '',
      titleColorId: '#ffffff',
      titleBgColor: 'primary.main',
      subTitle: '',
      subTitleColorId: '',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: true,
      bgColor: 'transparent',
      bgImgSrc: '',
      galleryImgs: [
        [
          'gallery-01.jpeg',
          'gallery-02.jpeg',
          'gallery-03.jpeg',
          'gallery-04.jpeg',
          'gallery-05.jpeg',
          'gallery-06.jpeg',
          'gallery-07.jpeg',
        ],
      ],
      marqueeSpeed: 140,
    }} />,
  },
  {
    component: () => <Accordion config={{
      title: 'How to buy $SNINJA'.toUpperCase(),
      titleColorId: 'quaternary.main',
      bgColor: 'transparent',
      bgImgSrc: 'bg-7.jpg',
    }} />,
  },
  {
    component: () => <TextImg config={{
      alignId: 'CENTER',
      alignContent: 'center',
      title: 'Ninjanomics'.toUpperCase(),
      titleColorId: '#ffffff',
      titleBgColor: '',
      subTitle: '',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        '100% of the total supply added to liquidity through Pump.fun',
        'Liquidity locked for added security',
        '0% tax on transactions',
        'Contract ownership renounced',
      ],
      imgSrc: '',
      imgWidthPx: 400,
      bgColor: 'transparent',
      bgImgSrc: 'BEER.jpg',
    }} />,
  },
  {
    component: () => <TextImg config={{
      alignId: 'CENTER',
      alignContent: 'center',
      title: 'Why Sol Ninjas?'.toUpperCase(),
      titleColorId: '#ffffff',
      titleBgColor: '',
      subTitle: '',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        'Sol Ninjas are the stealthiest and most elusive memecoin on Solana',
        'We strike swiftly and silently, leaving our mark on the blockchain',
        'Our community is bound together by a shared code of honor and discipline',
        'We are committed to the long-term success and growth of $SNINJA',
        'The team is experienced, transparent, and dedicated to the project',
        'Solana is the future, and Sol Ninjas are at the forefront of the memecoin revolution',
        'Join us on this epic journey and become a true Sol Ninja',
      ],
      imgSrc: '',
      imgWidthPx: 400,
      bgColor: 'transparent',
      bgImgSrc: 'NIGHT_STORIES.jpg',
    }} />,
  },
  {
    component: () => <Video config={{
      title: 'Enter the Shadows'.toUpperCase(),
      titleColorId: '#ffffff',
      titleBgColor: '',
      subTitle: '',
      subTitleColorId: '',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: true,
      addPaddingBottom: true,
      bgColor: 'transparent',
      bgImgSrc: 'DANCE2.jpg',
      videoSrc: 'ninja-episode-preview.mp4',
      posterSrc: 'videoposter2.jpeg',
    }} />,
  },
  {
    component: () => <Footer config={{
      tokenName: `${TOKEN_SYMBOL}`,
      bgColor: 'transparent',
      socials,
    }} />,
  },
];

export const appConfig = {
  tabTitle: APP_TAB_TITLE,
  home: {
    tabTitle: APP_TAB_TITLE,
  },
  sections,
  maxContainerWidthPx: MAX_CONTAINER_WIDTH_PX,
  containerGutterHorizontalRem: CONTAINER_GUTTER_HORIZONTAL_REM,
};
