import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./test";


const TransactionFilter = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [chevronisClicked, setchevronisClicked] = useState(false);

  const handleChevronClick = () =>{
    setchevronisClicked(!chevronisClicked);
  }
  return ( 
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 w-full flex justify-between">
          <p>Filters</p>
          <div className="text-3xl" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul
          className={`
         bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left cursor-pointer group">
           
            <h1
              className="py-7 flex justify-between items-center pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            
              <span onClick={handleChevronClick} className={`text-xl mt-1 ml-2  block rotate-90 ${chevronisClicked && 'group-hover:rotate-0'} `}>
                <ion-icon name="chevron-up"></ion-icon>
              </span>
            </h1>
            
          </div>
          <div
            className={`
             ${heading === link.name ? "" : "hidden"}
          `}
          >
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex gap-2 items-center pr-0"
                  >
                    <input type="checkbox"/> {slinks.Head} 
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
          <div className="py-5 flex justify-between w-[90%]">
              <button className="bg-primary text-white text-[10px]  px-6 py-2 rounded-full">
                  Get Started
              </button>
              <button className="bg-primary text-white text-[10px] px-6 py-2 rounded-full">
                  Get Started
              </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default TransactionFilter;
