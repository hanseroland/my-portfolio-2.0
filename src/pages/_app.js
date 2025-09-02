import "@/styles/globals.css";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getAppTheme } from "@/theme/muiTheme";


// Typographie Poppins
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Styles globaux
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import WebLayout from "@/components/Layout/WebLayout";


export default function App({ Component, pageProps }) {


  const router = useRouter();

  const [mode, setMode] = useState("light"); // 👈 switcher light/dark

  return (
    <ThemeProvider theme={getAppTheme(mode)}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WebLayout themeMode={mode} setThemeMode={setMode}>
            <Component {...pageProps} themeMode={mode} />
          </WebLayout>

        </motion.div>

      </AnimatePresence>


    </ThemeProvider>

  );
}
