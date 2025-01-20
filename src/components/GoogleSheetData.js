import React, { useState, useEffect } from "react";
import axios from "axios";

const GoogleSheetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyMseqbTrrpUYEXzyDZ0pyh2O4rKBNAClSCt5sEGcjsw-ZxMf-Zx77z2Nf-XIoyib4mz-0Z1-XBEun/pub?output=csv";

      try {
        console.log("Fetching data from Google Sheets...");
        const response = await axios.get(sheetUrl);
        console.log("Raw CSV Data:", response.data);

        const csvData = response.data.split("\n").map(row => row.split(","));
        console.log("Parsed Data:", csvData);

        // Remove header row and create key-value objects
        const headers = csvData[0].map(header => header.trim()); // Trim spaces
        const rows = csvData.slice(1).filter(row => row.length === headers.length);

        const formattedData = rows.map(row =>
          headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
          }, {})
        );

        console.log("Final Structured Data:", formattedData);
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Google Sheet Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Inventory</th>
            <th>Description</th>
            <th>Date</th>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row["Inventory"]}</td>
                <td>{row["Description"]}</td>
                <td>{row["Date"]}</td>
                <td>{row["High-resolution image URL"]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetData;
