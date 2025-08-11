import React, { useState } from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import mockData from "../data/mockData";
import { Edit, CheckCircle, Send } from "lucide-react";

const statusColors = {
  Draft: "bg-gray-300 text-gray-800",
  "Awaiting Approval": "bg-yellow-300 text-yellow-900",
  Distributed: "bg-green-300 text-green-900",
};

const PressReleaseManagement = () => {
  const [pressReleases, setPressReleases] = useState(
    mockData.reports.map((report) => ({
      ...report,
      status: report.status || "Draft", // Add default status if missing
    }))
  );

  // Filter state
  const [filter, setFilter] = useState("All");

  const filteredReleases =
    filter === "All"
      ? pressReleases
      : pressReleases.filter((pr) => pr.status === filter);

  // Handlers for approving and distributing
  const approveRelease = (id) => {
    setPressReleases((prev) =>
      prev.map((pr) =>
        pr.id === id && pr.status === "Draft"
          ? { ...pr, status: "Awaiting Approval" }
          : pr
      )
    );
  };

  const distributeRelease = (id) => {
    setPressReleases((prev) =>
      prev.map((pr) =>
        pr.id === id && pr.status === "Awaiting Approval"
          ? { ...pr, status: "Distributed" }
          : pr
      )
    );
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-gray-900">
      <PageTitle
        title="Press Release Management"
        subtitle="Streamline drafting, reviewing, approving, and distributing official campaign communications."
      />

      {/* Filter */}
      <div className="mb-4 flex flex-wrap gap-3">
        {["All", "Draft", "Awaiting Approval", "Distributed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-1 rounded-full font-semibold text-sm transition ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <Card className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="p-3">Headline</th>
              <th className="p-3">Type</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReleases.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No press releases found for "{filter}"
                </td>
              </tr>
            ) : (
              filteredReleases.map((pr) => (
                <tr
                  key={pr.id}
                  className="border-t border-gray-300 dark:border-gray-700"
                >
                  <td className="p-3 max-w-xs truncate" title={pr.title}>
                    {pr.title}
                  </td>
                  <td className="p-3">{pr.type}</td>
                  <td className="p-3">{pr.date}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${statusColors[pr.status]}`}
                    >
                      {pr.status}
                    </span>
                  </td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      aria-label="Edit"
                      title="Edit Draft"
                      disabled={pr.status !== "Draft"}
                      className={`p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                      <Edit size={18} />
                    </button>
                    {pr.status === "Draft" && (
                      <button
                        onClick={() => approveRelease(pr.id)}
                        aria-label="Approve"
                        title="Approve Press Release"
                        className="p-1 rounded hover:bg-yellow-300 dark:hover:bg-yellow-700 text-yellow-700 dark:text-yellow-400"
                      >
                        <CheckCircle size={18} />
                      </button>
                    )}
                    {pr.status === "Awaiting Approval" && (
                      <button
                        onClick={() => distributeRelease(pr.id)}
                        aria-label="Distribute"
                        title="Distribute Press Release"
                        className="p-1 rounded hover:bg-green-300 dark:hover:bg-green-700 text-green-700 dark:text-green-400"
                      >
                        <Send size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default PressReleaseManagement;
