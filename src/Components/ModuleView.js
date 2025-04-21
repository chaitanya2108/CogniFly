import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SummarizePDFButton from "./SummarizePDFButton";
import ReactMarkdown from "react-markdown";
import moduleContent from "../data/moduleContent";
import moduleVideos from "../data/moduleVideos";
import styles from "./ModuleView.module.css";
import Loader from "./loader";
import LanguageSelector from "./LanguageSelector";
import translateText from "../utils/translate";

const ModuleView = ({ moduleId }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [translatedContent, setTranslatedContent] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoLoad = () => {
    setShowVideo(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowVideo(true);
    }, 2000);
  };

  const handleLanguageChange = async (newLanguage) => {
    setSelectedLanguage(newLanguage);

    if (newLanguage === "english") {
      setTranslatedContent("");
      return;
    }

    setIsTranslating(true);
    try {
      // Get the actual content from moduleContent
      const contentToTranslate = moduleContent[moduleId];
      console.log("Content to translate:", contentToTranslate);

      const translated = await translateText(contentToTranslate, newLanguage);
      console.log("Translation result:", translated);

      setTranslatedContent(translated);
    } catch (error) {
      console.error("Translation failed:", error);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="module-view">
      <div className="top-bar">
        <SearchBar />
      </div>

      <div className="content-area">
        <div className="content-header">
          <h1>Module {moduleId}</h1>
          <SummarizePDFButton
            showVideo={showVideo}
            setShowVideo={setShowVideo}
            onSummarize={handleVideoLoad}
            isLoading={isLoading}
          />
        </div>

        <div className="content-display">
          {isLoading && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(55, 57, 64, 0.9)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader />
            </div>
          )}

          {showVideo && !isLoading && moduleVideos[moduleId] && (
            <>
              <div className={styles["video-container"]}>
                <video
                  controls
                  className={styles["module-video"]}
                  src={moduleVideos[moduleId]}
                  onError={(e) => {
                    console.error("Video loading error:", e.target.error);
                    console.log(
                      "Attempted to load video from:",
                      moduleVideos[moduleId]
                    );
                  }}
                  onLoadedData={() => console.log("Video loaded successfully")}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                isTranslating={isTranslating}
              />
            </>
          )}

          {isTranslating ? (
            <div className={styles["loading-translation"]}>Translating...</div>
          ) : (
            <ReactMarkdown>
              {selectedLanguage === "english"
                ? moduleContent[moduleId] || "# Module content not found"
                : translatedContent || moduleContent[moduleId]}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleView;
