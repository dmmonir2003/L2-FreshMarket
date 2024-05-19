'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Typography } from '@mui/material';
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
                        '&:hover': {
                            textDecoration: 'underline',
                            color: '#FA8F4D'

                        }
                    }}>Profile</MenuItem>
                    <MenuItem onClick={handleClose} color='#FFBD59' sx={{
                        '&:hover': {
                            textDecoration: 'underline',
                            color: '#FA8F4D'

                        }
                    }}>best meet</MenuItem>
                    <MenuItem onClick={handleClose} color='#FA8F4D' sx={{
                        '&:hover': {
                            textDecoration: 'underline',
                            color: '#FA8F4D'

                        }
                    }}>
                        <Link href={'/products'} >Products</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default CategoryDrowpMenu;
