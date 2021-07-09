import React from 'react';
import { useForm } from 'react-hook-form';

// The following component is an example of your existing Input Component
export const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);
