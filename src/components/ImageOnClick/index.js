  // Import React and the useState hook, used to manage the visibility of the image.
  import React, { useState } from 'react';
  // Import clsx library for conditional classes.
  import clsx from 'clsx';
  // Importing the useBaseUrl function.
  import useBaseUrl from '@docusaurus/useBaseUrl';
  // Import styles from CSS module.
  import styles from './styles.module.css';
  // Define the ImageOnClick component as a function 
  // with imageUrl, altText, and buttonName as properties
  export default function ImageOnClick({ imageUrl, altText, buttonName }) {
    // State to track whether image should be shown or hidden.
    const [showImg, setShowImg] = useState(false);
    // Use the useBaseUrl function to generate the image URL.
    const generatedImageUrl = useBaseUrl(imageUrl);

    return (
      // Using a <span> container since these links will often be inside <p>, so to avoid semantic errors on click, the span is ideal. Then creating a link with an event handler here on click (onClick). Then the 3 properties and their CSS classes defined in the site's custom CSS cursor  is for modifying the cursor on hover.
      <span>
        <a onClick={() => setShowImg(!showImg)} className= {styles.cursor}>
        {buttonName}
        </a>
        {showImg && (
          <span className={styles.imageonclick}>
          <img src={generatedImageUrl} alt={altText} /> 
          </span>
        )}
      </span>
    );
  }