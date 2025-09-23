import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingLabel = ({ text }) => {

    const labelVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


    return (
        <motion.div

            variants={labelVariants}
            style={{
                position: 'absolute',
                bottom: '-26px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                width: "max-content",


            }}
        >
            <Typography
                align='center'
                variant="caption"
                sx={{
                    padding: 1,
                    color: 'white',
                    fontWeight: 'bold'
                }}
            >
                {text}
            </Typography>
        </motion.div>
    );
};

export default FloatingLabel;