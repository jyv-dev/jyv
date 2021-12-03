import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366',
    },
    secondary: {
      main: '#c01933',
    },
    success: {
      main: '#60AA3C',
      dark: '#43772a',
    },
    light: {
      main: '#9fb7db',
    },
    warning: {
      main: '#FB8500',
    },
    white: {
        main: '#FFFFFF',
        dark: '#000000',
      },
  },
});

/**
 * UNION-969 Apply custom 'success' theme color.
 * Apparently Material UI will only allow certain class overrides per theme, or you'd need to create multiple components with multiple themes.
 * To get around this, I manipluate the style within the makeStyle function by passing in the props from the Button component.
 * This will allow us more flexibility when adding custom buttons and avoid having to create GreenButton, YellowButton, etc components.
 * New styling only gets applied to buttons where color is not primary, secondary, default, or inherit
 * Colors that are added in the above createTheme function must have main property
 * Example: royal: {  main: 'royalblue' }
 */
const useStyles = makeStyles(() => ({
  root: ({ rounded, block, variant, color, usingCustomStyles }) => ({
    fontWeight: 700,
    textTransform: 'none',
    ...(rounded && {
      borderRadius: '50px',
    }),
    ...(block && {
      width: '100%',
    }),
    ...(usingCustomStyles && {
      ...(variant === 'outlined' && {
        color: theme.palette[color]?.main,
        border: `1px solid ${theme.palette[color]?.main}`,
        '&:hover': {
          color: theme.palette[color]?.dark,
          border: `1px solid ${theme.palette[color]?.dark}`,
        },
      }),
      ...(variant === 'contained' && {
        backgroundColor: theme.palette[color]?.main,
        color: '#000000',
        '&:hover': {
          backgroundColor: theme.palette[color]?.dark,
        },
      }),
    }),
  }),
}));

const JyvButton = ({ text, rounded, block, name, variant, color, ...muiButtonProps }) => {
  let validColorProps = ['default', 'inherit', 'primary', 'secondary', 'warning', 'success', 'light'];
  let usingCustomStyles = validColorProps.includes(color);

  const classes = useStyles({ rounded, block, color, variant, usingCustomStyles });

  return (
    <ThemeProvider theme={theme}>
      <Button
        name={name}
        classes={classes}
        color={usingCustomStyles ? undefined : color}
        variant={variant}
        {...muiButtonProps}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default JyvButton;
