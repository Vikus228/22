import React from "react";
import Card from "./Card";

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

export default CardList;