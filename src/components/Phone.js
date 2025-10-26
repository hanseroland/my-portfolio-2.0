import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import { Call } from '@mui/icons-material';


const Phone = ({ position }) => {


    return (
        <Box
            component={motion.div}
            whileHover="visible"
            initial="visible"
            sx={{
                position: 'absolute',
                cursor: 'pointer',
                ...position,
                width: { xs: '9%', sm: '7%', md: '10%', lg: '10%' },
                height: 'auto',


            }}
        >
            <Link href="/contact" passHref>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <FloatingLabel icon={<Call fontSize="small" />} text="Contact" />
                    <Image
                        src="/images/phone_19675.png"
                        alt="Téléphone - Contact"
                        layout="responsive"
                        width={70}
                        height={70}
                    />

                </motion.div>
            </Link>

        </Box>
    );
};

export default Phone;