import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Hero from './components/sections/Hero';
import Features from './pages/Features';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Presentations from './pages/Presentations';
import ContactSection from './components/sections/ContactSection';
import { useAuth } from './context/AuthContext';
import VideoUploader from './components/dashboard/VideoUploader';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user?.isLoggedIn) return <Navigate to="/login" />;
  return children;
};

function App() {
  const [presentations, setPresentations] = useState([]);
  const [navigateAfterUpdate, setNavigateAfterUpdate] = useState(false);

  const addPresentation = (newPresentation) => {
    console.log('Adding presentation:', newPresentation);
    setPresentations((prev) => {
      const updatedPresentations = [...prev, newPresentation];
      console.log('Updated presentations:', updatedPresentations); // Debug log
      setNavigateAfterUpdate(true); // Signal navigation after state update
      return updatedPresentations;
    });
  };

  // Effect to handle navigation after state update
  useEffect(() => {
    if (navigateAfterUpdate) {
      setNavigateAfterUpdate(false); // Reset flag
      // Navigation is handled in VideoUploader, so no need to navigate here
      // Just ensure state is updated before VideoUploader navigates
    }
  }, [presentations, navigateAfterUpdate]);

  return (
    <AuthProvider>
      <LoadingProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/features" element={<Features />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
              />
              <Route
                path="/presentations"
                element={<ProtectedRoute><Presentations presentations={presentations} /></ProtectedRoute>}
              />
              <Route path="/contact" element={<ContactSection />} />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <VideoUploader onUploadSuccess={addPresentation} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </MainLayout>
        </Router>
      </LoadingProvider>
    </AuthProvider>
  );
}

export default App;