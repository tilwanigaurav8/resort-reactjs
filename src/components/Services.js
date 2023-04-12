import React,{Component} from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';
class Services extends Component{
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'We offer four non-alcoholic drinks, including the Bradsell, which is a cold-brew coffee with malt caramel and chai spices, and the Apple Sourz-Less with Seedlip Garden, peas, pressed apples, rye flakes and capillaire syrup'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'With that in mind, here are the most beautiful hiking hotels in the world. What I would give to stay at a couple of these'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"On a complimentary shuttle, you will get help loading your bag transport, and the reassurance which you have got a professional driver at the wheel"
            },
            {
                icon:<FaBeer/>,
                title:"Free Drinks",
                info:'Every evening, Canopy hotels has free tastings at their hotel bar, where you can sample local wines, beers and spirits at no cost'
            }
        ]
    };
    render(){

    return(
        <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                {this.state.services.map((item,index) => {
                    return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    );
            }
}
export default Services;