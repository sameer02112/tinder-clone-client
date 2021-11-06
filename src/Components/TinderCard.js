import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import axios from '../axios'

function TinderCards() {

    const[people,setPeople] = useState([])

    useEffect(() => {
        console.log('inside')
        async function fetchData(){
            console.log(axios)
            const req = await axios.get("/tinder/cards");
            console.log(req)
            setPeople(req.data)
        }
        fetchData()
      
    }, [])
    console.log(people)

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

                    <div className="card" style={{backgroundImage: `url(${person.imgUrl})`}}>
                        <h3>{person.name}</h3>
                    </div>


                </TinderCard>

            ))}
            </div>




          
        </div>
    )
}

export default TinderCards
