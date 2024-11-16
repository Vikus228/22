import PropTypes from 'prop-types';

function Card({ name, url, universe, occupation, alterego, friends, superpowers, info }) { //деструктуризация
    return(
        <div className="cardHeroes">
            <h4 className="cardTitle">{name}</h4>
            <img src={url} alt={name} className="cardFhoto"/>
            <p className="cardText">{universe}</p>
            <p className="cardText">{alterego}</p>
            <p className="cardText">{occupation}</p>
            <p className="cardText">{friends}</p>
            <p className="cardText">{superpowers}</p>
            <p className="cardText">{info}</p>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    universe: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    alterego: PropTypes.string.isRequired,
    friends: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
};

export default Card;