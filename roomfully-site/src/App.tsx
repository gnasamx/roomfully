import {
  Box,
  ChakraProvider,
  Grid,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <VStack spacing={8}>
          <Text>Roomfully</Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
