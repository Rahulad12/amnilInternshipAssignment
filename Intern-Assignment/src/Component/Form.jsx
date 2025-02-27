import React from "react";
import { useState } from "react";
import Documentfield from "./Documentfield";
import "../Customecss/Form.css";

/**
 * Form Component
 * Renders a form to collect business-related information from users.
 * Includes file upload sections and navigation buttons for step transitions.
 *
 * Props:
 * - `nextsteps` (function): Callback to handle the "Next" button click.
 * - `previoussteps` (function): Callback to handle the "Previous" button click.
 *
 * @param {object} props - Props for the Form component.
 * @returns {JSX.Element} The Form component.
 */

const Form = ({ nextsteps, previoussteps }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  const required = <span className="text-red-500">*</span>;
  return (
    <>
      <div className="form-container">
        {/* header of the Content is here */}
        <div className="header">
          <h1>Tell us more about your business</h1>
          <p>
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you get
            top-notch service without any buffering!
          </p>
        </div>
        {/* form section  */}
        <form onSubmit={submitHandler} className="form">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 ">
            <div className="col-span-1 md:col-span-6">
              {/* First Column */}
              <div className="mb-5">
                <label
                  htmlFor="legalName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Legal Name {required}
                </label>
                <input
                  type="text"
                  id="legalName"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Legal Name"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="companyRegNo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Company Registration Number {required}
                </label>
                <input
                  type="text"
                  id="companyRegNo"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Company Registration Number"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Website URL {required}
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Website URL"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="randomDropdown1"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  One Random Dropdown {required}
                </label>
                <select
                  id="randomDropdown1"
                  name="randomDropdown1"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  required
                >
                  <option selected>Option nai option</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="randomDropdown2"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Another Random Dropdown Appears {required}
                </label>
                <select
                  id="randomDropdown2"
                  name="randomDropdown2"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  required
                >
                  <option selected>Return of the option</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="randomCount"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Random Count per Month {required}
                </label>
                <input
                  type="text"
                  id="randomCount"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Put the value get the answer"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="purpose"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Purpose of using fake form {required}
                </label>
                <textarea
                  id="purpose"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Purpose of using fake form"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="contactEmail"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contact Email {required}
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Contact email"
                  required
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="col-span-1 md:col-span-6">
              <div className="mb-5">
                <label
                  htmlFor="doingbusinessas"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Doing business as {required}
                </label>
                <input
                  type="text"
                  id="doingbusinessas"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Doing business as"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="randomregnumber"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Company Registration Number {required}
                </label>
                <input
                  type="text"
                  id="randomregnumber"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Random Registration Number"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="industryname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Industry Name {required}
                </label>
                <input
                  type="text"
                  id="website2"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Website URL"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="randomDropdown3"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Which dropdown would you like to select {required}
                </label>
                <select
                  id="randomDropdown3"
                  name="randomDropdown3"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  required
                >
                  <option selected>More Option</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="randomDropdown4"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Account Usage Intent {required}
                </label>
                <select
                  id="randomDropdown4"
                  name="randomDropdown4"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  required
                >
                  <option selected>Account Usage Intent</option>
                  <option value="2">option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="totalvisit"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Expected total visit in this page {required}
                </label>
                <input
                  type="number"
                  id="totalvisit"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="In Number"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="purpose2"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ek description toh banta hai {required}
                </label>
                <textarea
                  id="purpose2"
                  className="bg-gray-50 border border-gray-300 block w-full p-2.5"
                  placeholder="Product Description"
                  required
                />
              </div>
            </div>
          </div>

          {/* this componet provide the section to upload the file  */}
          <Documentfield />
          {/* footer section include button  */}
          <div className="footer flex justify-between">
            <button
              type="button"
              class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              onClick={previoussteps}
            >
              Previous
            </button>

            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={nextsteps}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
