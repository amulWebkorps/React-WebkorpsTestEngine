import React from 'react'
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const BackButton = () => {
    const navigate= useNavigate();
  return (
<Button variant='text' onClick={()=>navigate(-1)}>
<KeyboardBackspaceTwoToneIcon/> Back
</Button>
  )
}

export default BackButton;