import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import FloatingLabel from './FloatingLabel';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);


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

    // Définition des dimensions et du positionnement responsifs pour le conteneur principal
    const mainContainerStyles = {
        position: 'absolute',
        // Positionnement (ajusté pour être plus centré sur mobile, puis décalé sur desktop)
        top: { xs: '15%', md: '15%' },
        right: { xs: '50%', md: '40%' },
        transform: { xs: 'translateX(50%)', md: 'none' }, // Centre le groupe sur mobile

        zIndex: 2,
        display: 'flex',
        // Disposition en colonne sur mobile, en ligne sur desktop
        flexDirection: { xs: 'row', md: 'row' },
        gap: { xs: '20px', md: '20px' }, // Espacement vertical sur mobile
    };

    // Définition des tailles des cadres (Photo de profil)
    const photoFrameDimensions = {
        width: { xs: '120px', sm: '140px', md: '160px' },
        height: { xs: '180px', sm: '220px', md: '250px' },
    };

    // Définition des tailles de l'Horloge
    const clockDimensions = {
        width: { xs: '100px', sm: '120px', md: '150px' },
        height: { xs: '100px', sm: '120px', md: '150px' },
    };

    // Définition des tailles du Cadre Décoratif
    const decoFrameDimensions = {
        width: { xs: '150px', sm: '180px', md: '220px' },
        height: { xs: '180px', sm: '230px', md: '270px' },
    };

    return (
        <Box
            component={motion.div}
            whileHover="visible"
            initial="hidden"
            sx={mainContainerStyles}
        >

            <Link href="/about" passHref>
                <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    sx={{
                        ...photoFrameDimensions,
                        position: 'relative',
                        backgroundColor: '#ccc',

                    }}
                >
                    <Image
                        src="/images/hrp.png"
                        alt="Photo personnelle"
                        layout="fill"
                        objectFit="cover"
                    />
                    <FloatingLabel text="A propos de moi" />
                </MotionBox>
            </Link>

            {/* Horloge animée */}
            <Box
                sx={{
                    ...clockDimensions,
                    position: 'relative',
                    mt: { xs: '60px', md: 0 },
                }}
            >
                <Image
                    src="/images/horloge-svg.svg"
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
            {/* Poste*/}
            <MotionBox
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
                sx={{
                    ...decoFrameDimensions,
                    position: 'relative',
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <Image
                    src="/images/nnhrp.png"
                    alt="Photo personnelle"
                    layout="fill"
                    objectFit="cover"
                />
            </MotionBox>
        </Box>
    );
};

export default WallArtScene;