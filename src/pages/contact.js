import React from 'react';
import { Container, Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';





function contact() {


    const theme = useTheme();
    const themeMode = theme.palette.mode;


    const frameVariants = {
        hidden: { scale: 0.9, opacity: 0, y: 30 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, delay: 0.1 }
        }
    };

    // Animation pour chaque bouton
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const CONTACT_LINKS = [
        {
            name: 'Email Direct',
            href: 'mailto:rolandntougou@gmail.com',
            icon: EmailIcon,
            color: theme.palette.text.primary,
            description: 'Pour toute proposition d\'emploi ou de projet.',
            main: true, // Bouton principal
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/hanse-r-p-nguema-ntougou-16a907220/',
            icon: LinkedInIcon,
            color: theme.palette.text.primary,
            description: 'Connectons-nous professionnellement.',
        },
        {
            name: 'GitHub',
            href: 'https://github.com/hanseroland',
            icon: GitHubIcon,
            color: theme.palette.text.primary,
            description: 'Explorez mon code source.',
        },
        {
            name: '+221 775173937',
            href: 'tel:+221775173937',
            icon: PhoneIcon,
            color: theme.palette.text.primary,
            description: 'Appelez-moi directement (Mobile).',
        },
    ];
    return (
        <Container
            maxWidth="lg"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pb: { xs: 6, md: 4 }
            }}
        >
            <Box
                component={motion.div}
                variants={frameVariants}
                initial="hidden"
                animate="visible"
                sx={{
                    width: { xs: '90%', sm: '60%', md: '500px' },
                    height: { xs: 'auto', md: '600px' },
                    padding: 2,
                    borderRadius: '30px',
                    background: themeMode === 'light'
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,245,247,0.25))'
                        : 'linear-gradient(135deg, rgba(30,32,40,0.4), rgba(45,48,54,0.25))',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(16px)',
                    mx: 'auto',
                    mt: 8,
                    mb: 8,
                }}
            >
                {/* L'Écran Glassmorphism à l'intérieur du cadre */}
                <Box
                    sx={{
                        backdropFilter: 'blur(16px)',
                        borderRadius: 4,
                        p: { xs: 3, md: 5 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                        color={theme.palette.text.primary}
                        sx={{ fontWeight: 700, mb: 1 }}
                    >
                        Entrez en contact
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        Choisissez le moyen le plus rapide de me joindre.
                    </Typography>

                    {/* Grille des Widgets de Contact */}
                    <Box
                        component={motion.div}
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        sx={{
                            width: '100%',
                            display: 'grid',
                            gap: 2,
                            // 1 colonne sur mobile, 2 sur tablette/desktop
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                            mt: 2
                        }}
                    >
                        {CONTACT_LINKS.map((link, index) => {
                            const LinkIcon = link.icon;
                            return (
                                <motion.div key={index} variants={itemVariants}>
                                    <Button
                                        fullWidth
                                        variant={link.main ? 'contained' : 'outlined'}
                                        color={link.color}
                                        startIcon={<LinkIcon />}
                                        component="a"
                                        href={link.href}
                                        target={link.download ? '_self' : '_blank'}
                                        download={link.download ? true : undefined}
                                        sx={{
                                            py: 2,
                                            // Grosse police pour les boutons principaux
                                            fontSize: link.main ? '1rem' : '0.9rem',
                                            fontWeight: 700,
                                            // Effet de Glassmorphism subtil sur les boutons secondaires
                                            backgroundColor: link.main ? undefined : 'rgba(255, 255, 255, 0.05)',
                                            '&:hover': {
                                                transform: 'scale(1.03)',
                                                transition: 'transform 0.2s',
                                                // Maintenir l'effet Glassmorphism au survol pour l'outlined
                                                backgroundColor: link.main ? undefined : 'rgba(255, 255, 255, 0.1)',
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </Button>
                                </motion.div>
                            );
                        })}
                    </Box>


                </Box>
            </Box>
        </Container>
    )
}

export default contact