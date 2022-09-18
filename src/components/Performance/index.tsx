import { useSelector } from 'react-redux';

import SingleCardPerformance from './SingleCardPerformance';

import { PerformanceType } from '../../interfaces';

import { ConversionRateCard, SingleSection } from './styles';

import {
  PerformanceContainer,
  PerformanceCards,
  CoversionRateImage,
} from './styles';

function Performance() {
  const { data } = useSelector((state: any) => state.performanceReducer);

  return (
    <PerformanceContainer>
      <PerformanceCards>
        <SingleSection>
          {data.slice(0, 2).map((performance: PerformanceType) => (
            <SingleCardPerformance
              id={performance.id}
              background={performance.background}
              picture={performance.picture}
              price={performance.price}
              title={performance.title}
            />
          ))}
        </SingleSection>
        <SingleSection>
          {data.slice(2).map((performance: PerformanceType) => (
            <SingleCardPerformance
              id={performance.id}
              background={performance.background}
              picture={performance.picture}
              price={performance.price}
              title={performance.title}
            />
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
