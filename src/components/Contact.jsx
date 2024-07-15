import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent form submission if errors exist
    }

    // If no validation errors, submit the form
    event.target.submit();
  };

  return (
    <div name="contact" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the Form Below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form onSubmit={handleSubmit} action='https://getform.io/f/bwnggxva' method='POST' className='w-full md:w-1/2 flex flex-col'>
            <input
              type="text"
              name="name"
              placeholder='Enter your Name'
              className={`p-2 my-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.name && 'border-red-500'}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder='Enter your Email'
              className={`p-2 my-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.email && 'border-red-500'}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <textarea
              name="message"
              rows={10}
              placeholder='Enter your Message'
              className={`p-2 my-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.message && 'border-red-500'}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button 
              type="submit" 
              className='my-2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
