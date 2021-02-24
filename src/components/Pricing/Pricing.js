import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-1.svg';
import Icon4 from '../../images/svg-2.svg';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nase usluge</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon src={Icon1}/>
                <PricingCardPlan>Web development</PricingCardPlan>
                {/* <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Web development</PricingCardFeature>
                  <PricingCardFeature>Odrzavanje sajta</PricingCardFeature>
                  <PricingCardFeature>Ui design</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Izaberi</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
              <PricingCardIcon src={Icon2}/>
                <PricingCardPlan>SEO</PricingCardPlan>
                {/* <PricingCardCost>SEO</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Vise posetioca</PricingCardFeature>
                  <PricingCardFeature>nesto</PricingCardFeature>
                  <PricingCardFeature>nesto</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Izaberi</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
              <PricingCardIcon src={Icon3}/>
                <PricingCardPlan>Digital Marketing</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Odrzavanje profila</PricingCardFeature>
                  <PricingCardFeature>Promovisanje biznisa</PricingCardFeature>
                  <PricingCardFeature>Kreacija naloga na mrezama</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Izaberi</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
              <PricingCardIcon src={Icon4}/>
                <PricingCardPlan>Graphical Design</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Dizajn logoa</PricingCardFeature>
                  <PricingCardFeature>Snimanje i video editing</PricingCardFeature>
                  <PricingCardFeature>Photoshop</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Izaberi</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
