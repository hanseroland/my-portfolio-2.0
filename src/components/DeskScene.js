import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Computer from './Computer';
import PaperCV from './PaperCV';
import Phone from './Phone';
import Coffee from './Coffee';

const DeskScene = () => {


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
                src="/images/desk-2.svg" // Assure-toi d'avoir une image de bureau ici
                alt="Bureau interactif"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true} // Pour un chargement rapide

            />


            {/* Ordinateur */}
            <div style={{ position: 'absolute', top: '16%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Computer />
            </div>
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