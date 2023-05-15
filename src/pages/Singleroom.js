import React,{Component} from 'react';
import { RoomContext } from '../context';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import defaultBcg from '../images/room-1.jpeg';
import { Link } from 'react-router-dom';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import Room from '../components/room';
import { withRouter } from "react-router";
import StyledHero from '../components/StyledHero';
import mydata from "../data"
class Singleroom extends Component{
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,defaultBcg
        };
    }
    
    static contextType=RoomContext;
    // componentDidMount(){
    // }
    render(){
        const {getRoom}=this.context;
        const room =getRoom(this.state.slug);
        if(!room){
            return <div className='error'>
                <h3>no such room can be found...</h3>
                <Link to='/' className='btn-primary'>Back to Home</Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
        return (
            <StyledHero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                </Banner>
            </StyledHero>
        )
    }
}

export default withRouter(Singleroom)