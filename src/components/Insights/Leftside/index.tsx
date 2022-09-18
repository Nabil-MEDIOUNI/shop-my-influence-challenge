import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { InsightType } from '../../../interfaces';

import {
  LeftsideContainer,
  InsightImageContainer,
  InsightImage,
  InsightTitle,
  InsightDescription,
} from './styles';

function Leftside() {
  const { data } = useSelector((state: any) => state.insightsReducer);

  function ContainerContent(section: number) {
    return (
      <Box mr={6}>
        {data.splice(section).map((insight: InsightType) => (
          <Box
            key={insight.id}
            display="flex"
            alignItems="center"
            mb={insight.id !== 6 && insight.id !== 3 && 4}
          >
            <InsightImageContainer background={insight.background}>
              <InsightImage src={insight.picture} alt={insight.picture} />
            </InsightImageContainer>
            <Box>
              <InsightTitle>{insight.title}</InsightTitle>
              <InsightDescription>{insight.description}</InsightDescription>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <LeftsideContainer>
      {ContainerContent(3)}
      {ContainerContent(-3)}
    </LeftsideContainer>
  );
}

export default Leftside;
