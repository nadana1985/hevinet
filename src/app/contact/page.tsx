'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@hevinettrading.com',
    href: 'mailto:info@hevinettrading.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSuccess: false });
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setFormState({ isSubmitting: false, isSuccess: true });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
            <Breadcrumbs items={[{ label: 'Contact Us' }]} className="mb-8" />
            <div className="text-center">
            <SlideUp>
              <SectionHeader
                title="Contact Us"
                subtitle="Get in touch with our team. We'd love to hear from you and discuss how we can meet your product needs."
              />
            </SlideUp>
          </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Get in Touch
                </h2>
                <StaggerContainer className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const Wrapper = info.href ? 'a' : 'div';
                    return (
                      <StaggerItem key={info.label}>
                        <Wrapper
                          {...(info.href ? { href: info.href } : {})}
                          className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                              {info.label}
                            </p>
                            <p className="text-neutral-900 dark:text-white font-medium">
                              {info.value}
                            </p>
                          </div>
                        </Wrapper>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card padding="lg">
                  {formState.isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="you@company.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                            Company Name
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Product Interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select a product category</option>
                          <option value="spices">Spices</option>
                          <option value="toys">Kids Toys</option>
                          <option value="flowers">Flowers</option>
                          <option value="tea-coffee">Tea & Coffee</option>
                          <option value="kids-dress">Kids Dress</option>
                          <option value="ghee">Ghee & Oils</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        isLoading={formState.isSubmitting}
                        className="w-full"
                      >
                        <Send className="h-5 w-5" />
                        Send Message
                      </Button>

                      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                        By submitting, you agree to our{' '}
                        <a href="/privacy" className="text-primary-500 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
