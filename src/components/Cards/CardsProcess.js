import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsProcess() {
  return (
    <div className='cards'>
    
    <h1 id="process">⭒ Process</h1>
        <h4>Using resources referenced in the text, answer the questions below in order.</h4>
        <h2 className='subtitle'>Task 1</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    title='What does it mean to be transgender?'
                    text='Using resources from Group 1.1, write a short paragraph to describe a transgender person. It is important to pay attention to what they experience, what challenges they face, and how different those processes of self-discovery can be.'
                    />
                    <CardItem
                    title='Understanding gender dysphoria'
                    text='For this second step, focus on understanding what is called ‘gender dysphoria’. Use the resources in Group 1.2 to list characteristics of this phenomenon - either relating to the different ways it manifests or the different ways to relieve it.'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Understanding gender transitioning'
                    text='In this step, you are going to look into transitioning. Using the resources in Group 1.3, write a paragraph that includes the answer to the following questions: What is gender transitioning? Is it necessary for every transgender person? How do people feel about themselves afterward?'
                    />
                    <CardItem
                    title='Difference between gender and sex'
                    text='Many people still see gender and sex as the same concept, but the resources in Group 1.4 will help you see that they might not be. For this step, find evidence that proves the two words mean different things.'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Similarities between gender and sex'
                    text={"Similarly to the previous step, look into the resources listed in Group 1.5 and use the theories presented to answer the following counter-argument: Does the distinction between the two even matter? Is sex as we know it (a binary system created using a set of attributes that relate to either a ‘woman’ or a ‘man’) an entirely biological concept?\nFeel free to add your personal opinion to this answer. This question is the most complex one, and the theories presented are a matter of psychology still in debate."}
                    />
                    <CardItem
                    title='(un)Linking binary systems and the gender spectrum'
                    text={"In this last step,  besides using the resources in Group 1.6, use the answers given in the previous steps. This step will focus on the conclusions you take from learning about the struggles and experiences that gender non-conforming people go through, understanding the concepts of gender and sex, their variations, and their inability to fit the binary format. \nDo a quick retrospective of what you’ve retained and create a brief paragraph that answers the following: What is a binary system? How does the binary view of gender and sex clash with the vision of these studies? What misconceptions in our vision of gender and sex do you think are unfair and unsafe for transgender people? What can be changed to accommodate everyone?"}
                    />
                </ul>
            </div>
        </div>

        <h2 className='subtitle'>Task 2</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    title='Defining non-binary identity'
                    text='Now that you know more about gender, explore the definition of non-binary identities using the resources in Group 2.1. Try to understand how and why these identities are often associated with certain types of gender expression and stereotypes. The comprehension of non-binary identities (yes, you will see that different identities fall under the umbrella of non-binary) touches upon the points seen in Task 1 - the idea of gender, sex, and the two concepts framed in a binary system.'
                    />
                    <CardItem
                    title='Defining gender-fluid identity'
                    text='Similarly to the previous step, you must characterize the gender-fluid identity, one of the identities that fall under the non-binary label. This identity is commonly overlooked when talking about the gender non-conforming community. Use the resources in Group 2.2 to learn more about the term and characterize it, knowing that its definition is highly attached to the concept of non-binary.'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Defining agender identity'
                    text='Finally, for this step, we will see the last identity studied in this Quest: agender, another identity from the non-binary umbrella. With the help of the resources in Group 2.3, do like the previous two steps: search for what it is and how people that fit in such identity like to describe it - then record your conclusions.'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default CardsProcess
