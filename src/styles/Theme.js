import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      'Londrina Solid',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    h1: {
      fontFamily: '"Londrina Solid", sans-serif',
      fontWeight: 400,
      lineHeight: 1,
    },
    h2: {
      fontFamily: '"Londrina Solid", sans-serif',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body1: {
      color: '#ffffff',
      lineHeight: 1.4,
    },
    body2: {
      color: '#ffffff',
      fontSize: '1.25rem',
    },
  },
  palette: {
    background: {
      default: "#cc7722",
    },
    primary: {
      main: '#cc7722',
    },
    secondary: {
      main: '#1a237e',
    },
    tertiary: {
      main: '#9c27b0',
    },
    quaternary: {
      main: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

defaultTheme.shadows.push('0 0px 8px 0px rgba(65, 65, 65, 0.4)');

const finalTheme = createTheme(defaultTheme, {
  typography: {
    h1: {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.5rem',
      },
      [defaultTheme.breakpoints.between('sm', 'lg')]: {
        fontSize: '5rem',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '8rem',
      },
    },
    h2: {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.25rem',
      },
      [defaultTheme.breakpoints.between('sm', 'lg')]: {
        fontSize: '3rem',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
    },
    body1: {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
      [defaultTheme.breakpoints.between('sm', 'lg')]: {
        fontSize: '1.75rem',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '2rem',
      },
    },
  },
  components: {
    MuiLink: {
      variants: [
        {
          props: { 
            variant: 'link1',
          },
          style: {
            color: '#ffffff',
            textDecoration: 'underline',
            transition: 'color .2s ease-out',
            '&:hover': {
              color: '#1a237e',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { 
            variant: 'pageIcon1',
          },
          style: {
            color: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(26, 35, 126, 1)',
            boxShadow: '0 0px 10px 0px rgba(204, 119, 34, 0.6)',
            '&:hover': {
              backgroundColor: 'rgba(204, 119, 34, 0.85)',
              boxShadow: 25,
            },
            [defaultTheme.breakpoints.down('sm')]: {
              fontSize: '1.75rem',
              padding: '0.375rem',
            },
            [defaultTheme.breakpoints.up('sm')]: {
              fontSize: '2.25rem',
              padding: '0.5rem',
            },
          },
        },
        {
          props: { 
            variant: 'ctrlIcon1',
          },
          style: {
            color: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(26, 35, 126, 1)',
            transition: 'all 0.25s ease',
            padding: '0.25rem',
            '&:hover': {
              backgroundColor: 'rgba(204, 119, 34, 1)',
              boxShadow: 25,
            },
            [defaultTheme.breakpoints.down('sm')]: {
              fontSize: '2rem',
            },
            [defaultTheme.breakpoints.up('sm')]: {
              fontSize: '2.75rem',
            },
          },
        },
        {
          props: { 
            variant: 'linkIcon1',
          },
          style: {
            color: 'rgba(255, 255, 255, 1)',
            display: 'block',
            backgroundColor: 'rgba(26, 35, 126, 1)',
            boxShadow: '0 0px 10px 0px rgba(204, 119, 34, 0.6)',
            transition: 'all 0.25s ease',
            '&:hover': {
              boxShadow: '0 0px 10px 0px rgba(156, 39, 176, 0.6)',
              backgroundColor: 'rgba(204, 119, 34, 1)',
            },
            '& svg': {
              display: 'block',
              height: 'auto',
            },
            [defaultTheme.breakpoints.down('sm')]: {
              padding: '0.4375rem',
              '& svg': {
                width: '1.625rem',
              },
            },
            [defaultTheme.breakpoints.up('sm')]: {
              padding: '0.5rem',
              '& svg': {
                width: '2.25rem',
              },
            },
          },
        },
      ],
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            [defaultTheme.breakpoints.down('md')]: {
              fontSize: '2rem',
            },
            [defaultTheme.breakpoints.up('md')]: {
              fontSize: '2.5rem',
            },
          },
        },
      },
    },
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={finalTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;

