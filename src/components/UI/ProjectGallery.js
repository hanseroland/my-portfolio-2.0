import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Slider from "react-slick";


const ProjectGallery = ({ images }) => {
    // S'assure qu'il y a au moins 3 images pour l'affichage
    if (!images || images.length < 1) {
        console.error("Le composant ProjectGallery nécessite au moins 3 images.");
        return null;
    }

    const [mobileImg, ...desktopImgs] = images;


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 3, md: 5 },
                mb: 6,
            }}
        >
            {/* Image mobile */}
            <Box
                sx={{
                    width: { xs: '80%', md: '25%' },
                    paddingTop: { xs: '150%', md: '43%' },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Image
                    src={mobileImg.src}
                    alt={mobileImg.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
            </Box>

            {/* Carrousel des images desktop */}
            <Box
                sx={{
                    flexGrow: 1,
                    padding: 1,
                    width: { xs: '100%', md: '75%' },
                }}
            >
                <Slider {...settings}>
                    {desktopImgs.map((img, index) => (
                        <Box key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '56.25%',
                                    overflow: 'hidden',

                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={true}
                                />
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default ProjectGallery;