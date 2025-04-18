import React, { useCallback, useMemo, useState } from 'react';
import { isEmpty, isValidEmail } from '../../utils/common';
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
    const { email, message, name } = formData;
    const newErrors: FormErrors = {};

    if (isEmpty(name)) newErrors.name = 'Name is required';
    if (isEmpty(message)) newErrors.message = 'Message is required';

    if (isEmpty(email)) newErrors.email = 'Email is required';
    else if (!isValidEmail(email)) newErrors.email = 'Email is invalid';

    return newErrors;
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate();
      if (!isEmpty(validationErrors)) {
        setErrors(validationErrors);
        return;
      }
      setSubmitted(true);
    },
    [validate, isEmpty]
  );

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
