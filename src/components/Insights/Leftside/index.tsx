import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { getInsights } from '../../../redux/actions/insights';

import { InsightType } from '../../../interfaces';

import {
  LeftsideContainer,
  InsightImageContainer,
  InsightImage,
  InsightTitle,
  InsightDescription,
} from './styles';

function Leftside() {
  const dispatch: any = useDispatch();

  const { data } = useSelector((state: any) => state.insightsReducer);

  useEffect(() => {
    dispatch(getInsights());
  }, [dispatch]);

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
