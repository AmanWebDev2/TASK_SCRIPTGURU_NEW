import React, { useState } from "react";
import { data } from "../products/sub-header";

const SubHeader = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [pos, setPos] = useState(null);

  const handleMouseEnter = (e, item) => {
    if (item.names) {
      const elem = e.target;
      const pos = elem.getBoundingClientRect();
      setPos(pos)
      setSelectedId(item.id);
    }
  };
  return (
    <div className="flex space-x-4 justify-center">
      {data.map((item) => {
        return (
          <div className="cursor-pointer flex flex-col justify-around relative max-w-32 px-4 bg-base-100 border-2 "
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseLeave={() => {
            setSelectedId(-1)
          }}
          >
            <figure>
              <img
                src={item.img}
                alt="Shoes"
              />
            </figure>
            <div className="py-2">
              <p className="text-xs text-nowrap	">{item.title}</p>
            </div>
            {item.id == selectedId && (
                <SubList item={item.names} pos={pos} />
              )}
          </div>
        );
      })}
    </div>
  );
};

const SubList = ({ item }) => {
  const [subList, setSubList] = useState([]);

  return (
    <div className="z-10 flex items-center" style={{
      position:'absolute',
      top:'100%'
    }}>
      <div className="">
        <ul className="menu bg-base-200 w-56 rounded-box">
          {item.map((e,i) => {
            return (
              <li
                key={i}
                className="subItem"
                onMouseEnter={() => {
                  if (e.names) {
                    setSubList(e.names);
                  }
                }}
                onMouseLeave={(e) => {
                    if(!e.currentTarget.classList.contains('subItem')) {
                        setSubList([]);
                    }
                }}
              >
                <a>
                {e.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      { subList.length>0 && <div className="col">
        <ul className="menu bg-base-200 w-56 rounded-box">
          {subList.length > 0 &&
            subList.map((subItem) => {
              return <li className="subItem">
                <a>
                {subItem.title}
                </a>
                </li>;
            })}
        </ul>
      </div>}
    </div>
  );
};


export default SubHeader;
