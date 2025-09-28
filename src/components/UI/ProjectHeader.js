import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectHeader = ({ title, tag }) => (
    <Box sx={{ mb: 6, mt: 5 }}>
        <Box sx={{ mb: 4 }}>
            <Link href="/" passHref>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <IconButton color="primary">
                        <ArrowBackIcon />
                        <Typography variant="body1" sx={{ ml: 1, fontWeight: 'bold' }}>Retour</Typography>
                    </IconButton>
                </motion.div>
            </Link>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                {tag}
            </Typography>
        </Box>
    </Box>
);

export default ProjectHeader;