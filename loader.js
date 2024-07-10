"use client";

export default function myImageLoader({ src, width, quality }) {
  // Return the original URL for freepik.com and pexels.com images
  if (src.startsWith('https://images.pexels.com') || src.startsWith('https://www.freepik.com')) {
    return src;
  }

  // Construct the URL for other images (if needed)
  return `${src}?w=${width}&q=${quality || 75}`;
}
