import { useState } from 'react';
import CopyListPage, { type CopyItem } from '../components/CopyListPage';

const ImgNames = () => {
  const [versionNo, setVersionNo] = useState('');
  const [videoName, setVideoName] = useState('');
  const [ticketNo, setTicketNo] = useState('');
  const [gamVersion, setGamVersion] = useState('');
  const [productType, setProductType] = useState('Hero');
  const [featureSelect, setFeatureSelect] = useState('No_Feature');
  const [storageType, setStorageType] = useState('GAM');
  const [generatedItems, setGeneratedItems] = useState<CopyItem[]>([]);

  const handleProcessImages = () => {
    let finalVersionNo = versionNo ? `_${versionNo}` : '';
    let finalTicketNo = ticketNo ? `_${ticketNo}` : '';
    let finalGamVersion = gamVersion ? `_v${gamVersion}` : '_v1';

    let imgLastName = storageType === 'SEBPO_Server' ? '' : `${finalVersionNo}${finalTicketNo}${finalGamVersion}`;

    const newItems: CopyItem[] = [];

    // Base Product names
    switch (productType) {
      case 'Hero':
        newItems.push(
          { id: 'desktop_bg', label: 'desktop_bg', text: `desktop_bg${imgLastName}` },
          { id: 'desktop_content', label: 'desktop_content', text: `desktop_content${imgLastName}` },
          { id: 'iPad_bg', label: 'iPad_bg', text: `iPad_bg${imgLastName}` },
          { id: 'iPad_content', label: 'iPad_content', text: `iPad_content${imgLastName}` },
          { id: 'iPhone_bg', label: 'iPhone_bg', text: `iPhone_bg${imgLastName}` },
          { id: 'iPhone_content', label: 'iPhone_content', text: `iPhone_content${imgLastName}` },
          { id: 'iPhone_content_320', label: 'iPhone_content_320', text: `iPhone_content_320${imgLastName}` },
          { id: 'HeroManualLoader', label: 'HeroManualLoader', text: (
              <>
                  manualAssetsLoader:[ <br />
                  '%%FILE:desktop_bg%%', <br />
                  '%%FILE:desktop_content%%', <br />
                  '%%FILE:iPad_bg%%', <br />
                  '%%FILE:iPad_content%%', <br />
                  '%%FILE:iPhone_bg%%', <br />
                  '%%FILE:iPhone_content%%', <br />
                  '%%FILE:iPhone_content_320%%', <br />
                  ]
              </>
            )
          }
        );
        break;
      case 'Desktop_Hero':
        newItems.push(
          { id: 'desktop_bg', label: 'desktop_bg', text: `desktop_bg${imgLastName}` },
          { id: 'desktop_content', label: 'desktop_content', text: `desktop_content${imgLastName}` }
        );
        break;
      case 'Mobile_Hero':
        newItems.push(
          { id: 'iPhone_bg', label: 'iPhone_bg', text: `iPhone_bg${imgLastName}` },
          { id: 'iPhone_content', label: 'iPhone_content', text: `iPhone_content${imgLastName}` },
          { id: 'iPhone_content_320', label: 'iPhone_content_320', text: `iPhone_content_320${imgLastName}` }
        );
        break;
      case 'Desktop_Takeover':
        newItems.push(
          { id: 'top_content', label: 'top_content', text: `responsive_hero_wGutter_top_content${imgLastName}` },
          { id: 'largeSkin', label: 'largeSkin', text: `responsive_hero_wGutter_largeSkin${imgLastName}` },
          { id: 'midSkin', label: 'midSkin', text: `responsive_hero_wGutter_midSkin${imgLastName}` },
          { id: 'smallSkin', label: 'smallSkin', text: `responsive_hero_wGutter_smallSkin${imgLastName}` },
          { id: 'narrowSkin', label: 'narrowSkin', text: `responsive_hero_wGutter_narrowSkin${imgLastName}` }
        );
        break;
      case 'Digital_Billboard':
        newItems.push(
          { id: 'DigitalBillboard', label: 'Digital Billboard', text: `Digital_Billboard${imgLastName}.jpg` }
        );
        break;
      default:
        break;
    }

    // Dynamic feature names
    switch (featureSelect) {
      case 'Animated':
        newItems.push({ id: 'Product1', label: 'Product1', text: `Product1${imgLastName}` });
        break;
      case 'wCarousel':
        newItems.push(
          { id: 'Product1', label: 'Product1', text: `Product1${imgLastName}` },
          { id: 'Product2', label: 'Product2', text: `Product2${imgLastName}` },
          { id: 'Product3', label: 'Product3', text: `Product3${imgLastName}` },
          { id: 'Product4', label: 'Product4', text: `Product4${imgLastName}` },
          { id: 'Product5', label: 'Product5', text: `Product5${imgLastName}` },
          { id: 'Product6', label: 'Product6', text: `Product6${imgLastName}` }
        );
        break;
      case 'wVideo':
        newItems.push(
          { id: 'poster', label: 'poster (jpg)', text: `poster${imgLastName}` },
          { id: 'posterPNG', label: 'poster (png)', text: `poster${imgLastName}` },
          { id: 'Videomp4', label: 'Video MP4', text: `${videoName}.mp4` },
          { id: 'VideoWebm', label: 'Video Webm', text: `${videoName}.webm` }
        );
        break;
      default:
        break;
    }

    setGeneratedItems(newItems);
  };

  return (
    <div className="tab-pane fade show active imgNamesParent" id="imgNamesParent" role="tabpanel">
      <div className="input-group">
        <select className="form-control" id="productType" style={{ maxWidth: '25%' }} value={productType} onChange={e => setProductType(e.target.value)}>
          <option disabled>Select Product</option>
          <option value="Hero">Hero</option>
          <option value="Desktop_Hero">Desktop Hero</option>
          <option value="Mobile_Hero">Mobile Hero</option>
          <option value="Desktop_Takeover">Desktop Takeover</option>
          <option value="Digital_Billboard">Digital Billboard</option>
          <option value="Holiday_Module">Holiday Module</option>
          <option value="Commute_Module">Commute Module</option>
        </select>
        <select id="featureSelect" className="form-control" style={{ maxWidth: '25%' }} value={featureSelect} onChange={e => setFeatureSelect(e.target.value)}>
          <option disabled>Select Feature</option>
          <option value="No_Feature">No Dynamic Feature</option>
          <option value="Animated">Animated</option>
          <option value="wCarousel">wCarousel</option>
          <option value="wVideo">wVideo</option>
          <option value="wCountdown">wCountdown</option>
          <option value="wHoliday_Module">wHoliday_Module</option>
          <option value="wCalendar_Module">wCalendar_Module</option>
          <option value="wCommute_Outlook_Module">wCommute_Outlook_Module</option>
          <option value="Ahead_Module">Ahead_Module</option>
          <option value="wContent_Module">wContent_Module</option>
        </select>
        <select id="storageType" className="form-control" style={{ maxWidth: '25%' }} value={storageType} onChange={e => setStorageType(e.target.value)}>
          <option disabled>Select Storage</option>
          <option value="GAM">GAM</option>
          <option value="SEBPO_Server">SEBPO Server</option>
        </select>
        <input className="form-control" type="text" id="versionNo" placeholder="V1 or Paint" style={{ maxWidth: '20%' }} value={versionNo} onChange={e => setVersionNo(e.target.value)} />
        <input className="form-control" type="text" id="videoName" placeholder="Video_Name" style={{ maxWidth: '20%' }} value={videoName} onChange={e => setVideoName(e.target.value)} />
        <input className="form-control" type="text" id="ticketNo" style={{ maxWidth: '20%' }} placeholder="XXXXXX - Ticket" value={ticketNo} onChange={e => setTicketNo(e.target.value)} />
        <input className="form-control" type="text" id="GAMVersion" style={{ maxWidth: '20%' }} placeholder="X - Version" value={gamVersion} onChange={e => setGamVersion(e.target.value)} />
        <button className="btn-success" onClick={handleProcessImages}>Process Text</button>
      </div>
      <div id="imgNamesGenerated">
        {generatedItems.length > 0 && <CopyListPage items={generatedItems} />}
      </div>
    </div>
  );
};

export default ImgNames;