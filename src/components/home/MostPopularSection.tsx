import { Box, Button, Stack, Typography, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const MostPopularSection = () => {
    return (
        <div>
            <Stack direction='row' justifyContent='space-between'>

                <Box>
                    <Typography component={'h2'}>Most Popular Products</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim magni fugit reiciendis rerum dolorem.</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '45%',
                            backgroundColor: red[500],
                            '&:hover': { backgroundColor: 'red' } // Corrected syntax for hover state
                        }}
                    >
                        <Link href={'/products'}>View All</Link>
                    </Button>
                </Box>
            </Stack>

        </div>
    );
};

export default MostPopularSection;