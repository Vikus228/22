function Card(props) {
    return(
        <div className="cardHeroes">
            <h4 className="cardTitle">{props.name}</h4>
            <img src={props.url} alt={props.name} className="cardFhoto"/>
            <p className="cardText">{props.universe}</p>
            <p className="cardText">{props.alterego}</p>
            <p className="cardText">{props.occupation}</p>
            <p className="cardText">{props.friends}</p>
            <p className="cardText">{props.superpowers}</p>
            <p className="cardText">{props.info}</p>
        </div>
    );
};

export default Card;