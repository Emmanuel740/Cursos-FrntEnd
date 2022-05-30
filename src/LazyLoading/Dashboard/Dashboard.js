import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardIndex from "./DashboardIndex";
import DashboardLayout from "./DashboardLayout";
import Messages from "./Messages";
const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardIndex />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}

export default Dashboard;
