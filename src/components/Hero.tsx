import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-primary-bg"
    >
      <div className="max-w-6xl w-full">
        {/* Pill Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-start mb-8"
        >
          <a
            href="#works"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs md:text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span>Explore my work</span>
            <ArrowRight size={14} />
          </a>
        </motion.div> */}

        {/* Main Heading - Very Large with Tight Kerning */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter leading-[0.95] mb-8 text-accent-lavender text-center md:text-left"
        >
          Vladimir
          <br />
          Vujasinovic
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-accent-blue leading-relaxed">
            Independent Creator
          </p>
          <p className="text-base md:text-lg lg:text-xl font-light text-white/60 leading-relaxed max-w-2xl">
            Crafting digital experiences through{' '}
            <span className="text-white/90 font-normal">3D Design</span>,{' '}
            <span className="text-white/90 font-normal">Photography</span>, and{' '}
            <span className="text-white/90 font-normal">Motion Graphics</span>. 
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 justify-center md:justify-start"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in touch
          </a>
          <a
            href="#works"
            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-sm md:text-base font-light hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View work
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
