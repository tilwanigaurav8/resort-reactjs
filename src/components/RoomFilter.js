import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
// to get unique values of rooms in selection form
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
const RoomFilter=({rooms})=>{
    const context=useContext(RoomContext);
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;
    // get unique types
    let types=getUnique(rooms,'type');
    //add all
    types=['all',...types];
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });
    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    });
    return (
    <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">Room type</label>
                <select name="type" id="type" className="form-control" onChange={handleChange}>
                    {types}
                </select>
            </div>

            {/*for people capacity*/}

            <div className="form-group">
                <label htmlFor="capacity">Room type</label>
                <select name="capacity" id="capacity" 
                value={capacity}className="form-control" onChange={handleChange}>
                    {people}
                </select>
            </div>

            {/*for room tarriff*/}

            <div className="form-group">
                <label htmlFor="price">Room price ₹{price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
            </div>
        </form>
    </section>
    )
}
export default RoomFilter;