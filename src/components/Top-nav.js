import { VscChevronLeft } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

const Topnav =()=>{
    return (
        <div className="top_nav">
            <div className="arrow"><VscChevronLeft /></div>
            <div className="heading">Basic Mathematics 101</div>
            <div className="call_icon"><IoIosCall /></div>
            <div className="teacher">Call Teacher</div>
            <div className="support_icon"><IoPersonCircleOutline /></div>
            <div className="teacher">Support</div>
        </div>
    )
}

export default Topnav