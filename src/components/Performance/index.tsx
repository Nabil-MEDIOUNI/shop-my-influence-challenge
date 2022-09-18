import { useSelector } from 'react-redux';

import { PerformanceType } from '../../interfaces';
import { ConversionRateCard, SingleSection } from './styles';

import {
  PerformanceContainer,
  PerformanceCards,
  SingleCard,
  CardImageContainer,
  CardPrice,
  CardTitle,
  CoversionRateImage,
} from './styles';

function Performance() {
  const { data } = useSelector((state: any) => state.performanceReducer);

  return (
    <PerformanceContainer>
      <PerformanceCards>
        <SingleSection>
          {data.slice(0, 2).map((performance: PerformanceType) => (
            <SingleCard key={performance.id}>
              <CardImageContainer background={performance.background}>
                <img src={performance.picture} alt={performance.picture} />
              </CardImageContainer>
              <CardPrice>{performance.price}</CardPrice>
              <CardTitle>{performance.title}</CardTitle>
            </SingleCard>
          ))}
        </SingleSection>
        <SingleSection>
          {data.slice(2).map((performance: PerformanceType) => (
            <SingleCard key={performance.id}>
              <CardImageContainer background={performance.background}>
                <img src={performance.picture} alt={performance.picture} />
              </CardImageContainer>
              <CardPrice>{performance.price}</CardPrice>
              <CardTitle>{performance.title}</CardTitle>
            </SingleCard>
          ))}
        </SingleSection>
      </PerformanceCards>
      <ConversionRateCard>
        <CoversionRateImage
          src="/static/images/cards-icons/conversion.PNG"
          alt="conversion"
        />
      </ConversionRateCard>
    </PerformanceContainer>
  );
}

export default Performance;
