import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const steamVariants = {
    initial: {
        opacity: 0,
        y: 0,
    },
    animate: {
        opacity: [0.3, 0.5, 0],
        y: -50,
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
        },
    },
};

const Steam = () => {
    const particles = Array.from({ length: 5 }, (_, i) => i);

    return (
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: -25, left: 0, }}>
            {particles.map((particle) => (
                <motion.div
                    key={particle}
                    variants={steamVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        left: `${50 + (Math.random() - 0.5) * 40}%`,
                        width: '8px',
                        height: '30px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '50%',
                    }}
                    transition={{ ...steamVariants.animate.transition, delay: particle * 0.4 }}
                />
            ))}
        </Box>
    );
};

export default Steam;