import TrendingUpIcon from "../icons/TrendingUpIcon";
import Card from "./Card";

const KPI = ({ title, value, trend, unit = '' }) => {
    const isPositive = trend >= 0;
    return (
        <Card className="p-4 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
            <p className="text-sm text-textMuted">{title}</p>
            <p className="text-3xl font-bold text-textDark dark:text-textLight my-1">
                {value}{unit}
            </p>
            <div className={`flex items-center text-sm ${isPositive ? 'text-secondaryAccent' : 'text-pinkAccent'}`}>
                <TrendingUpIcon className={`w-4 h-4 mr-1 ${!isPositive && 'transform rotate-180'}`} />
                <span>{trend}% vs last week</span>
            </div>
        </Card>
    );
};

export default KPI;
