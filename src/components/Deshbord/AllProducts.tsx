import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Image from 'next/image';

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

interface Props {
    data: Product[];
}

const AllProducts: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>A basic table example with a caption</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Brand</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: Product) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    <Box width={100}>
                                        <Image width={100} alt="image" src={row.image} style={{ width: '100%' }} />
                                    </Box>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.brand}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllProducts;
