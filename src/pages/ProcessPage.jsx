
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, Hammer, Home, MessageSquare, Paintbrush, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import FAQSection from '@/components/FAQSection';

const ProcessPage = () => {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a thorough consultation to understand your vision, needs, and budget for the project. This can be done in person or virtually, depending on your preference.",
      details: [
        "Discuss your renovation goals and vision",
        "Assess your space and current conditions",
        "Understand your budget parameters",
        "Identify your timeline requirements",
        "Answer any initial questions"
      ],
      icon: MessageSquare
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our design team creates detailed plans and 3D renderings to visualize your renovation before work begins. We'll work closely with you to refine the design until it's perfect.",
      details: [
        "Create detailed floor plans and elevations",
        "Develop 3D renderings of the proposed design",
        "Select materials, fixtures, and finishes",
        "Refine the design based on your feedback",
        "Finalize the project scope and specifications"
      ],
      icon: FileText
    },
    {
      number: "03",
      title: "Proposal & Contract",
      description: "We provide a comprehensive proposal outlining the scope of work, materials, timeline, and costs. Once approved, we'll prepare a detailed contract for your review.",
      details: [
        "Provide detailed cost estimates",
        "Outline project timeline and milestones",
        "Specify materials and products to be used",
        "Clarify payment schedule",
        "Review and sign contract"
      ],
      icon: FileText
    },
    {
      number: "04",
      title: "Pre-Construction",
      description: "Before construction begins, we handle all necessary permits and approvals. We'll also order materials and prepare the site for construction.",
      details: [
        "Obtain necessary permits and approvals",
        "Order materials and products",
        "Schedule trades and deliveries",
        "Prepare the site for construction",
        "Conduct pre-construction meeting"
      ],
      icon: Home
    },
    {
      number: "05",
      title: "Construction",
      description: "Our skilled craftsmen execute the renovation with precision, keeping you updated throughout the process. We maintain a clean and safe work environment at all times.",
      details: [
        "Demolition and removal of existing elements",
        "Structural changes and framing",
        "Electrical, plumbing, and HVAC work",
        "Installation of fixtures and finishes",
        "Regular progress updates and site visits"
      ],
      icon: Hammer
    },
    {
      number: "06",
      title: "Quality Control",
      description: "Throughout the construction phase, our project manager conducts regular inspections to ensure all work meets our high standards of quality.",
      details: [
        "Regular inspections by project manager",
        "Verification of work against plans and specifications",
        "Address any issues promptly",
        "Ensure compliance with building codes",
        "Maintain quality control documentation"
      ],
      icon: CheckCircle
    },
    {
      number: "07",
      title: "Final Walkthrough",
      description: "We conduct a thorough inspection with you to ensure every detail meets our high standards and your expectations. Any final adjustments will be addressed promptly.",
      details: [
        "Complete final cleaning",
        "Conduct detailed inspection with client",
        "Create punch list of any remaining items",
        "Address punch list items promptly",
        "Provide final documentation and warranties"
      ],
      icon: Paintbrush
    },
    {
      number: "08",
      title: "Post-Completion Support",
      description: "Our relationship doesn't end when the project is complete. We provide ongoing support and stand behind our work with a comprehensive warranty.",
      details: [
        "Provide maintenance recommendations",
        "Offer warranty on workmanship",
        "Address any post-completion concerns",
        "Conduct follow-up visits as needed",
        "Remain available for future projects"
      ],
      icon: ShieldCheck
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Renovation Process</h1>
              <p className="text-lg text-gray-600 mb-8">
                We follow a systematic approach to ensure your renovation project runs smoothly from start to finish. Our proven process is designed to deliver exceptional results while keeping you informed every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">What to Expect:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block my-8 ml-6 border-l-2 border-dashed border-gray-200 h-12"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Typical Project Timeline</h2>
              <p className="text-gray-600">
                While every renovation project is unique, here's a general timeline of what to expect for a typical apartment renovation.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Planning Phase",
                duration: "2-4 Weeks",
                description: "Initial consultation, design development, and proposal preparation.",
                icon: FileText
              },
              {
                phase: "Pre-Construction",
                duration: "2-3 Weeks",
                description: "Permitting, material ordering, and preparation for construction.",
                icon: Home
              },
              {
                phase: "Construction",
                duration: "6-12 Weeks",
                description: "Active renovation work, including demolition, framing, electrical, plumbing, and finishing.",
                icon: Hammer
              },
              {
                phase: "Completion",
                duration: "1-2 Weeks",
                description: "Final touches, cleaning, inspection, and client walkthrough.",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-primary/10 p-6 md:w-1/3 flex flex-col items-center justify-center text-center">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">{item.phase}</h3>
                    <div className="flex items-center mt-2">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="font-medium">{item.duration}</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="flex justify-center my-4">
                    <div className="border-l-2 border-dashed border-gray-200 h-8"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-primary/5 rounded-lg">
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <span className="font-medium">Note:</span> Timeline estimates are based on a typical full apartment renovation. Smaller projects may be completed more quickly, while more extensive renovations may take longer. We'll provide a detailed timeline specific to your project during the planning phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Communication Promise</h2>
              <p className="text-gray-600">
                Clear and consistent communication is the foundation of a successful renovation project. Here's how we keep you informed throughout the process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Dedicated Project Manager",
                  description: "You'll have a single point of contact who oversees your entire project and is available to answer questions and address concerns."
                },
                {
                  title: "Regular Progress Updates",
                  description: "Receive weekly progress reports with photos and updates on completed work, upcoming tasks, and any decisions needed."
                },
                {
                  title: "Scheduled Site Visits",
                  description: "We'll arrange regular site visits for you to see the progress firsthand and discuss any questions with your project manager."
                },
                {
                  title: "Transparent Problem Solving",
                  description: "If unexpected issues arise, we'll promptly communicate the situation and present clear options for resolution."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our renovation process.
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Renovation Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule your initial consultation and take the first step toward transforming your space.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
