import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import mockData from '../data/mockData';

const BudgetTrackerPage = () => {
    const formatCurrency = (amount) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);

    const getBarColor = (percentage) => {
        if (percentage < 50) return 'bg-green-500';
        if (percentage < 80) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const spentPercentage = (mockData.budget.spent / mockData.budget.total) * 100;

    return (
        <div className="space-y-8">
            <PageTitle
                title="Budget Tracker"
                subtitle="Monitor campaign spending against the allocated budget."
            />

            {/* Overall Budget */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-textDark dark:text-textLight">
                            Overall Budget
                        </h3>
                        <p className="text-3xl font-bold mt-2">
                            {formatCurrency(mockData.budget.spent)}{' '}
                            <span className="text-lg text-textMuted font-medium">
                                / {formatCurrency(mockData.budget.total)}
                            </span>
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getBarColor(spentPercentage)} text-white`}>
                            {spentPercentage.toFixed(1)}% Spent
                        </span>
                    </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-4 overflow-hidden">
                    <div
                        className={`${getBarColor(spentPercentage)} h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${spentPercentage}%` }}
                    ></div>
                </div>
            </Card>

            {/* Category Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.budget.categories.map((cat) => {
                    const categoryPercentage = (cat.spent / cat.total) * 100;
                    return (
                        <Card
                            key={cat.name}
                            className="p-5 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] flex flex-col justify-between"
                        >
                            <div>
                                <h4 className="font-semibold text-textDark dark:text-textLight">
                                    {cat.name}
                                </h4>
                                <p className="text-2xl font-bold mt-1">
                                    {formatCurrency(cat.spent)}
                                </p>
                                <p className="text-sm text-textMuted">
                                    / {formatCurrency(cat.total)}
                                </p>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>{categoryPercentage.toFixed(1)}% Spent</span>
                                    <span>{cat.total - cat.spent > 0 ? 'Remaining' : 'Over Budget'}</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`${getBarColor(categoryPercentage)} h-2 rounded-full transition-all duration-500`}
                                        style={{ width: `${categoryPercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default BudgetTrackerPage;
