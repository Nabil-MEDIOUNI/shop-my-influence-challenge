import { SingleCard, CardImageContainer, CardPrice, CardTitle } from './styles';
import { PerformanceType } from '../../interfaces/index';

function SingleCardPerformance({
  background,
  picture,
  price,
  title,
}: PerformanceType) {
  return (
    <SingleCard>
      <CardImageContainer background={background}>
        <img src={picture} alt={picture} />
      </CardImageContainer>
      <CardPrice>{price}</CardPrice>
      <CardTitle>{title}</CardTitle>
    </SingleCard>
  );
}

export default SingleCardPerformance;
