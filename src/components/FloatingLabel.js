import React from 'react';
import { Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingLabel = ({ text, icon }) => {

    const theme = useTheme();

    const labelVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


    return (
        <motion.div

            variants={labelVariants}
            style={{
                position: 'absolute',
                bottom: '-30px',
                left: '6%',
                width: "max-content",


            }}
        >
            <Chip
                icon={icon}
                label={text}
                variant="filled"
                size="small"
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    fontSize: { xs: '0.7rem', md: '0.85rem' },
                    display: 'flex',
                    alignItems: 'center',
                    backdropFilter: theme.components.MuiPaper.styleOverrides.root.backdropFilter,
                    color: theme.palette.text.primary,


                    '& .MuiSvgIcon-root': {
                        mr: 0.5,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                    }
                }}
            />
        </motion.div>
    );
};

export default FloatingLabel;