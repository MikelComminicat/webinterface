import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => (
  <div style={{ width: 250, padding: 20, background: '#333', color: '#fff' }}>
    <Typography variant="h4" style={{ fontFamily: 'Cursive', marginBottom: 20 }}>
      ALVAN-AI
    </Typography>
    <Divider style={{ background: '#fff' }} />
    <List>
      <ListItem button>
        <ListItemText primary="Model Selector" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Add PDF" />
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
