import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Coffee = ({ position }) => {
    const labelVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                cursor: 'pointer',
                ...position,
                perspective: '1000px',
            }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
            >
                <Image
                    src="/images/cafe.svg" // Remplace par le chemin de ton image de téléphone
                    alt="Café"
                    width={70} // Ajuste la taille
                    height={70} // Ajuste la taille
                />
            </motion.div>


        </Box>
    );
};

export default Coffee;