import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="background.default">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <Typography variant="h2" color="primary">
        Alvan Is Loading...
      </Typography>
    </motion.div>
  </Box>
);

export default LoadingScreen;
