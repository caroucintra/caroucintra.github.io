import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
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
                    text='The purpose of this WebQuest is to tackle core and simple concepts of gender theory, to understand the view of gender as a spectrum, and bring awareness to the struggles of those who fight to make this theme broadly understood. Another goal is to get to know different and less-known gender identities. Later, there’s a possibility to dive deeper into some - not so simple - concepts and theories.'/>
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
                    title='Similarities between gender and sex'
                    text='In this step, you are going to look into transitioning. Using the resources in Group 1.3, write a paragraph that includes the answer to the following questions: What is gender transitioning? Is it necessary for every transgender person? How do people feel about themselves afterward?'
                    />
                    <CardItem
                    title='Difference between gender and sex'
                    text='Many people still see gender and sex as the same concept, but the resources in Group 1.4 will help you see that they might not be. For this step, find evidence that proves the two words mean different things.'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Understanding gender transitioning'
                    text={"Similarly to the previous step, look into the resources listed in Group 1.5 and use the theories presented to answer the following counter-argument: Does the distinction between the two even matter? Is sex as we know it (a binary system created using a set of attributes that relate to either a ‘woman’ or a ‘man’) an entirely biological concept?\nFeel free to add your personal opinion to this answer. This question is the most complex one, and the theories presented are a matter of psychology still in debate."}
                    />
                    <CardItem
                    title='(un)Linking binary systems and the gender spectrum'
                    text={"In this last step,  besides using the resources in Group 1.6, use the answers given in the previous steps. This step will focus on the conclusions you take from learning about the struggles and experiences that gender non-conforming people go through, understanding the concepts of gender and sex, their variations, and their inability to fit the binary format. \nDo a quick retrospective of what you’ve retained and answer the following: How does the binary view of gender and sex clash with the vision of these studies? What misconceptions in our vision of gender and sex do you think are unfair and unsafe for transgender people? What can be changed to accommodate everyone?"}
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

        <h1 id="resources">⭒ Resources</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    title='Group 1.1'
                    links={[
                            {ref: "https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people",
                            label: "“What does it mean to be transgender?” and “How does someone know that they are transgender?”"
                            },
                            {ref: "https://www.hrc.org/resources/understanding-the-transgender-community",
                            label: "Understanding the Transgender Community"
                            },
                            {ref:"https://www.stonewall.org.uk/what-does-trans-mean",
                            label: "What does trans mean?"
                            }
                        ]}
                    />
                    <CardItem
                    title='Group 1.2'
                    links={[
                            {ref: "https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people",
                            label: "“What is gender dysphoria?”"
                            },
                            {ref: "https://www.healthline.com/health/transgender/gender-dysphoria",
                            label: "How to Identify and Treat Gender Dysphoria"
                            },
                            {ref: "https://www.nhs.uk/conditions/gender-dysphoria/",
                            label: "Overview - Gender dysphoria"
                            }
                        ]}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    title='Group 1.3'
                    links={[
                            {ref: "https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people",
                            label: "“What does 'gender transition' mean?” and “What medical treatments do some transgender people seek when transitioning?”"
                            },
                            {ref: "https://www.plannedparenthood.org/learn/gender-identity/transgender/what-do-i-need-know-about-transitioning",
                            label: "What do I need to know about transitioning?"
                            },
                            {ref: "https://www.webmd.com/parenting/what-is-transitioning",
                            label: "What Is Transitioning?"
                            }
                        ]}
                    />
                    <CardItem
                    title='Group 1.4'
                    links={[
                            {ref: "https://www.annefaustosterling.com/fields-of-inquiry/gender/",
                            label: "“Gender and Early Childhood Development” and Vimeo Video"
                            },
                            {ref: "https://pubmed.ncbi.nlm.nih.gov/30607711/",
                            label: "“Diagnosing” Gender? Categorizing Gender-Identity Variants in the Anthropocene (Abstract)"
                            },
                            {ref: "https://www.youtube.com/watch?v=Bo7o2LYATDc",
                            label: "Judith Butler: Your Behavior Creates Your Gender"
                            },
                            {ref: "https://www.youtube.com/watch?v=seUVb7gbrTY",
                            label: "What is Gender? | Philosophy Tube"
                            }
                        ]}
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    title='Group 1.5'
                    links={[
                            {ref: "https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01320/full",
                            label: "“Butler’s view on gender”"
                            },
                            {ref: "https://www.youtube.com/watch?v=8kX5vNmat7Q",
                            label: "What's the Difference Between Sex and Gender?"
                            },
                            {ref: "https://www.annefaustosterling.com/fields-of-inquiry/gender/",
                            label: "“Intersex”"
                            }
                        ]}
                    />
                    <CardItem
                    title='Group 1.6'
                    links={[
                        {ref: "https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01320/full",
                        label: "Binary Opposition"
                        },
                        {ref: "https://openbooks.library.umass.edu/introwgss/chapter/introduction-binary-systems/",
                        label: "Introduction: Binary Systems"
                        },
                        {ref: "https://courses.lumenlearning.com/suny-introwgss/chapter/alternatives-to-binary-systems/",
                        label: "Alternatives to Binary Systems"
                        }
                        ]}
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    title='Group 2.1'
                    links={[
                            {ref: "https://www.verywellmind.com/what-does-it-mean-to-be-genderqueer-or-non-binary-4140578",
                            label: "What Does It Mean to Be Genderqueer or Nonbinary?"
                            },
                            {ref: "https://transequality.org/issues/resources/understanding-nonbinary-people-how-to-be-respectful-and-supportive",
                            label: "Understanding Nonbinary People: How to Be Respectful and Supportive"
                            },
                            {ref: "https://www.sccoe.org/LGBTQ/Documents/Non-Binary Gender Identities.pdf",
                            label: "Non-Binary Gender Identities"
                            }
                        ]}
                    />
                    <CardItem
                    title='Group 2.2'
                    links={[
                        {ref: "https://www.verywellmind.com/what-is-gender-fluid-5075600",
                        label: "What Does It Mean to Be Gender Fluid?"
                        },
                        {ref: "https://en.wikipedia.org/wiki/Gender_fluidity",
                        label: "Gender fluidity"
                        },
                        {ref: "https://www.bbc.com/worklife/article/20220914-gender-fluidity-the-ever-shifting-shape-of-identity",
                        label: "'Gender fluidity': The ever-shifting shape of identity"
                        }
                        ]}
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    title='Group 2.3'
                    links={[
                        {ref: "https://www.healthline.com/health/agender",
                        label: "What Does It Mean to Be Agender?"
                        },
                        {ref: "https://www.lgbtqandall.com/agender-what-does-this-term-mean/",
                        label: "Agender: What Does This Term Mean?"
                        },
                        {ref: "them.us/story/inqueery-agender",
                        label: "Inqueery: What Does It Mean to Be Agender?"
                        }
                        ]}
                    />
                </ul>
            </div>
        </div>

        <h1 id="eval">⭒ Evaluation</h1>
        <h4>The following parameters will help grade and evaluate the quality of your work on each step of this WebQuest.</h4>
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
                    text='This step presents the hardest question to answer. It is very important to remember that this topic is still discussed between psychologists, and it’s a tricky opinion to understand of something very well known to every human being. Try to consider, besides your own opinion, the vision that the two sexes are a generalization of what is seen as a bimodal system with arbitrary attributes. Because of this question’s nature and complexity, the judgment to grade it is fully up to the teacher.'
                    />
                    <CardItem
                    title='Step 1.6'
                    text={"This last step of the task asks you to conclude from the previous work, and suggest changes to the system we know.\nNow you know a little bit about being transgender, needing transitioning because of dysphoria, the material necessity of gender in our society and how it creates in imbalanced view of each gender. The goal for this question is to create even more empathy for this community, and hopefully conclude that a binary system can be hurtful to everyone, and we would all benefit from a broader view of gender and sex."}
                    />
                </ul>
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

export default Cards
