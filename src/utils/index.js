import React from 'react';

export const truncateString = (str, maxLength = 20) =>  {
  if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
  }
  return str;
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}