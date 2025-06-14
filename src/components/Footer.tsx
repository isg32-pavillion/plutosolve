
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                PlutoSolve
              </span>
            </div>
            <p className="text-muted-foreground text-justify mb-6 max-w-md">              
            Social Media Marketing / SEO Optimization / Digital Marketing / Design & Development / Marketing Solutions / Web Development
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={16} />
                <span><a href="mailto:contact@plutosolve.com">contact@plutosolve.com</a></span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <span>+91-8191899099</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Noida, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">About</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Social Media Marketingt</span></li>
              <li><span className="text-muted-foreground">SEO Optimization</span></li>
              <li><span className="text-muted-foreground">Digital Marketing</span></li>
              <li><span className="text-muted-foreground">Design & Development</span></li>
              <li><span className="text-muted-foreground">Marketing Solutions</span></li>
              <li><span className="text-muted-foreground">Web Development</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 PlutoSolve. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
