import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import ChatHistory from './Chat/ChatHistory';
import ChatInput from './Chat/ChatInput';

const MainInterface = () => (
  <Box display="flex" height="100vh">
    <Sidebar />
    <Box display="flex" flexDirection="column" flexGrow={1} p={2} bgcolor="background.default">
      <ChatHistory />
      <ChatInput />
    </Box>
  </Box>
);

export default MainInterface;
