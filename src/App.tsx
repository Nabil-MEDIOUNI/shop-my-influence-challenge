import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@material-ui/core';

import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import SectionDivider from './components/Shared/SectionDivider';
import Insights from './components/Insights/index';

import { getInsights } from './redux/actions/insights';
import { getSales } from './redux/actions/sales';

import { PageContainer } from './utils/styles';

function App() {
  const dispatch: any = useDispatch();

  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    dispatch(getInsights());
    dispatch(getSales());
  }, [dispatch]);

  const handleSidebar = (state: boolean) => {
    setShowSidebar(state);
  };

  return (
    <Box>
      <SideBar showSidebar={showSidebar} handleSidebar={handleSidebar} />
      <PageContainer showSidebar={showSidebar}>
        <Topbar showSidebar={showSidebar} handleSidebar={handleSidebar} />
        <SectionDivider title="Overall Performance" />
        <SectionDivider title="Main insights" />
        <Insights />
        <SectionDivider title="In-Depth Analysts" />
      </PageContainer>
    </Box>
  );
}

export default App;
