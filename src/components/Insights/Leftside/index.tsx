import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import SingleInsight from './SingleInsight';

import { InsightType } from '../../../interfaces';

import { LeftsideContainer } from './styles';

function Leftside() {
  const { data } = useSelector((state: any) => state.insightsReducer);

  function ContainerContent(section1: number, section2: number) {
    return (
      <Box mr={6}>
        {data.slice(section1, section2).map((insight: InsightType) => (
          <SingleInsight
            id={insight.id}
            title={insight.title}
            description={insight.description}
            background={insight.background}
            picture={insight.picture}
          />
        ))}
      </Box>
    );
  }

  return (
    <LeftsideContainer>
      {ContainerContent(0, 3)}
      {ContainerContent(3, 6)}
    </LeftsideContainer>
  );
}

export default Leftside;
