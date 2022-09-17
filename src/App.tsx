import { Box } from '@material-ui/core';

import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import SectionDivider from './components/Shared/SectionDivider';

import { PageContainer } from './utils/styles';

function App() {
  return (
    <Box>
      <SideBar />
      <PageContainer>
        <Topbar />
        <SectionDivider title="Overall Performance" />
        <SectionDivider title="Main insights" />
        <SectionDivider title="In-Depth Analysts" />
      </PageContainer>
    </Box>
  );
}

export default App;
