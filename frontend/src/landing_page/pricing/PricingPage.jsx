import React from 'react';
import Brokerage from './Brokerage';
import Pricing from './Pricing';
import PricingHero from './PricingHero';

function PricingPage() {
    return ( 
        <>
        <PricingHero />
        <Brokerage />
        <Pricing />
        
        </>
     );
}

export default PricingPage;