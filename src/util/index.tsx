import { landingPagUrl, landingPagUrlLocal } from "../constant";

export const fetchLandingPageData = async () => {
  try {
    const response = await fetch(landingPagUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();    
    return {
      data,
      fulfilled: true
    };
  } catch (error) {
    // If API got error reading the data from File
    try {
      const response = await fetch(landingPagUrlLocal);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      return {
        data,
        fulfilled: true
      };
    } catch (error) {
      return { 
        rejected: true,
        error
      }
    }
  }
};
