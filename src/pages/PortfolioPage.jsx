
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PortfolioGallery from '@/components/PortfolioGallery';
import TestimonialCard from '@/components/TestimonialCard';

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore our collection of successful renovation projects. Each project showcases our commitment to quality craftsmanship and attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <PortfolioGallery />
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
              <p className="text-gray-600">
                Take a closer look at one of our most impressive renovation transformations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img  alt="Before renovation" className="w-full h-auto" src="https://images.unsplash.com/photo-1688420327180-fada094d7ba1" />
              </div>
              <div className="text-center mt-4">
                <p className="font-medium">Before</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img  alt="After renovation" className="w-full h-auto" src="https://images.unsplash.com/photo-1515263487990-61b07816b324" />
              </div>
              <div className="text-center mt-4">
                <p className="font-medium">After</p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Upper East Side Apartment Transformation</h3>
              <p className="text-gray-600 mb-6">
                This complete renovation of a 1,500 sq ft apartment in Manhattan's Upper East Side transformed an outdated space into a modern, luxurious home. The project included opening up the floor plan, completely renovating the kitchen and two bathrooms, installing new hardwood flooring throughout, and updating all electrical and plumbing systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Project Scope</h4>
                  <p className="text-sm text-gray-600">Full apartment renovation including structural changes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Timeline</h4>
                  <p className="text-sm text-gray-600">Completed in 12 weeks</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Special Features</h4>
                  <p className="text-sm text-gray-600">Custom cabinetry, smart home integration</p>
                </div>
              </div>
              <div className="text-center">
                <Button asChild>
                  <Link to="/contact">Request a Similar Transformation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-gray-600">
                Don't just take our word for it. Here's what our clients have to say about their renovation experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="David & Sarah Thompson"
              role="Upper East Side"
              content="We couldn't be happier with our apartment renovation. The team was professional, the work was impeccable, and they finished on schedule. Our home has been completely transformed!"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              name="Jennifer Martinez"
              role="Chelsea"
              content="The attention to detail was impressive. From the initial design consultation to the final walkthrough, every step of the process was smooth and professional. Highly recommend!"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              name="Robert Chen"
              role="Brooklyn Heights"
              content="We had a complex renovation with some unexpected challenges, but the team handled everything expertly. The communication was excellent, and the results exceeded our expectations."
              rating={5}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your renovation project and join our portfolio of satisfied clients.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
