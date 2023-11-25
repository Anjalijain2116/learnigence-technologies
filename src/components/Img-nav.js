import { IoVideocamOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiFolderSharedLine } from "react-icons/ri";

const Imgnav = () => {
  return (
    <div className="img_nav">
      <div className="img_div">
        <img
          className="img"
          src="https://th.bing.com/th?id=OIP.Zr-QuZ8Oqcb78xpuBtMFYwHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Image is not found"
        />
      </div>
      <div className="img_div">
        <img
          className="img"
          src="https://th.bing.com/th?id=OIP.ZtxjaSGj_AOXg0LRi34cpQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Image is not found"
        />
      </div>

      <div className="ic_divs">
        <div>
          <div className="icons"><IoVideocamOutline /></div>
          <div className="t">Cam</div>
        </div>

        <div>
          <div className="icons"><IoMicOutline /></div>
          <div className="t">Mic</div>
        </div>
        <div>
          <div className="icons"><FaRegShareSquare /></div>
          <div className="t">Share</div>
        </div>
      </div>
      <div className="img_div ic_divs">
      <div>
          <div className="icons"><IoChatbubblesOutline /></div>
          <div className="t">Chat</div>
        </div>
        <div>
          <div className="icons ic1"><RiFolderSharedLine /></div>
          <div className="t">Leave</div>
        </div>
      </div>
    </div>
  );
};
export default Imgnav;
