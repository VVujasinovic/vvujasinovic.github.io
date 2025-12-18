import { motion } from 'framer-motion';

const services = [
  '3D Modeling',
  'Operations & Project Leadership',
  'Photography & Visual Content',
  'Creative Direction & Strategy',
  'Motion Graphics & Post-production',
  'eLearning & Instructional Design',
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 md:px-12 bg-primary-bg"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-8 text-accent-lavender">
              About
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light text-white/70 leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Vladimir Vujasinović</span>, a 3D Generalist and Creative Lead dedicated to crafting meaningful digital experiences.
              </p>
              <p>
                With a <span className="text-white">Bachelor with Honours in Computer Graphic Engineering</span>, my work sits at the intersection of technical production and artistic storytelling. I specialize in 3D modeling, motion design, and producing high-end promotional content.
              </p>
              <p>
                Based in <span className="text-white">Novi Sad, Serbia</span>, working globally.
              </p>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tighter mb-8 text-accent-blue">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-base md:text-lg font-light text-white/60 border-b border-white/10 pb-3 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
