import { IoIosNotificationsOutline } from "react-icons/io";
import { LuClock8 } from "react-icons/lu";
import { BsClipboard2Check, BsFillPersonFill } from "react-icons/bs";
import { RxEyeOpen } from "react-icons/rx";
import { VscGraph } from "react-icons/vsc";
import { BsTextParagraph } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiWaveSawtoothLight } from "react-icons/pi";

const Leftnav =()=>{
    return (
        <div className="left_nav">
          <div className="left_ele" ><PiWaveSawtoothLight /></div>
          <div className="left_ele" ><BsTextParagraph /></div>
          <div className="left_ele"><IoIosNotificationsOutline /></div>
          <div className="left_ele"><LuClock8 /></div>
          <div className="left_ele"><BsClipboard2Check /></div>
          <div className="left_ele"><RxEyeOpen /></div>
          <div className="left_ele"><BsFillPersonFill /></div>
          <div className="left_ele"><VscGraph /></div>
          <div className="left_ele2"><IoPersonCircleSharp /></div>
        </div>
    )
}

export default Leftnav;