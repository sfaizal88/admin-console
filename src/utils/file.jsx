import React from 'react';
import moment from 'moment';

export const getTodayDateTime = () => {
  const currentDateWithTime = moment();
  const formattedDateTime = currentDateWithTime.format('YYYY-MM-DD HH:mm:ss');
  return formattedDateTime;
}


export const dateTimeDisplayFormat = (dateString, format = 'MMM Do YYYY') =>  {
  // Parse the date string using Moment.js
  const parsedDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

  // Format the parsed date as desired
  const formattedDate = parsedDate.format(format); //'MMMM Do YYYY', h:mm:ss a
  return formattedDate;
}

export const dateTimeDisplayServerFormat = (dateString, fromFormat = 'YYYYMMDD', toFormat = 'MMM Do YYYY') =>  {
  // Parse the date string using Moment.js
  const parsedDate = moment(dateString, fromFormat).format(toFormat);
  return parsedDate;
}

export const getDate = (value, format = 'MMM Do YYYY HH:mm:ss') => {
  if (typeof value == 'string') {
    return dateTimeDisplayServerFormat(value, 'YYYY-MM-DD HH:mm:ss', format)
  } else {
    return moment.unix(value).format(format);
  }
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}