import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Video = ({
  config: {
    title,
    titleColorId,
    titleBgColor,
    subTitle,
    subTitleColorId,
    subTitleBgColor,
    isTitleBeforeSubTitle,
    addPaddingBottom = true,
    bgColor,
    bgImgSrc,
    videoSrc,
  },
}) => {
  const bp500 = useMediaQuery("(min-width: 500px)");

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        ...(addPaddingBottom && {
          padding: !bp500 ? '12rem 1.25rem 12rem 1.25rem' : '12rem 3.25rem 12rem 3.25rem',
        }),
        ...(!addPaddingBottom && {
          padding: !bp500 ? '7.5rem 1.25rem 0 1.25rem' : '7.5rem 3.25rem 0 3.25rem',
        }),
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
            textShadow: bp500 ? '-12px -12px 0 #1a237e, 12px -12px 0 #1a237e, -12px 12px 0 #1a237e, 12px 12px 0 #1a237e, -12px 0 0 #1a237e, 12px 0 0 #1a237e, 0 -12px 0 #1a237e, 0 12px 0 #1a237e' : '-6px -6px 0 #1a237e, 6px -6px 0 #1a237e, -6px 6px 0 #1a237e, 6px 6px 0 #1a237e, -6px 0 0 #1a237e, 6px 0 0 #1a237e, 0 -6px 0 #1a237e, 0 6px 0 #1a237e',
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
            textShadow: bp500 ? '-5px -5px 0 #1a237e, 5px -5px 0 #1a237e, -5px 5px 0 #1a237e, 5px 5px 0 #1a237e, -5px 0 0 #1a237e, 5px 0 0 #1a237e, 0 -5px 0 #1a237e, 0 5px 0 #1a237e' : '-3px -3px 0 #1a237e, 3px -3px 0 #1a237e, -3px 3px 0 #1a237e, 3px 3px 0 #1a237e, -3px 0 0 #1a237e, 3px 0 0 #1a237e, 0 -3px 0 #1a237e, 0 3px 0 #1a237e',
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
      <Box
        sx={{
          width: '100%',
          maxWidth: '60rem',
          overflow: 'hidden',
          marginTop: '5.5rem',
          '& video': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <video controls>
          <source src={`/videos/${videoSrc}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Typography
        variant="body1"
        color="#ffffff"
        sx={{
          marginTop: '2rem',
          textAlign: 'center',
          textShadow: bp500 ? '-2px -2px 0 #1a237e, 2px -2px 0 #1a237e, -2px 2px 0 #1a237e, 2px 2px 0 #1a237e, -2px 0 0 #1a237e, 2px 0 0 #1a237e, 0 -2px 0 #1a237e, 0 2px 0 #1a237e' : '-1px -1px 0 #1a237e, 1px -1px 0 #1a237e, -1px 1px 0 #1a237e, 1px 1px 0 #1a237e, -1px 0 0 #1a237e, 1px 0 0 #1a237e, 0 -1px 0 #1a237e, 0 1px 0 #1a237e',
        }}
      >
        Full Ninja Episode coming soon. Stay tuned!
      </Typography>
    </Box>
  )
};

export default Video;
