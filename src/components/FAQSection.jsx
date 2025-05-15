
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical apartment renovation take?",
      answer: "The timeline for an apartment renovation depends on the scope of work. A basic renovation might take 4-6 weeks, while a complete gut renovation could take 3-4 months. During your consultation, we'll provide a detailed timeline specific to your project."
    },
    {
      question: "Do I need to move out during the renovation?",
      answer: "For extensive renovations, we typically recommend moving out temporarily for your comfort and safety. For smaller projects limited to specific areas, it may be possible to remain in the apartment. We'll discuss this during the planning phase and help you make the best decision."
    },
    {
      question: "How much does an apartment renovation cost?",
      answer: "Renovation costs vary widely based on the size of your apartment, the scope of work, and the quality of materials. Basic renovations might start at $100 per square foot, while high-end renovations can exceed $300 per square foot. Our pricing calculator can give you a rough estimate, and we provide detailed quotes after an in-home consultation."
    },
    {
      question: "Do you handle all necessary permits?",
      answer: "Yes, we handle all required permits for your renovation project. Our team is familiar with local building codes and regulations, and we'll manage the entire permitting process to ensure your renovation is fully compliant."
    },
    {
      question: "Can I provide my own materials or fixtures?",
      answer: "Yes, you're welcome to provide your own materials and fixtures. However, we recommend discussing this with our team first to ensure compatibility and avoid any installation issues. We can also help source high-quality materials at competitive prices through our supplier network."
    },
    {
      question: "What warranty do you offer on your work?",
      answer: "We stand behind our craftsmanship with a comprehensive 2-year warranty on all labor. Additionally, manufacturer warranties on materials and fixtures will be passed on to you. Our goal is your complete satisfaction, and we'll promptly address any warranty issues that may arise."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      </motion.div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
