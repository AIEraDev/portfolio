import { ArrowLeft, Home, Search, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Display */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Terminal className="w-8 h-8 text-accent" />
            <div className="h-px bg-border flex-1 max-w-16" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Error 404</span>
            <div className="h-px bg-border flex-1 max-w-16" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-accent/20">404</h1>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Page Not Found</h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">The page you're looking for doesn't exist or has been moved to a different location.</p>
        </div>

        {/* Suggestions */}
        <div className="space-y-6">
          <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">What you can do</div>

          <div className="grid gap-4 max-w-md mx-auto">
            <Link to="/" className="group flex items-center gap-3 p-4 rounded-lg border border-border/60 bg-background/50 hover:bg-muted/20 hover:border-accent/30 transition-all duration-200">
              <Home className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <div className="font-medium">Go Home</div>
                <div className="text-sm text-muted-foreground">Return to the main page</div>
              </div>
              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:-translate-x-1 transition-all rotate-180" />
            </Link>

            <a href="/#systems" className="group flex items-center gap-3 p-4 rounded-lg border border-border/60 bg-background/50 hover:bg-muted/20 hover:border-accent/30 transition-all duration-200">
              <Search className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <div className="font-medium">View Systems</div>
                <div className="text-sm text-muted-foreground">Check out my projects</div>
              </div>
              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:-translate-x-1 transition-all rotate-180" />
            </a>

            <a href="/#contact" className="group flex items-center gap-3 p-4 rounded-lg border border-border/60 bg-background/50 hover:bg-muted/20 hover:border-accent/30 transition-all duration-200">
              <Terminal className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <div className="font-medium">Get in Touch</div>
                <div className="text-sm text-muted-foreground">Let's connect</div>
              </div>
              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:-translate-x-1 transition-all rotate-180" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-xs text-muted-foreground/60 font-mono">
          <span>© {new Date().getFullYear()} AIEraDev. Page not found, but the journey continues.</span>
        </div>
      </div>
    </main>
  );
}
