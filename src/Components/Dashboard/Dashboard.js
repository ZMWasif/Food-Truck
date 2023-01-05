import React from "react";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
import "animate.css";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid justify-items-center ...">
      <div className="d-flex pt-20">
        <div className=" animate__animated animate__fadeInTopLeft">
          <h2 className="animate__heartBeat">Investment vs Revenue</h2>
          <LineChart width={400} height={500} data={data}>
            <Line dataKey={"investment"}></Line>
            <XAxis dataKey={"revenue"}></XAxis>
            <YAxis dataKey={"investment"}></YAxis>
          </LineChart>
        </div>

        <div className="pt-20 animate__animated animate__fadeInTopRight">
          <h2 className="animate__heartBeat">Sell vs Month</h2>
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"sell"}></YAxis>
            <Bar dataKey={"sell"} fill="#8884d8" barSize={30}></Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
