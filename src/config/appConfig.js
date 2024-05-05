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
    { id: 'UNISWAP', title: 'Uniswap', url: 'https://app.uniswap.org/#/swap?outputCurrency=0x1234567890', iconComponent: SushiSwapIcon },
    { id: 'DEX_TOOLS', title: 'DexTools', url: 'https://www.dextools.io/app/en/base/pair-explorer/0x1234567890', iconComponent: DexToolsIcon },
    { id: 'ETHERSCAN', title: 'Etherscan', url: 'https://basescan.org/address/0x1234567890', iconComponent: EtherscanIcon },
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
      title: 'Base Ninjas'.toUpperCase(),
      titleColorId: 'quaternary.main',
      subTitle: 'The stealthiest memecoin on BASE, ready to strike from the shadows',
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
      subTitle: 'Who are the Base Ninjas?',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        'Hailing from the shadows of the blockchain, the Base Ninjas are a mysterious and elusive group of warriors.',
        'Trained in the art of stealth and deception, they navigate the treacherous landscape of the memecoin world with unparalleled skill.',
        'With their keen instincts and lightning-fast reflexes, the Base Ninjas are always one step ahead of the competition.',
        'As the BASE ecosystem grows, the Base Ninjas stand ready to strike, leaving their mark on the blockchain and claiming their rightful place among the elite.',
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
      subTitle: 'The Way of the Base Ninja',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        'The path of the Base Ninja is one of discipline, patience, and unwavering commitment.',
        'As a holder of $BNINJA, you become part of an elite group of warriors, bound together by a shared code of honor.',
        'Engage with the community, share your knowledge, and help others along their journey.',
        'Together, we will harness the power of the blockchain and unleash the true potential of the Base Ninjas.',
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
      title: 'How to buy $BNINJA'.toUpperCase(),
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
        '🥷 90% of the total supply added to liquidity',
        '🌙 5% allocated for strategic marketing initiatives',
        '⚔️ 3% reserved for the core team',
        '🔥 2% burned to honor the fallen ninjas',
        '🔒 Liquidity locked for added security',
        '⚖️ 0% tax on transactions',
        '🗝️ Contract ownership renounced',
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
      title: 'Why Base Ninjas?'.toUpperCase(),
      titleColorId: '#ffffff',
      titleBgColor: '',
      subTitle: '',
      subTitleColorId: '#ffffff',
      subTitleBgColor: '',
      isTitleBeforeSubTitle: false,
      paragraphs: [
        '🥷 Base Ninjas are the stealthiest and most elusive memecoin on BASE',
        '🌙 We strike swiftly and silently, leaving our mark on the blockchain',
        '⚔️ Our community is bound together by a shared code of honor and discipline',
        '🔥 We are committed to the long-term success and growth of $BNINJA',
        '🔒 The team is experienced, transparent, and dedicated to the project',
        '⚖️ BASE is the future, and Base Ninjas are at the forefront of the memecoin revolution',
        '🗝️ Join us on this epic journey and become a true Base Ninja',
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

      
