// Import the necessary modules
"use client";
import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { IoSearch } from "react-icons/io5";

// Your assignments data
const assignmentsData = [
  {
    assignmentId: "1",
    assignmentTitle: "Web Development Project",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    assignmentDescription:
      "Create a responsive website using React with HTML, CSS, and JavaScript.",
    dueDate: "2023-02-28",
  },
  {
    assignmentId: "2",
    assignmentTitle: "Database Design Assignment",
    tags: ["SQL", "Database Design"],
    assignmentDescription:
      "Design a relational database for a given scenario and provide SQL queries.",
    dueDate: "2023-03-15",
  },
  {
    assignmentId: "3",
    assignmentTitle: "Machine Learning Project",
    tags: ["Python", "Machine Learning", "TensorFlow"],
    assignmentDescription:
      "Implement a machine learning model using Python and TensorFlow.",
    dueDate: "2023-04-10",
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // Function to filter assignments based on search query and tags
  const filteredAssignments = assignmentsData.filter((assignment) => {
    const nameMatch = assignment.assignmentTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const tagMatch = tagFilter ? assignment.tags.includes(tagFilter) : true;
    return nameMatch && tagMatch;
  });

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-[mine] text-4xl lg:text-6xl text-white pt-32 px-10">
        A<span className="text-[#4DFFDB]">SS</span>IGNMENT
        <span className="text-[#4DFFDB]">S</span>
      </h2>

      {/* Search Bar */}
      <div className="px-10 py-4 flex gap-3">
        <div className="w-3/4 relative">
          <input
            type="text"
            placeholder="Search by Assignment Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full border rounded-md"
          />
          <div className="absolute top-2 right-4 flex items-center ">
            <IoSearch className="text-gray-500" size={25} />
          </div>
        </div>
        <select
          title="tagsfilter"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="px-4 py-2 w-1/4 border rounded-md"
        >
          <option value="">Filter by Tag</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="SQL">SQL</option>
          <option value="Database Design">Database Design</option>
          <option value="Python">Python</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="TensorFlow">TensorFlow</option>
        </select>
      </div>

      <div className="grid justify-center items-center px-10 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAssignments.map((assignment) => (
          <AssignmentCard key={assignment.assignmentId} {...assignment} />
        ))}
      </div>
    </div>
  );
};

export default Page;
