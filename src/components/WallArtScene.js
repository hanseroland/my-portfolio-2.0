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

    return (
        <Box
            component={motion.div}
            whileHover="visible"
            initial="hidden"
            sx={{
                position: 'absolute',
                top: '15%',
                right: '40%',
                zIndex: 2,
                display: 'flex',
                gap: '20px',
            }}
        >

            <Link href="#" passHref>
                <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    sx={{
                        width: '160px',
                        height: '250px',
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
                    width: '150px',
                    height: '150px',
                    position: 'relative',
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


        </Box>
    );
};

export default WallArtScene;