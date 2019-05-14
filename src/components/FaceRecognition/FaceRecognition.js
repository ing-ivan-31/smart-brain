import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ( { imageUrl , boxes} ) => {
    let  bounding_boxes = boxes.map((box, index)=>   {
        return  (
            <div  key={ index } className='bounding-box' style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol
            }}></div>
            );
    });

    return (
       <div className='center ma'>
           <div className='absolute mt2'>
               <img id ='inputImage' src={ imageUrl } alt="" width='900px' height='auto' />
               {bounding_boxes}
           </div>
       </div>
    )
};

export default FaceRecognition;
