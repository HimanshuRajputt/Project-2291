// import from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle } from "lucide-react";

const KnowWhy = () => {
  const data = [
    {
      region: "Global",
      "0-5 years": 23.8,
      "6-14 years": 18.5,
      "15-24 years": 12.4,
      "25-64 years": 8.7,
      "65+ years": 6.2,
    },
    {
      region: "India",
      "0-5 years": 27.4,
      "6-14 years": 19.2,
      "15-24 years": 14.8,
      "25-64 years": 11.6,
      "65+ years": 9.4,
    },
  ];

  const additionalInfo = {
    Global: {
      source: "State of Food Security and Nutrition in the World 2022",
      year: "2021",
      totalUndernourished: "828 million",
      percentage: "10.5%",
    },
    India: {
      source:
        "United Nations and other national reports on food security and nutrition",
      year: "2021-2023",
      totalUndernourished: "224.3 million",
      percentage: "13.7%",
    },
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe"];
  const ageGroups = [
    "0-5 years",
    "6-14 years",
    "15-24 years",
    "25-64 years",
    "65+ years",
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const regionInfo = additionalInfo[label];
    return (
      <div className="bg-white p-2 rounded-lg shadow-lg border">
        <p className="font-medium text-lg mb-2">{label}</p>
        <div className="mb-3 space-y-1">
          <p className="text-sm text-gray-600">Source: {regionInfo.source}</p>
          <p className="text-sm text-gray-600">Year: {regionInfo.year}</p>
          <p className="text-sm text-gray-600">
            Total Undernourished: {regionInfo.totalUndernourished}
          </p>
          <p className="text-sm text-gray-600">
            Overall Percentage: {regionInfo.percentage}
          </p>
        </div>
        <div className="border-t pt-2 space-y-1">
          {payload.map((entry) => (
            <p
              key={entry.name}
              style={{ color: entry.color }}
              className="text-sm"
            >
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-orange-50 mt-1 bg-gradient-to-r from-orange-50 via-white to-blue-50">
      <div className=" w-full px-4 md:px-6 py-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg ">
        <div className="space-y-4 md:space-y-6">
          {/* Alert Box */}
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-start gap-2 md:gap-3">
              <AlertCircle className="text-blue-500 mt-1 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-blue-800 mb-1 md:mb-2 text-sm md:text-base">
                  Daily Calorie Tracker
                </h3>
                <p className="text-xs md:text-sm text-blue-600">
                  Track your daily calories and join the fight against
                  undernourishment. Make informed decisions about your
                  nutrition.
                </p>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-xl md:text-2xl font-bold px-2">
            Global and Indian Undernourishment Analysis (2021-2023)
          </h2>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {Object.entries(additionalInfo).map(([region, info]) => (
              <div key={region} className="p-3 md:p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2 text-sm md:text-base">
                  {region} Overview
                </h3>
                <div className="space-y-1">
                  <p className="text-xs md:text-sm">
                    Total Undernourished: {info.totalUndernourished}
                  </p>
                  <p className="text-xs md:text-sm">
                    Population Percentage: {info.percentage}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-64 md:h-96 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" tick={{ fontSize: 12 }} />
                <YAxis
                  label={{
                    value: "Undernourishment %",
                    angle: -90,
                    position: "insideLeft",
                    fontSize: 12,
                  }}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                {ageGroups.map((ageGroup, index) => (
                  <Bar
                    key={ageGroup}
                    dataKey={ageGroup}
                    fill={COLORS[index]}
                    name={ageGroup}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom Alert */}
          <div className="p-3 md:p-4 bg-yellow-50 rounded-lg">
            <p className="text-xs md:text-sm text-yellow-800">
              Use our calorie calculator to track your daily nutrition and
              maintain a healthy diet.
            </p>
          </div>

          {/* Quote Section */}
          <div className="flex flex-col lg:flex-row bg-yellow-50 rounded-lg shadow-lg p-4 md:p-6 gap-4 md:gap-6">
            <div className="flex-1">
              <h1 className="text-sm md:text-base font-semibold text-gray-800 leading-relaxed text-center lg:text-left">
                As the old saying goes, <strong>"You are what you eat".</strong>{" "}
                This timeless wisdom reminds us that the food we consume
                directly influences our health and well-being. Tracking calories
                is a modern way to honor this truth, ensuring we fuel our bodies
                with the right balance of energy. Just as{" "}
                <strong>"a stitch in time saves nine", </strong> being mindful
                of what we eat today can prevent larger health issues in the
                future.
              </h1>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <img
                className="w-full max-w-md rounded-full"
                src="https://img.freepik.com/free-vector/people-eating-healthy-exercising-regularly_53876-64671.jpg?ga=GA1.1.884081781.1728731746&semt=ais_incoming"
                alt="Healthy Lifestyle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowWhy;

{
  /* <img
          className="w-1/2 min-h-fit "
          src="https://www.snapcalorie.com/images/Animation.gif"
          // src="https://img.freepik.com/free-vector/cute-drawn-height-meters-set-illustrated_23-2148888082.jpg?t=st=1737127271~exp=1737130871~hmac=f92fd0352ad0d06ea8be5c54d59e600300bf2b77eb603a818c35c56e4a640a7b&w=996"
          alt="GifImage"
        /> */
}
