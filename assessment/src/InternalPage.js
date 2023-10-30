import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoMdSettings, IoMdPeople, IoMdAnalytics } from 'react-icons/io';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 600 },
  { name: 'Jul', value: 800 },
  { name: 'Aug', value: 900 },
  { name: 'Sep', value: 1000 },
  { name: 'Oct', value: 1200 },
  { name: 'Nov', value: 1100 },
  { name: 'Dec', value: 1300 },
];

const InternalPage = ({ history }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const menuBgColor = useColorModeValue('gray.50', 'gray.600');
  const menuTextColor = useColorModeValue('black', 'white');
  const handleLandingPageClick = () => {
    window.location.href = '/';
  };

  return (
    <Box bg={bgColor} minH="100vh" p="4" display="flex" flexDirection="column">
      {/* Top Bar */}
      <Flex align="center" p="4" bg="gray.800" color="white">
        <IconButton icon={<IoMdSettings />} aria-label="Settings" mr="2" />
        <IconButton icon={<IoMdPeople />} aria-label="Users" mr="2" />
        <IconButton icon={<IoMdAnalytics />} aria-label="Reports" mr="2" />
        <Spacer />
        <Button as={Link} to="/" colorScheme="teal" variant="outline" mr="2" onClick={handleLandingPageClick}>
          Go to Landing Page
        </Button>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Flex>

      {/* Main Content Area */}
      <Flex flex="1" p="4">
        {/* Left Menu Bar */}
        <Box w="250px" bg={menuBgColor} p="4" flexDirection="column" color={menuTextColor}>
          <Heading fontSize="xl" mb="4">
            Menu
          </Heading>
          <Button leftIcon={<IoMdSettings />} my="2" onClick={() => alert('Settings Clicked')}>
            Settings
          </Button>
          <Button leftIcon={<IoMdPeople />} my="2" onClick={() => alert('Users Clicked')}>
            Users
          </Button>
          <Button leftIcon={<IoMdAnalytics />} my="2" onClick={() => alert('Reports Clicked')}>
            Reports
          </Button>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="4">
          <Heading fontSize="2xl" mb="4">
            Sales Chart
          </Heading>
          <Box w="100%" h="300px">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke={useColorModeValue('#3182CE', '#63B3ED')} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default InternalPage;