import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import CardProject from '@/components/UI/CardProject'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Head from 'next/head';

function Index() {
    const theme = useTheme();

    return (

        <>
            <Head>
                <title>Hanse Roland Parfait - Développeur Web FullStack</title>
                <meta name="description" content=" Développeur Fullstack passionné avec plus de 3 ans d’expérience développement web Fullstack. Je conçois des applications web et mobiles modernes,
                                  performantes et esthétiques" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="googlebot" content="notranslate" />
                <meta name="google" content="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxWidth="lg">
                <Box
                    sx={{
                        height: '100%',
                        pt: { xs: '6rem', md: '4rem' },
                        pb: { xs: '6rem', md: '4rem' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 6,

                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                        }}
                    >
                        <DashboardOutlinedIcon
                            sx={{
                                fontSize: 42,
                                color: theme.palette.text.primary,
                                filter: `drop-shadow(0 0 8px ${theme.palette.text.primary}50)`,
                            }}
                        />
                        <Typography
                            variant="h2"
                            sx={{
                                pt: 1,
                                textAlign: 'center',
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                fontSize: { xs: '1.5rem', md: '3rem' },
                                letterSpacing: '-0.5px',
                            }}
                            gutterBottom
                        >
                            Mes principaux projets
                        </Typography>
                    </Box>

                    {/* Cards */}
                    <CardProject />
                </Box>
            </Container>
        </>

    );
}

export default Index;
