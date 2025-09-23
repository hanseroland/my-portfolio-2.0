import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';


const MotionBox = motion(Box);

const PaperCV = ({ position }) => {

    return (
        <Box
            component={motion.div}
            whileHover="visible"
            initial="hidden"
            sx={{
                position: 'absolute',
                cursor: 'pointer',
                ...position,


            }}
        >
            <Link href="#" passHref>
                <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Image
                        src="/images/folder_cv.png"
                        alt="Feuille de papier - CV"
                        width={50}
                        height={70}
                    />
                    <FloatingLabel text="Mon CV" />
                </MotionBox>

            </Link>
        </Box>
    );
};

export default PaperCV;