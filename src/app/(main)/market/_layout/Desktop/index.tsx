import { Flexbox } from 'react-layout-kit';

import SafeSpacing from '@/components/SafeSpacing';
import { MAX_WIDTH } from '@/const/layoutTokens';

import { LayoutProps } from '../type';
import Header from './Header';
import Hero from './Hero';

const Layout = ({ children, detail }: LayoutProps) => {
  return (
    <Flexbox
      height={'100%'}
      id={'lobe-market-container'}
      style={{ position: 'relative' }}
      width={'100%'}
    >
      <Header />
      <Flexbox height={'100%'} horizontal style={{ position: 'relative' }} width={'100%'}>
        <Flexbox
          align={'center'}
          flex={1}
          paddingInline={16}
          style={{ overflowX: 'hidden', overflowY: 'scroll', position: 'relative' }}
        >
          <SafeSpacing />
          <Flexbox gap={16} style={{ maxWidth: MAX_WIDTH, position: 'relative', width: '100%' }}>
            <Hero />
            {children}
          </Flexbox>
        </Flexbox>
        {detail}
      </Flexbox>
    </Flexbox>
  );
};

Layout.displayName = 'DesktopMarketLayout';

export default Layout;
