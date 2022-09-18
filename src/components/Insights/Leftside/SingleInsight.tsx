import { Box } from '@material-ui/core';

import { InsightType } from '../../../interfaces/index';

import {
  InsightImageContainer,
  InsightImage,
  InsightTitle,
  InsightDescription,
} from './styles';

function SingleInsight({
  id,
  title,
  description,
  background,
  picture,
}: InsightType) {
  return (
    <Box mr={6}>
      <Box display="flex" alignItems="center" mb={id !== 6 && id !== 3 && 4}>
        <InsightImageContainer background={background}>
          <InsightImage src={picture} alt={picture} />
        </InsightImageContainer>
        <Box>
          <InsightTitle>{title}</InsightTitle>
          <InsightDescription>{description}</InsightDescription>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleInsight;
