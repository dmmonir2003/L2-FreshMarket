import { Box, Button, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import React from 'react';
import FlashCard from './FlashCard';

const MostPopularSection = async () => {

    const res = await fetch('https://l2-assign-8-backend.vercel.app/api/products', {

        next: {
            revalidate: 30
        }
    })

    const products = await res.json();

    const data = products?.slice(0, 6);




    return (
        <div className=''>
            <Stack direction='row' justifyContent='space-between' my={15}>

                <Box sx={{ width: '50%' }}>
                    <Typography variant='h4' fontWeight={600} color='#e25300' component={'h3'}>Most Popular Products</Typography>
                    <Typography fontWeight={600} color='#FA8F4D' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim magni fugit reiciendis rerum dolorem.</Typography>
                </Box>



                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '45%',
                            backgroundColor: '#FA8F4D',
                            '&:hover': { backgroundColor: '#e25300' }// Corrected syntax for hover state
                        }}
                    >
                        <Link href={'/products'}>View All</Link>
                    </Button>
                </Box>
            </Stack>

            <Stack  >
                <FlashCard data={data}></FlashCard>
            </Stack>

        </div>
    );
};

export default MostPopularSection;