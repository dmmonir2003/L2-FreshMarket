import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FlashCard from './FlashCard';
import { red } from '@mui/material/colors';

const FlashCardSection = async () => {



    const res = await fetch('https://l2-assign-8-backend.vercel.app/api/products', {

        next: {
            revalidate: 30
        }
    })

    const products = await res.json();

    const data = products?.slice(0, 4);



    return (
        <Box >
            <Stack justifyContent='space-between' mt={30} mb={10} direction='row' alignItems='center'>
                <Typography variant='h4' fontWeight={600} color='#e25300' component={'h3'}>Flash Sale</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '45%',
                            backgroundColor: '#FA8F4D',
                            '&:hover': { backgroundColor: '#e25300' }
                        }}
                    >
                        <Link href={`/flash-sale`}>View ALL</Link>
                    </Button>
                </Box>

            </Stack>
            <Stack  >
                <FlashCard data={data}></FlashCard>
            </Stack>
        </Box>
    );
};

export default FlashCardSection;