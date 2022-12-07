import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Service from '../Service/Service';


const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];



const Services = () => {
    return <Box>
        <SectionTitle
            title='Provide Great'
            colored='Services'
        >
        </SectionTitle>

        <Grid container spacing={2}>
            {
                serviceImages.map((image, i) =>
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Service image={image}></Service>
                    </Grid>
                )
            }
        </Grid>
    </Box>;
};

export default Services;