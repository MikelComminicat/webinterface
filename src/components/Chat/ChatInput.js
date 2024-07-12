import React from 'react';
import { TextField, Box } from '@mui/material';

const ChatInput = () => (
  <Box component="form" sx={{ display: 'flex', position: 'fixed', bottom: 0, width: '100%', background: '#333', p: 2 }}>
    <TextField fullWidth placeholder="Type a message..." variant="outlined" />
  </Box>
);

export default ChatInput;
