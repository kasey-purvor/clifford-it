'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    message: '',
    contactMethod: 'email',
    contactInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          message: '',
          contactMethod: 'email',
          contactInfo: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-clifford-white">
      {/* Dynamic Header */}
      <Header />

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-clifford-navy mb-4">Start Your Project</h1>
            <p className="text-gray-600 text-lg">
              Tell us about your project and how you'd like us to contact you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-clifford-navy mb-2">
                Project Description / Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clifford-blue focus:border-transparent resize-none"
                placeholder="Tell us about your project, requirements, or any questions you have..."
              />
            </div>

            {/* Contact Method Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-clifford-navy mb-2">
                Preferred Contact Method *
              </label>
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                    className="mr-2 text-clifford-blue focus:ring-clifford-blue"
                  />
                  <span className="text-gray-700">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={handleChange}
                    className="mr-2 text-clifford-blue focus:ring-clifford-blue"
                  />
                  <span className="text-gray-700">Phone</span>
                </label>
              </div>

              {/* Contact Info Field */}
              <input
                type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                name="contactInfo"
                required
                value={formData.contactInfo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clifford-blue focus:border-transparent"
                placeholder={formData.contactMethod === 'email' ? 'your.email@example.com' : '+1 (555) 123-4567'}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">✅ Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">❌ Failed to send message. Please try again or contact us directly.</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-clifford-navy text-clifford-white hover:bg-clifford-blue transform hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              We'll get back to you within 24 hours to discuss your project
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 