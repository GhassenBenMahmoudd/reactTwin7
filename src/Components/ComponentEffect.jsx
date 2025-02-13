import React, { useEffect } from "react";

const ComponentEffect = () => {
  useEffect(() => {
    console.log("ComponentEffect monté !");
    return () => {
      console.log("ComponentEffect démonté !");
    };
  }, []);

  return <div>Ceci est ComponentEffect</div>;
};

export default ComponentEffect;