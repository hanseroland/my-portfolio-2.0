import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import { InsertDriveFileRounded } from '@mui/icons-material';


const MotionBox = motion(Box);

const PaperCV = ({ position }) => {

    return (
        <Box
            component={motion.div}
            whileHover="visible"
            initial="visible"
            sx={{
                position: 'absolute',
                cursor: 'pointer',
                ...position,
                width: { xs: '9%', sm: '9%', md: '12%', lg: '10%' },
                height: 'auto',


            }}
        >
            <Link href="https://drive.google.com/file/d/1ErZE8__O1e5dJtLLfvwEj8ivP5x_KckZ/view?usp=drive_link" target="_blank" passHref>
                <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Image
                        src="/images/folder_cv.png"
                        alt="Feuille de papier - CV"
                        layout="responsive"
                        width={50}
                        height={70}
                    />
                    <FloatingLabel icon={<InsertDriveFileRounded />} text="Mon CV" />
                </MotionBox>

            </Link>
        </Box>
    );
};

export default PaperCV;