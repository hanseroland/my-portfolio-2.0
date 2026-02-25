import React from 'react';
import { Typography, Box, Link, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const ProfileText = () => {
    const theme = useTheme();
    const themeMode = theme.palette.mode;

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}

        >
            <Typography
                variant="body1"
                sx={{
                    mb: 1,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: theme.palette.text.primary,
                    lineHeight: 1.6,
                    textAlign: 'justify',
                }}
            >
                Ingénieur Full-Stack spécialisé dans la digitalisation
                Je vous aide à transformer vos opérations en systèmes digitaux performants et évolutifs.
            </Typography>
            <Typography component="div">
                <span> J’interviens sur :</span>
            </Typography>
            <Typography component="div" ml={3} >
                <ul>
                    <li>Automatisation des processus métier</li>
                    <li>Conception de plateformes SaaS, applications web et sites web</li>
                    <li>Développement d’applicatins mobiles (React Native / Expo)</li>
                    <li>Optimisation SEO technique et performance</li>
                </ul>
            </Typography>
            <Typography
                variant="body1"
                mt={1}
                sx={{
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: theme.palette.text.primary,
                    lineHeight: 1.6,
                    textAlign: 'justify',
                }}
            >
                Ancien Tech Lead, j’ai piloté des projets stratégiques : refonte d’un système hospitalier, développement de CRM et création de plateformes SaaS complètes (web + mobile).<br />
                Ma force : penser en systèmes et concevoir des solutions cohérentes, du back-end jusqu’à l’expérience utilisateur.<br />
                Stack principale : MERN (MERN (MongoDB Express React Node.js) , Next.js, Expo (React-Native), SEO technique.
            </Typography>



            <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                <Link
                    href="https://www.linkedin.com/in/hanse-r-p-nguema-ntougou-16a907220/"
                    target="_blank"
                    underline="hover"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': {
                            color: theme.palette.secondary.main,
                            transform: 'translateY(-2px)',
                            transition: 'all 0.3s ease',
                        },
                    }}
                >
                    LinkedIn
                </Link>
                <Link
                    href="https://github.com/hanseroland"
                    target="_blank"
                    underline="hover"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': {
                            color: theme.palette.secondary.main,
                            transform: 'translateY(-2px)',
                            transition: 'all 0.3s ease',
                        },
                    }}
                >
                    Github
                </Link>
                <Link
                    href="https://drive.google.com/file/d/1ErZE8__O1e5dJtLLfvwEj8ivP5x_KckZ/view?usp=drive_link"
                    target="_blank"
                    underline="hover"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': {
                            color: theme.palette.secondary.main,
                            transform: 'translateY(-2px)',
                            transition: 'all 0.3s ease',
                        },
                    }}
                >
                    CV
                </Link>
            </Box>
        </Box>
    );
};

export default ProfileText;
