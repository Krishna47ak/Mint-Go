import React from "react";

const Health = ({ totalSteps, totalDistance, totalCalories, activeTime }) => {
  const StatCard = ({ icon, label, value }) => {
    return (
      <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[8rem] mt-6">
        <div className="text-3xl mb-2">{icon}</div>
        <p className="text-sm font-medium text-gray-300 mb-1 w-auto text-nowrap">{label}</p>
        <p className="text-xl font-bold text-white w-auto">{value}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
      <StatCard icon="🏃‍♂️" label="Total Steps" value={totalSteps} />
      <StatCard icon="📏" label="Total Distance" value={totalDistance} />
      <StatCard icon="🔥" label="Total Calories" value={totalCalories} />
      <StatCard icon="⏱️" label="Active Time" value={activeTime} />
    </div>
  );
};

export default Health;
