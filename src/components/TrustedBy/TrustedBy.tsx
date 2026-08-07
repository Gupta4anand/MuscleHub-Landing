import { Dumbbell, Medal, Activity, Heart, Shield, Trophy } from 'lucide-react';

const partners = [
  { name: 'Gold\'s Gym', icon: Dumbbell },
  { name: 'Anytime Fitness', icon: Activity },
  { name: 'Planet Fitness', icon: Heart },
  { name: 'Equinox', icon: Trophy },
  { name: 'Crunch Fitness', icon: Shield },
  { name: 'F45 Training', icon: Medal },
];

export function TrustedBy() {
  // Duplicate for infinite scroll effect
  const repeatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-10 border-y border-gray-200 bg-gray-50/50 dark:bg-gray-900/50 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by 500+ Gyms Worldwide
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 dark:from-gray-900 pointer-events-none" />
        
        <div className="flex space-x-16 animate-[marquee_30s_linear_infinite] px-8">
          {repeatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap group">
                <Icon className="text-gray-400 group-hover:text-[#E53935] transition-colors" size={32} />
                <span className="text-xl font-bold text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 dark:from-gray-900 pointer-events-none" />
      </div>
    </section>
  );
}
