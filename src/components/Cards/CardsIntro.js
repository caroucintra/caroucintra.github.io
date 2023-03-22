import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsIntro() {
  return (
    <div className='cards'>
        
        <h1 id="intro">⭒ Introduction</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    text={"With the recent awareness of different gender identities during the last few years, gender theory turned into an extensive online debate. But many people - especially older people - still have difficulty understanding either what those different identities are or why they exist."}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    text='This WebQuest was created for teenagers and young adults and it can be done in 2 classes of 1h30 of duration. Its purpose is to tackle core and simple concepts of gender theory, to understand the view of gender as a spectrum, and bring awareness to the struggles of those who fight to make this theme broadly understood. Another goal is to get to know different and less-known gender identities. Later, there’s a possibility to dive deeper into some - not so simple - concepts and theories.'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    text={"This is a matter of great importance because, according to ILGA’s Relatório Anual de Discriminação contra pessoas LGBTI+, the filed complaints of  crimes against LGBTQI+ people were a total of 89 in 2019. As it is known, considerable people who are victims of hate crimes don’t file them over fear or lack of trust in the public system, which makes this number almost an approximation - in reality the number of cases is probably higher."}/>
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    text={"The transgender community is a big part of the LGBTQI+ community and most likely the part that is least talked about in the media. This WebQuest has the goal of teaching a little bit about how this community was created and matured and how it should be treated and integrated in our society - while hopefully showing that respect comes from every one of us and is a powerful tool."}/>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default CardsIntro
