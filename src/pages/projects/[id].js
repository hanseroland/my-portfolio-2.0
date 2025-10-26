import React from 'react';
import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { cardData } from '@/data/cardData';
import ProjectHeader from '@/components/UI/ProjectHeader';
import ProjectGallery from '@/components/UI/ProjectGallery';
import ProjectInfo from '@/components/UI/ProjectInfo';
import Head from 'next/head';

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
        <>
            <Head>
                <title>Hanse Roland Parfait - Développeur Web FullStack</title>
                <meta name="description" content=" Développeur Fullstack passionné avec plus de 3 ans d’expérience développement web Fullstack. Je conçois des applications web et mobiles modernes,
                                  performantes et esthétiques" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="googlebot" content="notranslate" />
                <meta name="google" content="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
                <ProjectHeader title={project.title} tag={project.tag} links={project.links} />
                <ProjectGallery images={project.images} />
                <ProjectInfo project={project} />
            </Container>
        </>

    );
};

export default ProjectDetails;