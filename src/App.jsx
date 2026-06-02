import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import Layout from './components/layout/Layout'
import PageTransition from './components/layout/PageTransition'
import ProtectedRoute from './components/auth/ProtectedRoute'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import ResourceCenterPage from './pages/ResourceCenterPage'
import LoginPage from './pages/LoginPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="team"
          element={
            <PageTransition>
              <TeamPage />
            </PageTransition>
          }
        />
        <Route
          path="contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="resources"
          element={
            <ProtectedRoute>
              <PageTransition>
                <ResourceCenterPage />
              </PageTransition>
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <PageTransition>
            <LoginPage />
          </PageTransition>
        }
      />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}
