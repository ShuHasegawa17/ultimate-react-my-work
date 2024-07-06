import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SpinnerFullPage from './components/SpinnerFullPage';

// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import HomePage from './pages/HomePage';
// import PageNotFound from './pages/PageNotFound';
// import AppLayout from './pages/AppLayout';
// import Login from './pages/Login';

const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const HomePage = lazy(() => import('./pages/HomePage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const Login = lazy(() => import('./pages/Login'));

// bofore
// dist/assets/index-62952cc5.css   29.96 kB │ gzip:   5.07 kB
// dist/assets/index-2ca9afca.js   508.25 kB │ gzip: 148.54 kB

// after lazy import + suspense => chunk化
// dist/index.html                           0.45 kB │ gzip:   0.30 kB
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-88d6bfbf.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-a9e6818a.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-94f5e4a4.css           26.29 kB │ gzip:   4.39 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-28f01a68.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-96749ca1.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-b554d192.js           0.54 kB │ gzip:   0.29 kB
// dist/assets/Pricing-8e85e891.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-c2125aae.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-46b4b61f.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-e0017b5f.js             0.93 kB │ gzip:   0.49 kB
// dist/assets/AppLayout-9a8667d5.js       156.99 kB │ gzip:  46.23 kB
// dist/assets/index-0e5aec30.js           349.54 kB │ gzip: 101.77 kB

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
                {/* <Route path="/" element={<PageNav />}>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="*" element={<PageNotFound />} />
          </Route> */}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
