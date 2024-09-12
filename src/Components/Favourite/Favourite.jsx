import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Favourite() {
  return (
    <div className='favourite-icon'>
      <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#fff' }} />} checkedIcon={<Favorite sx={{ color: '#ff3535' }} />} />
    </div>
  );
}