import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& $notchedOutline': {
              borderColor: 'white',
            },
            '&:hover $notchedOutline': {
              borderColor: 'white',
            },
            '&$focused $notchedOutline': {
              borderColor: 'white',
            },
          },
          input: {
            color: 'white',
          },
          notchedOutline: {
            borderColor: 'white',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: 'white',
            '&$focused': {
              color: 'white',
            },
          },
        },
      },
    },
  });
  