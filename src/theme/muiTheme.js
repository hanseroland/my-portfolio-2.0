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
            main: "#34c595ff",
            ground: '#f5ebc8ff'
        },
        window: {
            main: "#00000000"
        },
        text: {
            primary: "#1E1E1E",
            secondary: "#555555",
            third: "#184425ff",
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
            main: "#237459ff",
            ground: '#857f6cff'
        },
        background: {
            default: "#0D1117",
            paper: "#1C1F26",
        },
        window: {
            main: "#3b363680"
        },
        text: {
            primary: "#EDEDED",
            secondary: "#A1A1A1",
            third: "#fff",
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
