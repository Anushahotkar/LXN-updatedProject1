import React from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { BookOpen, Stethoscope, Landmark, MessageSquare, BarChart2, ShieldAlert } from "lucide-react";
import mockData from "../data/mockData";

const iconMap = {
  Economy: BarChart2,
  Healthcare: Stethoscope,
  "Foreign Policy": Landmark,
  Education: BookOpen,
  Default: MessageSquare,
};

const SpeechesAndTalkingPoints = () => {
  const { speechesAndTalkingPoints = [] } = mockData;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Page Title */}
      <PageTitle
        title="Speeches & Talking Points"
        subtitle="Centralized, approved messaging for rallies, debates, and media appearances."
      />

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speechesAndTalkingPoints.length > 0 ? (
          speechesAndTalkingPoints.map((topic, idx) => {
            const Icon = iconMap[topic.category] || iconMap.Default;
            return (
              <Card
                key={idx}
                className="flex flex-col p-5 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Icon className="text-blue-600 dark:text-blue-300 w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {topic.category}
                  </h2>
                </div>

                {/* Talking Points */}
                {topic.points?.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Key Talking Points
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      {topic.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Statistics */}
                {topic.statistics?.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Key Statistics
                    </h3>
                    <ul className="space-y-2">
                      {topic.statistics.map((stat, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md"
                        >
                          <BarChart2 className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {stat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rebuttals */}
                {topic.rebuttals?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Common Rebuttals
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      {topic.rebuttals.map((reb, rIdx) => (
                        <li key={rIdx}>{reb}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            );
          })
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center col-span-full">
            No speeches or talking points available.
          </p>
        )}
      </div>
    </div>
  );
};

export default SpeechesAndTalkingPoints;
