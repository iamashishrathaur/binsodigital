import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTittle from "../components/PageTittle";
import pricingData from "../data/PricingData";

const PricingSection = lazy(() => import("../components/PricingSection"));

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || 'staticWebsite';

  const handleLoading = useCallback(() => {
    setIsLoading(true);
    // Simulate loading time based on data fetching or component loading
    // Replace with actual logic for determining loading completion
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Example: Show Preloader for 1 second

    return () => clearTimeout(loadingTimer); // Cleanup timer on component unmount or dependencies change
  }, []);

  useEffect(() => {
    handleLoading();
    // Clear timeout on component unmount or dependencies change
    return () => clearTimeout(handleLoading);
  }, [category, handleLoading]);

  return (
    <div className='page-wrapper'>
      <Preloader isActive={isLoading} />
      {!isLoading && (
        <>
          <Header />
          <PageTittle name="Pricing" />
          <Suspense fallback={<Preloader isActive={true} />}>
            <PricingSection priceProducts={pricingData[category]} />
          </Suspense>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Pricing;
