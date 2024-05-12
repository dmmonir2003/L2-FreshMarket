import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import FlashCard from '../home/FlashCard';
import Link from 'next/link';
import { red } from '@mui/material/colors';


const RightSection = ({ data }) => {



    return (
        <Box mt={2}>
            <Typography fontSize={30} fontWeight={700}>Our Collection Of Products</Typography>
            <Typography mt={1} fontSize={20} fontWeight={500}>Showing 1–12 of 24 item(s)</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            <Box my={3}>

                <Stack>
                    <FlashCard data={data}></FlashCard>
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
        </Box>
    );
};

export default RightSection;