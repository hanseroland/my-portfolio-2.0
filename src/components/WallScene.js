import React from 'react';
import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';







const WallScene = ({ themeMode }) => {

    const theme = useTheme();


    // Position de la fenêtre
    /* const windowPosition = {
         top: '2%',
         right: '8%',
         width: '375px',
         height: '375px',
     };*/

    // Position et dimensions de la fenêtre rendues responsives
    const windowPosition = {
        // Positionnement général (coin supérieur droit)
        top: { xs: '5%', md: '2%' },
        right: { xs: '5%', md: '8%' },

        // Dimensions de la fenêtre : réduites sur mobile, augmentées sur desktop
        width: {
            xs: '250px',
            sm: '300px',
            md: '350px',
            lg: '375px'
        },
        height: {
            xs: '250px',
            sm: '300px',
            md: '350px',
            lg: '375px'
        },
    };



    // Définition des variantes pour l'animation du palmier
    const palmVariants = {
        sway: {
            rotate: [-5, 5, -5],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror"
            }
        }
    };

    // Définition des variantes pour l'animation de l'oiseau
    const birdVariants = {
        sway: {
            rotate: [-2, 2, -2],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror"
            }
        }
    };


    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
            }}
        >
            {/* Conteneur de la fenêtre et de la vue extérieure */}
            <Box
                sx={{
                    position: 'absolute',
                    ...windowPosition,
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background.default,

                }}
            >

                {/* Vues extérieures (Soleil et Lune) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {/* Image de la vue extérieure positionnée en fond */}
                    <Box
                        sx={{
                            position: 'absolute',
                            zIndex: 0,
                            top: '5%',
                            width: '100%',
                            height: '90%',
                        }}
                    >

                        <Image
                            src="/images/nature-2.png"
                            alt="Vue extérieure"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority={true}
                        />


                    </Box>

                    <Box
                        sx={{
                            position: 'absolute',
                            zIndex: 1,
                            top: '2%',
                            width: '100%',
                            height: '350px',
                            backgroundColor: theme.palette.window.main,
                            opacity: 0.2
                        }}
                    />



                    {/* Palmiers animés */}
                    <motion.div
                        variants={palmVariants}
                        animate="sway"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            width: '150px',
                            height: '150px',
                            transformOrigin: 'bottom',
                        }}
                    >
                        <Image
                            src="/images/palm.png"
                            alt="Palmier animé"
                            layout="responsive"
                            width={160}
                            height={150}
                        />
                    </motion.div>
                    {/* Soleil animé */}
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                            opacity: themeMode === 'light' ? 1 : 0,
                            y: themeMode === 'light' ? 0 : 200, // Se déplace vers le bas
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <Image
                            src="/images/sun.png" // Remplace par le chemin de ton image du soleil
                            alt="Soleil"
                            width={100}
                            height={100}
                        />
                    </motion.div>

                    {/* Lune animée */}
                    <motion.div
                        initial={{ opacity: 0, y: 200 }} // Commence en bas et invisible
                        animate={{
                            opacity: themeMode === 'dark' ? 1 : 0,
                            y: themeMode === 'dark' ? 0 : 200, // Se déplace vers le haut
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <Image
                            src="/images/bousmoon.svg"
                            alt="Lune"
                            width={80}
                            height={80}
                        />
                    </motion.div>
                </Box>


                {/* Oiseau éveillé (pour le mode clair) */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: themeMode === 'light' ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '10%',
                        zIndex: 2, // 
                    }}
                >
                    <motion.div
                        variants={birdVariants}
                        animate="sway"
                        style={{
                            transformOrigin: 'bottom',
                        }}
                    >
                        <Image
                            src="/images/awake_adium_bird.png"
                            alt="Oiseau éveillé"
                            width={50}
                            height={50}
                        />
                    </motion.div>

                </motion.div>

                {/* Oiseau endormi (pour le mode sombre) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: themeMode === 'dark' ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '10%',
                        zIndex: 2,
                    }}
                >
                    <motion.div
                        variants={birdVariants}
                        animate="sway"
                        style={{
                            transformOrigin: 'bottom', // L'oiseau pivote depuis son bas
                        }}
                    >
                        <Image
                            src="/images/sleep_adium_bird.png"
                            alt="Oiseau endormi"
                            width={50}
                            height={50}
                        />
                    </motion.div>

                </motion.div>
                {/* Image de la fenêtre au-dessus de la vue extérieure */}
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        top: -9,
                        width: '100%',
                        height: '395px',
                    }}
                >
                    <Image
                        src="/images/fenêtre-en-bois.png"
                        alt='Fenêtre ouverte'
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority={true}

                    />

                </Box>

            </Box>
        </Box>
    );
};

export default WallScene;