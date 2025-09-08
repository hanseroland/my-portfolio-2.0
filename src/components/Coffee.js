import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Steam from './Steam';

const Coffee = ({ position }) => {




    return (
        <Box
            sx={{
                position: 'absolute',
                cursor: 'pointer',
                ...position,
                perspective: '1000px',
            }}
        >
            <Steam />
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
            >
                <Image
                    src="/images/cafe.svg" // Remplace par le chemin de ton image de téléphone
                    alt="Café"
                    width={70} // Ajuste la taille
                    height={70} // Ajuste la taille
                />
            </motion.div>
            {/*<Box
                component={motion.div}
                whileHover="visible"
                initial="hidden"
                //variants={labelVariants}
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
                Café
            </Box>*/}


        </Box>
    );
};

export default Coffee;