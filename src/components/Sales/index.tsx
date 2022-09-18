import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { BarChartMetric } from '../Shared/BarChartMetric';

import {
  LeftSideContainer,
  RightSideContainer,
  SalesByContainer,
  SalesByTitle,
  SalesByButton,
  SalesContainer,
  UserContainer,
  ProgressContainer,
  InnerProgressContainer,
  UserImage,
  SalesTitle,
  SecondSection,
  ChartContainer,
  SingleChartContainer,
} from './styles';

import { SaleType } from '../../interfaces/index';

function Sales() {
  const { data } = useSelector((state: any) => state.salesReducer);

  return (
    <>
      <ChartContainer>
        <SingleChartContainer>
          <SalesByContainer>
            <SalesByTitle>Sales by OS</SalesByTitle>
            <SalesByButton>see more</SalesByButton>
          </SalesByContainer>
          <BarChartMetric />
        </SingleChartContainer>
        <SingleChartContainer>
          <SalesByContainer>
            <SalesByTitle>Sales by OS</SalesByTitle>
            <SalesByButton>see more</SalesByButton>
          </SalesByContainer>
          <BarChartMetric />
        </SingleChartContainer>
      </ChartContainer>
      <SalesContainer>
        <LeftSideContainer>
          <Box width="100%">
            <SalesByContainer>
              <SalesByTitle>Sales by influencers</SalesByTitle>
              <SalesByButton>see more</SalesByButton>
            </SalesByContainer>
            <Box>
              {data
                .filter((sale: SaleType) => sale.type === 'influencers')
                .map((sale: SaleType) => (
                  <Box display="flex" alignItems="center">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      mb={4}
                    >
                      <UserContainer color={sale.color}>
                        <UserImage src={sale.picture} alt="" />
                      </UserContainer>
                      <SalesTitle>{sale.title}</SalesTitle>
                    </Box>
                    <ProgressContainer>
                      <InnerProgressContainer />
                    </ProgressContainer>
                  </Box>
                ))}
            </Box>
          </Box>
          <SecondSection>
            <SalesByContainer>
              <SalesByTitle>Sales by product</SalesByTitle>
              <SalesByButton>see more</SalesByButton>
            </SalesByContainer>
            <Box>
              {data
                .filter((sale: SaleType) => sale.type === 'product')
                .map((sale: SaleType) => (
                  <Box display="flex" alignItems="center">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      mb={4}
                      width="80px"
                    >
                      <UserContainer color={sale.color}>
                        <UserImage src={sale.picture} alt="" />
                      </UserContainer>
                      <SalesTitle>{sale.title}</SalesTitle>
                    </Box>
                    <ProgressContainer>
                      <InnerProgressContainer />
                    </ProgressContainer>
                  </Box>
                ))}
            </Box>
          </SecondSection>
        </LeftSideContainer>
        <RightSideContainer>
          <SalesByContainer>
            <SalesByTitle>Sales by country</SalesByTitle>
            <SalesByButton>see more</SalesByButton>
          </SalesByContainer>
          <Box>
            {data
              .filter((sale: SaleType) => sale.type === 'country')
              .map((sale: SaleType) => (
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={4}
                  >
                    <SalesTitle>
                      {sale.title}: {sale.price}K
                    </SalesTitle>
                  </Box>
                  <ProgressContainer>
                    <InnerProgressContainer />
                  </ProgressContainer>
                </Box>
              ))}
          </Box>
          <hr />
          <Box>
            {data
              .filter(
                (sale: SaleType) => sale.type === 'gifting & paid Campaigns',
              )
              .map((sale: SaleType) => (
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={4}
                  >
                    <SalesTitle>
                      {sale.title}: {sale.price}K
                    </SalesTitle>
                  </Box>
                  <ProgressContainer>
                    <InnerProgressContainer />
                  </ProgressContainer>
                </Box>
              ))}
          </Box>
        </RightSideContainer>
      </SalesContainer>
    </>
  );
}

export default Sales;
