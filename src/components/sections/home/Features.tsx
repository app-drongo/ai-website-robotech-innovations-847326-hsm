'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Cpu,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Cog,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  badge: 'Core Capabilities',
  mainTitle: 'Advanced Robotics Platform',
  mainTitleHighlight: 'Built for Industry 4.0',
  mainDescription:
    'Revolutionize your operations with our comprehensive robotics platform designed for manufacturing, logistics, and automation industries.',
  feature1Title: 'AI-Powered Vision Systems',
  feature1Description:
    'Advanced computer vision with real-time object recognition, quality inspection, and adaptive learning capabilities.',
  feature1Badge: 'AI Vision',
  feature1Image:
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=400&auto=format&fit=crop',
  feature2Title: 'Industrial-Grade Security',
  feature2Description:
    'Military-grade encryption with secure communication protocols and complete operational audit trails.',
  feature2Badge: 'Security',
  feature2Image:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop',
  feature3Title: 'Mobile Control Interface',
  feature3Description:
    'Intuitive mobile apps for remote monitoring, control, and real-time diagnostics of your robotic fleet.',
  feature3Badge: 'Mobile',
  feature3Image:
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop',
  feature4Title: 'Multi-Robot Coordination',
  feature4Description:
    'Seamlessly orchestrate multiple robots across different locations with centralized fleet management.',
  feature4Badge: 'Fleet',
  feature4Image:
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=400&auto=format&fit=crop',
  feature5Title: 'Performance Analytics',
  feature5Description:
    'Real-time performance metrics, predictive maintenance alerts, and comprehensive operational insights.',
  feature5Badge: 'Analytics',
  feature5Image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
  feature6Title: 'Adaptive Automation',
  feature6Description:
    'Self-learning algorithms that optimize workflows, reduce downtime, and adapt to changing conditions.',
  feature6Badge: 'Automation',
  feature6Image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop',
  feature7Title: 'Open API Platform',
  feature7Description:
    'Comprehensive REST APIs for seamless integration with existing ERP, MES, and IoT systems.',
  feature7Badge: 'Integration',
  feature7Image:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop',
  feature8Title: 'Expert Robotics Support',
  feature8Description:
    '24/7 technical support from robotics engineers with guaranteed response times and remote diagnostics.',
  feature8Badge: 'Support',
  feature8Image:
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop',
  feature9Title: 'Secure Data Management',
  feature9Description:
    'Edge computing with encrypted data storage, automated backups, and complete data sovereignty.',
  feature9Badge: 'Privacy',
  feature9Image:
    'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=400&auto=format&fit=crop',
  ctaQuestion: 'Ready to transform your operations with robotics?',
  primaryCTA: 'Start Free Pilot',
  primaryCTAHref: '/',
  secondaryCTA: 'Schedule Consultation',
  secondaryCTAHref: '/',
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      icon: Cpu,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
      image: config.feature1Image,
    },
    {
      icon: Shield,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
      image: config.feature2Image,
    },
    {
      icon: Smartphone,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
      image: config.feature3Image,
    },
    {
      icon: Globe,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
      image: config.feature4Image,
    },
    {
      icon: BarChart3,
      title: config.feature5Title,
      description: config.feature5Description,
      badge: config.feature5Badge,
      image: config.feature5Image,
    },
    {
      icon: Cog,
      title: config.feature6Title,
      description: config.feature6Description,
      badge: config.feature6Badge,
      image: config.feature6Image,
    },
    {
      icon: Code2,
      title: config.feature7Title,
      description: config.feature7Description,
      badge: config.feature7Badge,
      image: config.feature7Image,
    },
    {
      icon: Headphones,
      title: config.feature8Title,
      description: config.feature8Description,
      badge: config.feature8Badge,
      image: config.feature8Image,
    },
    {
      icon: Lock,
      title: config.feature9Title,
      description: config.feature9Description,
      badge: config.feature9Badge,
      image: config.feature9Image,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      data-editable="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-editable-src={`feature${index + 1}Image`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge
                      variant="secondary"
                      className="absolute top-3 right-3 text-xs bg-background/90 backdrop-blur-sm"
                    >
                      <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                    </Badge>
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="size-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      <span data-editable={`feature${index + 1}Description`}>
                        {feature.description}
                      </span>
                    </CardDescription>
                  </CardContent>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
