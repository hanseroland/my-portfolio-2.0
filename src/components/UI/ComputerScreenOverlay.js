// src/components/ComputerScreenOverlay.js

import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const MON_NOM = "NGUEMA NTOUGOU Hanse Roland Parfait";
const MON_POSTE = "Développeur Web FullStack";

const ComputerScreenOverlay = ({ isVisible, onClose }) => {
    const theme = useTheme();

    const screenBorderRadius = { xs: 16, sm: 24, md: 36 };

    // Variantes d'animation pour l'Overlay (Expansion)
    const overlayVariants = {
        hidden: {
            scale: 0.1,
            opacity: 0,
            borderRadius: screenBorderRadius.md,
            transition: { duration: 0.2 }
        },
        visible: {
            scale: 1,
            opacity: 1,
            borderRadius: screenBorderRadius,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.1
            }
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            borderRadius: screenBorderRadius.md,
            transition: { duration: 0.3 }
        }
    };

    // Variantes d'animation pour le Contenu (Texte et CTA)
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.6
            }
        }
    };

    // Style de l'Overlay (Plein écran)
    const overlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.background.default.replace('0.9)', '0.98)') // 98% de l'arrière-plan clair
            : theme.palette.background.default.replace('0.9)', '0.98)'), // 98% de l'arrière-plan sombre

        overflow: 'hidden',
        pointerEvents: 'auto',
        cursor: 'default',
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <Box
                    component={motion.div}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    sx={overlayStyles}
                    onClick={onClose}
                >
                    <Box
                        component={motion.div}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        sx={{
                            textAlign: 'center',
                            color: theme.palette.text.primary,
                            pointerEvents: 'auto',
                            cursor: 'default',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Mon Nom */}
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 1,
                                fontSize: { xs: '2rem', md: '4rem' },
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                            }}
                        >
                            {MON_NOM}
                        </Typography>

                        {/* Mon Poste */}
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 6,
                                fontSize: { xs: '1rem', md: '1.5rem' },
                                fontWeight: 400,
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {MON_POSTE}
                        </Typography>

                        {/* Call to Action */}
                        <Link href="/projects" passHref style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    mt: 2,
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.main,
                                    }
                                }}
                                onClick={onClose}
                            >
                                VOIR MES PROJETS
                            </Button>
                        </Link>

                        {/* Bouton de Fermeture */}
                        <Button
                            onClick={onClose}
                            variant="text"
                            sx={{

                                color: theme.palette.text.secondary,
                                mt: 4,
                                display: 'block',
                                mx: 'auto',
                                pointerEvents: 'auto',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                }
                            }}
                        >
                            <span style={{ textDecoration: 'none' }}>Retour au bureau</span>
                        </Button>

                    </Box>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default ComputerScreenOverlay;