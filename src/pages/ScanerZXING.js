import React, { useState, useEffect } from "react";
import ZXing from "@zxing/library";

const Scanner = () => {
  const [scanner, setScanner] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const codeReader = new ZXing.BrowserQRCodeReader();

    setScanner(codeReader);
  }, []);

  const handleScan = async () => {
    try {
      const result = await scanner.decodeOnceFromVideoDevice(undefined, "video");
      setResult(result.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <video id="video" width="300" height="200" onLoadedMetadata={handleScan} />
      <p>Result: {result}</p>
    </div>
  );
};

export default Scanner;
