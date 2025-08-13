import React, { useState } from "react";

const FolderManager: React.FC = () => {
  const [folderName, setFolderName] = useState("");
  const [message, setMessage] = useState("");

  const createFolder = async () => {
    if (!folderName.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/create-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folderName }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}: ${data.path}`);
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (err) {
      setMessage("❌ Server error");
    }

    setFolderName("");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Create Real Folder (Backend)</h2>
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Enter folder name"
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={createFolder} style={{ padding: "0.5rem" }}>
        Create
      </button>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
};

export default FolderManager;
