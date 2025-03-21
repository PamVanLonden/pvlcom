import { useState, useEffect } from "react";
import Papa from "papaparse";

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

                // Use PapaParse to parse the CSV correctly
                Papa.parse(text, {
                    complete: (result) => {
                        console.log("Parsed CSV Data:", result.data); // Debugging
                        setData(result.data);
                    },
                    header: true, // This tells PapaParse that the first row contains column headers
                    skipEmptyLines: true, // Skip empty lines
                });
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
