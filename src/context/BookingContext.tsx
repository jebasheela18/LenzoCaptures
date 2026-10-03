'use client';

import React, { createContext, useContext, useState } from 'react';
import BookingModal from '@/components/BookingModal';

interface BookingContextType {
  isOpen: boolean;
  selectedPackage: string;
  openBooking: (packageTitle?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openBooking = (packageTitle: string = '') => {
    setSelectedPackage(packageTitle);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider value={{ isOpen, selectedPackage, openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} initialPackage={selectedPackage} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
