import { Box } from '@material-ui/core';

import styled from 'styled-components';

interface SectionDividerType {
  title: string;
}

export const DividerTitle = styled.p`
  font-size: 16px;
  color: #032958;
  @media (max-width: 920px) {
  }
`;

function SectionDivider({ title }: SectionDividerType) {
  return (
    <Box mt={6} mb={3}>
      <DividerTitle>{title}</DividerTitle>
    </Box>
  );
}

export default SectionDivider;
