import { Routes, Route } from 'react-router-dom';
import Previews from './pages/Previews';
import ImgNames from './pages/ImgNames';
import Creatives from './pages/Creatives';
import SSandSR from './pages/SSandSR';
import Images from './pages/Images';
// import Home from './pages/Home';
import TabsPage from './pages/TabsPage';
import About from './pages/About';
import FolderPage from './pages/FolderPage';
import Paths from './pages/Paths';

import Post from './pages/Post';
import QA from './pages/QA';
import Team from './pages/Teams';
import Codes from './pages/Codes';
import Daily from './pages/Daily';
import Sop from './pages/Sop';
import Checklist from './pages/Checklist';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Previews />} />
      <Route path="/previews" element={<Previews />} />
      <Route path="/codes" element={<Codes />} />
      <Route path="/creatives" element={<Creatives />} />
      <Route path="/ImgNames" element={<ImgNames />} />
      <Route path="/ss-sr" element={<SSandSR />} />
      <Route path="/paths" element={<Paths />} />
      <Route path="/images" element={<Images />} />
      <Route path="/tabsPage" element={<TabsPage />} />
      <Route path="/tabsPage" element={<About />} />
      <Route path="/tabsPage" element={<FolderPage />} />
      <Route path="/qa" element={<QA />} />
      <Route path="/team" element={<Team />} />
      <Route path="/post" element={<Post />} />
      <Route path="/daily" element={<Daily />} />  
      <Route path="/checklist" element={<Checklist />} />  
      <Route path="/sop" element={<Sop />} />  
      <Route path="*" element={<h1>404 Not Found</h1>} />      
    </Routes>
  );
}
