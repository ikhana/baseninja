import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { appConfig } from '../../config/appConfig';

const Opener = ({
  config: {
    alignId,
    alignContent,
    title,
    titleColorId,
    subTitle,
    subTitleColorId,
    isTitleBeforeSubTitle,
    imgSrc,
    imgWidthPx,
    bgColor,
    bgImgSrc,
    isBgImgVideoMask,
    bgImgOpacity,
    bgImgOpacityVideoMask,
    bgVideoSrc,
  },
}) => {
  const bp500 = useMediaQuery("(min-width: 500px)");
  const bp1000 = useMediaQuery("(min-width: 1000px)");

  const mainPaddingTop = bp500 ? '12rem' : '7.5rem';
  const imgMarginHorizontalPx = 48;
  const imgMarginBottomPx = 48;

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignItems: alignContent,
        justifyContent: 'center',
        width: '100%',
        ...((!bp1000 || alignId === 'CENTER') && {
          paddingBottom: '4rem',
        }),
        ...(!bp1000 && {
          backgroundColor: bgColor
        }),
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {bgImgSrc && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: isBgImgVideoMask ? -1 : -2,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url('/images/${bgImgSrc}')`,
            opacity: (bp1000 && bgVideoSrc) ? bgImgOpacityVideoMask : bgImgOpacity,
          }}
        ></Box>
      )}
      {(bp1000 && bgVideoSrc) && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: (bgImgSrc && isBgImgVideoMask) ? -2 : -1,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            overflow: 'hidden',
            '& video': {
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          }}
        >
          <video autoPlay loop muted playsInline>
            <source src={`/videos/${bgVideoSrc}`} />
          </video>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: (bp1000 && alignId !== 'CENTER') ? 'space-between' : 'center',
          flexDirection: (bp1000 && alignId !== 'CENTER') ? alignId === 'TEXT_LEFT' ? 'row' : 'row-reverse' : 'column-reverse',
          width: '100%',
          maxWidth: `${Math.round((appConfig.maxContainerWidthPx / 16) * 1000) / 1000}rem`,
          padding: `${mainPaddingTop} ${appConfig.containerGutterHorizontalRem}rem`,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: `${Math.round(((appConfig.maxContainerWidthPx - imgMarginHorizontalPx - (20 * 2) - imgWidthPx) / 16) * 1000) / 1000}rem`,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: (bp1000 && alignId !== 'CENTER') ? alignId === 'TEXT_LEFT' ? 'center' : 'flex-start' : 'center',
              justifyContent: 'center',
              flexDirection: isTitleBeforeSubTitle ? 'column' : 'column-reverse',
              ...((bp1000 && alignId !== 'CENTER') && {
                [alignId === 'TEXT_LEFT' ? 'paddingLeft' : 'paddingRight']: '2rem',
              }),
            }}
          >
            {title && (
              <Typography 
                variant="h1"
                color={titleColorId}
                sx={{
                  textAlign: (bp1000 && alignId !== 'CENTER') ? alignId === 'TEXT_LEFT' ? 'center' : 'left' : 'center',
                  ...(subTitle && {
                    [isTitleBeforeSubTitle ? 'marginBottom' : 'marginTop']: '1.5rem',
                  }),
                  textShadow: '-12px -12px 0 #1a237e, 12px -12px 0 #1a237e, -12px 12px 0 #1a237e, 12px 12px 0 #1a237e, -12px 0 0 #1a237e, 12px 0 0 #1a237e, 0 -12px 0 #1a237e, 0 12px 0 #1a237e',
                }}
              >
                {title}
              </Typography>
            )}
            {subTitle && (
              <Typography 
                variant="h2"
                color={subTitleColorId}
                sx={{
                  fontSize: '4rem',
                  textAlign: (bp1000 && alignId !== 'CENTER') ? alignId === 'TEXT_LEFT' ? 'center' : 'left' : 'center',
                }}
              >
                {subTitle}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: `${Math.round((imgWidthPx / 16) * 1000) / 1000}rem`,
            ...((bp1000 && alignId === 'TEXT_LEFT') && {
              marginLeft: `${Math.round((imgMarginHorizontalPx / 16) * 1000) / 1000}rem`,
            }),
            ...((bp1000 && alignId === 'TEXT_RIGHT') && {
              marginRight: `${Math.round((imgMarginHorizontalPx / 16) * 1000) / 1000}rem`,
            }),
            ...((!bp1000 || alignId === 'CENTER') && {
              marginBottom: `${Math.round((imgMarginBottomPx / 16) * 1000) / 1000}rem`,
            }),
            '& img': {
              display: 'block',
              width: '100%',
              maxWidth: `${Math.round((imgWidthPx / 16) * 1000) / 1000}rem`,
              height: 'auto',
            }
          }}
        >
          <img src={`/images/${imgSrc}`} alt="" />
        </Box>
      </Box>
    </Box>
  )
};

export default Opener;
