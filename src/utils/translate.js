const translateText = async (text, targetLanguage) => {
  // First, log the attempt
  console.log("Attempting to translate:", {
    text: text,
    targetLanguage: targetLanguage,
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY
      ? "Present"
      : "Missing",
  });

  // Get the correct language code
  const getLanguageCode = (language) => {
    switch (language) {
      case "hindi":
        return "hi";
      case "chinese":
        return "zh"; // 'zh' is the code for Simplified Chinese
      default:
        return "en";
    }
  };

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: getLanguageCode(targetLanguage),
        }),
      }
    );

    // Log the response status
    console.log("API Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error response:", errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Translation response:", data);

    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Return original text if translation fails
  }
};

export default translateText;
