import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const FlashSaleProductsPage = () => {
    return (
        <Container>
            <Box my={3}>
                <Typography fontSize={30} fontWeight={700}>Flash Sale</Typography>
                <Typography fontSize={15} mt={2} fontWeight={700}>Showing 1–12 of 24 item(s)</Typography>
                <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

            </Box>
        </Container>
    );
};

export default FlashSaleProductsPage;