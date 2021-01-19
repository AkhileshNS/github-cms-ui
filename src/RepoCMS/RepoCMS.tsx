import React from 'react';
import CMS from './Store';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

// Step 1: Build Sidebar [DONE ]
// Step 2: Add Form (<input />, <textarea /> and <select />)

interface IProps {}

const RepoCMS: React.FC<IProps> = () => {
  const cms = CMS.useContainer();

  return (
    <Sidebar open={cms.open}>
      <Header
        author='AkhileshNS'
        repo='RepoCMS'
        onClose={() => cms.setOpen(false)}
        mode={cms.mode}
        switchMode={cms.switchMode}
      />
      <Footer
        loading={false}
        mode={cms.mode}
        selected={cms.selected}
        onUpload={() => {}}
        onSelect={() => {}}
        onUpdate={() => {}}
        onDelete={() => {}}
      />
    </Sidebar>
  );
};

export default RepoCMS;
