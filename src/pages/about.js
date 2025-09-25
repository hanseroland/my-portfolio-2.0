import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import ProfileHeader from '../components/UI/ProfileHeader';
import ProfileText from '../components/UI/ProfileText';
import SkillTags from '../components/UI/SkillTags';
import ExperienceList from '../components/UI/ExperienceList';
import ProfilePhoto from '../components/UI/ProfilePhoto';

const About = () => {
    const theme = useTheme();

    return (
        <Container
            maxWidth="lg"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Box>

                {/**Présentation & Photo de profil */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 3, md: 5 },
                        p: { xs: 3, md: 6 },
                    }}
                >
                    {/**Photo de profil responsive */}
                    <Box
                        sx={{
                            flex: 0.6,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: { xs: 200, md: 300 },
                            mt: { xs: 10, md: 0 },
                        }}
                    >
                        <ProfilePhoto
                            sx={{
                                borderRadius: '50%',
                                boxShadow: `0 6px 25px ${theme.palette.primary.main}50`,
                            }}
                        />
                    </Box>

                    {/**Texte de présentation */}
                    <Box sx={{ flex: 1 }}>
                        <ProfileHeader />
                        <Box sx={{ mt: 3 }}>
                            <ProfileText />
                        </Box>
                    </Box>

                    {/**Photo de profil desktop */}
                    <Box
                        sx={{
                            flex: 0.6,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: { md: 300 },
                        }}
                    >
                        <ProfilePhoto
                            sx={{
                                borderRadius: '50%',
                                boxShadow: `0 6px 25px ${theme.palette.primary.main}50`,
                            }}
                        />
                    </Box>
                </Box>

                {/**Compétences & Expériences */}
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ mt: 4 }}>
                        <SkillTags />
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <ExperienceList />
                    </Box>
                </Box>


            </Box>
        </Container>
    );
};

export default About;
