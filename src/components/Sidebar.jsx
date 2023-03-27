import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, Article, Group, Storefront, Person, Settings, AccountBox } from '@mui/icons-material';

const Sidebar = () => {
    return (
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        <List>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Storefront" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Box>
    );
  };
  
  export default Sidebar;