import { createTheme} from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const theme = createTheme(
  {
    palette: {
      primary:{
        main:"#F025C5"
      },
      secondary:purple
    },
    typography:{
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,

    },
   
  }
);