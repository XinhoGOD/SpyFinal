'use client';

import { motion } from 'framer-motion';
import { FiBarChart2, FiEye, FiFileText, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import PricingCard from '@/components/ui/PricingCard';
import StatsCard from '@/components/ui/StatsCard';
import Navbar from '@/components/ui/Navbar';
import { useState } from 'react';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import Head from 'next/head';

const translations = {
  es: {
    heroTitle: <>Espía a tus competidores.<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-espia-mint to-espia-blue">Mejora tu negocio.</span></>,
    heroSubtitle: 'Obtén un dashboard con insights de la experiencia de usuario de negocios similares al tuyo.',
    startNow: 'Comenzar Ahora',
    seePlans: 'Ver Planes',
    trust: '+500 empresas ya confían',
    plansTitle: 'Planes y Precios',
    buyNow: 'Comprar ahora',
    plans: [
      {
        name: 'Básico',
        price: '$350',
        description: 'Perfecto para negocios pequeños',
        features: [
          'Monitoreo de hasta 3 competidores',
          'Dashboard',
          'Acceso web a reportes',
          'Soporte por email',
          'Análisis básico de reseñas',
        ],
        stripeId: 'buy_btn_1RSn1yQ6e2tZXE1lUsyoUHPC',
      },
      {
        name: 'Pro',
        price: '$550',
        description: 'Ideal para negocios en crecimiento',
        features: [
          'Todo lo del Básico',
          'Dashboard con: Insights, datos clave e información oculta de la competencia',
          'Soporte prioritario',
          'Preguntas personalizadas',
          'Análisis de insights positivos y negativos',
          'Identificación de puntos fuertes y débiles',
          'Reportes completos',
        ],
        stripeId: 'buy_btn_1RSn0vQ6e2tZXE1lvSEw6wIt',
      },
      {
        name: 'Elite',
        price: '$1000',
        description: 'Para empresas establecidas y franquicias',
        features: [
          'Todo lo del Pro',
          'Incluye la razón por la que los negocios exitosos obtuvieron ese éxito',
          'Expansión personalizada disponible',
          'Ideal para franquicias',
          'Soporte 24/7',
          'Reportes completos',
          'Monitoreo de hasta 16 competidores',
          'Información ya existente en el plan Elite',
        ],
        stripeId: 'buy_btn_1RSn4BQ6e2tZXE1lZTm2YvIX',
      },
    ],
    testimonials: [
      {
        quote: 'Gracias a EspíaLocal, descubrimos que muchos cafés a nuestro alrededor no aceptaban tarjetas. Nosotros sí lo hicimos, y duplicamos nuestro tráfico.',
        author: 'María González',
        role: 'Gerente',
        company: 'Café del Sur',
        rating: 5,
        image: "",
      },
      {
        quote: 'Los insights sobre la experiencia del cliente nos ayudaron a mejorar nuestro servicio y aumentar nuestras reseñas positivas en un 40%.',
        author: 'Carlos Rodríguez',
        role: 'Propietario',
        company: 'Restaurante La Terraza',
        image: "/testimonials/restaurant.jpg",
        rating: 5
      },
      {
        quote: "La información que recibimos cada mes nos ha permitido tomar decisiones estratégicas basadas en datos reales del mercado.",
        author: "Ana Martínez",
        role: "Directora de Marketing",
        company: "Boutique Elegance",
        image: "/testimonials/boutique.jpg",
        rating: 5
      },
      {
        quote: "El dashboard es increíblemente intuitivo y nos ha ayudado a identificar oportunidades que no habíamos considerado.",
        author: "Luis Pérez",
        role: "CEO",
        company: "Tech Solutions",
        image: "/testimonials/tech.jpg",
        rating: 5
      },
      {
        quote: "La capacidad de monitorear a nuestros competidores en tiempo real nos ha dado una ventaja competitiva significativa.",
        author: "Laura Sánchez",
        role: "Directora de Operaciones",
        company: "Hotel Vista Mar",
        image: "/testimonials/hotel.jpg",
        rating: 5
      },
      {
        quote: "Los reportes mensuales nos han ayudado a optimizar nuestros precios y mejorar nuestra oferta de servicios.",
        author: "Juan Martínez",
        role: "Gerente General",
        company: "Gimnasio Fitness Pro",
        image: "/testimonials/gym.jpg",
        rating: 5
      }
    ],
  },
  en: {
    heroTitle: <>Spy on your competitors.<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-espia-mint to-espia-blue">Grow your business.</span></>,
    heroSubtitle: 'Get a dashboard with insights from the user experience of businesses like yours.',
    startNow: 'Start Now',
    seePlans: 'See Plans',
    trust: '500+ companies already trust us',
    plansTitle: 'Plans & Pricing',
    buyNow: 'Buy now',
    plans: [
      {
        name: 'Basic',
        price: '$350',
        description: 'Perfect for small businesses',
        features: [
          'Monitor up to 3 competitors',
          'Dashboard',
          'Web access to reports',
          'Email support',
          'Basic review analysis',
        ],
        stripeId: 'buy_btn_1RSn1yQ6e2tZXE1lUsyoUHPC',
      },
      {
        name: 'Pro',
        price: '$550',
        description: 'Ideal for growing businesses',
        features: [
          'Everything in Basic',
          'Dashboard with: Insights, key data, and hidden competitor information',
          'Priority support',
          'Custom questions',
          'Analysis of positive and negative insights',
          'Identification of strengths and weaknesses',
          'Full reports',
        ],
        stripeId: 'buy_btn_1RSn0vQ6e2tZXE1lvSEw6wIt',
      },
      {
        name: 'Elite',
        price: '$1000',
        description: 'For established companies and franchises',
        features: [
          'Everything in Pro',
          'Includes the reason why successful businesses achieved that success',
          'Custom expansion available',
          'Ideal for franchises',
          '24/7 support',
          'Full reports',
          'Monitor up to 16 competitors',
          'All existing Elite plan info',
        ],
        stripeId: 'buy_btn_1RSn4BQ6e2tZXE1lZTm2YvIX',
      },
    ],
    testimonials: [
      {
        quote: 'Thanks to EspíaLocal, we discovered that many cafés around us did not accept cards. We did, and doubled our traffic.',
        author: 'María González',
        role: 'Manager',
        company: 'Café del Sur',
        rating: 5,
        image: "",
      },
      {
        quote: 'Thanks to EspíaLocal, we discovered that many cafés around us did not accept cards. We did, and doubled our traffic.',
        author: 'Carlos Rodríguez',
        role: 'Propietario',
        company: 'Restaurante La Terraza',
        image: "/testimonials/restaurant.jpg",
        rating: 5
      },
      {
        quote: "La información que recibimos cada mes nos ha permitido tomar decisiones estratégicas basadas en datos reales del mercado.",
        author: "Ana Martínez",
        role: "Directora de Marketing",
        company: "Boutique Elegance",
        image: "/testimonials/boutique.jpg",
        rating: 5
      },
      {
        quote: "El dashboard es increíblemente intuitivo y nos ha ayudado a identificar oportunidades que no habíamos considerado.",
        author: "Luis Pérez",
        role: "CEO",
        company: "Tech Solutions",
        image: "/testimonials/tech.jpg",
        rating: 5
      },
      {
        quote: "La capacidad de monitorear a nuestros competidores en tiempo real nos ha dado una ventaja competitiva significativa.",
        author: "Laura Sánchez",
        role: "Directora de Operaciones",
        company: "Hotel Vista Mar",
        image: "/testimonials/hotel.jpg",
        rating: 5
      },
      {
        quote: "Los reportes mensuales nos han ayudado a optimizar nuestros precios y mejorar nuestra oferta de servicios.",
        author: "Juan Martínez",
        role: "Gerente General",
        company: "Gimnasio Fitness Pro",
        image: "/testimonials/gym.jpg",
        rating: 5
      }
    ],
  },
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lang, setLang] = useState<'es' | 'en'>('es');
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'analysis', label: 'Análisis' },
    { id: 'intelligence', label: 'Inteligencia' },
    { id: 'monitoring', label: 'Monitoreo' },
  ];

  const services = [
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Análisis de Reseñas",
      description: "Recopilamos y analizamos miles de reseñas públicas de tus competidores para identificar patrones, tendencias y áreas de mejora. Nuestro sistema procesa automáticamente el sentimiento y los temas más mencionados.",
      color: "from-blue-500 to-blue-600",
      category: "analysis"
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Inteligencia Competitiva",
      description: "Te proporcionamos insights detallados sobre las fortalezas y debilidades de tu competencia. Identificamos qué están haciendo bien y dónde están fallando, para que puedas tomar decisiones estratégicas.",
      color: "from-purple-500 to-purple-600",
      category: "intelligence"
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Dashboards Personalizados",
      description: "Creamos dashboards intuitivos y fáciles de entender, con gráficos interactivos y métricas clave. Recibirás un reporte completo con análisis detallado y recomendaciones accionables.",
      color: "from-green-500 to-green-600",
      category: "analysis"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Monitoreo Continuo",
      description: "Realizamos un seguimiento constante de tus competidores, alertándote sobre cambios significativos en su reputación, nuevos servicios o problemas recurrentes que podrían afectar al mercado.",
      color: "from-red-500 to-red-600",
      category: "monitoring"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Análisis de Mercado",
      description: "Identificamos tendencias emergentes en tu industria y te ayudamos a anticiparte a los cambios. Analizamos el comportamiento del consumidor y las expectativas del mercado.",
      color: "from-yellow-500 to-yellow-600",
      category: "analysis"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Recomendaciones Estratégicas",
      description: "Basándonos en los datos recopilados, te proporcionamos recomendaciones específicas para mejorar tu negocio. Te ayudamos a priorizar las acciones que tendrán mayor impacto.",
      color: "from-pink-500 to-pink-600",
      category: "intelligence"
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Reportes Personalizados",
      description: "Adaptamos nuestros reportes a tus necesidades específicas. Puedes elegir qué métricas quieres monitorear y recibir información relevante para tu negocio.",
      color: "from-indigo-500 to-indigo-600",
      category: "analysis"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Soporte Continuo",
      description: "Nuestro equipo de expertos está disponible para ayudarte a interpretar los datos y tomar decisiones informadas. Ofrecemos consultas personalizadas y soporte técnico según tu plan.",
      color: "from-teal-500 to-teal-600",
      category: "intelligence"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const handlePlanSelect = (plan: string) => {
    switch (plan) {
      case 'start':
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'plans':
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'basic':
      case 'pro':
      case 'elite':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'subscribe':
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'newsletter':
        // Aquí podrías agregar la lógica para el newsletter
        console.log('Newsletter subscription');
        break;
    }
  };

  const testimonials = translations[lang].testimonials;

  return (
    <>
      <Head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <div className="fixed top-4 right-4 z-50">
          <button
            className="bg-espia-blue text-white px-4 py-2 rounded-full font-bold shadow hover:bg-espia-mint hover:text-espia-dark transition"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-espia-dark">
          {/* Fondo visual moderno */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-espia-blue/80 via-espia-mint/30 to-espia-dark opacity-90 animate-gradient-xy" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(0,255,179,0.10)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Lado izquierdo: texto */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-extrabold mb-8 font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-espia-blue to-espia-mint drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {translations[lang].heroTitle}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl leading-relaxed drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {translations[lang].heroSubtitle}
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handlePlanSelect('start')}
                    className="text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
                  >
                    {translations[lang].startNow}
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => handlePlanSelect('plans')}
                    className="text-lg px-8 py-4 border-2 border-espia-mint hover:bg-espia-mint/10 hover:text-espia-mint"
                  >
                    {translations[lang].seePlans}
                  </Button>
                </motion.div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-espia-blue to-espia-mint border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-espia-mint to-espia-blue border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-espia-blue to-espia-mint border-2 border-white" />
                  </div>
                  <span className="text-gray-200 text-sm">{translations[lang].trust}</span>
                </div>
              </motion.div>
              {/* Lado derecho: mockup dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
              >
                <div className="relative w-full max-w-md aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-espia-mint/40 bg-espia-charcoal/80 backdrop-blur-lg">
                  <div className="absolute top-4 left-4 right-4 flex items-center space-x-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="p-8 pt-12 grid grid-cols-2 gap-4">
                    <div className="bg-espia-dark/60 rounded-xl p-4">
                      <div className="h-4 w-3/4 bg-espia-blue/30 rounded mb-2" />
                      <div className="h-8 w-full bg-espia-blue/40 rounded" />
                    </div>
                    <div className="bg-espia-dark/60 rounded-xl p-4">
                      <div className="h-4 w-3/4 bg-espia-mint/30 rounded mb-2" />
                      <div className="h-8 w-full bg-espia-mint/40 rounded" />
                    </div>
                    <div className="col-span-2 bg-espia-dark/60 rounded-xl p-4">
                      <div className="h-4 w-1/2 bg-purple-500/30 rounded mb-2" />
                      <div className="h-24 w-full bg-purple-500/40 rounded" />
                    </div>
                  </div>
                  {/* Efecto de brillo animado */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-3xl"
                    animate={{
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ boxShadow: '0 0 80px 10px #00ffb3, 0 0 120px 20px #0066ff' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="services" className="section-padding bg-espia-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              <StatsCard
                title="Clientes Satisfechos"
                value="500+"
                icon={<FiUsers className="w-8 h-8" />}
                description="Empresas que confían en nosotros"
                delay={0.2}
              />
              <StatsCard
                title="Mejora Promedio"
                value="40%"
                icon={<FiTrendingUp className="w-8 h-8" />}
                description="En satisfacción del cliente"
                delay={0.4}
              />
              <StatsCard
                title="Industrias"
                value="12+"
                icon={<FiAward className="w-8 h-8" />}
                description="Sectores diferentes analizados"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="section-padding bg-espia-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-espia-blue/10 to-espia-mint/10 opacity-30 animate-gradient-xy" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="section-title">
                Qué Hacemos
              </h2>
              <p className="section-subtitle">
                Transformamos datos de la competencia en oportunidades de crecimiento para tu negocio
              </p>
            </motion.div>

            {/* Filtros */}
            <motion.div 
              className="flex justify-center gap-4 mb-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-espia-blue to-espia-mint text-white'
                      : 'bg-espia-charcoal text-gray-300 hover:bg-espia-charcoal/80'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative card hover-lift p-8">
                    <motion.div 
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-espia-blue group-hover:to-espia-mint transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-espia-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-espia-blue to-espia-mint">
                <div className="bg-espia-dark rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    ¿Listo para transformar tu negocio con datos reales?
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Únete a cientos de empresas que ya están tomando decisiones más inteligentes con EspíaLocal
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handlePlanSelect('contact')}
                  >
                    {translations[lang].startNow}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="section-padding bg-espia-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="section-title">
                Mira cómo funciona
              </h2>
              <p className="section-subtitle">
                Explora nuestro dashboard interactivo y descubre el poder de la inteligencia competitiva
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full bg-gradient-to-br from-espia-dark to-espia-charcoal p-4">
                    <div className="absolute top-4 left-4 right-4 flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="bg-espia-dark/50 rounded-xl p-4">
                        <div className="h-4 w-3/4 bg-espia-blue/20 rounded mb-2" />
                        <div className="h-8 w-full bg-espia-blue/30 rounded" />
                      </div>
                      <div className="bg-espia-dark/50 rounded-xl p-4">
                        <div className="h-4 w-3/4 bg-espia-mint/20 rounded mb-2" />
                        <div className="h-8 w-full bg-espia-mint/30 rounded" />
                      </div>
                      <div className="col-span-2 bg-espia-dark/50 rounded-xl p-4">
                        <div className="h-4 w-1/2 bg-purple-500/20 rounded mb-2" />
                        <div className="h-24 w-full bg-purple-500/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-espia-blue to-espia-mint rounded-full blur-3xl opacity-20 animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="card hover-lift">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Análisis en Tiempo Real</h3>
                  <p className="text-gray-400">
                    Monitorea las reseñas y comentarios de tus competidores en tiempo real. 
                    Identifica tendencias y patrones antes que tus competidores.
                  </p>
                </div>

                <div className="card hover-lift">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Métricas Clave</h3>
                  <p className="text-gray-400">
                    Visualiza las métricas más importantes para tu negocio. 
                    Compara tu rendimiento con el de la competencia y toma decisiones basadas en datos.
                  </p>
                </div>

                <div className="card hover-lift">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Reportes Personalizados</h3>
                  <p className="text-gray-400">
                    Recibe reportes personalizados según tus necesidades. 
                    Exporta los datos en diferentes formatos y compártelos con tu equipo.
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => handlePlanSelect('contact')}
                >
                  {translations[lang].startNow}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-espia-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="section-title">
                Nuestro Proceso
              </h2>
              <p className="section-subtitle">
                Así es como transformamos datos en oportunidades de crecimiento
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-espia-blue to-espia-mint" />
              
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Identificación de Competidores",
                    description: "Analizamos tu mercado local y seleccionamos los competidores más relevantes para monitorear.",
                    icon: <FiUsers className="w-8 h-8" />
                  },
                  {
                    step: "02",
                    title: "Recolección de Datos",
                    description: "Recopilamos y procesamos miles de reseñas y comentarios públicos de tus competidores.",
                    icon: <FiBarChart2 className="w-8 h-8" />
                  },
                  {
                    step: "03",
                    title: "Análisis Profundo",
                    description: "Nuestro sistema de IA analiza los datos para identificar patrones, tendencias y áreas de mejora.",
                    icon: <FiTrendingUp className="w-8 h-8" />
                  },
                  {
                    step: "04",
                    title: "Dashboard Personalizado",
                    description: "Creamos un dashboard intuitivo con insights accionables específicos para tu negocio.",
                    icon: <FiFileText className="w-8 h-8" />
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="card hover-lift p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-espia-blue to-espia-mint flex items-center justify-center text-white font-bold mr-4">
                            {step.step}
                          </div>
                          <div className="inline-flex p-3 rounded-xl bg-espia-charcoal">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-espia-blue to-espia-mint opacity-90" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
                  Comienza a transformar tu negocio hoy
                </h2>
                <p className="text-xl mb-8 text-white/80">
                  Agenda una demo personalizada y descubre cómo EspíaLocal puede ayudarte a tomar mejores decisiones.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <FiUsers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Demo Personalizada</h3>
                      <p className="text-white/80">30 minutos de demostración en vivo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <FiFileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Análisis Gratuito</h3>
                      <p className="text-white/80">Reporte inicial de tu competencia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <FiAward className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Soporte Dedicado</h3>
                      <p className="text-white/80">Asesoramiento personalizado</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Empresa</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Mensaje</label>
                    <textarea
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 h-32"
                      placeholder="Cuéntanos sobre tu negocio y objetivos"
                    />
                  </div>

                  <a
                    className="w-full inline-block bg-white text-espia-blue hover:bg-gray-100 text-center font-bold rounded-xl py-4 text-lg transition"
                    href="mailto:hectoremmanuellealsaavedrab@gmail.com?subject=Solicitud%20de%20Demo%20EspíaLocal"
                  >
                    {translations[lang].startNow}
                  </a>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-espia-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2 
              className="section-title text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {translations[lang].plansTitle}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {translations[lang].plans.map((plan, index) => (
                <PricingCard
                  key={index}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  stripeId={plan.stripeId}
                  onSelect={() => handlePlanSelect(plan.name.toLowerCase())}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-espia-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="section-title">
                Lo que dicen nuestros clientes
              </h2>
              <p className="section-subtitle">
                Descubre cómo EspíaLocal está transformando negocios como el tuyo
              </p>
            </motion.div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding bg-espia-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="section-title">
                Preguntas Frecuentes
              </h2>
              <p className="section-subtitle">
                Resolvemos tus dudas sobre nuestro servicio de inteligencia competitiva
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "¿Cómo funciona EspíaLocal?",
                  answer: "Analizamos las reseñas públicas de tus competidores para identificar patrones, tendencias y áreas de mejora. Recibirás un dashboard con insights accionables que te ayudarán a tomar mejores decisiones para tu negocio."
                },
                {
                  question: "¿Es legal monitorear a la competencia?",
                  answer: "Sí, nuestro servicio es 100% legal. Solo analizamos información pública disponible en plataformas de reseñas y redes sociales. No accedemos a datos privados ni confidenciales."
                },
                {
                  question: "¿Qué tipo de información obtendré?",
                  answer: "Recibirás análisis detallados sobre la experiencia del cliente, puntos fuertes y débiles de la competencia, tendencias del mercado, y oportunidades de mejora específicas para tu negocio."
                },
                {
                  question: "¿Cuánto tiempo toma ver resultados?",
                  answer: "La mayoría de nuestros clientes comienzan a ver resultados en el primer mes. El dashboard te permite implementar cambios rápidamente y medir su impacto."
                },
                {
                  question: "¿Puedo elegir qué competidores monitorear?",
                  answer: "Sí, tú eliges qué competidores quieres monitorear. Te ayudamos a identificar los más relevantes para tu negocio y puedes cambiar tu selección en cualquier momento."
                },
                {
                  question: "¿Qué industrias cubren?",
                  answer: "Actualmente cubrimos más de 12 industrias diferentes, incluyendo restaurantes, retail, servicios profesionales, y más. Si tu industria no está en la lista, contáctanos para evaluar su inclusión."
                },
                {
                  question: "¿Cómo se presentan los datos?",
                  answer: "Los datos se presentan en un dashboard intuitivo y fácil de entender, con gráficos, tablas y análisis detallados. También ofrecemos reportes personalizados según tus necesidades específicas."
                },
                {
                  question: "¿Ofrecen soporte técnico?",
                  answer: "Sí, todos nuestros planes incluyen soporte por email. Los planes Pro y Elite incluyen soporte prioritario y consultas personalizadas con nuestro equipo de análisis."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover-lift"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-gray-400 mb-8">
                ¿Tienes más preguntas? No dudes en contactarnos
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handlePlanSelect('contact')}
              >
                {translations[lang].startNow}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-espia-dark">
          {/* Fondo con patrón geométrico */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-espia-blue/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.05)_25%,_rgba(255,255,255,0.05)_50%,_transparent_50%,_transparent_75%,_rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Lado izquierdo - Contenido */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-2 rounded-full bg-espia-blue/10 text-espia-blue text-sm font-medium">
                    {translations[lang].startNow}
                  </span>
                </motion.div>

                <motion.h2
                  className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Transforma tu
                  <br />
                  <span className="text-espia-mint">negocio</span> con
                  <br />
                  datos reales
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-400 mb-12 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Únete a cientos de empresas que ya están tomando decisiones más inteligentes con EspíaLocal.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-espia-mint text-espia-dark hover:bg-espia-mint/90 px-8 py-4 text-lg font-medium"
                    onClick={() => handlePlanSelect('subscribe')}
                  >
                    {translations[lang].buyNow}
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium"
                    onClick={() => handlePlanSelect('contact')}
                  >
                    Ver Demo
                  </Button>
                </motion.div>

                {/* Estadísticas */}
                <motion.div
                  className="grid grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400">Clientes Activos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">40%</div>
                    <div className="text-gray-400">Mejora Promedio</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">12+</div>
                    <div className="text-gray-400">Industrias</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Lado derecho - Ilustración/Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-espia-charcoal/50 backdrop-blur-lg border border-white/10">
                  {/* Simulación de Dashboard */}
                  <div className="absolute inset-0 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-sm text-gray-400">Dashboard</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="h-4 w-3/4 bg-espia-blue/20 rounded mb-2" />
                        <div className="h-8 w-full bg-espia-blue/30 rounded" />
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="h-4 w-3/4 bg-espia-mint/20 rounded mb-2" />
                        <div className="h-8 w-full bg-espia-mint/30 rounded" />
                      </div>
                      <div className="col-span-2 bg-white/5 rounded-lg p-4">
                        <div className="h-4 w-1/2 bg-purple-500/20 rounded mb-2" />
                        <div className="h-24 w-full bg-purple-500/30 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Efectos de brillo */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-espia-blue to-espia-mint opacity-20 blur-xl"
                    animate={{
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-espia-blue/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-espia-mint/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-espia-dark py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Enlaces Rápidos</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>
                <p className="text-gray-400">info@espialocal.com</p>
                <p className="text-gray-400 mt-2">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Síguenos</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
                <p className="text-gray-400 mb-4">Suscríbete para recibir actualizaciones y ofertas especiales.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="bg-espia-charcoal border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-espia-blue"
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handlePlanSelect('newsletter')}
                  >
                    Suscribir
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">© EspíaLocal 2025. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 