import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Project data type
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

// Placeholder project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Digital Design',
    image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=1000&fit=crop',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=1000&fit=crop',
  },
  {
    id: 4,
    title: 'Project Four',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=1000&fit=crop',
  },
  {
    id: 5,
    title: 'Project Five',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=1000&fit=crop',
  },
  {
    id: 6,
    title: 'Project Six',
    category: 'Digital Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop',
  },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* ============================================
          WORKS SECTION
          Responsive CSS Grid with hover effects
      ============================================ */}
      <section
        id="works"
        className="min-h-screen py-24 px-6 md:px-12 bg-primary-obsidian"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-4 text-accent-lavender"
          >
            Selected Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 mb-16 font-light max-w-2xl"
          >
            A curated collection of projects showcasing design, strategy, and development.
          </motion.p>

          {/* Gallery Grid with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1, // Staggered animation delay
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container with Hover Zoom and Border */}
                <div className="relative overflow-hidden bg-white/5 border border-white/10 aspect-[4/5] rounded-md hover:border-white/20 transition-colors duration-300">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>

                {/* Project Info */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg md:text-xl font-normal tracking-tight text-white group-hover:text-accent-lavender transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 font-light">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          LIGHTBOX (Full-screen Image View)
          Uses Framer Motion's AnimatePresence
      ============================================ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary-bg/98 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-white text-black p-3 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>

            {/* Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-[85vh] object-contain rounded-md border border-white/20"
              />

              {/* Project Info in Lightbox */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent p-6 rounded-b-md">
                <h3 className="text-2xl md:text-3xl font-normal text-accent-lavender tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-base md:text-lg text-white/70 font-light mt-1">
                  {selectedProject.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Works;
