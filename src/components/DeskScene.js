import React, { useState } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Computer from './Computer';
import PaperCV from './PaperCV';
import Phone from './Phone';
import Coffee from './Coffee';
import { AnimatePresence } from 'framer-motion';
import ProjectScreen from './ProjectScreen';

const DeskScene = () => {

    const [isComputerHovered, setIsComputerHovered] = useState(false);

    const handleHoverStart = () => {
        setIsComputerHovered(true);
    };

    const handleHoverEnd = () => {
        setIsComputerHovered(false);
    };

    return (
        <Box
            sx={{
                width: '30%',
                height: '400px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
        >
            <Image
                src="/images/desk-2.svg"
                alt="Bureau interactif"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}

            />


            {/* Ordinateur */}
            <div
                style={{
                    position: 'absolute',
                    top: '16%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
            >
                <Computer />
            </div>

            {/* AnimatePresence pour les icônes contextuelles */}
            <AnimatePresence>
                {isComputerHovered && (
                    <>
                        <ProjectScreen />
                        <PaperCV />
                    </>
                )}
            </AnimatePresence>


            {/* Feuille (CV) */}
            <PaperCV position={{ top: '10%', right: '10%' }} />

            {/* Téléphone (Contact) */}
            <Phone position={{ top: '16%', left: '10%' }} />

            {/* Café */}
            <Coffee position={{ top: '10%', right: '25%' }} />
        </Box>
    );
};

export default DeskScene;