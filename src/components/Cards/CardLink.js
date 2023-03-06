import React from 'react';

function CardLink(props) {
  return (
    <>
    <li className='cards__item'>
        <div className='cards__item__info'>
          <h2 className='cards__item__link'> {props.title} </h2>
          <p className='cards__item__text'> {props.text} </p>
        </div>
      </li>
    </>
  )
}

export default CardLink
