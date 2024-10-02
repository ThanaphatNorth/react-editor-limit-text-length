import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Group 1", "Group 2", "Group 3", "Group 4"], // Labels for groups

  /* The `datasets` property in the data object is used to define different sets of data that will be
  displayed in the grouped stacked bar chart. Each dataset represents a different category or group
  of data points that will be visualized in the chart. In this case, there are multiple datasets
  representing different categories (Category A, Category B, Category C, Category D) with
  corresponding data values for each group (Group 1, Group 2, Group 3, Group 4). Each dataset also
  specifies the background color and the stack it belongs to for the stacked grouping effect in the
  chart. */

  /* example.
   label: "Category Name" 
   data: [Array of Group] of {Category Name}
   stack: "Sub-Group" 
  */
  datasets: [
    {
      label: "Category A",
      data: [12, 19, 3, 5], // Data for each group
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      stack: "Stack 0", // Stack name
    },
    {
      label: "Category B",
      data: [2, 3, 20, 3], // Data for each group
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      stack: "Stack 0", // Stack name
    },
    {
      label: "Category C",
      data: [3, 10, 13, 15], // Data for each group
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      stack: "Stack 1", // Stack name
    },
    {
      label: "Category D",
      data: [5, 12, 7, 10], // Data for each group
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      stack: "Stack 1", // Stack name
    },
  ],
};
const options = {
  plugins: {
    title: {
      display: true,
      text: "Grouped Stacked Bar Chart",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
    legend: {
      position: "top",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true, // Enable stacking on X axis
    },
    y: {
      stacked: true, // Enable stacking on Y axis
    },
  },
};

const GroupedStackedBarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GroupedStackedBarChart;
