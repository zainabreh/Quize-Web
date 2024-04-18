import React from "react";

const PricesContainer = () => {
  const Prices = [
    {
      id: 1,
      price: "$ 100",
    },
    {
      id: 2,
      price: "$ 200",
    },
    {
      id: 3,
      price: "$ 300",
    },
    {
      id: 4,
      price: "$ 500",
    },
    {
      id: 5,
      price: "$ 1000",
    },
    {
      id: 6,
      price: "$ 2000",
    },
    {
      id: 7,
      price: "$ 4000",
    },
    {
      id: 8,
      price: "$ 8000",
    },
    {
      id: 9,
      price: "$ 16000",
    },
    {
      id: 10,
      price: "$ 32000",
    },
    {
      id: 11,
      price: "$ 64000",
    },
    {
      id: 12,
      price: "$ 125000",
    },
    {
      id: 13,
      price: "$ 250000",
    },
    {
      id: 14,
      price: "$ 500000",
    },
    {
      id: 15,
      price: "$ 1000000",
    },
  ].reverse();
  return (
    <div className="pricesContainer">
      <ul className="moneyList">
        {/* {
            Prices.map((p)=>(
              <li className='moneyListItem'>
                <span className='moneyListID'>{p.id}</span>
                <span className='moneyListPrice'>{p.price}</span>
              </li>
            ))
          } */}

        <li className="moneyListItem">$100</li>
        <li className="moneyListItem">$200</li>
        <li className="moneyListItem">$300</li>
      </ul>
    </div>
  );
};

export default PricesContainer;
