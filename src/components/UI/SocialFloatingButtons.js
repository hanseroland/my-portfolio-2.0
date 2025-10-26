// src/components/SocialFloatingButtons.js

import React from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { motion } from 'framer-motion';

// Définition des liens et icônes
const socialLinks = [
    {
        name: 'GitHub',
        icon: GitHubIcon,
        url: 'VOTRE_LIEN_GITHUB',
        tooltip: 'Voir mon code sur GitHub'
    },
    {
        name: 'LinkedIn',
        icon: LinkedInIcon,
        url: 'VOTRE_LIEN_LINKEDIN',
        tooltip: 'Me contacter sur LinkedIn'
    },
    {
        name: 'CV',
        icon: InsertDriveFileIcon,
        url: 'VOTRE_LIEN_CV',
        tooltip: 'Télécharger mon CV'
    },
];

const SocialFloatingButtons = () => {
    const theme = useTheme();

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
            sx={{
                position: 'fixed',
                right: { xs: 16, md: 30 },
                top: { xs: 'auto', md: '50%' },
                bottom: { xs: 16, md: 'auto' },
                transform: { xs: 'none', md: 'translateY(-50%)' },

                zIndex: 1000,

                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                gap: 1,
                p: { xs: 1, md: 1.5 },

                backgroundColor: theme.palette.background.paper,
                backdropFilter: theme.components.MuiPaper.styleOverrides.root.backdropFilter,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.components.MuiPaper.styleOverrides.root.boxShadow,
            }}
        >
            {socialLinks.map((link) => (
                <Tooltip
                    title={link.tooltip}
                    placement="left"
                    key={link.name}
                    arrow
                >
                    <IconButton
                        href={link.url}
                        target="_blank"
                        aria-label={link.tooltip}
                        sx={{

                            p: { xs: 1, md: 1.5 },
                            color: theme.palette.text.primary,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',

                            '&:hover': {

                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                transform: "translateY(-1px)",
                            }
                        }}
                    >
                        <link.icon />
                    </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
};

export default SocialFloatingButtons;