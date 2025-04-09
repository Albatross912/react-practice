import axios from "axios";
import React, { useState } from "react";

const InsertKey = () => {
  const [keyValue, setKeyValue] = useState("");
  const handleInputChange = (event) => {
    setKeyValue(event.target.value);
  };
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically handle the logic for updating the key
    console.log("Updated key:", keyValue);
    try {
      await axios.post(
        "https://3000-idx-my-java-app-1742539032645.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/insertkey",
        { keyValue }
      );
      // Reset the input field after submission
      setData((p) => [...p, keyValue]);
      setKeyValue("");
    } catch (e) {}
  };

  return (
    <div className="p-4 bg-red-400">
      <h3 className="text-lg font-bold mb-4">Insert Key</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          Key:
          <input
            type="text"
            value={keyValue}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-1"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        >
          Create Key
        </button>
      </form>
      <div>
        <ul className="list-disc pl-5">
          {data.map((value, index) => (
            <li key={index} className="mb-1">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsertKey;
