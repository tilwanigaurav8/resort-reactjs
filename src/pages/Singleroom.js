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
        const [mainImg,...defaultImg]=images;
        return (
            <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {images.map((item,index)=>{
                            return <img key={index} src={item} alt={name}></img>
                        })}
                    </div>
                </section>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>

                    <article className='info'>
                        <h3>info</h3>
                        <p>Tariff : ₹{price}</p><br></br>
                        <p>size : {size}sqft.</p><br></br>
                        <p>max capacity : {capacity>1?`${capacity} people`: `${capacity} person`}</p><br></br>
                        <p>pets : {pets?"pets allowed":"no pets"}</p><br></br>
                        <p className='pb'>{breakfast && "free breakfast"}</p>
                    </article>
                </div>
                
                <section className='room-extras'>
                    <h6>extras</h6><br></br>
                    <ul className='extras'>
                        {extras.map((item,index)=>{
                        
                            return <li key={index}>
                                -{item}
                            </li>
                        })}
                    </ul>
                </section>

            </>
            
        )
    }
}

export default withRouter(Singleroom)