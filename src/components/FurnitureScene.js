import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FurnitureScene = ({ themeMode }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: "20%",
                left: '5%',
                width: '300px',
                height: '400px',
                zIndex: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'flex-end',
            }}

        >

            {/* table */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    bottom: 0,
                    left: '50%',
                    width: '100%',
                    zIndex: 3,
                }}
            >
                <Image
                    src="/images/table-ronde.webp"
                    alt="Table"
                    width={350}
                    height={250}
                />
            </Box>
            {/* Fauteuil */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    bottom: 0,
                    left: 50,
                    width: '100%',
                    zIndex: 2,
                }}
            >
                <Image
                    src="/images/sofa.webp"
                    alt="Fauteuil"
                    width={550}
                    height={450}
                />
            </Box>

            {/* Lampe */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 28,
                    left: 0,
                    width: '100px',
                    zIndex: 1,
                }}
            >
                <Image
                    src="/images/lamp.png"
                    alt="Lampe de table"
                    width={240}
                    height={400}
                />
            </Box>
            {/* Lumière de la lampe */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 5 }}
                animate={{
                    opacity: themeMode === 'dark' ? 1 : 0,
                    y: themeMode === 'dark' ? 0 : 5,
                }}
                transition={{ duration: 0.8 }}
                sx={{
                    position: 'absolute',
                    top: -50,
                    left: 0,
                    width: '100px',
                    zIndex: 1,
                }}
            >
                <Image
                    src="/images/lumiere.webp"
                    alt="Lumière de la lampe"
                    width={240}
                    height={200}
                />

            </Box>
        </Box>
    );
};

export default FurnitureScene;