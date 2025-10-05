import React from 'react';
import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { cardData } from '@/data/cardData';
import ProjectHeader from '@/components/UI/ProjectHeader';
import ProjectGallery from '@/components/UI/ProjectGallery';
import ProjectInfo from '@/components/UI/ProjectInfo';

const ProjectDetails = () => {

    const router = useRouter();
    const { id } = router.query;

    // Trouve le projet correspondant à l'ID dans le tableau
    const project = cardData.find(p => p.id === parseInt(id));


    if (!project) {
        return (
            <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
                <Typography variant="h5" align="center">Projet non trouvé...</Typography>
            </Container>
        );
    }

    return (

        <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
            <ProjectHeader title={project.title} tag={project.tag} links={project.links} />
            <ProjectGallery images={project.images} />
            <ProjectInfo project={project} />
        </Container>
    );
};

export default ProjectDetails;