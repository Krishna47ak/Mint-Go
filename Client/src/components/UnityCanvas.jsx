import React, { useEffect, useRef } from "react";

const UnityCanvas = ({level}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Adjust styles for mobile devices
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
      document.head.appendChild(meta);

      const canvas = canvasRef.current;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.position = "fixed";

      document.body.style.textAlign = "left";
    }

    const initializeUnity = async () => {
      try {
        const createUnityInstance = window.createUnityInstance;
        if (createUnityInstance) {
          const unityInstance = await createUnityInstance(canvasRef.current, {
            arguments: [],
            dataUrl: `./src/assets/Build${level}/WebPokemon.data`,
            frameworkUrl: `./src/assets/Build${level}/WebPokemon.framework.js`,
            codeUrl: `./src/assets/Build${level}/WebPokemon.wasm`,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "CrowdStrike",
            productName: "opPokemon",
            productVersion: "1.0",
          });

          if (unityInstance) {
            unityInstance.SendMessage("StateManager", "startGame", level);
            window.addEventListener("keydown", (e) => {
              if (e.key === "w") {
                unityInstance.SendMessage("StateManager", "evolve", level);
              }
            });
            console.log("Data sent to Unity");
          } else {
            console.error("Unity instance is not ready");
          }
        } else {
          console.error("createUnityInstance is not defined");
        }
      } catch (error) {
        console.error("Error initializing Unity:", error);
      }
    };

    // Dynamically load Unity loader script
    const script = document.createElement("script");
    script.src = `./src/assets/Build${level}/WebPokemon.loader.js`;
    script.onload = initializeUnity;
    script.onerror = () => console.error("Failed to load Unity loader script");
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <canvas
      id="unity-canvas"
      ref={canvasRef}
      width="1080"
      height="1080"
      tabIndex="-1"
      style={{
        width: "100%",
        height: "200px",
        background: "#1f1f20",  
      }}
    ></canvas>
  );
};

export default UnityCanvas;