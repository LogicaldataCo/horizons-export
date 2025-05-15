
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PricingCalculator = () => {
  const { toast } = useToast();
  const [squareFootage, setSquareFootage] = useState([1000]);
  const [roomCount, setRoomCount] = useState([2]);
  const [bathroomCount, setBathroomCount] = useState([1]);
  const [luxuryLevel, setLuxuryLevel] = useState([1]);
  const [totalPrice, setTotalPrice] = useState(0);

  const luxuryOptions = [
    { value: 1, label: 'Standard', pricePerSqFt: 100 },
    { value: 2, label: 'Premium', pricePerSqFt: 150 },
    { value: 3, label: 'Luxury', pricePerSqFt: 200 },
  ];

  useEffect(() => {
    calculatePrice();
  }, [squareFootage, roomCount, bathroomCount, luxuryLevel]);

  const calculatePrice = () => {
    const basePrice = squareFootage[0] * luxuryOptions[luxuryLevel[0] - 1].pricePerSqFt;
    const roomPrice = roomCount[0] * 5000;
    const bathroomPrice = bathroomCount[0] * 8000;
    
    const calculatedPrice = basePrice + roomPrice + bathroomPrice;
    setTotalPrice(calculatedPrice);
  };

  const handleGetQuote = () => {
    toast({
      title: "Quote Generated",
      description: `Your estimated renovation cost is $${totalPrice.toLocaleString()}. We've sent a detailed quote to your email.`,
      duration: 5000,
    });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border-none shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Renovation Cost Calculator</CardTitle>
        <p className="text-muted-foreground">Get an instant estimate for your apartment renovation</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="square-footage">Square Footage: {squareFootage[0]} sq ft</Label>
            <span className="text-sm font-medium">${(squareFootage[0] * luxuryOptions[luxuryLevel[0] - 1].pricePerSqFt).toLocaleString()}</span>
          </div>
          <Slider
            id="square-footage"
            min={500}
            max={3000}
            step={100}
            value={squareFootage}
            onValueChange={setSquareFootage}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>500 sq ft</span>
            <span>3000 sq ft</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="room-count">Bedrooms: {roomCount[0]}</Label>
            <span className="text-sm font-medium">${(roomCount[0] * 5000).toLocaleString()}</span>
          </div>
          <Slider
            id="room-count"
            min={1}
            max={5}
            step={1}
            value={roomCount}
            onValueChange={setRoomCount}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 room</span>
            <span>5 rooms</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="bathroom-count">Bathrooms: {bathroomCount[0]}</Label>
            <span className="text-sm font-medium">${(bathroomCount[0] * 8000).toLocaleString()}</span>
          </div>
          <Slider
            id="bathroom-count"
            min={1}
            max={4}
            step={1}
            value={bathroomCount}
            onValueChange={setBathroomCount}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 bathroom</span>
            <span>4 bathrooms</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="luxury-level">Quality Level: {luxuryOptions[luxuryLevel[0] - 1].label}</Label>
            <span className="text-sm font-medium">${luxuryOptions[luxuryLevel[0] - 1].pricePerSqFt}/sq ft</span>
          </div>
          <Slider
            id="luxury-level"
            min={1}
            max={3}
            step={1}
            value={luxuryLevel}
            onValueChange={setLuxuryLevel}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Standard</span>
            <span>Luxury</span>
          </div>
        </div>

        <motion.div 
          className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Estimated Total</h3>
            <p className="text-2xl font-bold">${totalPrice.toLocaleString()}</p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            This is an estimate based on average costs. Final price may vary based on specific materials, fixtures, and design choices.
          </p>
        </motion.div>

        <Button onClick={handleGetQuote} className="w-full mt-4">Get Detailed Quote</Button>
      </CardContent>
    </Card>
  );
};

export default PricingCalculator;
