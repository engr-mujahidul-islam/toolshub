import React from 'react';
import CopyListPage, { type CopyItem } from '../components/CopyListPage';

const codeItems: CopyItem[] = [
  {
    id: 'addHideOOP',
    label: 'Ad Hide',
    text: (
      <pre>
        {`<style>
    .glacier-ad,.revcontent,.glacier-ad.interstitial,.glacier-ad.oop, 
    .glacier-ad.interstitial,.glacier-ad.oop{display:none!important}
</style>`}
      </pre>
    ),
  },
  {
    id: 'addHideAppOne',
    label: 'App (One) Ad Hide No Tag',
    text: (
      <pre>
        {`<style>
    #today-top,#today-middle,#today-bottom,#oop,#interstitial{display:none !important}
</style>`}
      </pre>
    ),
  },
  {
    id: 'addHideAppOneNoTag',
    label: 'App (One) Ad Hide',
    text: (
      <pre>
        {`
    #today-top,#today-middle,#today-bottom,#oop,#interstitial{display:none !important}
    `}
      </pre>
    ),
  },
  {
    id: 'weatherScript',
    label: 'icon Change',
    text: (
      <pre>
        {`<script>
    import { changeWeatherData } from 'https://tpc.googlesyndication.com/pimgad/9248386624894063117?';
    const requiredWeatherType = 'rain';
    const temUnit = 'F';
    changeWeatherData({requiredWeatherType, temUnit});
</script>`}
      </pre>
    ),
  },
];

const Codes: React.FC = () => {
  return (
    <div className="codes-page">
      <CopyListPage items={codeItems} />
    </div>
  );
};

export default Codes;