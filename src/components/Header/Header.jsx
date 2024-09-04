import './Header.css'
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
  return (
    <div className='header'>
      <div className="admin-profile">
        <img src="/images/saeedi.jpeg" alt="Admin Profile" />
        <div>
            <h1>محمد امین سعیدی راد</h1>
            <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className='header-left__section'>
        <div className="search-box">
            <input type="text" placeholder='جست و جو کنید...' />
            <button>جست و جو</button>
        </div>

        <button className='header-left__icons'>
            <AiOutlineBell/>
        </button>
        <button className='header-left__icons'>
            <BsBrightnessHigh/>
        </button>
      </div>
    </div>
  )
}
