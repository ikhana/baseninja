import React from 'react';

import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';



const Tweets = ({
  config: {
    tokenName,
    bgColor,
    socials
  },
}) => {
  const bp500 = useMediaQuery("(min-width: 500px)");

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: !bp500 ? '7rem 1.25rem 6rem 1.25rem' : '7rem 3.25rem 6rem 3.25rem',
        backgroundColor: bgColor,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {socials.links.map((social, idx) => {
          const SocialIcon = social.iconComponent;

          return (
            <IconButton 
              component={MuiLink}
              variant="linkIcon1"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
              key={`item${idx}`}
              sx={{
                marginLeft: idx !== 0 ? bp500 ? '1rem' : '0.75rem' : 0,
              }}
            >
              <SocialIcon />
            </IconButton>
          );
        })}
      </Box>
      <Typography 
        variant="body2"
        sx={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '54rem',
          marginTop: '2rem',
        }}
      >
        {tokenName} is a meme token with no intrinsic value or expectation of financial return.<br />The token is for entertainment purposes only.<br /><br />Email: info@BaseNinjas.com<br /><br />Contract address:To Be Deployed
      </Typography>
    </Box>
  )
};

export default Tweets;
