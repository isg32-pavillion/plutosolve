
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest communication and transparent processes are at the core of everything we do."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solve complex challenges."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Success comes from working together with our clients as true partners."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "10+ years of experience in digital transformation and business strategy."
    },
    {
      name: "Sarah Kim",
      role: "Technical Director",
      bio: "Expert in full-stack development with a passion for innovative solutions."
    },
    {
      name: "Michael Brown",
      role: "Design Lead",
      bio: "Creative visionary focused on user experience and beautiful interfaces."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-transparent from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                PlutoSolve
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
              We're a passionate team of innovators dedicated to helping businesses thrive in the digital age 
              through cutting-edge solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white/90 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-white/60 mb-6">
                At PlutoSolve, we believe that every business deserves access to world-class technology solutions. 
                Our mission is to bridge the gap between complex technical challenges and practical business outcomes.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/60 mb-6">
                We're not just service providers – we're your strategic partners in growth. From startups to 
                established enterprises, we tailor our approach to meet your unique needs and objectives.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/90">Our Goal</h3>
                  <p className="text-gray-600 dark:text-white/60">Empowering businesses to achieve their full potential</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-400 dark:to-blue-400 rounded-2xl p-8">
              <div className="rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white dark:font-semibold mb-4">Company Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-white">Years in Business</span>
                    <span className="font-semibold">10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-white">Clients</span>
                    <span className="font-semibold">+150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-white">Projects Delivered</span>
                    <span className="font-semibold">+500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-white">Collaborators</span>
                    <span className="font-semibold">50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="backdrop-blur-md dark:bg-opacity-10 bg-white dark:bg-black/10 dark:hover:bg-white/10 border hover:border-purple-300 dark:border-white/20 rounded-xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              The talented individuals behind PlutoSolve's success, bringing diverse expertise and 
              shared passion for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="backdrop-blur-md dark:bg-opacity-10 bg-white dark:bg-black/10 dark:hover:bg-white/10 border hover:border-purple-300 dark:border-white/20 rounded-xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-white/60">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can help your business reach new heights.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
