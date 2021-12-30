import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ImageList from '../images';
import Images from '../images';
import AlignItemsList from '../onlines';
import UnstyledButtonsSimple from './ind';
import RecipeReviewCard from '../onlines';
import {Dropdown, DropdownButton} from "react-bootstrap"
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
const drawerWidth = 240;

export default function Bottomcard() {
  return (
    <Box sx={{ display: 'flex' }}>
        sfsd
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
         
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Daskboard', 'Matches', 'Friends', 'Messages', 'My videos' ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[ 'Setting', 'Log Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
             
            </ListItem>
          ))}
        </List>

      </Drawer>
 
      <Box
        component="main" style={{backgroundColor:"#f5f5f5"}}
        sx={{ flexGrow: 1, p: 3 }}
     > 
        <Toolbar />
        <DropdownButton id="dropdown-basic-button btn-none" variant="none"  title="By your Preferences">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
 
       <Images/>
      </Box>
      <Drawer
        sx={{
         
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>
        
        <RecipeReviewCard />
    
        </List>
      </Drawer>
    </Box>
    
  );
}
