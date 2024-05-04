import React from 'react';
import Marquee from 'react-fast-marquee';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const ImgGallery = ({
  config: {
    title,
    titleColorId,
    titleBgColor,
    subTitle,
    subTitleColorId,
    subTitleBgColor,
    isTitleBeforeSubTitle,
    bgColor,
    bgImgSrc,
    galleryImgs,
    marqueeSpeed,
  },
}) => {
  const bp500 = useMediaQuery("(min-width: 500px)");

  return (
    <>
      {(title || subTitle) && (
        <Box
          component="section"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            padding: !bp500 ? '7.5rem 1.25rem 5.5rem 1.25rem' : '12rem 3.25rem 5.5rem 3.25rem',
            backgroundColor: bgColor,
            ...(bgImgSrc && {
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url('/images/${bgImgSrc}')`,
            }),
          }}
        >
          {title && (
            <Typography 
              variant="h1"
              color={titleColorId}
              sx={{
                fontSize: '8rem',
                textAlign: 'center',
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
                textAlign: 'center',
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
      )}
      {galleryImgs.map((galleryImgItems, galleryIdx) => (
        <Marquee 
          key={`gallery${galleryIdx}`}
          speed={marqueeSpeed} 
          gradient="true"
          gradientWidth={bp500 ? 150 : 50}
          gradientColor="#1a237e"
          autoFill="true"
          direction={galleryIdx % 2 === 0 ? 'left' : 'right'}
          style={{
            marginTop: galleryIdx > 0 ? '5.5rem' : 0,
            marginBottom: !bp500 ? 0 : 0,
          }}
        >
          {galleryImgItems.map((imgSrc, imgIdx) => (
            <Box
              key={`item${imgIdx}`}
              sx={{
                '& img': {
                  display: 'block',
                  width: 'auto',
                  height: '100%',
                  maxHeight: bp500 ? '22.5rem' : '12rem',
                },
              }}
            >
              <img src={`/images/${imgSrc}`} alt="" />
            </Box>
          ))}
        </Marquee>
      ))}
    </>
  )
};

export default ImgGallery;
