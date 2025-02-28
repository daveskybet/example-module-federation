import React from 'react';
import { Routes, Route } from 'react-router';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';

import Layout from './Layout';

import Home from "./pages/HomeScreen";
import Upcoming from "./pages/UpcomingScreen";
import Services from "./pages/ServicesScreen";
import Booking from "./pages/BookingScreen";
import Account from "./pages/AccountScreen";

const AuthProvider = React.lazy(() => import('auth/AuthProvider'));
const SignInScreen = React.lazy(() => import('auth/SignInScreen'));

const App = () => (
  <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen />}>
        <AuthProvider>
          {(authData: {isSignout: boolean; isLoading: boolean}) => {
            if (authData.isLoading) {
              return <SplashScreen />;
            }

            if (authData.isSignout) {
              return (
                <React.Suspense fallback={<SplashScreen />}>
                  <SignInScreen />
                </React.Suspense>
              );
            }

            return (
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="upcoming" element={<Upcoming />} />
                  <Route path="services" element={<Services />} />
                  <Route path="booking" element={<Booking />} />
                  <Route path="account" element={<Account />} />
                </Routes>
              </Layout>
            );
          }}
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
)
export default App;