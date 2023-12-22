import React from 'react';

export default function Button({ buttonText, buttonColor, onClick}) {
  let className = "";
  if (buttonColor === 'green') {
    className = 'bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700';
  } else if (buttonColor === "red") {
    className = 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700';
  } 
  

  return (
    <button type="button" className="px-2 py-2 mx-2 my-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onClick}>{buttonText}</button>
  )
}