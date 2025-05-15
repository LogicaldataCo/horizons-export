
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Menu as Kitchen, Bath, Paintbrush, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Transform Your <span className="text-primary">Living Space</span> With Expert Renovation
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Premium apartment renovation services tailored to your style, budget, and timeline. From concept to completion, we handle every detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="font-medium">
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img  alt="Modern renovated apartment living room" className="w-full h-auto" src="https://images.unsplash.com/photo-1605989287045-4bb5808fe1f4" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="font-medium text-sm">100+ Projects Completed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Renovation Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive renovation solutions for every room in your apartment, with a focus on quality craftsmanship and attention to detail.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Full Apartment Renovation"
              description="Complete transformation of your entire living space with custom designs and premium finishes."
              icon={Home}
              delay={0.1}
            />
            <ServiceCard
              title="Kitchen Remodeling"
              description="Modern kitchen renovations with custom cabinetry, countertops, and state-of-the-art appliances."
              icon={Kitchen}
              delay={0.2}
            />
            <ServiceCard
              title="Bathroom Renovation"
              description="Luxury bathroom upgrades with custom showers, vanities, and high-end fixtures."
              icon={Bath}
              delay={0.3}
            />
            <ServiceCard
              title="Living Room Redesign"
              description="Transform your living space with custom built-ins, lighting, and architectural details."
              icon={Paintbrush}
              delay={0.4}
            />
            <ServiceCard
              title="Custom Cabinetry"
              description="Bespoke cabinetry solutions for kitchens, bathrooms, and storage throughout your home."
              icon={Home}
              delay={0.5}
            />
            <ServiceCard
              title="Flooring Installation"
              description="Premium flooring options including hardwood, tile, and luxury vinyl with expert installation."
              icon={Home}
              delay={0.6}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/services" className="flex items-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img  alt="Renovation team working" className="w-full h-auto" src="https://images.unsplash.com/photo-1629195352955-850830e4d6c9" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="font-medium text-sm">Licensed & Insured</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose RenovateElite</h2>
                <p className="text-gray-600 mb-8">
                  With over 10 years of experience in apartment renovations, we deliver exceptional results that exceed expectations. Our commitment to quality and customer satisfaction sets us apart.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert Craftsmanship</h3>
                      <p className="text-gray-600">Our skilled team brings years of experience and attention to detail to every project.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">On-Time Completion</h3>
                      <p className="text-gray-600">We respect your time and deliver projects on schedule without compromising quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Transparent Pricing</h3>
                      <p className="text-gray-600">No hidden fees or surprises. We provide detailed quotes and stick to your budget.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/process">Learn About Our Process</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Renovation Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a streamlined process to ensure your renovation project runs smoothly from start to finish.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="1"
              title="Consultation"
              description="We begin with a thorough consultation to understand your vision, needs, and budget for the project."
              icon={CheckCircle}
              delay={0.1}
            />
            <ProcessStep
              number="2"
              title="Design & Planning"
              description="Our design team creates detailed plans and 3D renderings to visualize your renovation before work begins."
              icon={CheckCircle}
              delay={0.2}
            />
            <ProcessStep
              number="3"
              title="Construction"
              description="Our skilled craftsmen execute the renovation with precision, keeping you updated throughout the process."
              icon={CheckCircle}
              delay={0.3}
            />
            <ProcessStep
              number="4"
              title="Final Walkthrough"
              description="We conduct a thorough inspection with you to ensure every detail meets our high standards."
              icon={CheckCircle}
              delay={0.4}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/process" className="flex items-center">
                Learn More About Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about their renovation experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Apartment Owner"
              content="The team at RenovateElite transformed our outdated apartment into a modern dream home. Their attention to detail and quality craftsmanship exceeded our expectations."
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              name="Michael Chen"
              role="Condo Owner"
              content="From the initial consultation to the final walkthrough, the process was seamless. They completed our kitchen renovation on time and within budget. Couldn't be happier!"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Homeowner"
              content="We hired RenovateElite for our bathroom renovation and were impressed with their professionalism and expertise. The result is stunning and exactly what we envisioned."
              rating={4}
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/portfolio" className="flex items-center">
                View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
                <p className="text-white/80 max-w-lg">
                  Contact us today for a free consultation and quote. Let's bring your renovation vision to life!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
