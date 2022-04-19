import React, { useEffect, useRef ,useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,TextField
} from '@material-ui/core';

import Button from './FormsUI/Button';
import { Pincode } from './pinCode';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const recoganizedAreas = {
  'hsr':'560102',
  'bypanahalli':'676667',
  'marathalli':'667776',
  'hosurRoad':'321236',
  'teachersColony':'560101'
};



export const SignupForm = () => {
  const classes = useStyles();

  function handleCHANGE({setFieldValue,values}){
    console.log(values.address)
  }

  function hAddressChange ({address, currentValue, setFieldValue}){
    console.log({address, currentValue});

    if(currentValue){
      const foundArea = Object.keys(recoganizedAreas).find(key => key === (currentValue))

      const foundPinCode = recoganizedAreas[foundArea];
      
      setFieldValue("pincode", foundPinCode);
      }else{
      setFieldValue("pincode", "");
      }
    }

  

  return (
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{address:'',pincode:''}}
              enableReinitialize
              onSubmit={values => {
                console.log(values);
              }}
              >
            {props => {
              const {
                values,
                
                setFieldValue
              } = props;
              return (
                <Form>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography>
                          Your details
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          name="address"
                          label="Address"
                          onChange={(e) => { hAddressChange({currentValue: e.currentTarget.value, setFieldValue})}}
                        />
                        <ul>
                      </ul>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          name="pincode"
                          value={values.pincode}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button>
                          Submit Form
                        </Button>
                      </Grid>
                  </Grid>
                </Form>
              )}}
            </Formik>

          </div>
        </Container>
  );
};
