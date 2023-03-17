import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsTasks() {
  return (
    <div className='cards'>
    
        <h1 id="tasks">⭒ Tasks</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    title='Task 1'
                    text='Your first task is - in a nutshell - a deep dive into daily concepts that people still misunderstand. The beginning of the quest will focus on the profound understanding of such keywords by simply going through their definitions. The last step will tie every one of them together - while attempting an introspective and personal conclusion of everything you saw before.'
                    />
                    <CardItem
                    title='Task 2'
                    text='Now that you know more about the theory, let’s look into the terminologies used in the current online discussion on gender identity and characterize such identities to understand them better. Have you ever heard of someone that is agender or gender-fluid? It is essential to know how different people view their gender identities to respect their individuality and pronouns.'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default CardsTasks
