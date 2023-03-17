import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsConclusion() {
  return (
    <div className='cards'>
  
      <h1 id="conclusion">⭒ Conclusion</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    text='Now that this theme is widely debated, hopefully, more and more people will be interested in learning, sharing, and deconstructing the paradigms in which we model our societal norms.'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    text='If you like to dig further into this subject, search for the work of:'
                    links= {[
                        {ref: "https://www.annefaustosterling.com/",
                        label: "Dr. Anne Fausto-Sterling - a sexologist who has written about the biology of gender, sexual and gender identity, and gender roles"
                        },
                        {ref: "https://pt.wikipedia.org/wiki/Judith_Butler",
                        label: "Judith Butler -  a philosopher and gender studies writer whose work has influenced different fields of queer theory and feminism"
                        },
                    ]}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    text={"Those writers’ work was very important to this WebQuest and inspired a substantial part of the resources given to the search.\nBy ending this WebQuest, you should have learned more about gender theory. If it’s just something you were curious about, or you are an enthusiast of this type of study - we hope this journey made you more aware of how different people are and how we must respect each other’s identities."}
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default CardsConclusion
