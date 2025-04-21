const API_BASE_URL = "http://localhost:8000/api";

export const fetchAllPdfs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/pdfs`);
    if (!response.ok) throw new Error("Failed to fetch PDFs");
    const data = await response.json();
    console.log("Fetched PDFs:", data);
    return data.pdfs;
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    return [];
  }
};

export const fetchPdfContent = async (moduleId) => {
  console.log("fetchPdfContent called with moduleId:", moduleId);

  try {
    if (moduleId === undefined || moduleId === null) {
      throw new Error("Module ID is required");
    }

    // Ensure moduleId is a number
    const pdfNumber = parseInt(moduleId);
    console.log("Parsed pdfNumber:", pdfNumber);

    if (isNaN(pdfNumber) || pdfNumber < 1) {
      throw new Error("Invalid module ID: must be a positive number");
    }

    const url = `${API_BASE_URL}/pdf/pdf${pdfNumber}`;
    console.log("Fetching PDF from URL:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/pdf",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    console.log("PDF blob received, size:", blob.size, "bytes");

    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error in fetchPdfContent:", error);
    throw error;
  }
};
