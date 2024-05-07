import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MuiAccordion from '@mui/material/Accordion';
import useMediaQuery from '@mui/material/useMediaQuery';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { appConfig } from '../../config/appConfig';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: 'transparent',
  border: `1px solid #cc7722`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<PlayArrowIcon sx={{ fontSize: '1.5rem', color: '#1a237e' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(204, 119, 34, 0.8)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: '0.5rem',
  },
  '& .MuiTypography-root': {
    color: theme.palette.tertiary.quaternary,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '1.5rem 2rem',
  borderTop: '1px solid #cc7722',
  backgroundColor: 'rgba(204, 119, 34, 0.6)',
}));

const AccordionComp = ({
  config: {
    title,
    titleColorId,
    bgColor,
    bgImgSrc,
  },
}) => {
  const [expanded, setExpanded] = useState(null);

  const bp500 = useMediaQuery("(min-width: 500px)");
  const bp900 = useMediaQuery("(min-width: 900px)");

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const mainPaddingTop = bp500 ? '12rem' : '7.5rem';

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
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
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          maxWidth: `${Math.round(((appConfig.maxContainerWidthPx + 400) / 16) * 1000) / 1000}rem`,
          padding: `${mainPaddingTop} ${appConfig.containerGutterHorizontalRem}rem`,
        }}
      >
        <Typography 
          variant="h1"
          color={titleColorId}
          sx={{
            textAlign: 'center',
            textShadow: bp500 ? '-12px -12px 0 #1a237e, 12px -12px 0 #1a237e, -12px 12px 0 #1a237e, 12px 12px 0 #1a237e, -12px 0 0 #1a237e, 12px 0 0 #1a237e, 0 -12px 0 #1a237e, 0 12px 0 #1a237e' : '-6px -6px 0 #1a237e, 6px -6px 0 #1a237e, -6px 6px 0 #1a237e, 6px 6px 0 #1a237e, -6px 0 0 #1a237e, 6px 0 0 #1a237e, 0 -6px 0 #1a237e, 0 6px 0 #1a237e',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginTop: '5.5rem',
            ...(bp900 && {
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }),
            ...(!bp900 && {
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }),
          }}
        >
          <Box
            sx={{
              ...(bp900 && {
                width: '48%',
              }),
            }}
          >
            <Typography 
              variant="h2"
              color={titleColorId}
              sx={{
                textAlign: 'center',
                textShadow: bp500 ? '-5px -5px 0 #1a237e, 5px -5px 0 #1a237e, -5px 5px 0 #1a237e, 5px 5px 0 #1a237e, -5px 0 0 #1a237e, 5px 0 0 #1a237e, 0 -5px 0 #1a237e, 0 5px 0 #1a237e' : '-3px -3px 0 #1a237e, 3px -3px 0 #1a237e, -3px 3px 0 #1a237e, 3px 3px 0 #1a237e, -3px 0 0 #1a237e, 3px 0 0 #1a237e, 0 -3px 0 #1a237e, 0 3px 0 #1a237e',
                marginBottom: '2rem',
              }}
            >
              Buy on Pump.fun
            </Typography>
            <Accordion expanded={expanded === 'panelsushi1'} onChange={handleChange('panelsushi1')}>
              <AccordionSummary aria-controls="panelsushi1d-content" id="panelsushi1d-header">
                <Typography>#1 Visit Pump.fun</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Go to <Link href="https://pump.fun" variant="link1" rel="noopener noreferrer" target="_blank">Pump.fun</Link> in your web browser.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelsushi2'} onChange={handleChange('panelsushi2')}>
              <AccordionSummary aria-controls="panelsushi2d-content" id="panelsushi2d-header">
                <Typography>#2 Connect your wallet </Typography>
                </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Click on the "Connect Wallet" button and select your preferred wallet (e.g., Phantom, Solflare) to connect to the Solana network.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelsushi3'} onChange={handleChange('panelsushi3')}>
              <AccordionSummary aria-controls="panelsushi3d-content" id="panelsushi3d-header">
                <Typography>#3 Select $SNINJA</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  From the list of available tokens on Pump.fun, find and select $SNINJA.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelsushi4'} onChange={handleChange('panelsushi4')}>
              <AccordionSummary aria-controls="panelsushi4d-content" id="panelsushi4d-header">
                <Typography>#4 Enter the amount</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Enter the amount of SOL you want to spend or the amount of $SNINJA you want to purchase.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelsushi5'} onChange={handleChange('panelsushi5')}>
              <AccordionSummary aria-controls="panelsushi5d-content" id="panelsushi5d-header">
                <Typography>#5 Confirm the transaction</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Review the transaction details, including the amount and any associated fees, then confirm the transaction in your connected wallet.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            sx={{
              ...(bp900 && {
                width: '48%',
              }),
              ...(!bp900 && {
                marginTop: '3.5rem',
              }),
            }}
          >
            <Typography
              variant="h2"
              color={titleColorId}
              sx={{
                textAlign: 'center',
                textShadow: bp500 ? '-5px -5px 0 #1a237e, 5px -5px 0 #1a237e, -5px 5px 0 #1a237e, 5px 5px 0 #1a237e, -5px 0 0 #1a237e, 5px 0 0 #1a237e, 0 -5px 0 #1a237e, 0 5px 0 #1a237e' : '-3px -3px 0 #1a237e, 3px -3px 0 #1a237e, -3px 3px 0 #1a237e, 3px 3px 0 #1a237e, -3px 0 0 #1a237e, 3px 0 0 #1a237e, 0 -3px 0 #1a237e, 0 3px 0 #1a237e',
                marginBottom: '2rem',
              }}
            >
             
             </Typography>
            <Accordion expanded={expanded === 'panelphantom1'} onChange={handleChange('panelphantom1')}>
              <AccordionSummary aria-controls="panelphantom1d-content" id="panelphantom1d-header">
                <Typography>#1 Install Phantom Wallet</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Download and install the Phantom Wallet extension for your browser from the official website: <Link href="https://phantom.app/" variant="link1" rel="noopener noreferrer" target="_blank">https://phantom.app/</Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelphantom2'} onChange={handleChange('panelphantom2')}>
              <AccordionSummary aria-controls="panelphantom2d-content" id="panelphantom2d-header">
                <Typography>#2 Fund your wallet</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Add SOL to your Phantom Wallet by purchasing from an exchange or transferring from another wallet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelphantom3'} onChange={handleChange('panelphantom3')}>
              <AccordionSummary aria-controls="panelphantom3d-content" id="panelphantom3d-header">
                <Typography>#3 Open the Phantom Wallet</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Click on the Phantom Wallet extension icon in your browser to open the wallet interface.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelphantom4'} onChange={handleChange('panelphantom4')}>
              <AccordionSummary aria-controls="panelphantom4d-content" id="panelphantom4d-header">
                <Typography>#4 Go to the Swap tab</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Within the Phantom Wallet interface, navigate to the "Swap" tab.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelphantom5'} onChange={handleChange('panelphantom5')}>
              <AccordionSummary aria-controls="panelphantom5d-content" id="panelphantom5d-header">
                <Typography>#5 Select the trading pair</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Choose SOL as the "You Pay" token and enter the contract address of $SNINJA in the "You Receive" field. The $SNINJA contract address is: [insert contract address here]
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelphantom6'} onChange={handleChange('panelphantom6')}>
              <AccordionSummary aria-controls="panelphantom6d-content" id="panelphantom6d-header">
                <Typography>#6 Enter the amount and swap</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Enter the amount of SOL you want to swap for $SNINJA, then click on the "Swap" button. Review the transaction details and confirm the swap in your Phantom Wallet.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: '40rem',
            marginTop: '5.5rem',
          }}
        >
          <Box
            component="video"
            controls="true"
            loop="true"
            poster="/images/videoposter.jpeg"
            sx={{
              width: '100%',
              height: '80%',
            }}
          >
            <source src="/videos/ninja2.mp4" type="video/mp4" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccordionComp;
