// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

const palette = {
    light: {
        primary: {
            main: "#1A2E40", // bleu nuit élégant
        },
        secondary: {
            main: "#4FD1C5", // turquoise moderne
        },
        background: {
            default: "#F5F7FA", // gris clair / blanc cassé
            paper: "#FFFFFF",
        },
        wall: {
            main: "#fef8e3",
            ground: '#f5ebc8ff'
        },
        text: {
            primary: "#1E1E1E",
            secondary: "#555555",
        },
    },
    dark: {
        primary: {
            main: "#4FD1C5", // turquoise utilisé en accent
        },
        secondary: {
            main: "#1A2E40", // bleu nuit
        },
        wall: {
            main: "#2e3e5c",
            ground: '#2b365b'
        },
        background: {
            default: "#0D1117", // fond sombre (GitHub-like)
            paper: "#1C1F26",
        },
        text: {
            primary: "#EDEDED",
            secondary: "#A1A1A1",
        },
    },
};

export const getAppTheme = (mode = "light") =>
    createTheme({
        palette: {
            mode,
            ...palette[mode],
        },
        typography: {
            fontFamily: "Poppins, sans-serif",
            h1: { fontWeight: 700, fontSize: "2.5rem" },
            h2: { fontWeight: 600, fontSize: "2rem" },
            body1: { fontSize: "1rem", lineHeight: 1.6 },
        },
        shape: {
            borderRadius: 20,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: "2rem",
                        textTransform: "none",
                        padding: "0.6rem 1.5rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: "2rem",
                        padding: "1rem",
                    },
                },
            },
        },
    });
