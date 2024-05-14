

import { Box, Breadcrumbs, Checkbox, Container, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image';
import { green, red } from '@mui/material/colors';

import SingleProduct from '@/components/singleProduct/SingleProduct';



export const generateStaticParams = async () => {

    const res = await fetch(`http://localhost:5000/api/products`, {
        cache: 'no-store'
    })

    const products = await res.json();

    const paths = products.slice(0, 10).map((product: { _id: string; }) => ({
        params: { productId: product._id }
    }));

    return paths;

}

interface ProductDetailParams {
    params: {
        productId: string;
    };
}

const ProductDetailPage: React.FC<ProductDetailParams> = async ({ params }) => {
    const { productId } = params;


    const res = await fetch(`http://localhost:5000/api/products/${productId}`, {
        cache: 'no-store'
    })

    const product = await res.json();


    return (
        <Container >
            <Stack direction='row' alignItems='center'>
                <Typography>Product Listing</Typography>
                <ArrowForwardIosIcon fontSize='small'></ArrowForwardIosIcon>
                <Typography >Dummy Product Page</Typography>
            </Stack >


            <SingleProduct data={product}></SingleProduct>


        </Container>
    );
};

export default ProductDetailPage;