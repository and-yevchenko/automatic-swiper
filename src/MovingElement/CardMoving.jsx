import './CardMoving.css'


export const CardMoving = ({ card }) => {

    return (
        <div className='moving-element__card card-moving'>
            <div className='card-moving__photo'><img src={card.photo} alt="client" /></div>
            <div className='card-moving__info'>
                <span className='card-moving__name'>{card.name}</span>
                <span className='card-moving__text'>{card.text}</span>
            </div>
        </div>
    )
}