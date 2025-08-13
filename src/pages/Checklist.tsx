import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// This is the data structure for the SOP content
const checkListContents = {
  devSOP: {
    title: 'Initial Dev SOP',
    listItems: [
      'Ad Size (Height, Width)',
      'Ad position in AW site',
      'Responsiveness and Cross-browser for both Windows and MAC including Portrait and Landscape view for all iPad and iPhone where applicable',
      'Click tag',
      'Image loading check',
      'add CSS Pre-fixer and No JS error in console ensure'
    ]
  },
  preview: {
    title: 'Preview',
    listItems: [
      'City, Temperature, Icon as per client brief: Default (New York, F, any)',
      'Removed another ads during the Screenshot and Screen recording only.',
      'Sound is muted during screen recordings, and the standard duration is 15 seconds, though it can be extended based on the creative requirements.'
    ]
  },
  // Add other SOP content here in the future
};

const Checklist: React.FC = () => {
  const [activeContent, setActiveContent] = useState('devSOP');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const sidebarItems = [
    { id: 'devSOP', label: 'Dev SOP' },
    { id: 'preview', label: 'Preview' },
    // Add other sidebar items here
  ];

  const handleItemClick = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleClearAll = () => {
    setCheckedItems({});
  };

  const renderContent = () => {
    const content = checkListContents[activeContent as keyof typeof checkListContents];
    if (!content) {
      return <div>Select a menu item to view content.</div>;
    }

    return (
      <div>
        <h2 className="mb-4">{content.title}</h2>
        <ul className="list-unstyled">
          {content.listItems.map((item, index) => (
            <li
              key={index}
              className="d-flex align-items-center p-2 mb-2 border rounded"
              onClick={() => handleItemClick(item)}
              style={{ cursor: 'pointer' }}
            >
              <input
                className="form-check-input me-2"
                type="checkbox"
                id={`checkbox-${index}`}
                checked={checkedItems[item] || false}
                onChange={() => handleItemClick(item)}
                style={{ pointerEvents: 'none' }}
              />
              <span
                className="flex-grow-1"
                style={{ textDecoration: checkedItems[item] ? 'line-through' : 'none' }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
        <button
          className="btn btn-danger mt-3"
          onClick={handleClearAll}
        >
          Clear all checked
        </button>
      </div>
    );
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success position-fixed" style={{ width: '280px', height: '100vh' }}>
        <ul className="nav nav-pills flex-column mb-auto">
          {sidebarItems.map(item => (
            <li className="nav-item" key={item.id}>
              <a
                href="#"
                className={`nav-link text-white ${activeContent === item.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveContent(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1 p-4 overflow-auto" style={{ marginLeft: '280px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Checklist;