import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsResources() {
  return (
    <div className='cards'>

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
    </div>
  )
}

export default CardsResources
