import { ProviderCombine } from '@lobehub/icons';
import { Typography } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ModelProviderCard } from '@/types/llm';

const { Paragraph } = Typography;

const useStyles = createStyles(({ css, token, isDarkMode }) => ({
  banner: css`
    opacity: ${isDarkMode ? 0.9 : 0.4};
  `,
  container: css`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    height: 100%;
    min-height: 162px;

    background: ${token.colorBgContainer};
    border-radius: 12px;
    box-shadow: 0 0 1px 1px ${isDarkMode ? token.colorFillQuaternary : token.colorFillSecondary}
      inset;

    transition: box-shadow 0.2s ${token.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${isDarkMode ? token.colorFillSecondary : token.colorFill} inset;
    }
  `,
  desc: css`
    min-height: 44px;
    margin-block-end: 0 !important;
    color: ${token.colorTextDescription};
  `,
  tagBlue: css`
    color: ${token.geekblue};
    background: ${token.geekblue1};
  `,
  tagGreen: css`
    color: ${token.green};
    background: ${token.green1};
  `,
  time: css`
    color: ${token.colorTextDescription};
  `,
  title: css`
    zoom: 1.2;
    margin-block-end: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,
  token: css`
    font-family: ${token.fontFamilyCode};
  `,
}));

export interface ProviderCardProps extends ModelProviderCard {
  mobile?: boolean;
}

const ProviderCard = memo<ProviderCardProps>(({ id, description, name }) => {
  const { t } = useTranslation(['discover', 'providers']);
  const { cx, styles, theme } = useStyles();

  return (
    <Flexbox className={cx(styles.container)} gap={24}>
      <Flexbox gap={12} padding={16} width={'100%'}>
        <ProviderCombine provider={id} size={28} style={{ color: theme.colorText }} title={name} />
        <Flexbox gap={8} horizontal style={{ fontSize: 12, marginTop: -8 }}>
          <div style={{ color: theme.colorTextSecondary }}>@{name}</div>
          <div style={{ color: theme.colorTextDescription }}>
            {t('providers.modelCount', { count: 0 })}
          </div>
        </Flexbox>
        {description && (
          <Paragraph className={styles.desc} ellipsis={{ rows: 2 }}>
            {t(`${id}.description`, { ns: 'providers' })}
          </Paragraph>
        )}
      </Flexbox>
    </Flexbox>
  );
});

export default ProviderCard;
