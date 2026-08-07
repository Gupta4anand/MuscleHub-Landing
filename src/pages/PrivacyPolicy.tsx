import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  const lastUpdated = "August 7, 2026";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen"
    >
      <Helmet>
        <title>Privacy Policy | MuscleHub</title>
        <meta name="description" content="Privacy Policy for MuscleHub app and platform." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to MuscleHub. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
            our website or use our mobile application.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
            <li><strong>Health & Fitness Data:</strong> Workout logs, dietary preferences, weight, and fitness goals you voluntarily provide to the app.</li>
            <li><strong>Financial Data:</strong> Data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.</li>
            <li><strong>Device Data:</strong> Information our servers automatically collect when you access the app, such as your native actions that are integral to the app, including device ID and type.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. Use of Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the app to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your purchases and subscriptions.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the app.</li>
            <li>Send you notifications related to your gym attendance, schedules, and account updates.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">4. Disclosure of Your Information</h2>
          <p className="mb-6">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows: 
            <strong> By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process.
            <strong> Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing and data analysis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">5. Security of Your Information</h2>
          <p className="mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information. 
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware that 
            despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be 
            guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">6. Your Data Rights & Account Deletion</h2>
          <p className="mb-4">
            Under applicable privacy laws (such as GDPR or CCPA) and Google Play Store policies, you have the right to access, modify, or delete your personal data.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Data Deletion Request:</strong> You can request the complete deletion of your account and associated data (including workout logs, payment history, and attendance records) at any time.</li>
            <li><strong>How to Delete Data:</strong> You may delete your account directly within the MuscleHub app by navigating to <strong>Settings &gt; Account &gt; Delete Account</strong>. Alternatively, you can email us at privacy@musclehub.com with the subject "Data Deletion Request".</li>
            <li><strong>Retention:</strong> Upon deletion, your personal data will be permanently removed from our active databases within 30 days, except where we are required to retain certain financial transaction records for legal compliance.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">7. Policy for Children</h2>
          <p className="mb-6">
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any 
            data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">8. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this Privacy Policy or wish to exercise your data rights, please contact us at:
            <br/><br/>
            <strong>MuscleHub Inc.</strong><br/>
            Email: privacy@musclehub.com<br/>
            Address: 123 Fitness Avenue, San Francisco, CA 94105
          </p>

        </div>
      </div>
    </motion.div>
  );
}
