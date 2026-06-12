import React, { useState } from "react";
import { FiArrowDown, FiChevronDown } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const activeJobs = [
  {
    id: 1,
    title: "HR Intern",
    department: "Bushra Afzal",
    location: "Johar Town",
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Bushra Afzal",
    location: "Johar Town",
  },
  {
    id: 3,
    title: "Business Development Intern",
    department: "Bushra Afzal",
    location: "Johar Town",
  },
  {
    id: 4,
    title: "UI/UX Product Designer",
    department: "Bushra Afzal",
    location: "Johar Town",
  },
  {
    id: 5,
    title: "Talent Acquisition Specialist",
    department: "Bushra Afzal",
    location: "Johar Town",
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Bushra Afzal",
    location: "Johar Town",
  },
];
const departments = [
  "All Departments",
  "Engineering",
  "Design",
  "Marketing",
  "HR & People",
];
const jobTypes = [
  "All Job Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
];
const locations = ["All Locations", "Johar Town", "Remote"];
function Jobs() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Job Types");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <section className="py-8 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Current Job Openings</h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            Explore a variety of roles across our teams. We're looking for
            passionate individuals to join us on our mission.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
            <div className="relative w-full lg:col-span-2">
              <input
                type="text"
                placeholder="Search by job title or keyword"
                className="w-full px-6 py-3.5 pr-12 text-[13px] rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-white bg-blue-500 p-2 rounded-full pointer-events-none">
                <HiMiniMagnifyingGlass className="text-xl" />
              </div>
            </div>

            <div className="relative w-full mb-1">
              <div
                onClick={() => toggleDropdown("dept")}
                className={`flex items-center justify-between bg-white border ${openDropdown === "dept" ? "border-blue-600 ring-1 ring-blue-600" : "border-gray-200 hover:border-gray-400"} rounded-xl px-4 py-3 shadow-sm transition-all cursor-pointer`}
              >
                <span className="text-[13px] font-medium text-gray-700 truncate">
                  {selectedDept}
                </span>
                <FiChevronDown
                  className={`text-gray-500 text-lg flex-shrink-0 transition-transform duration-200 ${openDropdown === "dept" ? "rotate-180 text-blue-600" : ""}`}
                />
              </div>

              {openDropdown === "dept" && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden py-1.5 animate-fadeIn animate-duration-150">
                  {departments.map((dept) => (
                    <div
                      key={dept}
                      onClick={() => {
                        setSelectedDept(dept);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-2.5 text-[13px] font-medium transition-colors cursor-pointer ${selectedDept === dept ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                    >
                      {dept}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-full mb-1">
              <div
                onClick={() => toggleDropdown("type")}
                className={`flex items-center justify-between bg-white border ${openDropdown === "type" ? "border-blue-600 ring-1 ring-blue-600" : "border-gray-200 hover:border-gray-400"} rounded-xl px-4 py-3 shadow-sm transition-all cursor-pointer`}
              >
                <span className="text-[13px] font-medium text-gray-700 truncate">
                  {selectedType}
                </span>
                <FiChevronDown
                  className={`text-gray-500 text-lg flex-shrink-0 transition-transform duration-200 ${openDropdown === "type" ? "rotate-180 text-blue-600" : ""}`}
                />
              </div>

              {openDropdown === "type" && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden py-1.5 animate-fadeIn">
                  {jobTypes.map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-2.5 text-[13px] font-medium transition-colors cursor-pointer ${selectedType === type ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-full mb-1">
              <div
                onClick={() => toggleDropdown("loc")}
                className={`flex items-center justify-between bg-white border ${openDropdown === "loc" ? "border-blue-600 ring-1 ring-blue-600" : "border-gray-200 hover:border-gray-400"} rounded-xl px-4 py-3 shadow-sm transition-all cursor-pointer`}
              >
                <span className="text-[13px] font-medium text-gray-700 truncate">
                  {selectedLoc}
                </span>
                <FiChevronDown
                  className={`text-gray-500 text-lg flex-shrink-0 transition-transform duration-200 ${openDropdown === "loc" ? "rotate-180 text-blue-600" : ""}`}
                />
              </div>

              {openDropdown === "loc" && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden py-1.5 animate-fadeIn">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => {
                        setSelectedLoc(loc);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-2.5 text-[13px] font-medium transition-colors cursor-pointer ${selectedLoc === loc ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {activeJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 pt-2 px-2 transition-colors duration-200 group"
            >
              <div className="flex-1 min-w-0 pr-4 ml-2">
                <h3 className="text-[22px] font-semibold text-black/90 ">
                  {job.title}
                </h3>

                <div className="flex flex-col space-y-0.5">
                  <span className="text-[13px] text-gray-500">
                    {job.department}
                  </span>

                  <span className="text-[11px] text-gray-400">
                    {job.location}
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className=" text-gray-400 rounded-xl transition-all cursor-pointer">
                  <FiChevronDown className="text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
