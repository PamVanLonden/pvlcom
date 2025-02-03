import { useState, useEffect } from "react";

const useFetchCSV = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch data");

                const text = await response.text();
                console.log("Raw CSV Data:", text); // Debugging

                const rows = text
                    .split("\n")
                    .map(row => row.split(",").map(cell => cell.trim())); // Trim spaces

                const headers = rows[0].map(header => header.trim());
                console.log("Headers:", headers); // Debugging

                const formattedData = rows.slice(1).map(row =>
                    Object.fromEntries(row.map((cell, i) => [headers[i], cell]))
                );

                console.log("Formatted Data:", formattedData); // Debugging
                setData(formattedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchCSV;
