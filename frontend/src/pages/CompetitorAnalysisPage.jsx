import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import mockData from '../data/mockData';

const CompetitorAnalysisPage = () => {
    const getSentimentColor = (score) => {
        if (score > 0) return 'text-green-500';
        if (score < 0) return 'text-red-500';
        return 'text-yellow-500';
    };

    return (
        <div className="space-y-8">
            <PageTitle
                title="Competitor Analysis"
                subtitle="Track opponent performance and strategy."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.competitors.map((comp) => (
                    <Card
                        key={comp.name}
                        className="p-6 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] flex flex-col justify-between"
                    >
                        {/* Competitor Name */}
                        <h3 className="text-xl font-bold text-primaryAccent mb-4">
                            {comp.name}
                        </h3>

                        {/* Sentiment */}
                        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
                            <span className="text-sm text-textMuted">Sentiment Score</span>
                            <span
                                className={`font-semibold ${getSentimentColor(
                                    comp.sentiment
                                )}`}
                            >
                                {comp.sentiment > 0 ? `+${comp.sentiment}` : comp.sentiment}
                            </span>
                        </div>

                        {/* Key Issue */}
                        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
                            <span className="text-sm text-textMuted">Key Issue</span>
                            <span className="px-2 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full">
                                {comp.key_issue}
                            </span>
                        </div>

                        {/* Media Mentions */}
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-textMuted">
                                Media Mentions (24h)
                            </span>
                            <span className="px-2 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full">
                                {comp.media_mentions}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CompetitorAnalysisPage;
