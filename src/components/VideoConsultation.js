import React from 'react';

const VideoConsultation = () => {
  const handleConsultation = () => {
    // Redirect to third-party video consultation service
    window.location.href = 'https://third-party-service.com/consultation';
  };

  return (
    <div className="video-consultation">
      <h2>Video Consultation</h2>
      <button onClick={handleConsultation}>Start Consultation</button>
    </div>
  );
};

export default VideoConsultation;
