import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const FurnitureScene = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: "20%",
                left: '5%', // Positionné à gauche de l'écran
                width: '300px',
                height: '400px',
                zIndex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                //transform: 'perspective(1000px) rotateY(15deg) scale(0.8)',
                //transformOrigin: 'bottom left',
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
        </Box>
    );
};

export default FurnitureScene;