"use client"
import { Box } from '@chakra-ui/react';
import React, {useState} from 'react';
import Link from 'next/link';





const CustomButton = (props) => {
  const [isSecondary, setIsSecondary] = useState(false)

return (
<a
  style={{
    borderRadius: '5px',
    fontFamily: 'Paytone One',
    color: '#E04C4C',
    color: props.color,
    fontSize: '14px',
    padding: '11px 33px 11px 33px',
    border: 'solid #E04C4C 2px',
    textDecoration: 'none',
    fontWeight: 'light',
    textTransform: 'uppercase',
    background: props.backgroundColor,
    cursor: 'pointer',
  }}
  onClick={props.onClick}
>
  {props.text}
</a>
)
  
}



export default CustomButton