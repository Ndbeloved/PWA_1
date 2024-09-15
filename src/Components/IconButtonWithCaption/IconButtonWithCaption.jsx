import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/styles';

const CustomButton = styled(Button)({
    '& .MuiTouchRipple-root': {
      color: 'grey', // Change ripple color to grey
    },
  });


const IconButtonWithCaption = ({ isActive, label, Icon, onClick }) => {
  return (
    <CustomButton
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
        fontFamily: 'inherit',
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          sx={{
            fontSize: 30,
            fill: isActive ? '#f1391a' : '#000000', // Icon color
          }}
        />
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="30%" stopColor="#F95773" />
            <stop offset="90%" stopColor="#40e0d0" />
          </linearGradient>
        </svg>
      </Box>
      <span
        style={{
          fontSize: 10,
          marginTop: '0px',
          color: isActive ? "#f1391a" : "#000000",
        }}
      >
        {label}
      </span>
    </CustomButton>
  );
};

export default IconButtonWithCaption;
