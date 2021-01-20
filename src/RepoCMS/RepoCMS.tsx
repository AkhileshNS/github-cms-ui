import React from 'react';
import CMS from './Store';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Gallery from './Gallery';

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
      {cms.mode === 'form' ? (
        <Form config={{}} />
      ) : (
        <Gallery
          selected={cms.selected}
          setSelected={(selected) => cms.setSelected(selected)}
          images={[1, 2, 3, 4, 5, 6].map((num) => `cat${num}.jpg`)}
        />
      )}
      <Footer
        setSelected={(selected) => cms.setSelected(selected)}
        loading={false}
        mode={cms.mode}
        selected={cms.selected}
        onUpload={() => {}}
        onSelect={() => {}}
        onUpdate={() => {}}
        onDelete={() => {}}
        switchMode={cms.switchMode}
      />
    </Sidebar>
  );
};

export default RepoCMS;
