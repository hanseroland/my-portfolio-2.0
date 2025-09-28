import React from 'react';
import { Box, Typography, Grid, Chip, useTheme } from '@mui/material';

const ProjectInfo = ({ project }) => {

    const theme = useTheme();
    const themeMode = theme.palette.mode;

    const renderContent = (data) => {
        if (!data) return null;
        if (Array.isArray(data)) {
            return (
                <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                    {data.map((item, index) => (
                        <Typography key={index} component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                            {typeof item === 'object' && item.fonctionnalite ? item.fonctionnalite : item}
                        </Typography>
                    ))}
                </Box>
            );
        }
        return (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                {data}
            </Typography>
        );
    };

    return (
        <Box sx={{ mt: 8 }}>
            <Grid container spacing={5}>
                {/* Colonne de gauche (Récit) */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Contexte</Typography>
                    {renderContent(project.context || project.contexte || project.description)}

                    <Typography variant="h4" sx={{ mb: 2 }}>Objectif</Typography>
                    {renderContent(project.objective)}

                    <Typography variant="h4" sx={{ mb: 2 }}>Mon rôle</Typography>
                    {renderContent(project.role)}

                    <Typography variant="h4" sx={{ mb: 2 }}>Résultat & Impact</Typography>
                    {renderContent(project.impact || project.result)}
                </Grid>

                {/* Colonne de droite (Technique) */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Fonctionnalités clés</Typography>
                    {renderContent(project.mainFeatures || project.fonctionnalités)}

                    <Typography variant="h4" sx={{ mb: 2 }}>Défis & Solutions</Typography>
                    {renderContent(project.challengesAndSolutions)}

                    <Typography variant="h4" sx={{ mb: 2 }}>Technologies</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.techStack?.map((tech, index) => (
                            <Chip
                                key={index}
                                label={tech}
                                color="primary"
                                variant="outlined"
                                sx={{
                                    borderRadius: '1.5rem',
                                    px: 2,
                                    py: 0.5,
                                    fontWeight: 500,
                                    color: themeMode === 'light' ? theme.palette.text.primary : '#fff',
                                    borderColor: themeMode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main,
                                    background: themeMode === 'light'
                                        ? 'rgba(255, 255, 255, 0.4)'
                                        : 'rgba(45, 48, 54, 0.4)',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: themeMode === 'light'
                                        ? '0 4px 12px rgba(0,0,0,0.08)'
                                        : '0 4px 12px rgba(0,0,0,0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: themeMode === 'light'
                                            ? theme.palette.primary.main
                                            : theme.palette.secondary.main,
                                        color: '#fff',
                                    },
                                }}
                            />
                        ))}
                        {project.stack?.map((tech, index) => (
                            <Chip key={index} label={tech} color="primary" variant="outlined" />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectInfo;