import { Container, Grid } from '@mui/material';
import React, { useInsertionEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';

export default function Notes() {

  const [notes, setNotes] = useState([]);

  useInsertionEffect(()=>{
    fetch("http://localhost:8000/notes").then(res => res.json()).then(data => setNotes(data))
  },[]);

  const handleDelete = async (id) =>{
    await fetch("http://localhost:8000/notes" + id, {
      method:"DELETE"
    });
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <Container>
      <Grid container spacing={3}>
      {
        notes.map(note=>(
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note ={note} handleDelete={handleDelete}/>
          </Grid>
        ))
      }
      </Grid>
    </Container>  
  )
}