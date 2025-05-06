import React from 'react'

const links = [
  { icon : <i className="fa-brands fa-square-facebook"></i>, link: "#" },
  { icon : <i className="fa-brands fa-instagram"></i>, link: "#" },
  { icon : <i className="fa-brands fa-square-x-twitter"></i>, link: "#" },
  { icon : <i className="fa-brands fa-square-reddit"></i>, link: "#" },
];

export default function Footer() {
  return (
    <div className='min-h-[15%] bg-teal-900 text-white p-10 pl-20 pr-20 text-justify'>
        <h1 className='uppercase text-center font-extrabold'>All in one Application sample</h1>
        <p className='pt-10 w-[50%] text-center m-auto'>
            <span className='text-blue-300 font-bold  '>All in one</span> application samples are available 
            here. Where all cms project all together in single place.
            Almost responsive code. With nice color choice. 
        </p>
        <div className='pt-5 m-auto w-[100px] flex justify-between'>
          {
            links.map((val,idx) => {
              return (
                <div key={idx}>
                  {val.icon}
                </div>
              );
            })
          }
        </div>
    </div>
  )
}
