import React from 'react';

const JobsPage = ({ allJobs }) => {
  const { data } = allJobs;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">6 search results found</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(6).fill(data[0]).map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl hover:border hover:border-gray-200 hover:shadow-xl transition-shadow"
          >
            <p className="text-sm text-gray-400 mb-1">
              {new Date(job.created_at).toDateString()}
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {job.category.title}
            </h2>

            <div className="flex justify-between items-center text-sm mb-3 bg-gray-100 p-2 rounded-xl">
              <span className="px-3 py-1 rounded-full text-gray-700">
                {job.budget_type}
              </span>
              <span className="text-gray-800 font-medium">
                ${job.rate_from}–${job.rate_to}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {job.job_description?.slice(0, 100)}...
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Remote</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">{job.experience_level}</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {job.hiring_capacity} Freelancer
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              {job.skills.slice(0, 3).map((skill) => (
                <span key={skill.id} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  {skill.label}
                </span>
              ))}
              {job.skills.length > 3 && (
                <span className="text-blue-500 font-medium ml-1 mt-1">
                  +{job.skills.length - 3} more
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">
                Posted by <span className="font-medium text-gray-700 text-xl">Eamman Olio</span>
              </p>
            </div>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-900 transition mt-2">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
