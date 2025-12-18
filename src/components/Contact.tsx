import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-12 bg-primary-obsidian"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-8 text-accent-lavender"
        >
          Let's Work
          <br />
          Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg font-light text-white/60 mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href="mailto:vlada.vujasinovic@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-base md:text-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Get in touch
            <ArrowUpRight size={20} />
          </a>
        </motion.div>

        {/* Email Link */}
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="mailto:vlada.vujasinovic@gmail.com"
          className="inline-block text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-accent-blue hover:text-white transition-colors mb-16"
        >
          vlada.vujasinovic@gmail.com
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          <a
            href="https://www.linkedin.com/in/vladimir-vujasinovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/foootkam/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </a>

          <a
            href="mailto:vlada.vujasinovic@gmail.com"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/10"
        >
          <p className="text-sm font-light text-white/40">
            © {new Date().getFullYear()} Vladimir Vujasinovic. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
