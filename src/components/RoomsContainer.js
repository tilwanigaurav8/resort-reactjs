import { render } from "@testing-library/react";
import React from "react";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
const RoomsContainer=()=>{
    return(
        <>
            <RoomConsumer>
                {
                    (value)=>{
                        return 
                    }
                }
            </RoomConsumer>
            <p> Hello froms Rooms Container </p>
            <RoomFilter />
            <RoomList />
        </>
        
    )
}
export default RoomsContainer;