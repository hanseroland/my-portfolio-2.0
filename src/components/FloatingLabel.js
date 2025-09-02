import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingLabel = ({ text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                y: { repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" },
                opacity: { duration: 0.5, delay: 0.2 }
            }}
            style={{
                position: 'absolute',
                bottom: '-25px', // Ajuste la position par rapport au parent
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                {text}
            </Typography>
        </motion.div>
    );
};

export default FloatingLabel;