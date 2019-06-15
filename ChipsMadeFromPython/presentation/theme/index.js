import createTheme from "../../createTheme";


const colors = {
  primary: 'pink',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE',
};
const fonts = {
  primary: 'Montserrat',
  secondary: 'Helvetica',
};

const theme = createTheme(
  colors, 
  fonts,
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      // heading: {
      //   h1: {
      //     fontSize: '4rem',
      //     textTransform: 'uppercase'
      //   },
      //   h2: {
      //     fontSize: '3.5rem',
      //     textTransform: 'uppercase'
      //   },
      //   h3: {
      //     fontSize: '3rem',
      //     textTransform: 'uppercase'
      //   },
      //   h4: {
      //     fontSize: '2.5rem',
      //     textTransform: 'uppercase'
      //   },
      //   h5: {
      //     fontSize: '2rem',
      //     textTransform: 'uppercase'
      //   },
      //   h6: {
      //     fontSize: '1.5rem',
      //     textTransform: 'uppercase'
      //   }
      // },
      codePane: {
        fontSize: '2.5rem'
      },
    }
  });

export default theme;
