import { Typography, Button, Container, TextField, Radio, FormControlLabel, FormLabel, FormControl} from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RadioGroup from '@mui/material/RadioGroup';
import { useNavigate } from 'react-router-dom';



export default function Create() {
 
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setDetailsError(false);
    setTitleError(false);
    if(!title){
      setTitleError(true);
    }
    if(!details){
      setDetailsError(true);
    }
    if(title && details){
      fetch(" http://localhost:8000/notes", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({title,details,category})
      }).then(()=> navigate('/'))
    }
  }

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color="textSecondary"
        gutterBottom
        sx={
          {
            marginBottom: 2,
          }
        }
      >
        Create New Notes
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={
            {
              marginTop: 2,
              marginBottom: 2,
              display: "block"
            }
          }
          label="Note Title"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e)=>setDetails(e.target.value)}
          sx={
            {
              marginTop: 2,
              marginBottom: 2,
              display: "block"
            }
          }
          label="Details"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormControl sx={
            {
              marginTop: 2,
              marginBottom: 2,
              display: "block"
            }
          }>
          <FormLabel>Note Catogery</FormLabel>
          <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value) }>
            <FormControlLabel  value='money' control={<Radio />} label='Money'/>
            <FormControlLabel value='todos' control={<Radio/>} label='Todos'/>
            <FormControlLabel value='reminders' control={<Radio/>} label='Reminders'/>
            <FormControlLabel value='work' control={<Radio/>} label='Work'/>
          </RadioGroup>
        </FormControl>
      

        <Button
          color='secondary'
          variant='contained'
          type='submit'
          endIcon = {<KeyboardArrowRightIcon/>}
        >
          Submit
        </Button>
      </form>


    </Container>
  )
}