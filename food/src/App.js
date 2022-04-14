import { Routes,Route,Link} from 'react-router-dom';
import Products from './components/products';
import {List,ListItem,ListItemText,Container,Grid,Row,AppBar,Divider,Box,SwipeableDrawer,Toolbar,Typography, Collapse} from '@material-ui/core';
import { ThemeProvider , useTheme } from '@material-ui/core/styles';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import data from './utils/products.json';
import { makeStyles } from '@material-ui/core/styles';
import { SignupForm } from './components/signUp';



const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
}));

function App() {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const [open,setOpen] = useState(false);

  const [veg,setItems] = useState(data.filter((food) => food.category === "veg"))
  console.log(veg);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <AppBar position="static" style={{backgroundColor:"black",color:'white'}}>
            <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
              <Link to="/" style={{textDecoration: 'none',color:'white'}}>
              <Typography variant="h6">FOODZIE</Typography>
              </Link>
            </Toolbar>
        </AppBar>

      <SwipeableDrawer
        anchor="left"
        open = {open}
        onClose ={() =>setOpen(false)}
        onOpen ={() =>{}}
      >
        <div>
          <Box style={{padding:'50px',backgroundColor:"black",color:'white'}}>
            
            <Divider/>
            <List component="nav">
            <div onClick={handleExpandClick}>Vegetarian</div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              { veg.map((item) =>
              <ListItem key = {item.name} >
                <ListItemText >{item.name}</ListItemText>
              </ListItem>
              )}
              </Collapse>
            </List>

            
            <List component="nav">
              Non - Vegetarian
              { veg.map((item) =>
              <ListItem button>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
              )}
            </List>
            
          </Box>
          </div>
      </SwipeableDrawer>

      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/form" element={<SignupForm />}></Route>
        {/*<Route path="/:id" element={<ProductDetails />}></Route>*/}
      </Routes>
      
      </ThemeProvider>
      <footer>
        <Box px={{sm:10}} py={{sm:10}} bgcolor="black" color="white" boxShadow={10}>
            <Container maxWidth ="lg">
                <Grid container spacing={5}>
                    <Grid items xs={12} sm = {4}>
                    <Box>
                      Contact US
                    </Box>
                    <Box>
                      Currently v4.12.3. Released under the MIT License. Copyright © 2022 Foodzie Inc.
                    </Box>     
                    </Grid>
                    <Grid items xs={12} sm = {4}>
                    <Box>
                      Home
                    </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
      </footer>
    </div>
  );
}

export default App;
