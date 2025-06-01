'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import PricingCard from '@/components/ui/PricingCard';
import Button from '@/components/ui/Button';
import { FiArrowRight, FiShield, FiZap, FiGlobe, FiTrendingUp, FiBarChart2, FiUsers, FiCheckCircle, FiMail, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi';

const testimonials = [
  {
    quote: "EspíaLocal transformed our business intelligence approach. Their insights helped us identify key market opportunities we were missing.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The level of detail and accuracy in their reports is outstanding. It's like having an extra set of eyes on the ground.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Global Solutions",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Their competitive analysis helped us stay ahead of market trends. Worth every penny!",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    company: "Innovate Corp",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const projectTypes = [
  {
    name: "Market Analysis",
    price: "$499",
    description: "Comprehensive market research and competitor analysis for small businesses",
    deliverables: [
      "Detailed market size and growth analysis",
      "Competitor profiling and positioning",
      "Market opportunity assessment",
      "Strategic recommendations",
      "Interactive dashboard access"
    ],
    highlight: false,
    buyNowText: "Request Quote"
  },
  {
    name: "Competitive Intelligence",
    price: "$799",
    description: "In-depth analysis of your competitive landscape for growing businesses",
    deliverables: [
      "Competitor strategy analysis",
      "Market share tracking",
      "Pricing analysis",
      "Product comparison",
      "Interactive dashboard access",
      "Strategic recommendations"
    ],
    highlight: true,
    buyNowText: "Request Quote"
  },
  {
    name: "Strategic Consulting",
    price: "$1,300",
    description: "Custom strategic solutions for enterprises requiring comprehensive intelligence",
    deliverables: [
      "Market entry strategy",
      "Growth opportunity analysis",
      "Risk assessment",
      "Strategic roadmap",
      "Interactive dashboard access",
      "Implementation support",
      "Follow-up consultation"
    ],
    highlight: false,
    buyNowText: "Request Quote"
  }
];

const benefits = [
  {
    title: "Increase Market Share",
    description: "Identify untapped opportunities and gain a competitive edge with data-driven insights",
    icon: <FiTrendingUp className="w-8 h-8" />,
    stats: "Average 35% market share growth",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Optimize Pricing Strategy",
    description: "Make informed pricing decisions based on competitor analysis and market trends",
    icon: <FiBarChart2 className="w-8 h-8" />,
    stats: "Up to 25% revenue increase",
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Enhance Customer Experience",
    description: "Understand customer preferences and pain points through competitor analysis",
    icon: <FiUsers className="w-8 h-8" />,
    stats: "40% customer satisfaction improvement",
    color: "from-green-500 to-emerald-400"
  }
];

const features = [
  {
    title: "Secure Intelligence",
    description: "Enterprise-grade security for your market data",
    icon: <FiShield className="w-12 h-12" />,
    details: [
      "End-to-end encryption",
      "Secure data storage",
      "Regular security audits",
      "Compliance with international standards"
    ]
  },
  {
    title: "Real-time Insights",
    description: "Stay ahead with instant market updates",
    icon: <FiZap className="w-12 h-12" />,
    details: [
      "Live market monitoring",
      "Instant alerts",
      "Dynamic dashboards",
      "Automated reporting"
    ]
  },
  {
    title: "Global Coverage",
    description: "Comprehensive market data worldwide",
    icon: <FiGlobe className="w-12 h-12" />,
    details: [
      "Multi-market analysis",
      "International trends",
      "Cross-border insights",
      "Global competitor tracking"
    ]
  }
];

const useCases = [
  {
    title: "Market Entry Strategy",
    description: "Successfully entered new markets with 85% accuracy in opportunity assessment",
    results: ["Reduced market entry time by 60%", "Increased success rate by 40%", "Lowered initial investment risk"],
    image: "/market-entry.jpg",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Competitive Positioning",
    description: "Helped clients identify unique value propositions and market gaps",
    results: ["25% increase in market share", "30% improvement in brand positioning", "Enhanced customer loyalty"],
    image: "/competitive.jpg",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Product Development",
    description: "Guided product development based on market needs and competitor analysis",
    results: ["50% faster time to market", "35% higher product adoption", "Reduced development costs"],
    image: "/product.jpg",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleContact = () => {
    window.location.href = 'mailto:spybusinessconsulting@gmail.com';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!formData.name || !formData.email || !formData.company || !formData.projectType || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Crear el asunto y cuerpo del correo
    const subject = `New Project Inquiry: ${formData.projectType}`;
    const body = `
Hello,

You have received a new project inquiry:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}

Message:
${formData.message}

Best regards,
${formData.name}
    `.trim();

    // Intentar abrir Gmail directamente
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=spybusinessconsulting@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir Gmail en una nueva pestaña
    window.open(gmailUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-espia-charcoal text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espia-blue/20 to-espia-mint/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-espia-blue to-espia-mint">
              Market Intelligence
              <br />
              <span className="text-white">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transform your business decisions with real-time market insights and competitor analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContact}
                className="btn-primary text-lg px-8 py-4"
                icon={<FiArrowRight />}
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-espia-charcoal to-espia-charcoal/80" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proven Business Impact</h2>
            <p className="text-xl text-gray-300">See how our intelligence platform drives real results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ backgroundImage: `linear-gradient(to bottom right, ${benefit.color})` }} />
                <div className="relative bg-espia-charcoal/50 p-8 rounded-2xl border border-gray-700/50 hover:border-transparent transition-all duration-300">
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-espia-mint font-semibold">{benefit.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-espia-charcoal/80 to-espia-charcoal" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose EspíaLocal?</h2>
            <p className="text-xl text-gray-300">Discover the power of advanced market intelligence</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-espia-charcoal/50 p-8 rounded-2xl border border-gray-700/50 hover:border-espia-blue/30 transition-all duration-300">
                  <div className="text-espia-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <FiCheck className="w-4 h-4 text-espia-mint flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-espia-charcoal to-espia-charcoal/80" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our clients</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-espia-charcoal/50 p-8 rounded-2xl border border-gray-700/50 hover:border-transparent transition-all duration-300">
                  <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="w-full h-full bg-gradient-to-br from-espia-blue/20 to-espia-mint/20" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheckCircle className="w-5 h-5 text-espia-mint flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-espia-charcoal/50 to-espia-charcoal" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Custom intelligence solutions for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <PricingCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 mb-4">Need a custom solution?</p>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              icon={<FiArrowRight />}
            >
              Contact Us for Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by leading businesses worldwide</p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-espia-charcoal to-espia-charcoal/80" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl text-gray-300">Get in touch to discuss your project</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-espia-charcoal/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-espia-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-espia-blue focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-espia-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-espia-blue focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-espia-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-espia-blue focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-espia-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-espia-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map(project => (
                        <option key={project.name} value={project.name}>{project.name} - {project.price}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-espia-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-espia-blue focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full btn-primary shadow-lg shadow-espia-blue/20"
                    icon={<FiMail />}
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-espia-charcoal/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <FiMail className="w-6 h-6 text-espia-blue flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:spybusinessconsulting@gmail.com" className="text-gray-300 hover:text-espia-mint transition-colors">
                          spybusinessconsulting@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      
                      <div>
                        <h4 className="font-semibold mb-1"></h4>
                        <p className="text-gray-300"></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-espia-charcoal/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-espia-mint flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Initial consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-espia-mint flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Customized project proposal and timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-espia-mint flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Regular updates throughout the project</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-espia-mint flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Interactive dashboard delivery</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 