import React from "react";
/**
 * Uploadfile Component
 * Provides a file upload input for the user to upload a certification of incorporation.
 *
 * Description:
 * - The user is prompted to upload a file with specific instructions and maximum size.
 * - The UI includes a drag-and-drop area or a click-to-upload option.
 * - The label includes a required field marker.
 *
 * Props:
 * (No props for this component currently, but you can extend it with more functionality if needed.)
 *
 * Example Usage:
 * <Uploadfile />
 *
 * @returns {JSX.Element} The Uploadfile component.
 */

const Uploadfile = () => {
  const required = <span className="text-red-500">*</span>;
  return (
    <div>
      <div className="mb-5">
        <label For="uploadcertification" className=" block lable-text">
          Certification of Incorporation {required}
          <span className="block lable-text-span">
            {" "}
            Upload the incorporation certificate
          </span>
        </label>
        {/* File Upload Section */}
        <div class="flex items-center justify-center w-full file-upload-box">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dotted rounded-lg cursor-pointer bg-white hover:bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              {/* Upload Icon */}
              <svg
                class="w-8 h-8 mb-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>

              {/* Instructions Text */}
              <p class="mb-2 text-sm text-gray-500">
                <span class="font-semibold">
                  <u><b>Click to upload</b></u>
                </span>{" "}
                or drag and drop
              </p>

              {/* Maximum file size notice */}
              <p class="text-xs text-gray-500">Maximum file size 50 MB</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Uploadfile;
