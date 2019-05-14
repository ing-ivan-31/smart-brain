import React from 'react';
import './ImageLinkFrom.css'

const ImageLinkFrom = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'this Magic brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className="pa4 br3 shadow-5 form center">
                    <input type="text" className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-blue' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
};

export default ImageLinkFrom;
