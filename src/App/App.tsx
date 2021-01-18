import React from 'react';
import RepoCMS, { CMS } from 'RepoCMS/index';

function App() {
  const cms = CMS.useContainer();

  return (
    <div className='App'>
      <p>Hello World</p>
      <button onClick={() => cms.setOpen(true)}>Toggle Sidebar</button>
    </div>
  );
}

function AppContainer() {
  return (
    <CMS.Provider>
      <RepoCMS />
      <App />
    </CMS.Provider>
  );
}

export default AppContainer;
