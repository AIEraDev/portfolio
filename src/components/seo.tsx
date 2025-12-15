import { Helmet } from 'react-helmet-async';

export function SEO() {
    return (
        <Helmet>
            <title>Abdulkabir Musa (AIEraDev) - Full-Stack Developer & AI Solutions Expert</title>
            <meta name="description" content="Abdulkabir Musa (AIEraDev) is an AI Platform Engineer and Full-Stack Developer specializing in context-aware systems, Next.js, and Python. Explore projects bridging ML models with production web apps." />
            <meta name="keywords" content="Abdulkabir Musa, AIEraDev, AI Platform Engineer, Context-Aware AI Systems, MCP, Model Context Protocol, Full-Stack Developer Nigeria, Next.js Expert, Python Developer, React Developer, AI Integration, Machine Learning Engineer, Web Developer Portfolio, Software Engineer Africa" />
            <meta name="author" content="Abdulkabir Musa" />
            <meta name="creator" content="Abdulkabir Musa (AIEraDev)" />
            <meta name="publisher" content="AIEraDev" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content="https://abdulkabirmusa.com" />
            <meta property="og:site_name" content="Abdulkabir Musa Portfolio" />
            <meta property="og:title" content="Abdulkabir Musa - Systems Designer & Full-Stack Developer" />
            <meta property="og:description" content="Systems Designer and Full-Stack Developer specializing in AI-integrated solutions, high-performance web applications, and scalable architecture." />
            <meta property="og:image" content="https://abdulkabirmusa.com/og-image.jpg?v=2" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Abdulkabir Musa - Systems Designer" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@aieradev" />
            <meta name="twitter:creator" content="@aieradev" />
            <meta name="twitter:title" content="Abdulkabir Musa - Systems Designer & Full-Stack Developer" />
            <meta name="twitter:description" content="Systems Designer and Full-Stack Developer specializing in AI-integrated solutions, high-performance web applications, and scalable architecture." />
            <meta name="twitter:image" content="https://abdulkabirmusa.com/og-image.jpg?v=2" />

            {/* Verification */}
            <meta name="google-site-verification" content="your-google-verification-code" />
            <meta name="yandex-verification" content="your-yandex-verification-code" />
            <meta name="msvalidate.01" content="your-yahoo-verification-code" />

            {/* Icons */}
            <link rel="icon" type="image/jpeg" sizes="16x16" href="/og-image.png" />
            <link rel="icon" type="image/jpeg" sizes="32x32" href="/og-image.png" />
            <link rel="icon" type="image/jpeg" sizes="96x96" href="/og-image.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/og-image.png" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3b82f6" />

            {/* Other */}
            <meta name="msapplication-TileColor" content="#3b82f6" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Abdulkabir Musa" />
            <meta name="application-name" content="Abdulkabir Musa Portfolio" />
            <meta name="msapplication-tooltip" content="Abdulkabir Musa - Full-Stack Developer Portfolio" />
            <meta name="msapplication-starturl" content="/" />
            <meta name="msapplication-navbutton-color" content="#3b82f6" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="canonical" href="https://abdulkabirmusa.com" />
        </Helmet>
    );
}
