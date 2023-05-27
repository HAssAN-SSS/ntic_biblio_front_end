import { useState,useEffect } from 'react';
import './dashbord.css'
import LeftSide from "./leftSide/leftSide";
import Main from './main/main';
import Profile from './navbar/navOptions/profile';
import Navbar from "./navbar/navbar";

export default function Dashbord() {
    
    let [showCart,setShowCart] = useState(false)
    let [showLeftSide,setShowLeftSide] = useState(false)

    let [style,setStyle] = useState()
    useEffect(() => {

        if(!showCart && !showLeftSide) {
            setStyle(
    
                {
                    'grid-template-columns': '1fr',
                    'grid-template-rows': '10% 1fr'
                }
    
                )
        }
        else if(showLeftSide && !showCart) {
            setStyle(
    
                {
                    'grid-template-columns': '15% 1fr',
                    'grid-template-rows': '10% 1fr'
                }
            )
        }else if(showCart && !showLeftSide){

            setStyle(
    
                {
                    'grid-template-columns': ' 1fr 15%',
                    'grid-template-rows': '10% 1fr'
                }
            )
            
        }else{

            setStyle(
    
                {
                    'grid-template-columns': '15% 1fr 15%',
                    'grid-template-rows': '10% 1fr'
                }
            )

        }
    },[showCart,showLeftSide])

    function vesion() {
        if(showCart) {
            setShowCart(false)
        }
        else{
            setShowCart(true)
        }
    }

    function vesionSide() {
        // alert('hole')
        if(showLeftSide) {
            setShowLeftSide(false)
        }
        else{
            setShowLeftSide(true)
        }
    }
    
        return(
        <div className="dashbord" style={style}>
            {
                !showLeftSide ? <div className='filter' onClick={vesionSide}>FILTER</div> : ''
            }
            
            {
                showLeftSide ? <LeftSide className={'LeftSide'} vesionSide={vesionSide} /> : ''

            }
            <Navbar className={'navbar'} vesion={vesion}/>
            
            <Main className={'Main'} />
            {

               showCart ? <Profile /> : ''  
            }
        </div>
    )
}