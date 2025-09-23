// src/components/Computer.js
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';

const Computer = ({ position }) => {



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
            <Link href="/projects" passHref>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Image
                        src="/images/mac.svg"
                        alt="Ordinateur interactif"
                        width={150}
                        height={120}

                    />
                    <FloatingLabel text="Mes projects" />
                </motion.div>

            </Link>

        </Box>
    );
};

export default Computer;