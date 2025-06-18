{
  /* Things to implement
  my actual projects
  individual labels and covers for each project
  the damn animation from shelf to player
  */
}

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/Navbar";
import RecordPlayer from "./components/RecordPlayer";
import ContentArea from "./components/ContentArea";

export default function App() {
  const [activeRecord, setActiveRecord] = useState<string | null>(null);

  const handleRecordSelect = (label: string) => {
    // Toggle the record - if it's already active, stop it, otherwise start it
    setActiveRecord((prev) => (prev === label ? null : label));
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
      // This enables layout animations to work across the entire app
      layout
    >
      {/* Navigation - Fixed at top to maintain consistent shelf position */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-lg">
        <NavBar
          onRecordSelect={handleRecordSelect}
          activeRecord={activeRecord}
        />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Click a record to start playing
          </p>
        </motion.div>

        {/* Record Player - Centered and with consistent positioning */}
        <motion.div className="flex justify-center mb-16" layout>
          <RecordPlayer activeRecord={activeRecord} />
        </motion.div>
        <ContentArea activeRecord={activeRecord} />
      </div>
    </motion.div>
  );
}
