import React from "react";


const Price = ({ originalPrice, salePrice }) => {
    return (
        <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
              {/* to fixed is the decimal place ex: 39$ => $39.00 */}
            </span>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
    )
}

export default Price;