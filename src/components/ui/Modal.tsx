"use client";

import { useState } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <button onClick={onClose} className="absolute top-2 right-2">Close</button>
        {children}
      </div>
    </div>
  );
}
