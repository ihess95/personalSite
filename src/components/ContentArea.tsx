import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectDisplayHandler from "./ProjectDisplayHandler";

type ProjectMode = "abstract" | "reflection" | "full" | "sources";

function ContentArea({ activeRecord }: { activeRecord: string | null }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentMode, setCurrentMode] = useState<ProjectMode>("abstract");

  // Reset to abstract when activeRecord changes - I don't think this is working
  const handleRecordChange = (newRecord: string | null) => {
    if (newRecord !== activeRecord) {
      setCurrentMode("abstract");
    }
  };

  // Call this effect when activeRecord changes
  useEffect(() => {
    handleRecordChange(activeRecord);
  }, [activeRecord]);

  if (isFullScreen && activeRecord) {
    return (
      <motion.div
        className="fixed inset-0 bg-white z-50 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Reading Header */}
        <div className="sticky top-0 bg-white border-b shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            {activeRecord} - Full Paper
          </h1>
          <button
            onClick={() => setIsFullScreen(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>

        {/* Full Paper Content with Scrolling */}
        <div className="max-w-4xl mx-auto p-8">
          <div className="prose prose-lg max-w-none text-black max-h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ProjectDisplayHandler
              projectLabel={activeRecord.toLowerCase()}
              mode="full"
            />
          </div>
        </div>
      </motion.div>
    );
  }

  const getModeConfig = (mode: ProjectMode) => {
    const configs = {
      abstract: {
        icon: "📄",
        label: "Abstract",
        bgColor: "from-gray-50 to-gray-100",
      },
      reflection: {
        icon: "💭",
        label: "Reflection",
        bgColor: "from-blue-50 to-indigo-50",
      },
      full: {
        icon: "📖",
        label: "Full Text",
        bgColor: "from-green-50 to-emerald-50",
      },
      sources: {
        icon: "📚",
        label: "Sources",
        bgColor: "from-purple-50 to-violet-50",
      },
    };
    return configs[mode];
  };

  const currentConfig = getModeConfig(currentMode);

  return (
    <motion.div className="text-center" layout>
      <motion.div
        className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto"
        animate={{
          scale: activeRecord ? 1.02 : 1,
          boxShadow: activeRecord
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-gray-800 p-6 border-b"
          key={activeRecord || "default"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeRecord
            ? `${activeRecord} Academic Work`
            : "Select a category above"}
        </motion.h2>

        <motion.div
          key={`content-${activeRecord || "default"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {activeRecord ? (
            <div className="p-6">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {(
                  ["abstract", "reflection", "full", "sources"] as ProjectMode[]
                ).map((mode) => {
                  const config = getModeConfig(mode);
                  return (
                    <button
                      key={mode}
                      onClick={() => setCurrentMode(mode)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                        currentMode === mode
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{config.icon}</span>
                      {config.label}
                    </button>
                  );
                })}
              </div>

              {/* Content Section with Scrolling */}
              <motion.div
                key={currentMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 bg-gradient-to-r ${
                  currentConfig.bgColor
                } rounded-lg border-l-4 ${
                  currentMode === "abstract"
                    ? "border-gray-400"
                    : currentMode === "reflection"
                    ? "border-blue-400"
                    : currentMode === "full"
                    ? "border-green-400"
                    : "border-purple-400"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">{currentConfig.icon}</span>
                  {currentConfig.label}
                </h3>
                <div className="prose prose-sm max-w-none text-left text-gray-700 max-h-96 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  <ProjectDisplayHandler
                    projectLabel={activeRecord.toLowerCase()}
                    mode={currentMode}
                  />
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={() => setIsFullScreen(true)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  <span>🔍</span>
                  View Full Screen
                </button>

                <button
                  onClick={() => {
                    /* Handle download or external link */
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center gap-2"
                >
                  <span>⬇️</span>
                  Download PDF
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-gray-600">
              Choose a category to view academic papers and reflections.
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContentArea;
