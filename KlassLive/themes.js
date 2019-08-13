import future from '@mdx-deck/themes/future';
import syntax from './syntax';
import Image from './Image';

const theme = {
  ...future,
  heading: {
    ...future.heading,
    margin: '10pt',
  },
  components: {
    img: Image,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
    overflow: 'hidden',
  },
  // Slide: {
  //   justifyContent: 'flex-start',
  //   textAlign: 'left',
  // }
}
const themes = [theme, syntax];

export {
  theme,
  syntax,
  themes
};

export default [
  theme,
  syntax
];
