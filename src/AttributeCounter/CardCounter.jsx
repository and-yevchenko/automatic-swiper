import { useEffect, useState } from "react"
import './CardCounter.css'


export const CardCounter = ({ card, index }) => {

    const [number, setNumber] = useState(index)

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(number === 7 ? 1 : number + 1)
        }, 5000)
    
        return () => clearInterval(interval)
    }, [number])

    return (
        <div className='attribute-counter__card card-counter' data-position={number}>
            <div className='card-counter__photo'><img src={card.photo} alt="client" /></div>
            <div className='card-counter__info'>
                <span className='card-counter__name'>{card.name}</span>
                <span className='card-counter__text'>{card.text}</span>
            </div>
        </div>
    )
}