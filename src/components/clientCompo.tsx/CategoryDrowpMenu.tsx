'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CategoryDrowpMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => { // Adjust the event type
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div>
                <Typography
                    component='p'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    fontWeight={600}
                    style={{ cursor: 'pointer' }}
                    color='#FA8F4D' sx={{
                        '&:hover': {
                            textDecoration: 'underline',

                        }
                    }}
                >
                    Category<KeyboardArrowDownIcon />
                </Typography>
                <Box >
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}

                    >
                        <MenuItem onClick={handleClose} sx={{
                            color: '#FA8F4D',
                            '&:hover': {
                                textDecoration: 'underline',
                                color: '#e25300'
                            }
                        }}>Profile</MenuItem>
                        <MenuItem onClick={handleClose} color='#FFBD59' sx={{
                            color: '#FA8F4D',
                            '&:hover': {
                                textDecoration: 'underline',
                                color: '#e25300'
                            }
                        }}>best meet</MenuItem>
                        <MenuItem onClick={handleClose} color='#FA8F4D' sx={{
                            color: '#FA8F4D',
                            '&:hover': {
                                textDecoration: 'underline',
                                color: '#e25300'
                            }
                        }}>
                            <Link href={'/products'} >Products</Link>
                        </MenuItem>
                    </Menu>
                </Box>
            </div>
        </div>
    );
};

export default CategoryDrowpMenu;
