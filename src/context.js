import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import { findAllByTestId } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';
import React,{Component} from 'react';
import items from './data';
const RoomContext=React.createContext();
// <RoomContext.Provider value={'hello'}
export default class RoomProvider extends Component{

    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:9600,
        minPrice:1200,
        maxPrice:9600,
        minSize:0,
        maxSize:1000,
        breakfast:false,
        pets:false
    };
    // getData if loading is from external database

    componentDidMount(){
        // this.getData
        let rooms =this.formatData(items);
        let featuredRooms=rooms.filter(room=>room.featured===true);
        this.setState({rooms,featuredRooms,sortedRooms:rooms,loading:false});
    }

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>image.fields.file.url);
            let room={...item.fields,images,id};
            return room;
        });
        return tempItems;
    }

    getRoom=(slug)=>{
        let tempRooms=[...this.state.rooms];
        const room=tempRooms.find(room=>room.slug===slug);
        return room;
    }

    handleChange=(event)=>{
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);
        this.setState({
            [name]:value
        },this.filterRooms)
        
    };

    filterRooms=()=>{
        let{
            rooms,type,capacity,price,minPrice,minSize,maxSize,breakfast,pets
        }=this.state;
        // all the rooms
        let tempRooms=[...rooms];
        // capacity wise
        capacity=parseInt(capacity);
        // tarriff wise
        price=parseInt(price);
        //filter by type
        if(type!=='all'){
            tempRooms=tempRooms.filter(room=>room.type===type)
        }
        // filter by capacity
        if(capacity !== 1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
        }
        // filter by tarriff
        tempRooms=tempRooms.filter(room=>room.price<=price);
        //filter by breakfast
        if(breakfast){
            tempRooms=tempRooms.filter(room=>room.breakfast===true)
        }
        //filter by size
        tempRooms=tempRooms.filter(room=>room.size>=minSize && room.size<=maxSize)
        //filter by pets
        if(pets){
            tempRooms=tempRooms.filter(room=>room.pets===true)
        }
        // change state
        this.setState({sortedRooms:tempRooms})
    }

    render(){
        
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
 
const RoomConsumer=RoomContext.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export {RoomProvider,RoomConsumer,RoomContext};