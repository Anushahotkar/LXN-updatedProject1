import CampaignManagerDashboard from "./CampaignManagerDashboard";
import DashboardSidebar from "../components/DashboardSidebar";
import CandidateDashboard from "./CandidateDashboard";
import DataAnalystDashboard from "./DataAnalystDashboard";
import FieldOrganizerDashboard from "./FieldOrganizerDashboard";
import CommunicationsDirectorDashboard from "./CommunicationsDirectorDashboard";
import VoterAnalyticsPage from "./VoterAnalyticsPage";
import CampaignStrategyPage from "./CampaignStrategyPage";
import SentimentAndMediaPage from "./SentimentAndMediaPage";
import PredictionsPage from "./PredictionsPage";
import ReportsPage from "./ReportsPage";
import DataManagementPage from "./DataManagementPage";
import BudgetTrackerPage from "./BudgetTrackerPage";
import CompetitorAnalysisPage from "./CompetitorAnalysisPage";
import EventManagementPage from "./EventManagementPage";
import AdCampaignsPage from "./AdCampaignsPage";
import PageTitle from "../components/PageTitle";
import VolunteerManagementPage from "./VolunteerManagementPage";
import DashboardHeader from "../components/DashboardHeader";
import { useState } from "react";
import DailyBriefing from "./DailyBriefing";
import CampaignDashboardSidebar from "../pages/CampaignDashboardSidebar";
import SpeechesAndTalkingPoints from "./SpeechesAndTalkingPoints";
import ModelPerformance from "./ModelPerformance";
import GOTVDashboard from "./GOTVDashboard";
import PressReleaseManagement from "./PressReleaseManagement";
import SocialMediaPlanner from "./SocialMediaPlanner";
import ThemeToggle from "../components/ThemeToggle";

// import CampaignManagerDashboard from "./CampaignManagerDashboard";


// --- Dashboard Main Component ---
const Dashboard = ({ userRole, setPage, user, darkMode, setDarkMode }) => {
    const [activeScreen, setActiveScreen] = useState('Main Dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderActiveScreen = () => {
        // Main dashboard views
        if (activeScreen === 'Main Dashboard') {
            switch (userRole) {
                case 'Campaign Manager': return <CampaignManagerDashboard />;
                case 'Candidate': return <CandidateDashboard />;
                case 'Data Analyst': return <DataAnalystDashboard />;
                case 'Field Organizer': return <FieldOrganizerDashboard />;
                case 'Communications Director': return <CommunicationsDirectorDashboard />;
                // default: return <CampaignManagerDashboard />;
            }
        }
        
        // Other navigable pages
        switch (activeScreen) {
            case 'Voter Analytics': case 'Voter Lists': return <VoterAnalyticsPage />;
            case 'Campaign Strategy': return <CampaignStrategyPage />;
            case 'Sentiment Monitoring': case 'Media Highlights': case 'Media Monitoring': case 'Messaging': return <SentimentAndMediaPage />;
            case 'AI Predictions': return <PredictionsPage />;
            case 'Reports': return <ReportsPage />;
            case 'Custom Models': case 'Data Validation': case 'Data Pipeline': case 'Geospatial Analysis': case 'Voter Journey': case 'Data Export': return <DataManagementPage />;
            case 'Canvassing Maps': return <FieldOrganizerDashboard />;
            case 'Budget Tracker': return <BudgetTrackerPage />;
            case 'Competitor Analysis': return <CompetitorAnalysisPage />;
            case 'Event Management': return <EventManagementPage />;
            case 'Ad Campaign Performance': return <AdCampaignsPage />;
            case 'Internal Comms': return <PageTitle title="Internal Communications" />;
            case 'Daily Briefing': return <DailyBriefing/>
            case 'Speeches & Talking Points': return <SpeechesAndTalkingPoints/>;
            case 'Constituency Deep Dive': return <PageTitle title="Constituency Deep Dive" />;
            case 'Endorsements': return <PageTitle title="Endorsements Tracker" />;
            case 'Media Appearances': return <PageTitle title="Media Appearances" />;
            case 'Volunteer Management': return <VolunteerManagementPage />;
            case 'GOTV Dashboard': return <GOTVDashboard/>
            case 'Polling Booths': return <PageTitle title="Polling Booth Management" />;
            case 'Issue Reporting': return <PageTitle title="Issue Reporting" />;
            case 'Resource Center': return <PageTitle title="Resource Center" />;
            case 'Press Releases': return <PressReleaseManagement/>;
            case 'Social Media Planner': return <SocialMediaPlanner/>;
            case 'Crisis Management': return <PageTitle title="Crisis Management" />;
            case 'Influencer Outreach': return <PageTitle title="Influencer Outreach" />;
            case 'A/B Test Results': return <PageTitle title="A/B Test Results" />;
            case 'Model Performance':return <ModelPerformance/>;
            default:
                return <CampaignManagerDashboard />;
        }
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div className="flex h-screen bg-lightBg dark:bg-darkBg text-textDark dark:text-textLight">
              
  <DashboardSidebar
    userRole={userRole}
    activeScreen={activeScreen}
    setActiveScreen={setActiveScreen}
    isOpen={sidebarOpen}
    setIsOpen={setSidebarOpen}
  />

                <div className="flex-1 flex flex-col overflow-hidden">
                    <DashboardHeader userRole={userRole} setPage={setPage} user={user} darkMode={darkMode} setDarkMode={setDarkMode} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-lightBg dark:bg-darkBg p-6">
                        {renderActiveScreen()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;