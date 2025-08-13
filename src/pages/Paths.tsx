import  { useState, useEffect } from "react";

const products = {
  "Hero": [
    "desktop_bg.jpg",
    "desktop_content.png",
    "iPad_bg.jpg",
    "iPad_content.png",
    "iPhone_bg.jpg",
    "iPhone_content.png",
    "iPhone_content_320.png",
  ],
  "Hero_wVideo": [
    "amfam.mp4",
    "amfam.webm",
    "desktop_bg.jpg",
    "desktop_content.png",
    "iPad_bg.jpg",
    "iPad_content.png",
    "iPhone_bg.jpg",
    "iPhone_content.png",
    "iPhone_content_320.png",
  ],
  "Desktop_Hero": [
    "desktop_bg.jpg",
    "desktop_content.png",
  ], 
};

export default function Paths() {
  const [iframeSrc, setIframeSrc] = useState("https://creativeapp.sebpo.net/banner/awcreative/2025/");
  const [iframeInput, setIframeInput] = useState(iframeSrc);

  const updateIframeSrc = () => {
    setIframeSrc(iframeInput);
  };
  
  const [selectedProduct, setSelectedProduct] = useState<keyof typeof products>(Object.keys(products)[0] as keyof typeof products);
  const [fileNames, setFileNames] = useState(products[selectedProduct].join("\n"));
  const [filePath, setFilePath] = useState(
    "https://creativeapp.sebpo.net/banner/awcreative/2025/American_Family_Insurance/Hero_wVideo/Evergreen/v1/"
  );
  const [mediaHtml, setMediaHtml] = useState("");


  const [inputText, setInputText] = useState("");
  const [extractedFileNames, setExtractedFileNames] = useState<string[]>([]);

  const extractFileNames = () => {
    const lines = inputText.trim().split("\n");
    const files = lines
      .map((line) => line.split(/\t+/)[1])
      .filter((filename) => filename);
    setExtractedFileNames(files);
  };


  const addStylesToIframe = () => {
    const iframe = document.getElementById("pathIframe") as HTMLIFrameElement;

    console.log(iframe);
    if (iframe && iframe.contentDocument) {
      const style = document.createElement("style");
      style.textContent = `
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
        }
        .media-box {
          margin-bottom: 20px;
        }
        .media-box img, .media-box video {
          max-width: 100%;
          height: auto;
        }
      `;
      iframe.contentDocument.head.appendChild(style);
    }
  };



  useEffect(() => {
    setFileNames(products[selectedProduct].join("\n"));
    clearOutput();
  }, [selectedProduct]);

  const clearOutput = () => {
    setMediaHtml("");
  };

  const generateMedia = () => {
    clearOutput();

    const fileList = fileNames
      .split(/[\n\t]+/)
      .map((name) => name.trim())
      .filter((name) => name);

    if (fileList.length === 0) {
      alert("No file names found to generate.");
      return;
    }

    const media = fileList.map((fileName) => {
      const fullUrl = filePath + fileName;
      if (fileName.match(/\.(mp4|webm)$/i)) {
        return (
          ` <div class="media-box"><u>${fileName}</u> <video controls><source src="${fullUrl}" type="video/${fileName.toLowerCase().endsWith(".mp4") ? "mp4" : "webm"}"></video></div>`
        );
      } else {
        return (` <div class="media-box"><u>${fileName}</u> <img src="${fullUrl}" alt="${fileName}" /></div>`);
      }
    });

    setMediaHtml(media.join("\n"));
  };

  return (
    <>
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Dynamic Iframe Loader</h2>

      <input
        type="text"
        name="newIframLink"
        value={iframeInput}
        onChange={(e) => setIframeInput(e.target.value)}
        placeholder="Enter new iframe URL"
        style={{ width: "100%", padding: 10, fontSize: 16, marginBottom: 10 }}
      />

      <button
        onClick={updateIframeSrc}
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 4 }}
      >
        Load Iframe
      </button>

      <div style={{ marginTop: 20 }}>
        <iframe
          src={iframeSrc}
          onLoad={addStylesToIframe}
          id="pathIframe"          
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
          title="Media Iframe"
        ></iframe>
      </div>
    </div>

    <div style={{ padding: 20, fontFamily: "Arial" }}>
        <h2>Extract File Names</h2>

        <label htmlFor="inputBox">Paste your file list:</label>
        <textarea
          id="inputBox"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste the file data here..."
          style={{ width: "100%", height: 180, marginBottom: 10 }}
        ></textarea>

        <button
          onClick={extractFileNames}
          style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 4 }}
        >
          Extract
        </button>

        <div style={{ marginTop: 20 }}>
          <h3>File Names:</h3>
          <pre style={{ background: "#f0f0f0", padding: 10 }}>{extractedFileNames.join("\n")}</pre>
        </div>
      </div>
    
    
    
    
    <div style={{ padding: "20px", background: "#f7f7f7", fontFamily: "Arial, sans-serif" }}>
      <h2>Product Media Viewer</h2>

      <div className="product-buttons" style={{ marginBottom: "15px" }}>
        {Object.keys(products).map((product) => (
          <button
            key={product}
            className={product === selectedProduct ? "active" : ""}
            onClick={() => setSelectedProduct(product as keyof typeof products)}
            style={{
              marginRight: "8px",
              marginBottom: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              border: "1px solid #444",
              background: product === selectedProduct ? "#007bff" : "#fff",
              color: product === selectedProduct ? "white" : "black",
              borderRadius: "5px",
              transition: "background-color 0.3s",
            }}
          >
            {product}
          </button>
        ))}
      </div>

      <label htmlFor="fileNames">Paste or edit file names here:</label>
      <textarea
        id="fileNames"
        value={fileNames}
        onChange={(e) => setFileNames(e.target.value)}
        placeholder="Paste or edit filenames here..."
        style={{ width: "100%", height: "140px", fontSize: "14px", padding: "10px" }}
      ></textarea>

      <label htmlFor="filePath">Enter base file path:</label>
      <input
        id="filePath"
        type="text"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
        style={{ width: "100%", fontSize: "16px", padding: "10px", margin: "10px 0 20px 0" }}
      />

      <button
        className="generate-btn"
        onClick={generateMedia}
        style={{
          padding: "10px 22px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#28a745",
          color: "white",
        }}
      >
        Generate
      </button>

      <div
        className="media-wrapper"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}
        dangerouslySetInnerHTML={{ __html: mediaHtml }}
      ></div>

      {/* <h3 style={{ marginTop: "30px" }}>Generated HTML:</h3> */}
      <div
        className="html-output"
        style={{ whiteSpace: "pre-wrap", background: "#eee", padding: "10px", fontFamily: "monospace" }}
      >
        {/* {mediaHtml} */}
      </div>
    </div>
    
    </>
    
  );
}
