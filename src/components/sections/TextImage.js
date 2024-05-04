import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { appConfig } from '../../config/appConfig';

const TextImg = ({
  config: {
    alignId,
    alignContent,
    title,
    titleColorId,
    titleBgColor,
    subTitle,
    subTitleColorId,
    subTitleBgColor,
    isTitleBeforeSubTitle,
    paragraphs,
    paragraphColor = 'quaternary.main',
    imgSrc,
    imgWidthPx,
    bgColor,
    bgImgSrc,
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
        backgroundColor: bgColor,
        ...(bgImgSrc && {
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('/images/${bgImgSrc}')`,
        }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: bp1000 ? alignContent : 'center',
          justifyContent: (bp1000 && alignId !== 'CENTER') ? 'space-between' : 'center',
          flexDirection: (bp1000 && alignId !== 'CENTER') ? alignId === 'TEXT_LEFT' ? 'row' : 'row-reverse' : 'column-reverse',
          width: '100%',
          maxWidth: `${Math.round((appConfig.maxContainerWidthPx / 16) * 1000) / 1000}rem`,
          padding: `${mainPaddingTop} ${appConfig.containerGutterHorizontalRem}rem`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: (bp1000 && alignId !== 'CENTER') ? (alignId === 'TEXT_LEFT' && imgSrc) ? 'center' : 'flex-start' : 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            ...(imgSrc && {
              maxWidth: `${Math.round(((appConfig.maxContainerWidthPx - imgMarginHorizontalPx - (20 * 2) - imgWidthPx) / 16) * 1000) / 1000}rem`,
            }),
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: (bp1000 && alignId !== 'CENTER') ? (alignId === 'TEXT_LEFT' && imgSrc) ? 'center' : 'flex-start' : 'center',
              justifyContent: 'center',
              flexDirection: isTitleBeforeSubTitle ? 'column' : 'column-reverse',
              ...((bp1000 && imgSrc && alignId !== 'CENTER') && {
                [alignId === 'TEXT_LEFT' ? 'paddingLeft' : 'paddingRight']: '2rem',
              }),
              ...((bp1000 && !imgSrc) && {
                padding: '0 2rem',
              }),
            }}
          >
            {title && (
              <Typography 
                variant="h1"
                color={titleColorId}
                sx={{
                  textAlign: (bp1000 && alignId !== 'CENTER') ? (alignId === 'TEXT_LEFT' && imgSrc) ? 'center' : 'left' : 'center',
                  ...(subTitle && {
                    [isTitleBeforeSubTitle ? 'marginBottom' : 'marginTop']: '1rem',
                  }),
                  textShadow: '-12px -12px 0 #1a237e, 12px -12px 0 #1a237e, -12px 12px 0 #1a237e, 12px 12px 0 #1a237e, -12px 0 0 #1a237e, 12px 0 0 #1a237e, 0 -12px 0 #1a237e, 0 12px 0 #1a237e',
                }}
              >
                {titleBgColor ? (
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      padding: !bp500 ? '0 0.325rem' : '0.625rem 1.5rem',
                      backgroundColor: titleBgColor,
                    }}
                  >
                    {title}
                  </Box>
                ) : title}
              </Typography>
            )}
            {subTitle && (
              <Typography 
                variant="h2"
                color={subTitleColorId}
                sx={{
                  fontSize: '4rem',
                  textAlign: (bp1000 && alignId !== 'CENTER') ? (alignId === 'TEXT_LEFT' && imgSrc) ? 'center' : 'left' : 'center',
                  textShadow: '-5px -5px 0 #1a237e, 5px -5px 0 #1a237e, -5px 5px 0 #1a237e, 5px 5px 0 #1a237e, -5px 0 0 #1a237e, 5px 0 0 #1a237e, 0 -5px 0 #1a237e, 0 5px 0 #1a237e',
                }}
              >
                {subTitleBgColor ? (
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      padding: !bp500 ? '0 0.325rem' : '0.625rem 1.5rem',
                      backgroundColor: subTitleBgColor,
                    }}
                  >
                    {subTitle}
                  </Box>
                ) : subTitle}
              </Typography>
            )}
          </Box>
          {paragraphs.length > 0 && (
            <Box
              sx={{
                ...((bp1000 && imgSrc && alignId !== 'CENTER') && {
                  [alignId === 'TEXT_LEFT' ? 'paddingLeft' : 'paddingRight']: '2rem',
                }),
                ...(!imgSrc && {
                  maxWidth: `${Math.round(((appConfig.maxContainerWidthPx - 200 - imgMarginHorizontalPx - (20 * 2)) / 16) * 1000) / 1000}rem`,
                }),
                ...((bp1000 && !imgSrc) && {
                  padding: '0 2rem',
                }),
              }}
            >
              {paragraphs.map((text, idx) => (
                <Typography
                  key={`item${idx}`}
                  sx={{
                    color: paragraphColor,
                    textAlign: (bp1000 && alignId !== 'CENTER') ? (alignId === 'TEXT_LEFT' && imgSrc) ? 'center' : 'left' : 'center',
                    marginTop: idx === 0 ? title ? '3.5rem' : '2.5rem' : '1.5rem',
                  }}
                  dangerouslySetInnerHTML={{__html: text}}
                />
              ))}
            </Box>
          )}
        </Box>
        {imgSrc && (
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
        )}
      </Box>
    </Box>
  )
};

export default TextImg;