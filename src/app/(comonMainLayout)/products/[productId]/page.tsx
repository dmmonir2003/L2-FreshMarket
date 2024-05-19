

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

interface ProductDetailParams {
    params: {
        productId: string;
    };
}
interface Product {
    _id: string;
    id: number;
    title: string;
    image: string;
    price: number;
    ratings: number;
    brand: string;
    category: string;
    description: string;
}

export const generateStaticParams = async () => {

    const res = await fetch(`https://l2-assign-8-backend.vercel.app/api/products`)

    const products = await res.json();

    return products.slice(0, 10).map((product: Product) => ({
        productId: product._id
    }));



}



const ProductDetailPage: React.FC<ProductDetailParams> = async ({ params }) => {
    const { productId } = params;


    const res = await fetch(`https://l2-assign-8-backend.vercel.app/api/products/${productId}`, { cache: 'no-store' })

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