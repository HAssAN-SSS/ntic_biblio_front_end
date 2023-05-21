import './dashbord.css'
import LeftSide from "./leftSide/leftSide";
import Main from './main/main';
import Navbar from "./navbar/navbar";

export default function Dashbord() {

    return(
        <div className="dashbord">
            <Navbar className={'navbar'} />
            <LeftSide className={'LeftSide'} />
            <Main className={'Main'} />
        </div>
    )
}