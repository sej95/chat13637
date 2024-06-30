'use client';

import { Form, type ItemGroup } from '@lobehub/ui';
import { Form as AntForm } from 'antd';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';
import ModelSelect from '@/features/ModelSelect';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/selectors';

import { useSyncSystemAgent } from './useSync';

type SettingItemGroup = ItemGroup;

const systemAgentKey = 'topic'
const Topic = memo(() => {
  const { t } = useTranslation('setting');
  const [form] = AntForm.useForm();

  const settings = useUserStore(settingsSelectors.currentSystemAgent, isEqual);
  const [updateSystemAgent] = useUserStore((s) => [s.updateSystemAgent]);

  const systemAgentSettings: SettingItemGroup = {
    children: [
      {
        children: (
          <ModelSelect
            onChange={(props) => {
              updateSystemAgent(systemAgentKey, props);
            }}
            showAbility={false}
          />
        ),
        desc: t(`systemAgent.${ systemAgentKey }.modelDesc`),
        label: t(`systemAgent.${ systemAgentKey }.label`),
        name: [systemAgentKey, 'model'],
      },
    ],
    title: t(`systemAgent.${systemAgentKey}.title`),
  };

  useSyncSystemAgent(form);

  return (
    <Form
      form={form}
      initialValues={settings}
      items={[systemAgentSettings]}
      variant={'pure'}
      {...FORM_STYLE}
    />
  );
});

export default Topic;
