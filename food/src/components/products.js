import React,{useState,useEffect} from 'react'
import data from '../utils/products.json';
import './products.css'
import {Container,Grid,Paper,DialogContent} from '@material-ui/core/'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Slider from '@material-ui/core/Slider';
import { ProductCard } from './productCard';
import { ProductCardExpanded } from './productCardExpaned';

const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      color:'white',
      backgroundColor: 'transparent',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
  card:{
      color:'white',
      backgroundColor: 'black'
  }
}));

const marks = [
  {
    value: 100,
    label: 'Rs 100',
  },
  {
    value: 200,
    label: 'Rs 200',
  },
];

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

export default function Products() {  
  const ref = React.createRef();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [isClicked, setIsClicked] = useState([]);
  const [openModal, setOpenModal] = useState(false);


  const handleOpenModal = (id) => {
    setIsClicked(data.find(x => x.id === id));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

    const [items,setItems] = useState(data)
    const [category,setCategory] = useState("veg");
    const [open, setOpen] = useState(false);

    function valuetext(value) {
      return `Rs ${value}`;
    }

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleCategory = () =>{
      setItems(data.filter(item => item.category === category) )    
    };
 
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    useEffect(() =>{
      handleCategory();
    },[category])
    
    return (
      <>
        <Container maxWidth={false} style={{marginTop:'15px',marginBottom:'25px',paddingLeft:'0px',paddingRight:'0px'}}> 
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                >
            
                <Fade in={open}>
                    <div className={classes.paper}>
                        <p>
                        “If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”
– J.R.R. Tolkien
                        </p>
                    </div>
                </Fade>
            </Modal>

            <Modal aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}

              open={openModal}
              onClose={(_, reason) => {
              if (reason !== "backdropClick") {
                handleCloseModal();
              }
            }}>
              
              <Fade in={openModal}>
              {isClicked && (
                <DialogContent>
                  <ProductCardExpanded
                    id={`${isClicked.id}-${isClicked.name}`}
                    className={classes.paper}
                    style={modalStyle}
                    product={isClicked}
                    ref={ref}
                  />
                </DialogContent>
              )}</Fade>
            </Modal>
            

            <Paper style={{margin:'20px',padding:'10px',backgroundColor: 'black',color:'white',boxShadow:' 0px 25px 40px rgba(0,0,0,0.4)'}} onClick={handleOpen}>
              <h1>FOODZIE</h1>
              <p>
                “If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”– J.R.R. Tolkien
              </p>
            </Paper>


            <Grid container style={{color:'grey',padding:"10px"}}>
              <Grid item xs={2} style={{padding:'10px'}}> 
                <Paper style={{backgroundColor:'black',color:'white',color:'black',height:"70%"}}>
                    <h1 style={{fontSize:'30px'}}>Filter</h1>
                    <h2>Price</h2>
                      <Slider 
                      orientation="vertical"
                      aria-label="Always visible"
                      defaultValue={100}
                      getAriaValueText={valuetext}
                      step={50}
                      marks={marks}
                      valueLabelDisplay="on" 
                      style={{height:'inherit'}}
                    />
                  </Paper>
              </Grid>


              <Grid item xs={10}>
                <Tabs value={activeTab} onChange={handleTabType} style={{marginBottom:'15px'}}>
                  <Tab label="Vegetarian" onClick={() => setCategory("veg")}/>
                  <Tab label="Non Vegetarian"  onClick={() => setCategory("Non veg")}/>
                </Tabs>
                <Grid container spacing={2} direction="row" justify="flex-start"
                    alignItems="flex-start">
                    {items && items.map((product,id) => (
                      <Grid item xs={6}  sm={6} md={3} >
                        <ProductCard
                        key = {product.name}
                        id = {id}
                        product = {product}
                        handleOpenModal = {handleOpenModal}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
          </>
    )
}