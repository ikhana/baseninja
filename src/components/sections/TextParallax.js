import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const TextParallax = ({
  config: {
    title,
    titleBgColor,
    bgColor,
    bgImgSrc,
    minHeight,
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
        ...(minHeight && {
          minHeight: minHeight,
        }),
        padding: !bp500 ? '7.5rem 1.25rem' : '12rem 3.25rem',
        backgroundColor: bgColor,
        ...(bgImgSrc && {
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundImage: `url('/images/${bgImgSrc}')`,
        }),
      }}
    >
      {title && (
        <Typography 
          variant="h2"
          color="primary.main"
          sx={{
            fontSize: '4rem',
            textAlign: 'center',
            ...(titleBgColor && {
              padding: !bp500 ? '0 0.325rem' : '0.625rem 1.5rem',
              backgroundColor: titleBgColor,
            }),
          }}
        >
          {title}
        </Typography>
      )}
    </Box>
  )
};

export default TextParallax;
