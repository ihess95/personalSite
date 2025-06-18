import { motion } from "framer-motion";

function ContentArea({ activeRecord }: { activeRecord: string | null }) {
  return (
    <motion.div className="text-center" layout>
      <motion.div
        className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-2xl mx-auto"
        animate={{
          scale: activeRecord ? 1.02 : 1,
          boxShadow: activeRecord
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4"
          key={activeRecord || "default"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeRecord ? `${activeRecord} Section` : "Select a category above"}
        </motion.h2>

        <motion.p
          className="text-gray-600"
          key={`content-${activeRecord || "default"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {activeRecord
            ? `This is where your ${activeRecord.toLowerCase()} content will appear. You can add project galleries, descriptions, links, and more!`
            : "Choose Music, Movies, or Games to see related content."}
        </motion.p>

        {activeRecord && (
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-gray-500">
              <motion.div
                className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="text-sm">Now Playing</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ContentArea;
