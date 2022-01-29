import React from 'react';


function HomePage() {
  return (
<div>
  <div className='Pannel'>
    <h2>OverView</h2>
    <p>Here at Nihongo.net we offer all the resources needed to learn Japanese at <em>YOUR</em> own pace, completely free of charge.</p>
    <p>No prior knowlendge of Japanese is needed here as we believe we offer something for the everyone.</p>
    <p>some people may think that they need expensive textbooks; we aim to change that by having all the information anyone would need to learn the language from scratch</p>
  </div>

  <div className='Pannel'>
    <h2>Content</h2>
    <p>Here is a list of all the current content we have.</p>

    <ol className='Content-List'>
      <li>Hiragana (basic, dakuten, handakuten and modified)</li>
      <li>Katakana (basic, dakuten, handakuten and modified)</li>
      <li>Settings Page (Basic Color Settings)</li>
    </ol>

    <h2>We are always looking to add more, Contact us if you feel something is missing!</h2>
  </div>

  <div className='Pannel'>
    <h2>Planned Content</h2>
    <p>Here is a list of all the Planned content.</p>
    <ol className='Content-List'>
      <li>Kanji Page</li>
      <li>Community Page</li>
    </ol>
    <h2>If you have any suggestions please get in contact with us!</h2>
  </div>
</div>
  );
}

export default HomePage;
