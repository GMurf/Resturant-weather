import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useState } from 'react';
import PlaceDetail from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'
import { SettingsSystemDaydreamSharp } from '@material-ui/icons';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = () =>{
    const classes = useStyles();
    const [type,setType] = useState('resturants');
    const [rating,setRating] = useState('');
    const places = [{name: 'cool place'},{ name:'best food'},{ name:'best food'},{ name:'best food'},{ name:'best food'},{ name:'best food'},{ name:'best food'}];

    return(
       <div className={classes.container}>
           <Typography variant="h4" >Resturant Hotels and attractions around you   </Typography>
               <FormControl className={classes.formControl}>
                   <InputLabel>Type</InputLabel>
                   <Select value={type} onChange={(e)=>{setType(e.target.value)}}>
                       <MenuItem value="resturants"> Resturants
                       </MenuItem>
                       <MenuItem value="hotels"> Hotels
                       </MenuItem>
                       <MenuItem value="attractions"> Attractions
                       </MenuItem>
                   </Select>
                   </FormControl>
                   <FormControl className={classes.formControl}>
                   <InputLabel>Rating</InputLabel>
                   <Select value={rating} onChange={(e)=>{setRating(e.target.value)}}>
                       <MenuItem value={3}> above 3.0
                       </MenuItem>
                       <MenuItem value={4}> above 4.0
                       </MenuItem>
                       <MenuItem value={5}> above 4.5
                       </MenuItem>
                   </Select>
               </FormControl>
               <Grid container spacing={3} className={classes.list}>
                   {places?.map((place,i) => (
                       <Grid item key= {i} xs={12}>
                           <PlaceDetails place={place} />
                        </Grid>
                   ))

                   }

               </Grid>
         
       </div>
    );
}

export default List;