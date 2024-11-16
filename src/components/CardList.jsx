import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

function CardList({ heroes }) {
    return(
        <React.Fragment>
            {heroes.map((item, index) => {
                    return ( 
                        <Card
                                key={index}
                                name={item.name}
                                universe={item.universe}
                                alterego={item.alterego}
                                occupation={item.occupation}
                                friends={item.friends}
                                superpowers={item.superpowers}
                                url={item.url}
                                info={item.info}
                        />
                    )
                })}
        </React.Fragment>
    );
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            universe: PropTypes.string.isRequired,
            alterego: PropTypes.string.isRequired,
            occupation: PropTypes.string.isRequired,
            friends: PropTypes.string.isRequired,
            superpowers: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            info: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CardList;