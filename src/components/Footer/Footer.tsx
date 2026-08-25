import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '../Common/Button';
import logoModern from '../../assets/logo_modern.png';

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(`Successfully subscribed with ${data.email}!`);
    reset();
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <div className="flex items-center justify-center">
                <img src={logoModern} alt="MuscleHub Logo" className="h-14 w-auto object-contain scale-[1.3] origin-center" />
              </div>
              <span className="font-bold text-2xl tracking-tight ml-2">MuscleHub</span>
            </Link>
            <p className="text-gray-500 mb-6 max-w-sm">
              The complete gym management platform. Manage members, trainers, payments, and grow your fitness business smarter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E53935] transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E53935] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E53935] transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E53935] transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 dark:text-white">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 dark:text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 dark:text-white">Stay Updated</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  {...register('email')}
                />
                <Button size="icon" type="submit" disabled={isSubmitting}>
                  <ArrowRight size={18} />
                </Button>
              </div>
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </form>
          </div>

        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} MuscleHub Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/account-deletion" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Account Deletion</Link>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
