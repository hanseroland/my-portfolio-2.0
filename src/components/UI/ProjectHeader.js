import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GitHub, OpenInBrowser } from '@mui/icons-material';

const ProjectHeader = ({ title, tag, links }) => (
    <Box sx={{ mb: 6, mt: 5 }}>
        <Box sx={{ mb: 4 }}>
            <Link href="/projects" passHref>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Button color="primary" startIcon={<ArrowBackIcon />} sx={{ textTransform: 'none' }}>
                        Retour aux projets
                    </Button>
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
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                {
                    links?.demo && (
                        <Link href={links.demo} passHref target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button color="primary" endIcon={<OpenInBrowser />} sx={{ textTransform: 'none' }}>
                                    Live
                                </Button>
                            </motion.div>
                        </Link>
                    )
                }
                {
                    links?.github && (
                        <Link href={links?.github} passHref target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button color="primary" endIcon={<GitHub />} sx={{ textTransform: 'none' }}>
                                    Code
                                </Button>
                            </motion.div>
                        </Link>
                    )
                }


            </Box>
        </Box>
    </Box>
);

export default ProjectHeader;