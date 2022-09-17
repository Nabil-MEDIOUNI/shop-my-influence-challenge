import Leftside from './Leftside';

import {
  InsightsContainer,
  CardContainer,
  InstagramContainer,
  InstagramImageContainer,
  CardContent,
  CardTitle,
  CardDescription,
} from './styles';

function Insights() {
  return (
    <InsightsContainer>
      <Leftside />
      <CardContainer>
        <InstagramContainer>
          <InstagramImageContainer>
            <img
              src="/static/images/cards-icons/instagram.png"
              alt="instagram"
            />
          </InstagramImageContainer>
        </InstagramContainer>
        <CardContent>
          <CardTitle>Instagram</CardTitle>
          <CardDescription>Most popular social media</CardDescription>
        </CardContent>
      </CardContainer>
      <CardContainer>
        <InstagramContainer>
          <img src="/static/images/avatars/Image.png" alt="instagram" />
        </InstagramContainer>
        <CardContent>
          <CardTitle>Idee2look</CardTitle>
          <CardDescription>Most popular influencer</CardDescription>
        </CardContent>
      </CardContainer>
    </InsightsContainer>
  );
}

export default Insights;
