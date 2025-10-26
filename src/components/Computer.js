// src/components/Computer.js
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';
import { ComputerRounded } from '@mui/icons-material';





const Computer = ({ position, onHover }) => {


    return (
        <Box
            onClick={onHover}
            component={motion.div}
            whileHover="animate"
            initial="initial"

            sx={{
                position: 'absolute',
                cursor: 'pointer',
                ...position,
                width: { xs: '17%', sm: '15%', md: '24%', lg: '19%' },
                height: 'auto',
            }}
        >
            <Box>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Image
                        src="/images/macbookapple.svg"
                        alt="Ordinateur interactif"
                        layout="responsive"
                        width={150}
                        height={120}

                    />
                    <FloatingLabel icon={<ComputerRounded />} text="Mes projects" />
                </motion.div>

            </Box>

        </Box>
    );
};

export default Computer;