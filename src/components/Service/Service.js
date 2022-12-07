import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Service({ image }) {
    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: 'none',
            mx: 'auto',
            pt: 2,
            '&:hover': {
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            },
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt=""
                    sx={{
                        width: 'auto',
                        mx: 'auto',
                    }}
                />
                <CardContent
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        Web And Mobile Design
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates qui fugit ipsum quos molestiae rem debitis, reprehenderit sequi maiores.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}