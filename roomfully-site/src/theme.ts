import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: {
        borderColor: 'gray.200',
        borderBottomWidth: '1.5px',
        borderRadius: 'md',
      },
    },
  },
});

export default theme;
