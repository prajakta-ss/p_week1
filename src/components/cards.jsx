/* import React from 'react'

function Cards({ item }) {
    console.log(item);
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards */
import React from "react";

/* function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
 */
function cards({ item }) {
    return (
      <>
        <div className="  top-4 mt-4 my-3 p-3 ">
          <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
            <figure>
              <img src={item.img || "https://via.placeholder.com/150"} alt={item.name || "Product Image"} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name || "Product Name"}
                <div className="badge badge-secondary">{item.category || "General"}</div>
              </h2>
              <p>{item.title || "No description available."}</p>
              <div className="card-actions justify-between">
                <div className="badge badge-outline">${item.price || "N/A"}</div>
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default cards;