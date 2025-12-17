import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme-provider';
import Home from '@/pages/Home';
import Resume from '@/pages/Resume';
import { Toaster } from "@/components/ui/sonner"
import { SEO } from '@/components/seo';
import { StructuredData } from '@/components/structured-data';

export default function App() {
    return (
        <HelmetProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <SEO />
                <StructuredData />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                    <Toaster />
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}
