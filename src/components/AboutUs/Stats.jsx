import React from "react";

const stats = [
  { id: 1, name: "Years of Experience", value: "11" },
  { id: 2, name: "Customers", value: "X" },
  { id: 3, name: "???", value: "Y" },
  { id: 4, name: "Revenue", value: "$XX" },
];

export default function Stats() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Milestones
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          A chronicle of our significant achievements and pivotal moments
          throughout our journey.
        </p>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-600">
              {stat.name}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
