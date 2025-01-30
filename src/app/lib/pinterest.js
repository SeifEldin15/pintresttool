import axios from 'axios';
import { parse } from 'node-html-parser';

export async function scrapePinterestBoard(url) {
  try {
    const response = await axios.get(url);
    const root = parse(response.data);
    
    // Find all image elements
    const images = root.querySelectorAll('img')
      .map(img => img.getAttribute('src'))
      .filter(src => 
        src && 
        (src.includes('pinimg.com') || src.includes('pinterest.com')) &&
        !src.includes('profile_')
      );

    // Remove duplicates and return unique images
    return [...new Set(images)];
  } catch (error) {
    console.error('Error scraping Pinterest board:', error);
    throw new Error('Failed to scrape Pinterest board');
  }
} 