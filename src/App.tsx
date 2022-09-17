import { Box } from '@material-ui/core';

import SideBar from './components/SideBar';
import Topbar from './components/Topbar';

import { PageContainer } from './utils/styles';

function App() {
  return (
    <Box>
      <SideBar />
      <PageContainer>
        <Topbar />
      </PageContainer>
    </Box>
  );
}

export default App;
