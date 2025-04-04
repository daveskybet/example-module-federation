import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Upcoming = React.lazy(() => import('booking/UpcomingScreen'));

const UpcomingScreen = () => {
  return (
    <ErrorBoundary name="UpcomingScreen">
      <React.Suspense
        fallback={<Placeholder label="Booking" icon="calendar" />}>
        <Upcoming />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default UpcomingScreen;
