'use client';

import { Skeleton } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox, FlexboxProps } from 'react-layout-kit';
import urlJoin from 'url-join';

import { DiscoverPlugintem } from '@/types/discover';

import Block from '../../../../features/Block';
import SuggestionItem from './SuggestionItem';

interface InfoSidebarProps extends FlexboxProps {
  data: DiscoverPlugintem;
  identifier: string;
  mobile?: boolean;
}

const InfoSidebar = memo<InfoSidebarProps>(({ data, ...rest }) => {
  const { t } = useTranslation('discover');

  const route = useRouter();

  const handleMoreClick = () => {
    route.push(urlJoin('/discover/plugins', data.meta?.category || ''));
  };

  return (
    <Flexbox gap={48} height={'100%'} style={{ position: 'relative' }} width={'100%'} {...rest}>
      <Block
        gap={24}
        more={t('assistants.more')}
        onMoreClick={handleMoreClick}
        title={t('assistants.suggestions')}
      >
        {data?.suggestions?.length > 0 ? (
          data?.suggestions.map((item) => (
            <Link href={urlJoin('/discover/plugin', item.identifier)} key={item.identifier}>
              <SuggestionItem {...item} />
            </Link>
          ))
        ) : (
          <Skeleton active paragraph={{ rows: 5 }} title={false} />
        )}
      </Block>
    </Flexbox>
  );
});

export default InfoSidebar;