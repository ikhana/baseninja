import React from 'react';
import { Link } from 'react-scroll';

import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({
  config: {
    isFixed,
    bgColor,
    bgBlur,
    logoSrc,
    logoWidthMinPx,
    logoWidthMaxPx,
    logoTitle,
    socials,
  },
}) => {
  const bp500 = useMediaQuery("(min-width: 500px)");

  /**
   * Styled <Link />.
   */
  const LogoStyled = styled(Link)({
    display: 'block',
    width: '100%',
    maxWidth: `${Math.round(((bp500 ? logoWidthMaxPx : logoWidthMinPx) / 16) * 1000) / 1000}rem`,
    cursor: 'pointer',
    '& img': {
      display: 'block',
      width: '100%',
      maxWidth: `${Math.round(((bp500 ? logoWidthMaxPx : logoWidthMinPx) / 16) * 1000) / 1000}rem`,
      height: 'auto',
    }
  });

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: isFixed ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        zIndex: 500,
        width: '100%',
        backgroundColor: bgColor,
        ...(bgBlur && {
          backdropFilter: `blur(${bgBlur})`,
        })
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          width: '100%',
          maxWidth: '87.5rem',
        }}
      >
        <LogoStyled to="home" title={`${logoTitle}`} smooth={true} duration={400}>
          <img src={`/images/${logoSrc}`} alt="" />
        </LogoStyled>
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
                  marginLeft: bp500 ? '1rem' : '0.75rem',
                }}
              >
                <SocialIcon />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  )
};

export default Header;
