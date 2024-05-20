import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { red } from '@mui/material/colors';

interface PropsType {
    item: {
        url: string;
        title: string;
    };
    customHeight: string;
}

const Card = ({ item, customHeight }: PropsType) => {
    return (
        <Link style={{ textDecoration: 'none' }} href={`/products?category=${item?.title}`}>
            <Box
                sx={{
                    height: {
                        xs: 200,
                        md: customHeight,

                    },
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease',
                    opacity: 0.8,
                    '&:hover': {
                        transform: 'scale(1.10)',
                        opacity: 1,
                        color: 'red'
                    },


                }}

            >
                <Box bgcolor={'#FA8F4D'} width={180}>
                    <Typography textAlign={'center'} fontSize={17} py={2} px={1} fontWeight={700} color='white'  >
                        {item.title}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default Card;
