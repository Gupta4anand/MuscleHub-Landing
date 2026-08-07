import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Common/Button';

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
    >
      <div className="text-[#E53935] font-black text-9xl mb-4">404</div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Page Not Found</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link to="/">Return Home</Link>
      </Button>
    </motion.div>
  );
}
