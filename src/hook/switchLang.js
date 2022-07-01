import React, { useContext } from 'react';

import { ProviderContext } from '../context'
import  en  from '@components/language/en'
import  mm  from '@components/language/mm'

export const switchLang = () => {
  const { language } = useContext(ProviderContext);
  if (language === 'en') {
    //console.log('Language', en);
    return en;
  } else {
    return mm;
  }
}

