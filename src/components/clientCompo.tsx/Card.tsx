import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { red } from '@mui/material/colors';

const Card = ({ item, customHeight }) => {
    return (
        <Box
            sx={{
                height: {
                    xs: 200,
                    md: customHeight
                },
                backgroundImage: `url(${item.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s ease',
                opacity: 0.8,
                '&:hover': {
                    transform: 'scale(1.10)',
                    opacity: 1
                },
                zIndex: 0,

            }}
            className={`bg-cover bg-center rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center`}
        >
            <Link style={{ textDecoration: 'none' }} href={`/products?category=${item?.title}`}>
                <Typography fontSize={40} fontWeight={700} color='black' sx={{
                    color: red[500],
                    zIndex: 1,
                    '&:hover': { color: 'red' }
                }}>
                    {item.title}
                </Typography>
            </Link>
        </Box>
    );
};

export default Card;
