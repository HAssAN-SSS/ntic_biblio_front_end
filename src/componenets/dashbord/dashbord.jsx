import { useState,useEffect } from 'react';
import './dashbord.css'
import LeftSide from "./leftSide/leftSide";
import Main from './main/main';
import Cart from './navbar/navOptions/cart';
import Navbar from "./navbar/navbar";

export default function Dashbord() {
    
    let [showCart,setShowCart] = useState(false)
    let [showLeftSide,setShowLeftSide] = useState(true)

    let [style,setStyle] = useState(
        {
            'grid-template-columns': '1fr',
        }
    )
    useEffect(() => {
        console.log(style)

        if(!showCart && !showLeftSide) {
            setStyle(
                {'grid-template-columns': '1fr'}
            )
        }
        
    },[showCart,showLeftSide])

    function vesion() {
        if(showCart) {
            
            setStyle(() => {
    
                if(showLeftSide) {
        
                        return {   
                            'animationName':'cart_mouve_out_togather',
                            'animationDuration' : '0.3s',
                            'grid-template-columns': '15% 1fr',
                        }
        
                        }
                else{
                            return {
                                'animationName':'cart_mouve_out',
                                'animationDuration' : '0.3s',
                                'grid-template-columns': '1fr 15%',
                            }
                        }
                    }
                )

            setShowCart(false)
        }
        else{
            setStyle(() => {
    
            if(showLeftSide) {
    
                    return {   
                        'animationName':'cart_mouve_in_togather',
                        'animationDuration' : '0.3s',
                        'grid-template-columns': '15% 1fr 15%',
                    }
    
                    }
            else{
                        return {
                            'animationName':'cart_mouve_in',
                            'animationDuration' : '0.3s',
                            'grid-template-columns': '1fr 15%',
                        }
                    }
                }
            )
            setShowCart(true)
        }
    }

    function vesionSide() {

        if(showLeftSide) {
            setStyle( () => {
    
                if(showCart) {
        
                        return {   
                            'animationName':'leftside_mouve_out_togather',
                            'animationDuration' : '0.3s',
                            'grid-template-columns': '1fr 15%',
                        }
        
                        }
                else{
                            return {
                                'animationName':'leftside_mouve_out',
                                'animationDuration' : '0.3s',
                                'grid-template-columns': '1fr',
                            }
                        }
                    }
                )
            setShowLeftSide(false)
        }
        else{
            setStyle(() => {
    
                if(showCart) {
        
                        return {   
                            'animationName':'leftside_mouve_in_togather',
                            'animationDuration' : '0.3s',
                            'grid-template-columns': '15% 1fr 15%',
                        }
        
                        }
                else{
                            return {
                                'animationName':'leftside_mouve_in_only',
                                'animationDuration' : '0.3s',
                                'grid-template-columns': '15% 1fr',
                            }
                        }
                    }
                )
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

               showCart ? <Cart inDashbord={true} vesion={vesion}/> : ''  
            }
        </div>
    )
}