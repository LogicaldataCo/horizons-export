
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const projects = [
  {
    id: 1,
    title: 'Modern Apartment Renovation',
    category: 'full',
    description: 'Complete renovation of a 1,200 sq ft apartment with modern finishes and open concept design.',
    location: 'New York, NY',
    completionDate: 'January 2023',
  },
  {
    id: 2,
    title: 'Luxury Kitchen Remodel',
    category: 'kitchen',
    description: 'High-end kitchen renovation featuring custom cabinetry, marble countertops, and professional-grade appliances.',
    location: 'Boston, MA',
    completionDate: 'March 2023',
  },
  {
    id: 3,
    title: 'Contemporary Bathroom Redesign',
    category: 'bathroom',
    description: 'Complete bathroom transformation with walk-in shower, freestanding tub, and custom vanity.',
    location: 'Chicago, IL',
    completionDate: 'May 2023',
  },
  {
    id: 4,
    title: 'Minimalist Studio Apartment',
    category: 'full',
    description: 'Full renovation of a 600 sq ft studio apartment with space-saving solutions and minimalist design.',
    location: 'San Francisco, CA',
    completionDate: 'July 2023',
  },
  {
    id: 5,
    title: 'Gourmet Kitchen Upgrade',
    category: 'kitchen',
    description: 'Kitchen renovation with custom island, wine storage, and high-end finishes for a cooking enthusiast.',
    location: 'Seattle, WA',
    completionDate: 'September 2023',
  },
  {
    id: 6,
    title: 'Spa-Inspired Master Bathroom',
    category: 'bathroom',
    description: 'Luxury bathroom renovation with heated floors, steam shower, and custom lighting design.',
    location: 'Miami, FL',
    completionDate: 'November 2023',
  },
];

const PortfolioGallery = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedTab);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="full">Full Renovations</TabsTrigger>
            <TabsTrigger value="kitchen">Kitchens</TabsTrigger>
            <TabsTrigger value="bathroom">Bathrooms</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={selectedTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-[4/3] bg-gray-100 relative">
                    <img  
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     src="https://images.unsplash.com/photo-1600607686527-6fb886090705" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-medium px-4 py-2 rounded-md bg-primary/80">View Project</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="aspect-video bg-gray-100">
                  <img  
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1688420327180-fada094d7ba1" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70 hover:text-white"
                  onClick={closeProject}
                >
                  <X size={18} />
                </Button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {selectedProject.category === 'full' ? 'Full Renovation' : 
                     selectedProject.category === 'kitchen' ? 'Kitchen Remodel' : 
                     'Bathroom Redesign'}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {selectedProject.location}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    Completed: {selectedProject.completionDate}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <img  
                    alt={`${selectedProject.title} detail 1`}
                    className="w-full h-40 object-cover rounded-md"
                   src="https://images.unsplash.com/photo-1671725501844-1e6d0081bf64" />
                  <img  
                    alt={`${selectedProject.title} detail 2`}
                    className="w-full h-40 object-cover rounded-md"
                   src="https://images.unsplash.com/photo-1682888818620-94875adf5bb9" />
                </div>
                
                <div className="flex justify-between items-center">
                  <Button variant="outline" onClick={closeProject}>Close</Button>
                  <Button>Request Similar Project</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;
