import React from 'react';
import { Box } from '@mui/material';
import ExperienceItem from './ExperienceItem';

const experiences = [
    {
        icon: '/images/intense-logo.png',
        title: 'Freelance | Développeur Full Stack',
        company: 'Nana Head Spa',
        location: '- France',
        dates: 'Avr 2025 - Sept 2025',
    },
    {
        icon: '/images/taager-logo.png',
        title: 'Freelance | Intégrateur WordPress',
        company: 'Shine Skin Bar',
        location: '- Dakar',
        dates: 'Mars 2025 - Août 2025',
    },

    {
        icon: '/images/taager-logo.png',
        title: 'Reférenceur SEO',
        company: 'Futur Digital',
        location: '- Dakar',
        dates: 'Nov 2023 - Aujourd\'hui',
    },
    {
        icon: '/images/taager-logo.png',
        title: 'Tech Lead & Développeur Full Stack',
        company: 'Cabinet Carrée',
        location: '- Dakar',
        dates: 'Dec 2021 - Août 2023',
    },
    {
        icon: '/images/taager-logo.png',
        title: 'Stage | Développeur Java',
        company: 'Union Gabonaise de Banque (UGB)',
        location: '- Libreville',
        dates: 'Avril 2018 - Spet 2018',
    },
];

const ExperienceList = () => {
    return (
        <Box>
            {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
            ))}
        </Box>
    );
};

export default ExperienceList;