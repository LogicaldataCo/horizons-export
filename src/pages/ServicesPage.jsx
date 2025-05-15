
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Menu as Kitchen, Bath, Paintbrush, Sofa, Lightbulb, Ruler, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Full Apartment Renovation",
      description: "Complete transformation of your entire living space with custom designs and premium finishes.",
      icon: Home,
      features: [
        "Comprehensive design and planning",
        "Demolition and structural changes",
        "Electrical and plumbing updates",
        "Custom finishes and fixtures",
        "Complete project management"
      ],
      image: "full-apartment-renovation"
    },
    {
      id: 2,
      title: "Kitchen Remodeling",
      description: "Modern kitchen renovations with custom cabinetry, countertops, and state-of-the-art appliances.",
      icon: Kitchen,
      features: [
        "Custom cabinet design and installation",
        "Premium countertop options",
        "Backsplash design and installation",
        "Appliance selection and installation",
        "Lighting design and fixtures"
      ],
      image: "kitchen-remodeling"
    },
    {
      id: 3,
      title: "Bathroom Renovation",
      description: "Luxury bathroom upgrades with custom showers, vanities, and high-end fixtures.",
      icon: Bath,
      features: [
        "Custom shower and tub installation",
        "Vanity design and installation",
        "Tile work and waterproofing",
        "Plumbing fixture upgrades",
        "Lighting and ventilation improvements"
      ],
      image: "bathroom-renovation"
    },
    {
      id: 4,
      title: "Living Room Redesign",
      description: "Transform your living space with custom built-ins, lighting, and architectural details.",
      icon: Sofa,
      features: [
        "Space planning and layout optimization",
        "Custom built-in design and installation",
        "Fireplace renovation or addition",
        "Ceiling treatments and moldings",
        "Flooring and wall finishes"
      ],
      image: "living-room-redesign"
    },
    {
      id: 5,
      title: "Custom Cabinetry",
      description: "Bespoke cabinetry solutions for kitchens, bathrooms, and storage throughout your home.",
      icon: Ruler,
      features: [
        "Custom design and measurements",
        "Premium material selection",
        "Precision craftsmanship",
        "Hardware selection and installation",
        "Finishing and painting"
      ],
      image: "custom-cabinetry"
    },
    {
      id: 6,
      title: "Lighting Design",
      description: "Enhance your space with professional lighting design and installation services.",
      icon: Lightbulb,
      features: [
        "Comprehensive lighting plan",
        "Fixture selection and sourcing",
        "Recessed lighting installation",
        "Accent and task lighting",
        "Smart lighting integration"
      ],
      image: "lighting-design"
    },
    {
      id: 7,
      title: "Flooring Installation",
      description: "Premium flooring options including hardwood, tile, and luxury vinyl with expert installation.",
      icon: Palette,
      features: [
        "Material selection and consultation",
        "Subfloor preparation",
        "Professional installation",
        "Custom patterns and inlays",
        "Finishing and sealing"
      ],
      image: "flooring-installation"
    },
    {
      id: 8,
      title: "Interior Design",
      description: "Full-service interior design to create a cohesive and personalized living space.",
      icon: Paintbrush,
      features: [
        "Design concept development",
        "Color scheme and material selection",
        "Furniture layout and selection",
        "Custom window treatments",
        "Accessory and artwork curation"
      ],
      image: "interior-design"
    }
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Renovation Services</h1>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive renovation solutions tailored to your specific needs and preferences. From full apartment renovations to specialized services, our expert team delivers exceptional results.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-[16/9] bg-gray-100 relative">
                    <img  
                      alt={service.title}
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1688420327180-fada094d7ba1" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/contact">Request a Quote</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-600">
                We follow a systematic approach to ensure your renovation project is completed to the highest standards, on time and within budget.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Consultation",
                description: "We begin with a thorough consultation to understand your vision, needs, and budget for the project.",
                icon: Home
              },
              {
                title: "Detailed Planning",
                description: "Our team creates comprehensive plans, including 3D renderings and material selections.",
                icon: Ruler
              },
              {
                title: "Expert Execution",
                description: "Our skilled craftsmen execute the renovation with precision and attention to detail.",
                icon: Paintbrush
              },
              {
                title: "Final Inspection",
                description: "We conduct a thorough inspection to ensure every detail meets our high standards.",
                icon: Lightbulb
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/process">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our renovation services.
              </p>
            </motion.div>
          </div>

          <FAQSection />
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Renovation Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
