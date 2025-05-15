
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-3xl font-bold mt-8 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="default">
                <Link to="/" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" /> Go Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
