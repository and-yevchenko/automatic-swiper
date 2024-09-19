import { ABOUT } from '../__about';
import './AttributeCounter.css';
import { CardCounter } from './CardCounter';

export const AttributeCounter = () => {
  const CONTENT = ABOUT;
  const CARDS = CONTENT.FEEDBACK;

  return (
    <section className="attribute-counter">
      <article className="attribute-counter__feedback">
        <div className="attribute-counter__text">
          <h3>Attribute Counter</h3>
        </div>
        <div className="attribute-counter__clients">
          {CARDS.map((card, index) => (
            <CardCounter
              key={card.id}
              card={card}
              index={index + 1}
              CARDS={CARDS}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
