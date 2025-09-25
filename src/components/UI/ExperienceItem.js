import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ExperienceItem = ({ icon, title, company, location, dates }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {/* <Box sx={{ width: 40, height: 40, mr: 2 }}>
                <Image src={icon} alt={`${company} logo`} width={40} height={40} />
            </Box>*/}
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography mr={1} variant="body2" color="text.secondary">
                        {company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {location}
                    </Typography>
                </Box>

            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ minWidth: '120px' }}>
                {dates}
            </Typography>
        </Box>
    );
};

export default ExperienceItem;