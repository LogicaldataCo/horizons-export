
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PricingCalculator from '@/components/PricingCalculator';
import FAQSection from '@/components/FAQSection';

const PricingPage = () => {
  const pricingPackages = [
    {
      title: "Standard",
      description: "Quality renovations with standard materials and finishes",
      price: "100",
      features: [
        "Basic design consultation",
        "Standard material options",
        "Basic fixtures and finishes",
        "1-year workmanship warranty",
        "Standard project timeline"
      ],
      popular: false
    },
    {
      title: "Premium",
      description: "Enhanced renovations with premium materials and finishes",
      price: "150",
      features: [
        "Comprehensive design services",
        "Premium material selection",
        "High-quality fixtures and finishes",
        "2-year workmanship warranty",
        "Expedited project timeline",
        "Dedicated project manager"
      ],
      popular: true
    },
    {
      title: "Luxury",
      description: "High-end renovations with luxury materials and custom details",
      price: "200+",
      features: [
        "Full-service interior design",
        "Luxury material options",
        "Custom fixtures and finishes",
        "3-year workmanship warranty",
        "Priority project timeline",
        "Dedicated project manager",
        "Post-renovation maintenance plan"
      ],
      popular: false
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
              <p className="text-lg text-gray-600 mb-8">
                We believe in complete transparency when it comes to pricing. Explore our packages or use our calculator to get an estimate for your specific project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Renovation Packages</h2>
              <p className="text-gray-600">
                Choose from our carefully designed packages to find the perfect fit for your renovation needs and budget.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className={`w-full border-none shadow-lg ${pkg.popular ? 'ring-2 ring-primary' : ''} relative`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${pkg.price}</span>
                      <span className="text-gray-500 ml-1">per sq ft</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className={`w-full ${pkg.popular ? '' : 'bg-primary/90 hover:bg-primary'}`}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Prices are approximate and vary based on the specific requirements of your project. For a more accurate estimate, use our calculator below or contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Renovation Cost Calculator</h2>
              <p className="text-gray-600">
                Use our interactive calculator to get an estimate for your specific renovation project.
              </p>
            </motion.div>
          </div>

          <PricingCalculator />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">What's Included in Every Project</h2>
              <p className="text-gray-600">
                Regardless of which package you choose, every renovation project includes these essential services.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Initial Consultation",
                description: "A thorough discussion to understand your vision, needs, and budget constraints."
              },
              {
                title: "Detailed Proposal",
                description: "A comprehensive proposal outlining scope of work, materials, timeline, and costs."
              },
              {
                title: "Professional Design",
                description: "Expert design services to create a functional and aesthetically pleasing space."
              },
              {
                title: "Quality Materials",
                description: "Selection of quality materials appropriate for your chosen package level."
              },
              {
                title: "Expert Installation",
                description: "Professional installation by our skilled and experienced craftsmen."
              },
              {
                title: "Project Management",
                description: "Dedicated oversight to ensure your project runs smoothly from start to finish."
              },
              {
                title: "Clean-up Services",
                description: "Thorough clean-up after completion to ensure your space is ready to enjoy."
              },
              {
                title: "Final Walkthrough",
                description: "A detailed inspection to ensure everything meets our high standards."
              },
              {
                title: "Warranty Coverage",
                description: "Peace of mind with our comprehensive workmanship warranty."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
              <p className="text-gray-600">
                Find answers to common questions about our pricing and payment options.
              </p>
            </motion.div>
          </div>

          <FAQSection />
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
                <h2 className="text-3xl font-bold mb-4">Ready for Your Custom Quote?</h2>
                <p className="text-white/80 max-w-lg">
                  Contact us today for a personalized quote tailored to your specific renovation needs.
                </p>
              </div>
              <div>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
