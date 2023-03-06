import React from 'react';

function CardItem(props) {
  return (
    <>
    <li className='cards__item'>
        <div className='cards__item__info'>
          <h2 className='cards__item__title'> {props.title} </h2>
          <p style={{ whiteSpace: "pre-line" }} className='cards__item__text'> {props.text} </p>
          <div>
            {props.links?.map(link => {
              return <a className='cards__item__link' href={link?.ref}> ✦ {link?.label}</a>
            })}
          </div>
          
        </div>
      </li>
    </>
  )
}

export default CardItem
