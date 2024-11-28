'use client';

import { memo } from 'react';

import { DEFAULT_MODEL_PROVIDER_LIST } from '@/config/modelProviders';
import { DiscoverProviderItem } from '@/types/discover';

import Card from './Card';

const List = memo(() => {
  return DEFAULT_MODEL_PROVIDER_LIST.map((item) => <Card {...item} key={item.id} />);
});

export default List;
