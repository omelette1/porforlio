import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function ProjectsLayout() {
  return (
    <>

      <Outlet /> {/* Renders nested child routes */}
    </>
  );
}

export function Projects() {
  return (
    <Routes>
    </Routes>
  );
}
