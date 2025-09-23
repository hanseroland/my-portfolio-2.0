import React from 'react'
import { Box, Container, Typography, useTheme, } from '@mui/material'
import CardProject from '@/components/UI/CardProject'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

function index() {

    const theme = useTheme();
    return (
        <Container>
            <Box
                sx={{
                    height: '100%',
                    pt: { xs: '6rem', md: '4rem' },
                    pb: { xs: '6rem', md: '4rem' }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-block',
                            marginRight: '8px'
                        }}
                    >
                        <DashboardOutlinedIcon sx={{ fontSize: 40, color: theme.palette.text.third }} />
                    </Box>
                    <Typography variant="h1"
                        sx={{
                            pt: 1,
                            textAlign: 'center',
                            color: theme.palette.text.third,
                            fontSize: { xs: '1.5rem', md: '3rem' }
                        }}
                        gutterBottom
                    >
                        Mes principaux projets
                    </Typography>
                </Box>
                <CardProject />
            </Box>
        </Container>

    )
}

export default index 