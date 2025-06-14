
import { Target, Heart, Lightbulb, Users } from 'lucide-react';
import sapanpfp from "../assets/sapan.png";
import rahulpfp from "../assets/Rahul.jpeg";
import surajpfp from "../assets/suraj.jpg";

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
      pfp: rahulpfp,
      name: "Rahul Kushwah",
      role: "Founder & CEO",
      job: "Management and Marketing",
      bio: "8+ years of experience in Marketing and management, leading Plutosolve with vision and innovation."
    },
    {
      pfp: surajpfp,
      name: "Suraj Kushwaha",
      role: "Co-Founder & CTO",
      job: "Management",
      bio: "Experience Tech Professional and Youtuber leading Tech Department."
    },
    {
      pfp: sapanpfp,
      name: "Sapan Gajjar",
      role: "Web Developer",
      job: "Tech",
      bio: "Managing Website Development Projects"
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
                Plutosolve
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
              Plutosolve is a digital marketing and web development agency dedicated to helping small and medium-sized businesses thrive. Whether you're building your brand from scratch, need a custom website, want to boost your SEO, or manage social media and ad campaigns, we've got you covered.
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
                 Our mission is to deliver results that truly offer value for your investment. At Plutosolve, you'll experience creative solutions that drive real, measurable growth. We are a team of passionate professionals dedicated to delivering exceptional services to our clients. 
              </p>
              <p className="text-lg text-gray-600 dark:text-white/60 mb-6">
                 With years of expertise and a commitment to innovation, we strive to bring your visions to life. Our approach is customer-centric, ensuring every project meets your expectations and beyond. 
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
    
    {/* Our Story Section */}
    <section className="py-20 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white/90 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/60 max-w-6xl mx-auto">
              Plutosolve was founded by two brothers—Rahul Kushwah, a seasoned marketer, and Suraj Kushwah, a full-stack developer, DevOps engineer, and YouTuber. What began as a freelance project quickly grew into a full-scale agency, backed by industry experts and a diverse portfolio. Since our humble beginnings in 2020, we've completed three successful years, worked with 10+ happy clients, and grown a dedicated team of professionals and advisors.
            </p>
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
                <div className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <img src={member.pfp} alt="Photo" style={{borderRadius: "200px"}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-white/30">
                  {member.job}
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
