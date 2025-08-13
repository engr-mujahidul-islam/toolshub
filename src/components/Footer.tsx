import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light py-2 fixed-bottom">
      <div className="text-center">
        <p className="text-danger mb-0">ToolsHub is now in testing mode, Please double check while using this tool. Thank you.</p>
        <p className="mb-0 mt-2">
          Contact: Any comment, suggesstion or feedback is welcome, Please drop here: <a href="https://wa.me/+8801767094404" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        </p>
        <p className="text-muted mb-0">&copy; 2025 ToolsHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;