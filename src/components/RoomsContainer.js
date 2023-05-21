import { render } from "@testing-library/react";
import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading/>;
    }
    return (
        <div>
            <p> Hello froms Rooms Container </p>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms} />
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);








/*
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
                        const {loading,sortedRooms,rooms}=value;
                        if(loading){
                            return <Loading/>;
                        }
                        return (
                            <div>
                                <p> Hello froms Rooms Container </p>
                                <RoomFilter rooms={rooms}/>
                                <RoomList rooms={sortedRooms} />
                            </div>
                        )
                    }
                }
            </RoomConsumer>
        </>
        
    )
}
export default RoomsContainer;
*/