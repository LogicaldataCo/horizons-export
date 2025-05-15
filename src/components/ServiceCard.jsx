
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCard = ({ title, description, icon: Icon, link = '/services', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="service-card"
    >
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Feature {i + 1} for {title}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
            <Link to={link} className="flex items-center text-primary">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
