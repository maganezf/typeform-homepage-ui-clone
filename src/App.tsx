import { useEffect } from 'react';

import Header from './components/Header';
import { FirstAndSecond } from './components/FirstAndSecond';

import { Main, Section, Sticky } from './styles';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  // scroll to page top
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}

export default App;
