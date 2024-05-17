import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
const LeftSecttion = () => {
    return (
        <div>
            <Stack justifyContent='center' py={3} rowGap={3} alignItems='center' columnGap={5} >
                <Box p={3} border={1} borderColor='black' borderRadius={2} width='230px'>
                    <Divider sx={{ height: '100%', marginRight: '10px' }} color='black' orientation="vertical" />   <Typography>Price  Range</Typography>

                    <FormGroup >
                        <FormControlLabel control={<Checkbox defaultChecked />} label="$20.00 - $ 50.00" />
                        <FormControlLabel control={<Checkbox />} label="$20.00 - $ 50.00" />
                        <FormControlLabel control={<Checkbox />} label="$20.00 - $ 50.00" />
                        <FormControlLabel control={<Checkbox />} label="$20.00 - $ 50.00" />
                        <FormControlLabel control={<Checkbox />} label="$20.00 - $ 50.00" />

                    </FormGroup>

                </Box>
                <Box p={3} border={1} borderColor='black' borderRadius={2} width='230px'>
                    <Divider sx={{ height: '100%', marginRight: '10px' }} color='black' orientation="vertical" />   <Typography>Categories </Typography>

                    <Box mt={2} >
                        <Typography >meat <ArrowDropDownTwoToneIcon ></ArrowDropDownTwoToneIcon> </Typography>
                        <Typography>fishes <ArrowDropDownTwoToneIcon></ArrowDropDownTwoToneIcon> </Typography>
                        <Typography>Meat  <ArrowDropDownTwoToneIcon></ArrowDropDownTwoToneIcon> </Typography>
                    </Box>

                </Box>

                <Box p={3} border={1} borderColor='black' borderRadius={2} width='230px'>
                    <Divider sx={{ height: '100%', marginRight: '10px' }} color='black' orientation="vertical" />   <Typography>Ratings</Typography>

                    <FormGroup >
                        <FormControlLabel control={<Checkbox defaultChecked />} label="1 Star" />
                        <FormControlLabel control={<Checkbox />} label="2 Star" />
                        <FormControlLabel control={<Checkbox />} label="3 Star" />
                        <FormControlLabel control={<Checkbox />} label="4 Star" />
                        <FormControlLabel control={<Checkbox />} label="5 Star" />

                    </FormGroup>

                </Box>
            </Stack>
        </div>
    );
};

export default LeftSecttion;