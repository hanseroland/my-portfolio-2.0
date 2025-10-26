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
                width: { xs: '8%', sm: '8%', md: '12%', lg: '10%' },
                height: 'auto',
            }}
        >
            <Steam />
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
            >
                <Image
                    src="/images/cafe.svg"
                    alt="Café"
                    layout="responsive"
                    width={70}
                    height={70}
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