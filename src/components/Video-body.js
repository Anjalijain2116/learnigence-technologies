import { IoPauseOutline } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuKeyboard } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";

const Videobody =()=>{
    return (
        <div className="video_body">
            <div className="v_head">Basic Mathematics Learning 001</div>
            <img  className="y_img" src="https://i.pinimg.com/736x/46/dd/91/46dd9133547bbaab4209fb5d0d06ae98.jpg" alt="Image is not found"/>
           
            
            <div className="border"></div>

            <div className="lower">
                <div className="l_div">
                   <div className="lower_div"><IoPauseOutline /></div>
                   <div className="lower_div"><FaCaretRight /></div>
                   <div className="lower_div"><HiSpeakerWave /></div>
                   <div className="lower_div text1">0:00 / 2:22</div>
                </div>
                <div className="l_div">
                <div className="lower_div1"><LuKeyboard /></div>
                <div className="lower_div1"><IoMdSettings /></div>
                <div className="lower_div1"><FaRegSquare /></div>
                <div className="lower_div1"><SlSizeFullscreen /></div>
                </div>
            </div>
        </div>
    )
}

export default Videobody;