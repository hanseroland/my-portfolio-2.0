import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const ProfilePhoto = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: { xs: 200, md: 300 },
                height: { xs: 270, md: 370 },
                overflow: 'hidden',
                transform: 'rotate(5deg)'
            }}
        >
            <Image
                src="/images/hrp.png"
                alt="Photo de profil"
                layout="fill"
                objectFit="contain"
                quality={100}
            />
            <Image
                src="/images/NeedleLeftYellow.png"
                alt="Pince à papier"
                width={70}
                height={70}
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    transform: 'rotate(20deg)',
                }}
            />
        </Box>
    );
};

export default ProfilePhoto;