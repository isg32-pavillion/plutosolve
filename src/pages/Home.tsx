
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Solutions",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Dedicated professionals with years of experience"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      text: "PlutoSolve transformed our business processes. Highly recommended!",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Growth Co.",
      text: "Outstanding service and support. They exceeded our expectations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Innovative Solutions for
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/50 max-w-3xl mx-auto mb-8 animate-fade-in">
              We help businesses grow and succeed with cutting-edge technology solutions, 
              expert consulting, and unparalleled support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-300 dark:text-white/80 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose PlutoSolve?
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/50 max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 backdrop-blur-md dark:bg-opacity-10 bg-white dark:bg-black/10 dark:hover:bg-white/10 border hover:border-purple-300 dark:border-white/20 rounded-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1), inset 1px 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-white">
                  {feature.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 group-hover:via-purple-400/60 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-purple-100">Projects Completed</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-purple-100">Client Satisfaction</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-purple-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/50">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-opacity-10 bg-white dark:border-white/20 p-8 rounded-xl border hover:border-purple-300 dark:hover:bg-black/10 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                style={{
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-white mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white/90">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 group-hover:via-blue-400/60 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/80 mb-8">
            Join hundreds of satisfied clients who have achieved success with PlutoSolve.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
