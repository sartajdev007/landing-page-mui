import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ my: 5 }}>
            {/* Heading */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 5
                }}
            >
                <SectionTitle title='Here are some of' colored='our works' sx={{
                    textAlign: 'left'
                }} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 5
                    }}
                >
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Box>
            </Box>
        </Box>
    );
};

export default OurWorks;