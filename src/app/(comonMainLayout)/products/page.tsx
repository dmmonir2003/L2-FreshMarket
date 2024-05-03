import LeftSecttion from '@/components/products/LeftSecttion';
import RightSection from '@/components/products/RightSection';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const ProductsPage = ({ searchParams }) => {
    console.log(searchParams);

    return (
        <div>
            <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }} minHeight='100vh'>
                <Grid item xs={6} sm={4} md={4} >
                    <LeftSecttion></LeftSecttion>
                </Grid>
                <Grid item xs={6} sm={8} md={8} sx={{ backgroundColor: 'red' }}>
                    <RightSection></RightSection>
                </Grid>

            </Grid>
        </div>
    );
};

export default ProductsPage;