import { useState,useEffect } from 'react';
import './dashbord.css'
import LeftSide from "./leftSide/leftSide";
import Main from './main/main';
import Cart from './navbar/navOptions/cart';
import Navbar from "./navbar/navbar";

export default function Dashbord() {
    
    let [showCart,setShowCart] = useState(false)
    let [showLeftSide,setShowLeftSide] = useState(false)

    let [style,setStyle] = useState(
        {
            'grid-template-columns': '1fr',
            'grid-template-rows': '10% 1fr'
        }
    )
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
            setStyle(prv => {

                if(prv['grid-template-columns'] !== '1fr') {

                    return {   
                        'animation-name':'leftside_mouve_in_only',
                        'animation-duration' : '0.8s',
                        'grid-template-columns': '15% 1fr',
                        'grid-template-rows': '10% 1fr'
                    }
                }
                
                }
            )
        }else if(showCart && !showLeftSide){

            setStyle(prv => {

                if(prv['grid-template-columns'] !== '1fr') {

                    return {   
                        'animation-name':'cart_mouve_in',
                        'animation-duration' : '0.8s',
                        'grid-template-columns': '1fr 15%',
                        'grid-template-rows': '10% 1fr'
                    }
                }
                
                }
            )
            
        }else{

            setStyle(prv => {

                if(prv['grid-template-columns'] !== '1fr 15%') {

                    return {   
                        'animation-name':'leftside_mouve_in_togather',
                        'animation-duration' : '0.8s',
                        'grid-template-columns': '15% 1fr 15%',
                        'grid-template-rows': '10% 1fr'
                    }
                }
                else if(prv['grid-template-columns'] !== '15% 1fr') {

                    return {   
                        'animation-name':'cart_mouve_in_togather',
                        'animation-duration' : '0.8s',
                        'grid-template-columns': '15% 1fr 15%',
                        'grid-template-rows': '10% 1fr'
                    }

                    }
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

               showCart ? <Cart /> : ''  
            }
        </div>
    )
}