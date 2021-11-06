import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'

function TinderCards() {

    const[people,setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
        },
        {
            name: 'Jeff Bezoz',
            url: 'https://content.fortune.com/wp-content/uploads/2021/02/Jeff-Bezos-Amazon-Net-Worth-GettyImages-1036084400.jpg',
        }
    ])

    const swiped = (direction, nameToDelete) => {
        // setLastDirection(direction)
    }
    const outOfFrame = name =>{
        console.log(name)
    }

    return (
        <div className='tinderCards'>  
            <div className='tinderCards_cardContainer'>
            {people.map((person)=>(
                // <h1>{person.name}</h1>
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                    onSwipe={(dir)=> swiped(dir,person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}>

                    <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>


                </TinderCard>

            ))}
            </div>




          
        </div>
    )
}

export default TinderCards
