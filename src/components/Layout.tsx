
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import MouseFollower from './MouseFollower';
import { ThemeProvider } from './ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="plutosolve-ui-theme">
      <div className="min-h-screen flex flex-col relative bg-background text-foreground">
        <MouseFollower />
        <Navbar />
        <main className="flex-grow pt-16 relative z-10">
          <AnimatedBackground />
          {children}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
