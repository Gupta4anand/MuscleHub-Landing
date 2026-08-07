import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Owner, FitLife Studio',
    content: 'MuscleHub completely transformed how we run our gym. The QR check-in alone saved us hours of front desk work every week.',
    rating: 5,
    avatar: 'SJ',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Mike Torres',
    role: 'Head Trainer, Iron Forge',
    content: 'The trainer dashboard is incredible. I can track all my clients, update their workout plans, and monitor their progress from my phone.',
    rating: 5,
    avatar: 'MT',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Emily Chen',
    role: 'Manager, Zenith Fitness',
    content: 'We saw a 30% increase in member retention after switching to MuscleHub. The automated push notifications keep everyone engaged.',
    rating: 5,
    avatar: 'EC',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'David Smith',
    role: 'Founder, Apex Athletics',
    content: 'The analytics are mind-blowing. I finally understand our revenue streams and peak hours without wrestling with spreadsheets.',
    rating: 5,
    avatar: 'DS',
    color: 'bg-[#E53935]/20 text-[#E53935]',
  },
];

export function Testimonials() {
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Loved by Gym Owners
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our partners have to say about MuscleHub.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden py-4">
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 dark:from-gray-900 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 dark:from-gray-900 pointer-events-none" />
        
        <div className="flex space-x-6 animate-[marquee_40s_linear_infinite] px-4 hover:[animation-play-state:paused]">
          {repeatedTestimonials.map((t, index) => (
            <div 
              key={index} 
              className="w-[400px] flex-none bg-gray-50/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm transition-transform hover:scale-[1.02] cursor-default"
            >
              <div className="flex text-[#FFCC00] mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg", t.color)}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
