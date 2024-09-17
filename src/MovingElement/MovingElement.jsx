import { useEffect, useRef } from 'react';
import './MovingElement.css'
import { ABOUT } from '../__about';
import { CardMoving } from './CardMoving';


export const MovingElement = () => {

    const CONTENT = ABOUT;
    const CARDS = CONTENT.FEEDBACK

    const clients = useRef()
    useEffect(() => {
        const interval = setInterval(() => {
            const lastCard = clients.current.lastChild
            clients.current.prepend(lastCard)
            console.log(clients.current);
        }, 5000)
    
        return () => clearInterval(interval)
    }, [])

    return (
        <section className='moving-element'>
            <article className='moving-element__feedback'>
                <div className='moving-element__text'><h3>Moving DOM Element</h3></div>
                <div className='moving-element__clients' ref={clients}>
                    {CARDS.map((card) => (
                        <CardMoving key={card.id} card={card} />
                    ))}
                </div>
            </article>
        </section>
    )
}