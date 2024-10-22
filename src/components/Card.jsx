function Card(props) {
    return(
        <div className="cardHeroes">
            <h4 className="cardTitle">{props.title}</h4>
            <img src={props.src} alt={props.title} className="cardFhoto"/>
            <p className="cardText">{props.text}</p>
        </div>
    );
};

export default Card;