import React, { useState, useEffect } from 'react';

// Main App component
const Hero3 = () => {
  // Array of placeholder video URLs - Replaced with more reliable public domain videos
  const videos = [
    'https://assets.mixkit.co/videos/preview/mixkit-field-of-wheat-in-the-wind-1200-large.mp4', // Mixkit - Field of Wheat
    'https://assets.mixkit.co/videos/preview/mixkit-farmer-walking-in-a-field-with-a-tractor-in-the-background-44827-large.mp4', // Mixkit - Farmer with tractor
    'https://assets.mixkit.co/videos/preview/mixkit-farmer-and-his-tractor-in-the-field-44826-large.mp4', // Mixkit - Tractor in field
    'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-farmer-sowing-seeds-44828-large.mp4', // Mixkit - Sowing seeds
    'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-farm-with-a-tractor-44829-large.mp4' // Mixkit - Aerial farm view
  ];

  // State to keep track of the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // State to manage loading status of the video
  const [videoLoading, setVideoLoading] = useState(true);
  // State to manage video error status
  const [videoError, setVideoError] = useState(false);

  // Function to go to the next video
  const nextVideo = () => {
    setVideoLoading(true); // Set loading to true before changing video
    setVideoError(false); // Reset error state
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous video
  const prevVideo = () => {
    setVideoLoading(true); // Set loading to true before changing video
    setVideoError(false); // Reset error state
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  // Auto-advance the carousel every few seconds
  useEffect(() => {
    const interval = setInterval(nextVideo, 7000); // Change video every 7 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentVideoIndex]); // Depend on currentVideoIndex to reset interval when video changes

  // Handle video load success
  const handleVideoLoad = () => {
    setVideoLoading(false);
    setVideoError(false);
  };

  // Handle video load error
  const handleVideoError = (e) => {
    // Log a more specific error message to avoid "Circular Object"
    console.error("Video loading error:", e.type, e.target.error ? e.target.error.message : 'Unknown error');
    setVideoLoading(false);
    setVideoError(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 font-inter">
      {/* Video background with overlay */}
      <div className="absolute inset-0">
        {videoLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-xl">
            Loading video...
          </div>
        )}
        {videoError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900 text-white text-xl p-4">
            <p className="mb-2">Failed to load video.</p>
            <p className="text-sm">Please check the video URL or your internet connection.</p>
            {/* Optional: Placeholder image or icon */}
            <svg className="w-16 h-16 mt-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        ) : (
          <video
            key={currentVideoIndex} // Key prop to force re-render and restart video on index change
            className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${videoLoading ? 'opacity-0' : 'opacity-100'}`}
            src={videos[currentVideoIndex]}
            autoPlay
            loop
            muted
            playsInline // Important for mobile autoplay
            onLoadedData={handleVideoLoad} // Event when video data is loaded
            onError={handleVideoError} // Event on video loading error
          >
            Your browser does not support the video tag.
          </video>
        )}
        {/* Dark overlay for better text readability - reduced opacity */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content over the video - positioned lower */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 md:px-8 lg:px-16 pb-16"> {/* pb-16 adds bottom padding */}
        {/* Subtle background for text to ensure readability */}
        <div className="bg-gradient-to-t from-black via-black/60 to-transparent p-8 rounded-t-lg max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 drop-shadow-lg">
            Nourishing the Earth, Growing the Future
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto drop-shadow-md">
            Discover our premium fertilizers designed for sustainable agriculture and bountiful harvests.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
            Explore Our Products
          </button>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        <button
          onClick={prevVideo}
          className="p-3 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Previous video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          onClick={nextVideo}
          className="p-3 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Next video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Dots for video indication */}
      <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              currentVideoIndex === index ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-50'
            }`}
            aria-label={`Go to video ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
