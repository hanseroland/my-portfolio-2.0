import React, { useState } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Computer from './Computer';
import PaperCV from './PaperCV';
import Phone from './Phone';
import Coffee from './Coffee';

const DeskScene = () => {

    const DESK_RATIO = '40%';

    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    sm: '70%',
                    md: '55%',
                    lg: '30%'
                },
                height: { xs: '33%', md: 0 },
                paddingTop: { xs: '40%', md: '20%' },
                position: 'relative',
                mx: 'auto',
                mt: { xs: '60%', md: 5 },


                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                zIndex: 1
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
            <Computer position={{ top: { xs: '3%', md: '0%' }, left: '35%' }} />
            {/* Feuille (CV) */}
            <PaperCV position={{ top: { xs: '5%', md: '10%' }, right: '10%' }} />

            {/* Téléphone (Contact) */}
            <Phone position={{ top: { xs: '10%', md: '16%' }, left: '10%' }} />

            {/* Café */}
            <Coffee position={{ top: { xs: '5%', md: '10%' }, right: '25%' }} />
        </Box>
    );
};

export default DeskScene;