import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Sidebar = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            position: 'sticky',
            top: 0,
            bgcolor: 'gray'

        }}>
            <Box sx={{
                color: '#FA8F4D',
                ':hover': {
                    color: '#e25300'
                }
            }}>
                <Link href={'/dashboard'}>
                    <Typography textAlign='center' pt={17} fontSize={25} fontWeight={600}>All Products</Typography>
                </Link>
            </Box>
            <Box sx={{
                color: '#FA8F4D',
                ':hover': {
                    color: '#e25300'
                }
            }}>
                <Link href={'/'}>
                    <Typography textAlign='center' mt={1} fontSize={25} fontWeight={600}>Return Home</Typography>
                </Link>
            </Box>

        </Box>
    );
};

export default Sidebar;
