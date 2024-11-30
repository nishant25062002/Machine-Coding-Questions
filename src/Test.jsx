import React, { useState, useEffect } from "react";

// Sample error icon and loader placeholder
const ErrorIcon = () => (
  <div style={{ fontSize: "24px", color: "red" }}>⚠</div>
);
const Loader = () => (
  <div style={{ width: "38px", height: "38px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="spinner" />
  </div>
);

const CircleImage = ({ image, index }) => {
  const [status, setStatus] = useState("loading"); // 'loading', 'success', or 'error'
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (image.ready) {
      const img = new Image();
      img.src = image.url;
      img.onload = () => setStatus("success");
      img.onerror = () => {
        if (attempts < 3) {
          setTimeout(() => setAttempts((prev) => prev + 1), 5000);
        } else {
          setStatus("error");
        }
      };
    } else {
      setStatus("error");
    }
    
  }, [attempts, image.ready, image.url]);

  if (status === "loading") {
    return <Loader />;
  }
  
  if (status === "error") {
    return <ErrorIcon />;
  }

  return (
    <img
      src={image.url}
      alt={`Image ${index}`}
      style={{ width: "38px", height: "38px", borderRadius: "50%" }}
    />
  );
};

const ImageGrid = ({ name, count, images }) => {
  const displayImages = [...images];
  while (displayImages.length < 4) displayImages.push(null); // Add placeholders

  const hasError = images.some((img) => img?.error);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <h2>{name}</h2>
        <span>{count}</span>
      </div>
      {hasError && (
        <div style={{ marginBottom: "16px", textAlign: "center" }}>
          <ErrorIcon />
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 38px)",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {displayImages.map((img, index) => (
          <div
            key={index}
            style={{
              width: "38px",
              height: "38px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: img ? "#fff" : "#f0f0f0",
              borderRadius: "50%",
              border: "1px solid #ddd",
              overflow: "hidden",
            }}
          >
            {img ? <CircleImage image={img} index={index} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  const images = [
    { url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91iKhzu-4c2hPFN.jpg", ready: true, error: false },
    { url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICb.jpg", ready: true, error: false },
    { url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91j5-eCEW5j1nOY.jpg", ready: false, error: true },
    { url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICd.jpg", ready: false, error: true },
  ];

  return <ImageGrid name="Image Gallery" count={4} images={images} />;
};

export default App;