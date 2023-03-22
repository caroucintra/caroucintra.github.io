import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsEvaluation() {
  return (
    <div className='cards'>
    
      <h1 id="eval">⭒ Evaluation</h1>
        <h4>The following parameters will help grade and evaluate the quality of your work on each step of this WebQuest.</h4>
        <h2 className='subtitle'>Task 1</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    title='Step 1.1'
                    text={"In this step, your answer should have in mind the definition of the word transgender, the fact that the transgender self-discovery process is different for everyone and the challenges that transgender people face, briefly described."}
                    />
                    <CardItem
                    title='Step 1.2'
                    text={"For this second step, you should give 2 examples of:\n- How dysphoria manifests\n- How to relieve its symptoms"}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Step 1.3'
                    text={"In this step, you should recall the 3 questions made: “What is gender transitioning? Is it necessary for every transgender person? How do people feel about themselves afterward?”.\nThe second answer should be a little more developed than the first and the third, because the question requires a more in dept answer. Having that in mind when creating the answer results in a complex and complete view."}
                    />
                    <CardItem
                    title='Step 1.4'
                    text='You answer for this step can be really simple, or really complex. By watching the YouTube videos by BigThink and PhilosophyTube, you probably learned more about gender performativism, and the essentialist and social construvist theories. If your answer referenced such terms, it is complex enough for this WebQuest - and your teacher should grade it as such.'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Step 1.5'
                    text='This step presents the hardest question to answer. It is very important to remember that this topic is still discussed between psychologists, and it’s a tricky opinion to understand of something very well known to every human being. Try to consider, besides your own opinion, the vision that the two sexes are a generalization of what is seen as a bimodal system, and what makes a man and a woman are arbitrary attributes. Because of this question’s nature and complexity, the judgment to grade it is fully up to the teacher.'
                    />
                    <CardItem
                    title='Step 1.6'
                    text={"This last step of the task asks you to conclude from the previous work, and suggest changes to the system we know.\nNow you know a little bit about being transgender, needing transitioning because of dysphoria, the material necessity of gender in our society and how it creates in imbalanced view of each gender. The goal for this question is to create even more empathy for this community, and hopefully conclude that a binary system can be hurtful to everyone, and we would all benefit from a broader view of gender and sex."}
                    />
                </ul>
            </div>
        </div>

        <h2 className='subtitle'>Task 2</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    title='Step 2.1'
                    text={"The first step of the second task asks you to search for what is means to be non-binary. Its definition is a necessity for this question, but you should notice that this term is an umbrella term for different gender identities and those people are included in the trans community."}
                    />
                    <CardItem
                    title='Step 2.2'
                    text={"This step asked you to search for gender-fluidity. You should search for the correct definition of the term, consider the differences between gender-fluid and non-binary identities, and hopefully conclude that, for many people, gender identities are not a fixed thing and can change overtime."}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Step 2.3'
                    text={"In the last step, while searching the agender identity, the definitions of the term can be found, as well as its history and its differences from other gender identities. If you made sure to give a good read to this and learn a little bit more on how to understand this community, then you did a great job!"}
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default CardsEvaluation
