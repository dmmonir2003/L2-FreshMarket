import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FlashCard from './FlashCard';
import { red } from '@mui/material/colors';

const FlashCardSection = async () => {



    const res = await fetch('http://localhost:5000/api/products', {

        next: {
            revalidate: 30
        }
    })

    const products = await res.json();

    const data = products?.slice(0, 6);



    return (
        <div>
            <Stack justifyContent='space-between' mt={30} mb={10} direction='row'>
                <Typography variant='h3' component={'h3'}>Flash Sale</Typography>

                <Button
                    variant='contained'
                    sx={{
                        borderRadius: '45%',
                        backgroundColor: red[500],
                        '&:hover': { backgroundColor: 'red' }
                    }}
                >
                    <Link href='/flash-sale'>See All</Link>
                </Button>


            </Stack>
            <Stack  >
                <FlashCard data={data}></FlashCard>
            </Stack>
        </div>
    );
};

export default FlashCardSection;