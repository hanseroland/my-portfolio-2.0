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
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: theme.palette.text.primary,
                    lineHeight: 1.6,
                    textAlign: 'justify',
                }}
            >
                Développeur Fullstack passionné avec plus de 3 ans d’expérience développement web Fullstack. Je conçois des applications web et mobiles modernes,
                performantes et esthétiques, avec un accent sur l’expérience utilisateur. Toujours à la recherche de solutions innovantes,
                je combine expertise technique et sens du design pour créer des produits qui se démarquent.
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
                    href="/path/to/CV.pdf"
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
