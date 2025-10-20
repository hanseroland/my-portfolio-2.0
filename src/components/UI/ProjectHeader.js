import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GitHub, OpenInBrowser } from '@mui/icons-material';

const ProjectHeader = ({ title, tag, links }) => (
    <Box sx={{ mb: 6, mt: 5 }}>
        <Box
            sx={{
                mb: 4,
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-start', lg: 'flex-start' },
            }}
        >
            <Link href="/projects" passHref>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Button color="primary" startIcon={<ArrowBackIcon />} sx={{ textTransform: 'none' }}>
                        Retour aux projets
                    </Button>
                </motion.div>
            </Link>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h2" component="h1" sx={{ fontSize: { xs: 20, sm: 25 }, fontWeight: 'bold', mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ fontSize: { xs: 15, sm: 20 } }}>
                {tag}
            </Typography>
            <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                flexDirection: { xs: 'row', sm: 'row' }
            }}
            >
                {
                    links?.demo && (
                        <Link href={links.demo} passHref target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="text"
                                color="primary"
                                endIcon={<OpenInBrowser />}
                                sx={{
                                    width: { xs: '100px', sm: '200px' },
                                    textTransform: 'none',
                                    fontSize: { xs: 10, sm: 16 }
                                }}
                            >
                                Live
                            </Button>
                        </Link>
                    )
                }
                {
                    links?.frontend && (
                        <Link href={links?.frontend} passHref target="_blank" rel="noopener noreferrer">

                            <Button
                                variant="text"
                                color="primary"
                                endIcon={<GitHub />}
                                sx={{
                                    width: { xs: '100px', sm: '200px' },
                                    textTransform: 'none',
                                    fontSize: { xs: 10, sm: 16 }
                                }}
                            >
                                frontend
                            </Button>

                        </Link>
                    )
                }
                {
                    links?.backend && (
                        <Link href={links?.backend} passHref target="_blank" rel="noopener noreferrer">

                            <Button
                                variant="text"
                                color="primary"
                                endIcon={<GitHub />}
                                sx={{
                                    width: { xs: '100px', sm: '200px' },
                                    textTransform: 'none',
                                    fontSize: { xs: 10, sm: 16 }
                                }}
                            >
                                backend
                            </Button>

                        </Link>
                    )
                }

                {
                    links?.mobile && (
                        <Link href={links?.mobile} passHref target="_blank" rel="noopener noreferrer">

                            <Button
                                variant="text"
                                color="primary"
                                endIcon={<GitHub />}
                                sx={{
                                    width: { xs: '100px', sm: '200px' },
                                    textTransform: 'none',
                                    fontSize: { xs: 10, sm: 16 }
                                }}
                            >
                                app mobile
                            </Button>

                        </Link>
                    )
                }

                {
                    links?.code && (
                        <Link href={links?.code} passHref target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button color="primary" endIcon={<GitHub />}
                                    sx={{
                                        width: { xs: '100px', sm: '200px' },
                                        textTransform: 'none',
                                        fontSize: { xs: 10, sm: 16 }
                                    }}
                                >
                                    github
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