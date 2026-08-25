import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export function AccountDeletion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen"
    >
      <Helmet>
        <title>Account Deletion | MuscleHub</title>
        <meta name="description" content="Instructions for deleting your MuscleHub account and data." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Account Deletion</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your data and account deletion requests.</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">How to Delete Your Account and Data</h2>
          <p className="mb-6">
            At MuscleHub, we respect your privacy and give you full control over your data. If you wish to delete your account and all associated data, you can do so easily by following the steps below.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Method 1: In-App Deletion</h3>
          <p className="mb-4">The fastest way to delete your account is directly through the MuscleHub app:</p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Open the MuscleHub application on your mobile device.</li>
            <li>Log in to your account.</li>
            <li>Navigate to your profile or <strong>Settings</strong>.</li>
            <li>Select <strong>Account</strong>.</li>
            <li>Tap on <strong>Delete Account</strong> and confirm your choice.</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Method 2: Email Request</h3>
          <p className="mb-4">If you cannot access the app or prefer to request deletion via email, please contact our support team:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Send an email to <strong>privacy@musclehub.com</strong> from the email address associated with your MuscleHub account.</li>
            <li>Use the subject line: <strong>"Account Deletion Request"</strong>.</li>
            <li>In the body of the email, state that you wish to have your account and all associated data permanently deleted.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">What Data is Deleted?</h2>
          <p className="mb-4">When you request account deletion, the following data is permanently removed from our active databases within 30 days:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Personal Profile Information (Name, Email, Phone Number, etc.)</li>
            <li>Workout Logs and History</li>
            <li>Dietary Preferences and Goals</li>
            <li>Attendance Records</li>
          </ul>
          
          <p className="mb-6">
            <strong>Note:</strong> We may retain certain financial transaction records for legal and compliance reasons, as outlined in our <a href="/privacy-policy" className="text-[#E53935] hover:underline">Privacy Policy</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions regarding data deletion or need further assistance, please contact us at:
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
