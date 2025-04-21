import React from "react";

const SummarizePDFButton = ({
  showVideo,
  setShowVideo,
  onSummarize,
  isLoading,
}) => {
  const handleClick = () => {
    if (showVideo) {
      // If video is showing, just hide it
      setShowVideo(false);
    } else {
      // If video is not showing, trigger loading process
      onSummarize();
    }
  };

  return (
    <button
      className="summarize-btn"
      style={{
        backgroundColor: "#A593E6",
        color: "white",
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : showVideo ? "Hide Summary" : "Summarize"}
    </button>
  );
};

export default SummarizePDFButton;
