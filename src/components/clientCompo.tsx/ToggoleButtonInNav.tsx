'use client'

import { Box, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CategoryDrowpMenu from "@/components/clientCompo.tsx/CategoryDrowpMenu";

const ToggleButtonInNav = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="toggle menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <Typography fontWeight={600} component={Link} href={'/'}>Home</Typography>
                </MenuItem>
                <MenuItem>
                    <CategoryDrowpMenu />
                </MenuItem>
                <MenuItem>
                    <Typography fontWeight={600} component={Link} href={'/products'}>Products</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography fontWeight={600} component={Link} href={'/flash-sale'}>Flash Sale</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography fontWeight={600} component={Link} href={'/about-us'}>About Us</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography fontWeight={600} component={Link} href={'/contact-us'}>Contact Us</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default ToggleButtonInNav;
