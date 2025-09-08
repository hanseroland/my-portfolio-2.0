import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const WallArtScene = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = (hours % 12) * 30 + minutes * 0.5;
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '15%',
                right: '40%', // Ajuste la position pour un équilibre visuel
                zIndex: 2, // S'assure qu'il est devant le mur
                display: 'flex',
                gap: '20px',
            }}
        >
            {/* Horloge animée */}
            <Box
                sx={{
                    width: '150px',
                    height: '150px',
                    position: 'relative',
                }}
            >
                <Image
                    src="/images/horloge-svg.svg" // Remplace par le chemin de ton fond d'horloge
                    alt="Fond d'horloge"
                    layout="fill"
                />
                {/* Aiguille des heures */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '35%',
                        height: '4px',
                        backgroundColor: 'black',
                        transformOrigin: 'left center',
                        transform: `rotate(${hourRotation}deg)`,
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                />
                {/* Aiguille des minutes */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '45%',
                        height: '3px',
                        backgroundColor: 'black',
                        transformOrigin: 'left center',
                        transform: `rotate(${minuteRotation}deg)`,
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                />
                {/* Aiguille des secondes */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '45%',
                        height: '2px',
                        backgroundColor: 'red',
                        transformOrigin: 'left center',
                        transform: `rotate(${secondRotation}deg)`,
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                />
            </Box>

            {/* Photo à droite */}
            <Box
                sx={{
                    width: '1clea00px',
                    height: '150px',
                    position: 'relative',
                }}
            >
                <Image
                    src="/images/photo.svg" // Remplace par ta photo
                    alt="Photo personnelle"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
        </Box>
    );
};

export default WallArtScene;