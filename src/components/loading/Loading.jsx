import React, { useEffect, useState } from "react";

const Loading = () => {
  const [showDataAlert, setShowDataAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDataAlert(true);
    }, 3000);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative gap-3">
      {showDataAlert ? (
        <div className="w-full py-5 flex items-center px-4 justify-center bg-zinc-600">
          <span className="w-1/2 text-center">
            If you're seeing this message, no data provided from the backend. :/
            Sorry. 
          </span>
        </div>
      ) : (
        <>
          <div className="w-3 h-3 flex rounded-full bg-zinc-500 animate-pulse"></div>
          <div className="w-3 h-3 flex rounded-full bg-zinc-500 animate-pulse"></div>
          <div className="w-3 h-3 flex rounded-full bg-zinc-500 animate-pulse"></div>
        </>
      )}
    </div>
  );
};

export default Loading;
