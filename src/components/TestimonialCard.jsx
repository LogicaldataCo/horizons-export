
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TestimonialCard = ({ name, role, content, rating = 5, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="testimonial-card"
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4 italic">"{content}"</p>
          <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              {name.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="font-medium text-sm">{name}</p>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
