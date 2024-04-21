import React, { useState } from "react";

const PricesContainer = ({Prices}) => {
  const [answer,setAnswer] = useState('1')

  return (
    <div className="pricesContainer">
      <ul className="moneyList">
        {
            Prices.map((p)=>(
              <li className={p.id == answer ? 'moneyListItem active' : 'moneyListItem'}>
                <span className='moneyListID'>{p.id}</span>
                <span className='moneyListPrice'>{p.price}</span>
              </li>
            ))
          }

        {/* <li className="moneyListItem">1$100</li>
        <li className="moneyListItem">2$200</li>
        <li className="moneyListItem">3$300</li> */}
      </ul>
    </div>
  );
};

export default PricesContainer;
