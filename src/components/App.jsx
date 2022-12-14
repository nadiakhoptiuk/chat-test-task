import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Watch } from 'react-loader-spinner';
import Header from './Header';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const ChatView = lazy(() =>
  import('views/ChatView' /* webpackChunkName: "chat" */)
);
const RegisterView = lazy(() =>
  import(
    'views/RegisterView/RegisterView' /* webpackChunkName: "registration" */
  )
);
const LogInView = lazy(() =>
  import('views/LogInView' /* webpackChunkName: "authorization" */)
);

export default function App() {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <Watch
            height={80}
            width={80}
            radius={45}
            color="#1a75cfb3"
            wrapperClass="mainLoader"
            ariaLabel="loading-indicator"
          />
        }
      >
        <main>
          <Routes>
            <Route
              path="chat"
              element={
                <PrivateRoute>
                  <ChatView />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LogInView />
                </PublicRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicRoute restricted>
                  <Navigate to="/login" replace />
                  <LogInView />
                </PublicRoute>
              }
            />
          </Routes>
        </main>
      </Suspense>
    </>
  );
}
