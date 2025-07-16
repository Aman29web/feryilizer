import React, { useState, useEffect, useRef } from 'react';

// Import your local video assets
import video1 from '../../assets/v13.mp4';
import video2 from '../../assets/16.mp4';
import video3 from '../../assets/15.mp4';
import video4 from '../../assets/v4.mp4';
import video5 from '../../assets/v14.mp4';

function Hero4() {
  const videos = [
    {
      id: 1,
      src: video1,
      title: "Sustainable Farming Practices",
      // description: "Cultivating a greener future through responsible agriculture.",
    },
    {
      id: 2,
      src: video2,
      title: "Advancing Crop Nutrition",
      // description: "Pioneering solutions for healthier plants and higher yields.",
    },
    {
      id: 3,
      src: video3,
      title: "Global Impact, Local Roots",
      // description: "Empowering farmers worldwide with innovative practices.",
    },
    {
      id: 4,
      src: video4,
      title: "Precision Agriculture for Tomorrow",
      // description: "Leveraging technology for optimal resource management.",
    },
    {
      id: 5,
      src: video5,
      title: "Nourishing the World Sustainably",
      // description: "Our commitment to food security and environmental stewardship.",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  // Preload videos to help with smoother transitions
  useEffect(() => {
    videos.forEach((video, index) => {
      const vid = document.createElement('video');
      vid.src = video.src;
      vid.preload = 'auto';
      vid.muted = true;
      vid.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setTransitioning(false);
      }, 1000); // This should match your CSS transition duration
    }, 5000); // Autoplay interval adjusted for transition (e.g., 4s play + 1s transition)

    // Ensure the current video plays
    const currentVideoElement = videoRefs.current[currentVideoIndex];
    if (currentVideoElement) {
      currentVideoElement.load();
      currentVideoElement.play().catch(error => {
        console.warn("Video autoplay failed:", error);
      });
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentVideoIndex, videos.length]);

  // We no longer need goToVideo, nextVideo, prevVideo functions for direct button calls
  // as the buttons are removed. Autoplay will still use nextVideo internally.

  // Keep goToVideo for the dots, if you want them clickable
  const goToVideo = (index) => {
    if (index === currentVideoIndex) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex(index);
      setTransitioning(false);
    }, 1000);
  };

  // The nextVideo and prevVideo functions are now only used internally by the autoplay
  // or could be removed entirely if you don't use them for other logic.
  // I'll keep them but they won't be called by external buttons.
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };


  return (
    <section 
      className="relative flex flex-col w-full bg-black"
      style={{ height: 'calc(80vh - 4rem)' }} // 80vh for content, minus 4rem (h-16) for navbar
    >
      {/* Video container occupies most of the space */}
      <div className="relative w-full flex-grow overflow-hidden">
        {videos.map((video, index) => (
          <video
            ref={el => videoRefs.current[index] = el}
            key={video.id}
            className={`absolute left-0 top-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              currentVideoIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay={currentVideoIndex === index}
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
        {/* Overlay for content over the video */}
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

        {/* Content (Title/Description) directly on top of the video */}
        <div className="absolute inset-x-0 bottom-0 p-8 z-10 text-center text-white">
          <h1 className="mb-2 text-3xl font-extrabold leading-tight drop-shadow-lg md:text-3xl lg:text-4xl">
            {videos[currentVideoIndex].title}
          </h1>
          <p className="max-w-3xl mx-auto text-md drop-shadow-md md:text-lg">
            {videos[currentVideoIndex].description}
          </p>
        </div>

        {/* Indicators (dots) positioned within the video container, near the bottom */}
        {/* Adjust `bottom-4` or `bottom-8` as needed for visual spacing */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentVideoIndex === index ? 'bg-white w-6' : 'bg-gray-400 bg-opacity-70'
              }`}
              aria-label={`Go to video ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Previous and Next) removed from here */}
      {/* No more buttons for prev/next slide */}

    </section>
  );
}

export default Hero4;