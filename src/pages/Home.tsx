import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero/Hero';
import { TrustedBy } from '../components/TrustedBy/TrustedBy';
import { Features } from '../components/Features/Features';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { Showcase } from '../components/Showcase/Showcase';
import { Comparison } from '../components/Comparison/Comparison';
import { Pricing } from '../components/Pricing/Pricing';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { FAQ } from '../components/FAQ/FAQ';
import { CTA } from '../components/CTA/CTA';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>MuscleHub | Manage Your Gym Smarter</title>
        <meta name="description" content="The all-in-one platform to manage members, trainers, payments, and grow your fitness business effortlessly." />
        <meta property="og:title" content="MuscleHub | Gym Management Software" />
        <meta property="og:description" content="The all-in-one platform to manage members, trainers, payments, and grow your fitness business effortlessly." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Showcase />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </motion.div>
  );
}
