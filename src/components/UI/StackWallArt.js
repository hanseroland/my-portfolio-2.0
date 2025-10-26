// src/components/StackWallArt.js

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';


const STACK_DATA = [
    { name: 'Next.js', logo: 'N', color: '#16D3A9', tooltip: 'Next.js' },
    { name: 'React', logo: 'R', color: '#61DAFB', tooltip: 'React' },
    { name: 'Node', logo: 'N', color: '#8CC84A', tooltip: 'Node.js' },
    { name: 'Mongo', logo: 'M', color: '#4DB33D', tooltip: 'MongoDB' },
    { name: 'Expo', logo: 'E', color: '#3178C6', tooltip: 'Expo' },
    { name: 'MySQL', logo: 'M', color: '#3178C6', tooltip: 'MySQL' },
];

const StackWallArt = ({ position }) => {
    const theme = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        hover: { scale: 1.1, boxShadow: theme.components.MuiPaper.styleOverrides.root.boxShadow },
    };

    return (
        <Box
            sx={{

                position: 'absolute',
                top: position.top,
                left: position.left,
                width: position.width,
                height: position.height,
                zIndex: 1,
                display: { xs: 'none', md: 'none', lg: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    // Grille 3x3 ou 4x4 (ajuster selon le nombre d'éléments)
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: theme.spacing(1),
                    padding: theme.spacing(2),

                    backgroundColor: theme.palette.background.paper,
                    backdropFilter: theme.components.MuiPaper.styleOverrides.root.backdropFilter,
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.components.MuiPaper.styleOverrides.root.boxShadow,
                    width: '100%',
                    height: '50%',
                }}
            >
                {STACK_DATA.map((stack, index) => (

                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'help',

                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '2px',
                            border: `1px solid ${stack.color}`,
                            color: 'white',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '0.6rem', md: '1rem' },
                                color: stack.color
                            }}
                        >
                            {stack.logo}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {stack.name}
                        </Typography>
                    </motion.div>
                ))}
            </motion.div>
        </Box>
    );
};

export default StackWallArt;