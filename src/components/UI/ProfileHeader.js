import React from 'react';
import { Box, Typography, useTheme, keyframes } from '@mui/material';
import { motion } from 'framer-motion';

// Animation slide/fade
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProfileHeader = () => {
    const theme = useTheme();
    const themeMode = theme.palette.mode;

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{
                mb: 4,
                mt: { xs: 2, md: 5 },
                display: 'inline-block',
                justifyContent: 'center',
                textAlign: 'center',
                background: themeMode === 'light'
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(245,245,247,0.25))'
                    : 'linear-gradient(135deg, rgba(30,32,40,0.4), rgba(45,48,54,0.25))',
                backdropFilter: 'blur(16px)',
                borderRadius: 4,
                px: { xs: 2, md: 4 },
                py: { xs: 2, md: 3 },
                boxShadow: themeMode === 'light'
                    ? '0 10px 30px rgba(0,0,0,0.1)'
                    : '0 10px 30px rgba(0,0,0,0.4)',
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: '0.9rem', md: '1.5rem' },
                    color: theme.palette.text.primary,
                    lineHeight: 1,
                    letterSpacing: '-0.5px',
                    '& span': {
                        display: 'inline-block',
                        marginLeft: 1,
                        animation: 'wave 1.5s infinite',
                    },
                }}
            >
                {themeMode === 'light' ? 'Bonjour' : 'Bonsoir'} ! Moi c’est{' '}
                <Box
                    component="span"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 800,
                        textShadow: `0 0 8px ${theme.palette.primary.main}50`,
                    }}
                >
                    Hanse Roland Parfait
                </Box>{' '}
                <motion.span
                    role="img"
                    aria-label="waving hand"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    style={{ display: 'inline-block', marginLeft: 6 }}
                >
                    👋
                </motion.span>
            </Typography>

            {/* Keyframes CSS pour l’emoji wave */}
            <Box
                component="style"
                sx={{
                    __html: `
            @keyframes wave {
              0% { transform: rotate(0deg); }
              15% { transform: rotate(14deg); }
              30% { transform: rotate(-8deg); }
              45% { transform: rotate(14deg); }
              60% { transform: rotate(-4deg); }
              75% { transform: rotate(10deg); }
              100% { transform: rotate(0deg); }
            }
          `
                }}
            />
        </Box>
    );
};

export default ProfileHeader;
