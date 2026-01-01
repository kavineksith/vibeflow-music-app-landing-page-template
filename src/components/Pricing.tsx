import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { GlassButton } from './ui/GlassButton';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free Vibe',
      price: '$0',
      period: '/forever',
      features: ['Ad-supported listening', 'Standard audio quality', '5 Skips per hour', 'Mobile only'],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      features: ['Ad-free experience', 'Lossless Hi-Fi audio', 'Unlimited skips', 'Offline downloads', 'AI Playlist Generator'],
      cta: 'Get Premium',
      popular: true
    },
    {
      name: 'Family',
      price: '$14.99',
      period: '/month',
      features: ['Up to 6 accounts', 'Parental controls', 'Family mix playlist', 'All Premium features', 'Shared libraries'],
      cta: 'Join Family',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
       {/* Background gradient slash */}
       <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent skew-y-3 -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading title="Choose Your Flow" subtitle="Flexible plans for every type of listener." />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`glass-card relative p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-fuchsia-500/50 shadow-[0_0_40px_rgba(192,38,211,0.2)] scale-105 z-10' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-medium text-gray-300 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'bg-gray-800 text-gray-400'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <GlassButton 
                variant={plan.popular ? 'primary' : 'outline'} 
                glow={plan.popular} 
                className="w-full"
              >
                {plan.cta}
              </GlassButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};