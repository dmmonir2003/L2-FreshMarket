import CountdownTimer from '@/components/clientCompo.tsx/CountDowon';

import FlashCard from '@/components/home/FlashCard';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import React from 'react';

const FlashSaleProductsPage = async () => {




    const res = await fetch('https://l2-assign-8-backend.vercel.app/api/products', {
        cache: 'no-store',
        next: {
            revalidate: 30
        }
    })

    const products = await res.json();


    return (
        <Container>
            <Stack direction={{ xs: 'column-reverse', sm: 'row' }} justifyContent='space-between' alignItems='center'>
                <Box my={3} width={{ xs: '20rem', sm: '100vh' }} >
                    <Typography fontSize={30} fontWeight={700}>Flash Sale</Typography>
                    <Typography fontSize={15} mt={2} fontWeight={700}>Showing 1–12 of 24 item(s)</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                </Box>

                <Box>
                    <CountdownTimer></CountdownTimer>
                </Box>
            </Stack>

            <Box my={3}>

                <Stack>
                    <FlashCard data={products}></FlashCard>
                </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Button
                    variant='contained'
                    sx={{
                        borderRadius: '45%',
                        backgroundColor: red[500],
                        '&:hover': { backgroundColor: 'red' }
                    }}
                >
                    <Link href={'/products'}>View All</Link>
                </Button>
            </Box>

        </Container>
    );
};

export default FlashSaleProductsPage;