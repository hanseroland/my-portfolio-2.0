import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';
import { Typography, useTheme } from '@mui/material';


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



    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
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
                        display: { xs: 'none', md: 'flex' },
                        gap: 1,
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                    }}>
                        <Link href="/" passHref>
                            <Typography variant="h6" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Accueil
                            </Typography>
                        </Link>
                    </Box>



                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            onClick={toggleTheme}
                            color="inherit"
                            sx={{
                                backgroundColor: theme.palette.background.main
                            }}
                        >
                            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon sx={{ color: "#fff" }} />}
                        </IconButton>
                    </Box>


                </StyledToolbar>
            </Container>
        </AppBar >
    );
}