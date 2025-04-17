import React, { useCallback, useMemo, useState } from 'react';
import { FormData, FormErrors } from '../types';
import './index.styles.scss';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }, [validate]);

  const successMessage = useMemo(
    () => (
      <div className='success-message'>
        <h2>
          Thank you, {formData.name}, your message has been successfully
          submitted.
        </h2>
      </div>
    ),
    [formData.name]
  );

  const renderForm = () => {
    if (submitted) return successMessage;

    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className='error-message'>{errors.name}</span>}
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <span className='error-message'>{errors.email}</span>
          )}
        </div>
        <div className='form-group'>
          <label>Message:</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && (
            <span className='error-message'>{errors.message}</span>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  };
  return (
    <div className='content'>
      <h1>Contact Us</h1>
      {renderForm()}
    </div>
  );
};

export default ContactPage;
