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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: `${Math.round((appConfig.maxContainerWidthPx / 16) * 1000) / 1000}rem`,
          padding: `${mainPaddingTop} ${appConfig.containerGutterHorizontalRem}rem`,
        }}
      >
        {title && (
          <Typography 
            variant="h1"
            color={titleColorId}
            sx={{
              textAlign: 'center',
              marginBottom: '0.5rem',
              textShadow: bp500 ? '-12px -12px 0 #1a237e, 12px -12px 0 #1a237e, -12px 12px 0 #1a237e, 12px 12px 0 #1a237e, -12px 0 0 #1a237e, 12px 0 0 #1a237e, 0 -12px 0 #1a237e, 0 12px 0 #1a237e' : '-6px -6px 0 #1a237e, 6px -6px 0 #1a237e, -6px 6px 0 #1a237e, 6px 6px 0 #1a237e, -6px 0 0 #1a237e, 6px 0 0 #1a237e, 0 -6px 0 #1a237e, 0 6px 0 #1a237e',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                border: '4px solid #1a237e',
                zIndex: -1,
              },
            }}
          >
            {title}
          </Typography>
        )}
        <Box
          sx={{
            width: '100%',
            maxWidth: `${Math.round((imgWidthPx / 16) * 1000) / 1000}rem`,
            marginBottom: '0.5rem',
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
        {subTitle && (
          <Typography 
            variant="h2"
            color={subTitleColorId}
            sx={{
              fontSize: '4rem',
              textAlign: 'center',
            }}
          >
            {subTitle}
          </Typography>
        )}
      </Box>
    </Box>
  )
};

export default Opener;
