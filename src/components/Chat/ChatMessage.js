import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const ChatMessage = ({ text }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Box bgcolor="background.paper" p={2} mb={2} borderRadius={4}>
      <Typography variant="body1" color="textPrimary">
        {text}
      </Typography>
    </Box>
  </motion.div>
);

export default ChatMessage;
