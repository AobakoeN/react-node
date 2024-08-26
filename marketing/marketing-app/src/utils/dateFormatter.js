// src/utils/dateFormatter.js

// Format date to 'YYYY-MM-DD'
export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  };
  
  // Format date to 'Month Day, Year'
  export const formatDateLong = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };
  