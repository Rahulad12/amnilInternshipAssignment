import React from "react";
import Uploadfile from "./Uploadfile";

/**
 * Documentfield Component
 * This component provides fields for uploading files, including certification documents and a company logo.
 * 
 * Features:
 * - Includes two sections:
 *   1. Upload Certification
 *   2. Upload Company Logo
 * - Utilizes the `Uploadfile` component for file uploading.
 * 
 * Usage:
 * <Documentfield />
 */

const Documentfield = () => {
  return (
    <div>
      {/* File upload section */}
      <div className="file-upload-section">
        
        {/* Upload Certification section */}
        <div className="upload-certification">
          <div className="gap-6 p-6">
            {/* Component for uploading certification files */}
            <Uploadfile />
          </div>
        </div>

        {/* Upload Company Logo section */}
        <div className="company-logo">
          <div className="gap-6 p-6">
            {/* Component for uploading company logo */}
            <Uploadfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentfield;
