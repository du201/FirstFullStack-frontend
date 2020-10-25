import React from 'react';
import { useTranslation } from 'react-i18next';

const Haha = () => {
  const { t, i18n } = useTranslation();
  return (
    <p>{t('Thanks.1')}</p>
  );
}

export default Haha;