import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const LandingPage = ({ history }) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const brandNameColor = useColorModeValue('teal.800', 'teal.300');
  const handleInternalPageClick = () => {
    window.location.href = '/internal';
  };

  return (
    <Box bg={bgColor} minH="100vh" p="4">
      {/* Navbar */}
      <Flex align="center" justify="space-between" p="4">
        <Heading fontSize="3xl">Faris Rosli</Heading>
        <Flex align="center">
          <Button onClick={toggleColorMode} mr="4">
            Toggle {useColorModeValue('Dark', 'Light')} Mode
          </Button>
          <Button onClick={handleInternalPageClick}>
            Go to Internal Page
          </Button>
        </Flex>
      </Flex>

      {/* Centered Content */}
      <Flex direction="column" align="center" justify="center" h="100%">
        {/* Hero Section */}
        <Box textAlign="center" my="8">
          <Heading fontSize="4xl">Welcome to Our Website!</Heading>
          <Box fontSize="xl" mt="4">
            We showcase amazing brands and help developers grow their skills.
          </Box>
        </Box>

        {/* Showcase of Brand Names */}
        <Box my="8" w="80%">
          <SimpleGrid columns={3} spacing={4}>
            {/* Brand components */}
            {/* Add your brand components here */}
            <Box
              p="4"
              bg={bgColor}
              shadow="md"
              borderRadius="md"
              textAlign="center"
              color={brandNameColor}
            >
              Under Maintanence
            </Box>
            <Box
              p="4"
              bg={bgColor}
              shadow="md"
              borderRadius="md"
              textAlign="center"
              color={brandNameColor}
            >
              Under Maintanence
            </Box>
            <Box
              p="4"
              bg={bgColor}
              shadow="md"
              borderRadius="md"
              textAlign="center"
              color={brandNameColor}
            >
              Under Maintanence
            </Box>
          </SimpleGrid>
        </Box>

        {/* Develop Section */}
        <Box textAlign="center" my="8" w="80%">
          <Heading fontSize="2xl">Develop with Us</Heading>
          <Box fontSize="xl" mt="4">
            Join our community and contribute to innovative projects.
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;