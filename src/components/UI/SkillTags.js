import React from 'react';
import { Box, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
    'HTML/CSS',
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'JWT',
    'Git/GitHub',
    'SEO',
    'WordPress',
];

const SkillTags = () => {
    const theme = useTheme();
    const themeMode = theme.palette.mode;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                mb: 4,
            }}
        >
            {skills.map((skill, index) => (
                <Box
                    key={index}
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                    <Chip
                        label={skill}
                        variant="outlined"
                        sx={{
                            borderRadius: '1.5rem',
                            px: 2,
                            py: 0.5,
                            fontWeight: 500,
                            color: themeMode === 'light' ? theme.palette.text.primary : '#fff',
                            borderColor: themeMode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main,
                            background: themeMode === 'light'
                                ? 'rgba(255, 255, 255, 0.4)'
                                : 'rgba(45, 48, 54, 0.4)',
                            backdropFilter: 'blur(8px)',
                            boxShadow: themeMode === 'light'
                                ? '0 4px 12px rgba(0,0,0,0.08)'
                                : '0 4px 12px rgba(0,0,0,0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: themeMode === 'light'
                                    ? theme.palette.primary.main
                                    : theme.palette.secondary.main,
                                color: '#fff',
                            },
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default SkillTags;
