import React, { useState } from 'react';
import CopyListPage, { type CopyItem } from '../components/CopyListPage';

const Creatives = () => {
  const [inputText, setInputText] = useState('');
  const [inputVersion, setInputVersion] = useState('');
  const [taskNumber, setTaskNumber] = useState('');
  const [inputTypes, setInputTypes] = useState('');

  const [features, setFeatures] = useState<Record<string, boolean>>({
    Animated: false,
    wCarousel: false,
    wVideo: false,
    wCountdown: false,
    wHoliday_Module: false,
    wCalendar_Module: false,
    wCommute_Outlook_Module: false,
    Ahead_Module: false,
    wContent_Module: false,
    wSpotlight_Module: false,
  });

  const [productTypes, setProductTypes] = useState<Record<string, boolean>>({
    Hero: true,
    BothHero: true,
    DesktopHero: false,
    MobileHero: false,
    BothTakeover: true,
    DesktopTakeover: false,
    MobileTakeover: false,
    AppBGI: true,
    AppParallax: true,
    Standard: true,
  });

  const [sizes, setSizes] = useState<Record<string, boolean>>({
    '300x250': true,
    '320x50': true,
    '320x100': false,
    '468x60': false,
    '728x90': true,
    '970x250': true,
    '970x90': false,
    '160x600': true,
    '300x600': true,
    '300x1050': false,
  });

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setFeatures(prev => ({ ...prev, [id]: checked }));
  };

  const handleProductTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setProductTypes(prev => ({ ...prev, [id]: checked }));
  };
  
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSizes(prev => ({ ...prev, [id]: checked }));
  };


  const [generatedItems, setGeneratedItems] = useState<CopyItem[]>([]);

  const handleProcessText = () => {
    const parts = inputText.split(" (");
    const beforeText = parts[0].trim();
    const afterText = parts[1]?.replace(")", "").trim() || "";

    const processedParentFolder = beforeText
      .replace(/[-()"'.`’#*@\/\\]/g, "")
      .replace(/\s+/g, "_");

    let converseIDTxt = afterText;
    if (beforeText === "Mock Request") {
      converseIDTxt = beforeText + ' ' + afterText;
    }
    const processedConverseID = converseIDTxt
      .replace(/[-()"'.`’#*@\/\\]/g, "")
      .replace(/\s+/g, "_");

    const currentDate = new Date();
    const fullYear = currentDate.getFullYear().toString();
    const year = fullYear.slice(-2);
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");

    const finalTaskNumber = taskNumber || '';

    const newItems: CopyItem[] = [];

    newItems.push({ id: 'converIdFolderParent', label: 'Parent Folder Name', text: processedParentFolder });
    newItems.push({ id: 'converIdFolderName', label: 'Task Folder Name', text: `${processedConverseID}_${year}${month}0${finalTaskNumber}` });
    newItems.push({ id: 'BriefName', label: 'Brief Name', text: `brief_${year}${month}0${finalTaskNumber}` });
    newItems.push({ id: 'BriefTitle', label: 'Brief Title', text: `${inputText} - ${year}${month}0${finalTaskNumber}` });
    newItems.push({ id: 'BriefTabInitial', label: 'Tab Name Initial', text: `${month}.${date}.${fullYear}_Initial_build` });
    newItems.push({ id: 'BriefTabRevision', label: 'Tab Name Revision', text: `${month}.${date}.${fullYear}_Revision` });
    
    // Build the base name from checked features
    let baseName = '';
    for (const feature in features) {
      if (features[feature]) {
        baseName += `_${feature}`;
      }
    }
    
    const inputArray = inputVersion
      .split(",")
      .map(item => item.trim())
      .filter(item => item !== "");

    // Generate names based on product types
    if (productTypes.Hero) {
      let heroUnits = '';
      if (inputArray.length === 0) {
        heroUnits = `${processedConverseID}_Hero${baseName}_Desktop<br/>${processedConverseID}_Hero${baseName}_Mobile_Web`;
      } else {
        heroUnits = inputArray.map(version => `${processedConverseID}_Hero${baseName}_Desktop_${version}<br/>${processedConverseID}_Hero${baseName}_Mobile_Web_${version}`).join('<br/>');
      }
      newItems.push({ id: 'converIdHeroDesktop', label: 'Hero', text: <div dangerouslySetInnerHTML={{ __html: heroUnits }} /> });
    }

    if (productTypes.BothHero) {
      let bothHeroUnits = '';
      if (inputArray.length === 0) {
        bothHeroUnits = `${processedConverseID}_Desktop_Hero${baseName}<br/>${processedConverseID}_Mobile_Hero${baseName}`;
      } else {
        bothHeroUnits = inputArray.map(version => `${processedConverseID}_Desktop_Hero${baseName}_${version}<br/>${processedConverseID}_Mobile_Hero${baseName}_${version}`).join('<br/>');
      }
      newItems.push({ id: 'converIdBothHero', label: 'Both Hero', text: <div dangerouslySetInnerHTML={{ __html: bothHeroUnits }} /> });
    }

    if (productTypes.DesktopHero) {
      let dHeroUnits = '';
      if (inputArray.length === 0) {
        dHeroUnits = `${processedConverseID}_Desktop_Hero${baseName}`;
      } else {
        dHeroUnits = inputArray.map(version => `${processedConverseID}_Desktop_Hero${baseName}_${version}`).join('<br/>');
      }
      newItems.push({ id: 'converIdDHero', label: 'Desktop Hero', text: <div dangerouslySetInnerHTML={{ __html: dHeroUnits }} /> });
    }
    
    if (productTypes.MobileHero) {
        let mHeroUnits = '';
        if (inputArray.length === 0) {
            mHeroUnits = `${processedConverseID}_Mobile_Hero${baseName}`;
        } else {
            mHeroUnits = inputArray.map(version => `${processedConverseID}_Mobile_Hero${baseName}_${version}`).join('<br/>');
        }
        newItems.push({ id: 'converIdMHero', label: 'Mobile Hero', text: <div dangerouslySetInnerHTML={{ __html: mHeroUnits }} /> });
    }

    if (productTypes.BothTakeover) {
        let bothTakeoverUnits = '';
        if (inputArray.length === 0) {
            bothTakeoverUnits = `${processedConverseID}_Desktop_Takeover${baseName}<br/>${processedConverseID}_Mobile_Takeover${baseName}`;
        } else {
            bothTakeoverUnits = inputArray.map(version => `${processedConverseID}_Desktop_Takeover${baseName}_${version}<br/>${processedConverseID}_Mobile_Takeover${baseName}_${version}`).join('<br/>');
        }
        newItems.push({ id: 'converIdBothTakeover', label: 'Both Takeover', text: <div dangerouslySetInnerHTML={{ __html: bothTakeoverUnits }} /> });
    }
    
    if (productTypes.DesktopTakeover) {
        let dTakeoverUnits = '';
        if (inputArray.length === 0) {
            dTakeoverUnits = `${processedConverseID}_Desktop_Takeover${baseName}`;
        } else {
            dTakeoverUnits = inputArray.map(version => `${processedConverseID}_Desktop_Takeover${baseName}_${version}`).join('<br/>');
        }
        newItems.push({ id: 'converIdDTakeover', label: 'Desktop Takeover', text: <div dangerouslySetInnerHTML={{ __html: dTakeoverUnits }} /> });
    }

    if (productTypes.MobileTakeover) {
        let mTakeoverUnits = '';
        if (inputArray.length === 0) {
            mTakeoverUnits = `${processedConverseID}_Mobile_Takeover${baseName}`;
        } else {
            mTakeoverUnits = inputArray.map(version => `${processedConverseID}_Mobile_Takeover${baseName}_${version}`).join('<br/>');
        }
        newItems.push({ id: 'converIdmTakeover', label: 'Mobile Takeover', text: <div dangerouslySetInnerHTML={{ __html: mTakeoverUnits }} /> });
    }

    if (productTypes.AppBGI) {
        let appBGIUnits = '';
        if (inputArray.length === 0) {
            appBGIUnits = `${processedConverseID}_App_BGI`;
        } else {
            appBGIUnits = inputArray.map(version => `${processedConverseID}_App_BGI_${version}`).join('<br/>');
        }
        newItems.push({ id: 'converIdAppBGI', label: 'App BGI', text: <div dangerouslySetInnerHTML={{ __html: appBGIUnits }} /> });
    }
    
    if (productTypes.AppParallax) {
        let appParallaxUnits = '';
        if (inputArray.length === 0) {
            appParallaxUnits = `${processedConverseID}_App_Parallax`;
        } else {
            appParallaxUnits = inputArray.map(version => `${processedConverseID}_App_Parallax_${version}`).join('<br/>');
        }
        newItems.push({ id: 'converIdAppParallax', label: 'App Parallax', text: <div dangerouslySetInnerHTML={{ __html: appParallaxUnits }} /> });
    }

    if (productTypes.Standard) {
        let standardUnits = '';
        const typesArray = inputTypes.split(',').map(item => item.trim()).filter(item => item !== '');

        const generateStandardNames = (version: string) => {
            let tempNames = '';
            const suffix = version ? `_${version}` : '';
            if (typesArray.length > 0) {
                typesArray.forEach(type => {
                    for (const size in sizes) {
                        if (sizes[size]) {
                            tempNames += `${processedConverseID}_Standard_${size}_${type}${suffix}<br/>`;
                        }
                    }
                });
            } else {
                for (const size in sizes) {
                    if (sizes[size]) {
                        tempNames += `${processedConverseID}_Standard_${size}_Static${suffix}<br/>`;
                    }
                }
            }
            return tempNames;
        };

        if (inputArray.length === 0) {
            standardUnits = generateStandardNames('');
        } else {
            standardUnits = inputArray.map(version => generateStandardNames(version)).join('<br/>');
        }
        newItems.push({ id: 'converIdStandard', label: 'Standard', text: <div dangerouslySetInnerHTML={{ __html: standardUnits }} /> });
    }

    setGeneratedItems(newItems);
  };
  
  return (
    <div className="tab-pane fade show active" id="home" role="tabpanel">
      <div className="input-group">
        <input className="form-control" type="text" id="inputText" placeholder="Jackery (Jackery Summer 2025)" style={{ maxWidth: '40%' }} value={inputText} onChange={e => setInputText(e.target.value)} />
        <input className="form-control" type="text" id="inputVersion" placeholder="v1,v2,v3 or Patio,Grills or Additional" style={{ maxWidth: '40%' }} value={inputVersion} onChange={e => setInputVersion(e.target.value)} />
        <input className="form-control" type="text" id="taskNumber" style={{ maxWidth: '200px' }} placeholder="09 (2 digit)" value={taskNumber} onChange={e => setTaskNumber(e.target.value)} />
        <button className="btn-success" onClick={handleProcessText}>Process Text</button>
      </div>
      <div className="add_features" style={{ flexWrap: 'wrap' }}>
        {Object.keys(features).map(feature => (
          <div className="feature_item" key={feature}>
            <input type="checkbox" id={feature} value={feature} checked={features[feature]} onChange={handleFeatureChange} /> {feature}
          </div>
        ))}
      </div>
      <div className="add_features">
        {Object.keys(productTypes).map(product => (
          <div className="feature_item" key={product}>
            <input type="checkbox" id={product} value={product} checked={productTypes[product]} onChange={handleProductTypeChange} /> {product}
          </div>
        ))}
      </div>
      <div className="add_features">
        {Object.keys(sizes).map(size => (
          <div className="feature_item" key={size}>
            <input type="checkbox" id={size} value={size} checked={sizes[size]} onChange={handleSizeChange} /> {size}
          </div>
        ))}
        <input className="form-control" type="text" id="inputTypes" placeholder="Types" style={{ maxWidth: '200px' }} value={inputTypes} onChange={e => setInputTypes(e.target.value)} />
      </div>

      <div id="generatedCreatives">
        {generatedItems.length > 0 && <CopyListPage items={generatedItems} />}
      </div>
    </div>
  );
};

export default Creatives;