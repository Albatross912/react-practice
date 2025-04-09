import React, { useState } from "react";
import "./UpdateKey.css";
import axios from "axios";

function UpdateKey() {
  const [keyValue, setKeyValue] = useState("");
  const [indexValue, setIndexValue] = useState();

  const handleIndexChange = (event) => {
    setIndexValue(event.target.value);
  };
  const handleKeyChange = (event) => {
    setKeyValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically handle the logic for updating the key
    console.log("Updated key:", keyValue);
    await axios.put(
      "https://3000-idx-my-java-app-1742539032645.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/updatekey",
      {
        index: parseInt(indexValue),
        key: keyValue,
      }
    );
    setIndexValue("");
    // Reset the input field after submission
    setKeyValue("");
  };

  return (
    <div className="m-4 p-4">
      <h3 className="mb-4">Update Key</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Index:
          <input
            type="number"
            value={indexValue}
            onChange={handleIndexChange}
            className="ml-2 p-2 border rounded"
          />
        </label>
        <label className="block">
          Key:
          <input
            type="text"
            value={keyValue}
            onChange={handleKeyChange}
            className="ml-2 p-2 border rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Update Key
        </button>
      </form>
    </div>
  );
}

export default UpdateKey;
