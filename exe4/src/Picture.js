import React from 'react';

function Picture(props) {
  return (
    <div className='thumbnail-section'>
      <div className='thumbnail-image'>
        <img
          src={props.imgSrc}
          onClick={() => props.pictureClicked(props.imgSrc)}
        />
      </div>
    </div>
  );
}

export default Picture;
