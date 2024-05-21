import LeftSecttion from '@/components/products/LeftSecttion';
import RightSection from '@/components/products/RightSection';
import { Grid, Typography } from '@mui/material';
import React from 'react';
interface SearchParams {

    category: string;

}
const ProductsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const category = searchParams?.category;



    let products;
    if (category) {
        const res = await fetch(`https://l2-assign-8-backend.vercel.app/api/products/category/${category}`, {
            cache: 'no-store',
        })


        products = await res.json();
    }
    else {
        const res = await fetch(`https://l2-assign-8-backend.vercel.app/api/products`, {
            cache: 'no-store',
        })
        products = await res.json();
    }



    return (
        <div>
            <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }} minHeight='100vh'>
                <Grid item xs={6} sm={3} md={3} >
                    <LeftSecttion></LeftSecttion>
                </Grid>
                <Grid item xs={6} sm={9} md={9} >
                    <RightSection data={products}></RightSection>
                </Grid>

            </Grid>
        </div>
    );
};

export default ProductsPage;













