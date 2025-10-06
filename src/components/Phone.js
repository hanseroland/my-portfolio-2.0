import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';


const Phone = ({ position }) => {


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
            <Link href="/contact" passHref>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <FloatingLabel text="Me contacter" />
                    <Image
                        src="/images/phone_19675.png"
                        alt="Téléphone - Contact"
                        width={70}
                        height={70}
                    />

                </motion.div>
            </Link>

        </Box>
    );
};

export default Phone;