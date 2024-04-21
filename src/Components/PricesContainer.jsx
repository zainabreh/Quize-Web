import React from "react";

const PricesContainer = ({Prices,qsNumber}) => {

  return (
    <div className="pricesContainer">
      <ul className="moneyList">
        {
            Prices.map((p)=>(
              <li className={p.id == qsNumber ? 'moneyListItem active' : 'moneyListItem'}>
                <span className='moneyListID'>{p.id}</span>
                <span className='moneyListPrice'>{p.price}</span>
              </li>
            ))
          }
      </ul>
    </div>
  );
};

export default PricesContainer;
