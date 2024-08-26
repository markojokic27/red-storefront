'use client';

import * as React from 'react';
import {
  Form,
  FieldError,
  TextField,
  Label,
  Input as AriaInput,
  Button,
} from 'react-aria-components';

export default function Page() {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState<string | null>(null);

  const validateEmail = (value: string) => {
    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return 'Email is required';
    } else if (!emailPattern.test(value)) {
      return 'Invalid email address';
    }
    return null;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate email and set error message if needed
    const errorMessage = validateEmail(email);
    if (errorMessage) {
      setEmailError(errorMessage);
    } else {
      setEmailError(null);
      console.log('Form submitted with email:', email);
      // Add further form submission logic here
    }
  };

  return (
    <main className="p-4">
      <div className="group h-60 w-60 bg-red-100">
        <div className="group-hover:border-blue-700 h-4 w-4 rounded-full border border-black"></div>
      </div>
    </main>
  );
}
//bg-blue-700 border-5 border-red-700
