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
            textShadow: '-12px -12px 0 #1a237e, 12px -12px 0 #1a237e, -12px 12px 0 #1a237e, 12px 12px 0 #1a237e, -12px 0 0 #1a237e, 12px 0 0 #1a237e, 0 -12px 0 #1a237e, 0 12px 0 #1a237e',
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
                textShadow: '-5px -5px 0 #1a237e, 5px -5px 0 #1a237e, -5px 5px 0 #1a237e, 5px 5px 0 #1a237e, -5px 0 0 #1a237e, 5px 0 0 #1a237e, 0 -5px 0 #1a237e, 0 5px 0 #1a237e',
                marginBottom: '2rem',
              }}
            >
              Buy using Uniswap
            </Typography>
            <Accordion expanded={expanded === 'panelsushi1'} onChange={handleChange('panelsushi1')}>
              <AccordionSummary aria-controls="panelsushi1d-content" id="panelsushi1d-header">
                <Typography>#1 Install MetaMask</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Download &amp; install the official MetaMask wallet either from the app store on your phone or the <Link href="https://metamask.io/buy-crypto/" variant="link1" rel="noopener noreferrer" target="_blank">browser extension</Link> for desktop.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelsushi2'} onChange={handleChange('panelsushi2')}>
              <AccordionSummary aria-controls="panelsushi2d-content" id="panelsushi2d-header">
                <Typography>#2 Add the BASE network to MetaMask</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Add the following network to MetaMask via "Settings &gt; Networks &gt; Add network":<br /><br />Network Name: Base<br />RPC Endpoint: https://mainnet.base.org/<br />Chain ID: 8453<br />Currency Symbol: ETH<br />Block Explorer: https://basescan.org
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panelsushi3'} onChange={handleChange('panelsushi3')}>
              <AccordionSummary aria-controls="panelsushi3d-content" id="panelsushi3d-header">
                <Typography>#3 Add ETH to your wallet</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  First,add some Ethereum ETH to your wallet. Next, visit <Link href="https://bridge.base.org" variant="link1" rel="noopener noreferrer" target="_blank">bridge.base.org</Link>, connect your wallet to the Ethereum network, then choose how much ETH you wish to bridge from Ethereum to BASE. Remember to leave enough for gas fees.<br /><br />Alternatively, you can send BASE ETH from your Coinbase CEX account directly to your private MetaMask wallet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panelsushi4'} onChange={handleChange('panelsushi4')}>
<AccordionSummary aria-controls="panelsushi4d-content" id="panelsushi4d-header">
<Typography>#4 Swap ETH for $BNINJA</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Visit <Link href="https://app.uniswap.org/#/swap" variant="link1" rel="noopener noreferrer" target="_blank">Uniswap</Link>, connect your wallet to the BASE network, paste the $BNINJA contract address (listed below) into the "Select token" field, then swap some BASE ETH for $BNINJA.<br /><br />$BNINJA Contract: 0x1234567890
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panelsushi5'} onChange={handleChange('panelsushi5')}>
<AccordionSummary aria-controls="panelsushi5d-content" id="panelsushi5d-header">
<Typography>#5 Display $BNINJA in your wallet</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Finally, for $BNINJA to show in your MetaMask wallet, simply paste the $BNINJA contract address (listed below) via MetaMask's "Tokens  Import tokens" option.<br /><br />$BNINJA Contract: 0x1234567890
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
textShadow: '-5px -5px 0 #1a237e, 5px -5px 0 #1a237e, -5px 5px 0 #1a237e, 5px 5px 0 #1a237e, -5px 0 0 #1a237e, 5px 0 0 #1a237e, 0 -5px 0 #1a237e, 0 5px 0 #1a237e',
marginBottom: '2rem',
}}
>
Buy using Coinbase Wallet
</Typography>
<Accordion expanded={expanded === 'panelcoinbase1'} onChange={handleChange('panelcoinbase1')}>
<AccordionSummary aria-controls="panelcoinbase1d-content" id="panelcoinbase1d-header">
<Typography>#1 Install Coinbase Wallet</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Download & install the official Coinbase Wallet either from the app store on your phone or the <Link href="https://www.coinbase.com/en-gb/wallet" variant="link1" rel="noopener noreferrer" target="_blank">browser extension</Link> for desktop.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panelcoinbase3'} onChange={handleChange('panelcoinbase3')}>
<AccordionSummary aria-controls="panelcoinbase3d-content" id="panelcoinbase3d-header">
<Typography>#2 Add ETH to your wallet</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
First, add some Ethereum ETH to your wallet. Next, visit <Link href="https://bridge.base.org" variant="link1" rel="noopener noreferrer" target="_blank">bridge.base.org</Link>, connect your wallet to the Ethereum network, then choose how much ETH you wish to bridge from Ethereum to BASE. Remember to leave enough for gas fees.<br /><br />Alternatively, you can send BASE ETH from your Coinbase CEX account directly to your Coinbase wallet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panelcoinbase4'} onChange={handleChange('panelcoinbase4')}>
<AccordionSummary aria-controls="panelcoinbase4d-content" id="panelcoinbase4d-header">
<Typography>#3 Swap ETH for $BNINJA</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
1. Load the Coinbase Wallet app.<br />
2. Go to the Assets page.<br />
3. Click Swap.<br />
4. Select BASE as the chain.<br />
5. Select ETH in the <em>From</em> option.<br />
6. Paste the $BNINJA contract address (listed below) in the <em>To</em> option<br />
7. Input the amount of ETH you wish to swap.<br /><br />$BNINJA Contract: 0x1234567890
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
poster="/images/buy-anim-poster.jpg"
sx={{
width: '100%',
height: '80%',
}}
>
<source src="/videos/bninja-buy-anim.mp4" type="video/mp4" />
</Box>
</Box>
</Box>
</Box>
);
}

export default AccordionComp;
