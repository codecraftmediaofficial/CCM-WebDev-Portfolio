import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import Home from '../pages/Home.jsx';
import Projects from '../pages/Projects.jsx';

export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

