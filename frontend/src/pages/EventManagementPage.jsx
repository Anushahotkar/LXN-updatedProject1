import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import mockData from '../data/mockData';
import { CalendarDays, MapPin, Users } from 'lucide-react';

const EventManagementPage = () => {
    const getAttendeeBadgeColor = (count) => {
        if (count > 5000) return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
        if (count > 1000) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
    };

    return (
        <div className="space-y-8">
            <PageTitle
                title="Event Management"
                subtitle="Schedule and manage campaign events."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.events.map((event) => (
                    <Card
                        key={event.id}
                        className="p-6 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] flex flex-col justify-between"
                    >
                        {/* Event Title */}
                        <h3 className="text-lg font-bold text-primaryAccent mb-3">
                            {event.name}
                        </h3>

                        {/* Event Date */}
                        <div className="flex items-center text-sm text-textMuted mb-2">
                            <CalendarDays className="w-4 h-4 mr-2 text-primaryAccent" />
                            {event.date}
                        </div>

                        {/* Event Location */}
                        <div className="flex items-center text-sm text-textMuted mb-4">
                            <MapPin className="w-4 h-4 mr-2 text-primaryAccent" />
                            {event.location}
                        </div>

                        {/* Attendee Count */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                            <span className="flex items-center text-sm text-textMuted">
                                <Users className="w-4 h-4 mr-2 text-primaryAccent" />
                                Expected Attendees
                            </span>
                            <span
                                className={`px-2 py-1 text-xs font-semibold rounded-full ${getAttendeeBadgeColor(
                                    event.attendees
                                )}`}
                            >
                                {event.attendees.toLocaleString('en-IN')}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default EventManagementPage;
