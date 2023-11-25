import { SiGoogleclassroom } from "react-icons/si";
import { BiChalkboard } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { PiFilePptDuotone } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentSound } from "react-icons/gr";

const Midnav =()=>{
    return (
        <div className="mid_nav">
            <div className="mid_icon"><SiGoogleclassroom /></div>
            <div className="mid_text">Classroom</div>
            <div className="mid_icon"><BiChalkboard /></div>
            <div className="mid_text">Whiteboard</div>
            <div className="video">
                <div className="mid_icon"><GoVideo /></div>
                <div className="video1">Videos</div>
            </div>
            <div className="mid_icon"><PiFilePptDuotone /></div>
            <div className="mid_text">Slide Show</div>
            <div className="mid_icon"><IoDocumentTextOutline /></div>
            <div className="mid_text">Document</div>
            <div className="mid_icon"><GrDocumentSound /></div>
            <div className="mid_text">Doc.Cam</div>
        </div>
    )
}

export default Midnav