import React, { useState } from 'react';

export interface CopyItem {
  id: string;
  label: string;
  text: string | React.ReactNode;
}

interface CopyListPageProps {
  items: CopyItem[];
  replaceTodayDate?: boolean; // if true, replaces placeholders with today's date
}

const CopyListPage: React.FC<CopyListPageProps> = ({ items, replaceTodayDate = false }) => {
  const [copiedText, setCopiedText] = useState('');

  const today = new Date();
  const todayDateStr = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const formatText = (text: string | React.ReactNode) => {
    if (typeof text === 'string' && replaceTodayDate) {
      return text.replace(/TODAY_DATE/g, todayDateStr);
    }
    return text;
  };

  const copyText = (text: string | React.ReactNode, id: string) => {
    const textToCopy = typeof text === 'string'
      ? text
      : (document.getElementById(id)?.textContent || '');

    navigator.clipboard.writeText(textToCopy);
    setCopiedText(`Copied: ${textToCopy}`);

    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = 'green';
      element.style.color = 'white';
    }
  };

  const clearAllStyles = () => {
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        element.style.backgroundColor = '';
        element.style.color = '';
      }
    });
    setCopiedText('');
  };

  return (
    <div className="container-fluid">
      {items.map((item) => (
        <div className="nameItem" key={item.id}>
          <b>{item.label}</b>
          <p id={item.id}>{formatText(item.text)}</p>
          <button
            className="btn btn-success ms-2"
            onClick={() => copyText(formatText(item.text), item.id)}
          >
            Copy
          </button>
        </div>
      ))}

      {copiedText && <p id="alertMsg">{copiedText}</p>}

      <button
        className="btn btn-danger mt-3"
        style={{ float: 'right' }}
        onClick={clearAllStyles}
      >
        Clear Selection
      </button>
    </div>
  );
};

export default CopyListPage;
