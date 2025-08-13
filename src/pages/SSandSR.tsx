import { useState } from "react";
import CopyListPage, { type CopyItem } from '../components/CopyListPage';
import "bootstrap/dist/css/bootstrap.min.css";

export default function SSandSR() {
  const [inputUnitName, setInputUnitName] = useState("");
  const [items, setItems] = useState<CopyItem[]>([]);

  const processSSSRName = () => {
    if (!inputUnitName) return;

    // Remove unwanted parts from the input
    let folderName = inputUnitName.replace("_Mobile_Web", "");

    // Generate all names
    const generatedItems: CopyItem[] = [
      { id: "folderName", label: "Folder Name", text: folderName },
      { id: "screenshotDesktop", label: "Screenshot Desktop", text: `${folderName}_Screenshot_Desktop` },
      { id: "screenshotiPad", label: "Screenshot iPad", text: `${folderName}_Screenshot_iPad` },
      { id: "screenshotiPhone", label: "Screenshot iPhone", text: `${folderName}_Screenshot_iPhone` },
      { id: "screenRecordDesktop", label: "Screen Record Desktop", text: `${folderName}_Screen_Recording_Desktop` },
      { id: "screenRecordiPad", label: "Screen Record iPad", text: `${folderName}_Screen_Recording_iPad` },
      { id: "screenRecordiPhone", label: "Screen Record iPhone", text: `${folderName}_Screen_Recording_iPhone` },
      { id: "desktopTakeover1920", label: "Desktop Takeover 1920 (SS)", text: `${folderName}_Screenshot_1920` },
      { id: "desktopTakeover1366", label: "Desktop Takeover 1366 (SS)", text: `${folderName}_Screenshot_1366` },
      { id: "desktopTakeover1920SR", label: "Desktop Takeover 1920 (SR)", text: `${folderName}_Screen_Recording_1920` },
      { id: "desktopTakeover1366SR", label: "Desktop Takeover 1366 (SR)", text: `${folderName}_Screen_Recording_1366` },
      { id: "mobileTakeover", label: "Mobile Takeover (SS)", text: `${folderName}_Screenshot_iPhone` },
      { id: "mobileTakeoverSR", label: "Mobile Takeover (SR)", text: `${folderName}_Screen_Recording_iPhone` },
    ];

    setItems(generatedItems);
  };

  return (
    <div className="tab-pane fade show active" id="home" role="tabpanel">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Fountain_Tire_2025_Promo_2_Hero_Mobile_Web"
          value={inputUnitName}
          onChange={(e) => setInputUnitName(e.target.value)}
        />
        <button className="btn btn-success" onClick={processSSSRName}>
          Process Text
        </button>
      </div>

      {/* Render the reusable CopyListPage */}
      <CopyListPage items={items} />
    </div>
  );
}
