import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Link from 'next/link';
import { Typography, useTheme } from '@mui/material';
import { Coffee } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    padding: '8px 12px',
}));

export default function Navbar({ themeMode, setThemeMode }) {
    const theme = useTheme();

    // États pour le son
    const [isAudioOn, setIsAudioOn] = React.useState(true);
    const audioRef = React.useRef(null);

    const sounds = {
        light: '/sound/AMBBird_Reveil.mp3',
        dark: '/sound/ANMLInsc_Insecte.mp3'
    };

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };


    React.useEffect(() => {
        // Création de l'instance Audio si elle n'existe pas
        if (!audioRef.current) {
            audioRef.current = new Audio(sounds[themeMode]);
            audioRef.current.loop = true;
        }

        // Mise à jour de la source quand le thème change
        audioRef.current.src = sounds[themeMode];
        audioRef.current.load();

        if (isAudioOn) {
            // Le play() peut échouer si pas d'interaction utilisateur préalable
            audioRef.current.play().catch(err => console.log("Autoplay bloqué par le navigateur"));
        }

        return () => {
            if (audioRef.current) audioRef.current.pause();
        };
    }, [themeMode]);

    // oggle ON/OFF manuel
    const toggleAudio = () => {
        if (isAudioOn) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsAudioOn(!isAudioOn);
    };


    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundColor: 'transparent',
                backdropFilter: 'none !important',
                WebkitBackdropFilter: 'none !important',
                mt: 'calc(var(--template-frame-height, 0px) + 8px)',
            }}
        >
            <Container maxWidth="fluid">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{
                        display: { xs: 'flex', md: 'flex' },
                        gap: 1,
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                    }}>
                        <Link href="/" passHref>
                            <Typography color='text.primary' variant="h6" component="h1">
                                <Coffee fontSize="large" sx={{ verticalAlign: 'middle', mr: 1 }} />
                            </Typography>
                        </Link>
                    </Box>



                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        {/* Bouton Son */}
                        <IconButton onClick={toggleAudio} color="inherit" sx={{ color: theme.palette.text.primary }}>
                            {isAudioOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
                        </IconButton>

                        <IconButton onClick={toggleTheme} color={theme.palette.text.primary} >
                            {themeMode === 'light' ?
                                <Brightness4Icon color={theme.palette.text.primary} />
                                :
                                <Brightness7Icon color={theme.palette.text.primary} />
                            }
                        </IconButton>
                    </Box>


                </StyledToolbar>
            </Container>
        </AppBar >
    );
}