import { useState } from 'react';
import Head from 'next/head';

/**
 * Contact page containing a simple enquiry form and basic clinic details. The form
 * does not submit anywhere by default – integration with a backend or service like
 * Formspree can easily be added later.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This demo does not send data anywhere. In a real project, you could
    // integrate with an API, Formspree or your own backend here.
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <>
      <Head>
        <title>Contact Us | EverWhite Health</title>
        <meta
          name="description"
          content="Contact EverWhite Health to schedule an appointment or ask a question. Our friendly team is here to help."
        />
      </Head>
      <section className="bg-blush py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a question about our services, want to schedule a visit or
            just say hello, please fill out the form below and our team will be in touch shortly.
          </p>
        </div>
      </section>
      <section className="py-16 bg-clean">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-coral">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-coral"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-coral"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-coral"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-coral text-white px-6 py-3 rounded-full font-medium shadow hover:bg-petal transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact details */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-coral">Contact Details</h2>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Wellness Way, Burbank, CA 91502
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> <a href="tel:+18185551234" className="text-coral hover:underline">(818) 555-1234</a>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> <a href="mailto:info@everwhitehealth.com" className="text-coral hover:underline">info@everwhitehealth.com</a>
            </p>
            <p className="text-gray-700">
              <strong>Hours:</strong> Mon–Fri 9am–6pm; Sat 9am–2pm; Sun closed
            </p>
          </div>
        </div>
      </section>
    </>
  );
}