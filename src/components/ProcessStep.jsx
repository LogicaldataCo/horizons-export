
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProcessStep = ({ number, title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="process-card"
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
        <CardHeader className="pb-2">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">
              {number}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-start mb-4">
            <div className="mr-4 mt-1">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProcessStep;
