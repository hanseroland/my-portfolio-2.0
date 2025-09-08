import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PaperCV = ({ position }) => {
    // Les variantes de Framer Motion pour l'animation du label
    const labelVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

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
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}

                >
                    <Image
                        src="/images/paper-cv.svg"
                        alt="Feuille de papier - CV"
                        width={120}
                        height={150}
                    />
                </motion.div>
                <Box
                    component={motion.div}
                    variants={labelVariants}
                    sx={{
                        position: 'absolute',
                        bottom: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        whiteSpace: 'nowrap',
                    }}
                >
                    CV
                </Box>
            </Link>
        </Box>
    );
};

export default PaperCV;