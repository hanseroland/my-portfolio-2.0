import React, { useState } from 'react';
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
                src="/images/desk-2.svg"
                alt="Bureau interactif"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}

            />

            {/* Ordinateur */}
            <Computer position={{ top: '1%', left: '35%' }} />
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