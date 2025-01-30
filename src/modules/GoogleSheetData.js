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
      {/* <table border="1">
        <thead>
          <tr>
            <th>Inventory</th>
            <th>Description</th>
            <th>Date</th>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody> */}

        {/* The img won't render from google, even with this new URL
         <img src="https://lh3.googleusercontent.com/d/1Bv0dI1shEl1Sfmq6P4aA9Zt5nb4KFy-J" alt="test" width="250"/> */}


         {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <figure key={rowIndex}>
                <img src={row["URL"]} alt={row["Description"]} width="300" />
                <figcaption>{row["URL"]}, {row["Description"]}</figcaption>
              </figure>
              // <tr key={rowIndex}>
              //   <td>{row["Inventory"]}</td>
              //   <td>{row["Description"]}</td>
              //   <td>{row["Date"]}</td>
              //   <td>{row["URL"]}</td>
              // </tr>
            ))
          ) : (
            // <tr>
              <p>Loading data...</p>
            // </tr>
          )}
        {/* </tbody>
      </table> */}
    </div>
  );
};

export default GoogleSheetData;
