
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import MouseFollower from './MouseFollower';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <MouseFollower />
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
