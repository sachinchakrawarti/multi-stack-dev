function ExportButton({
  isExporting,
  showDropdown,
  onToggle,
  onExportPDF,
  onExportPPTX,
  onExportAllPPTX,
  onExportPNG,
}) {
  return (
    <div className="btn-export-dropdown" style={{ position: "relative" }}>
      <button
        className={`btn-export ${isExporting ? "opacity-50 cursor-wait" : ""}`}
        onClick={onToggle}
        disabled={isExporting}
      >
        {isExporting ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            Exporting...
          </>
        ) : (
          <>
            <i className="fas fa-file-export"></i>
            Export
            <i
              className={`fas fa-chevron-${showDropdown ? "up" : "down"} text-xs`}
            ></i>
          </>
        )}
      </button>
      <div className={`dropdown-menu ${showDropdown ? "active" : ""}`}>
        <div className="dropdown-item" onClick={onExportPDF}>
          <i className="fas fa-file-pdf text-red-500"></i> Export as PDF
          <span className="text-xs text-gray-400 ml-auto">(Current)</span>
        </div>
        <div className="dropdown-item" onClick={onExportPPTX}>
          <i className="fas fa-file-powerpoint text-orange-500"></i> Export as
          PPTX
          <span className="text-xs text-gray-400 ml-auto">(Current)</span>
        </div>
        <div className="dropdown-item" onClick={onExportAllPPTX}>
          <i className="fas fa-file-powerpoint text-orange-500"></i> Export All
          as PPTX
          <span className="text-xs text-gray-400 ml-auto">(Full deck)</span>
        </div>
        <div className="dropdown-divider"></div>
        <div className="dropdown-item" onClick={onExportPNG}>
          <i className="fas fa-image text-green-500"></i> Export as PNG
          <span className="text-xs text-gray-400 ml-auto">(Current)</span>
        </div>
      </div>
    </div>
  );
}

window.ExportButton = ExportButton;
