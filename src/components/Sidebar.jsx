import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import {BsCurrencyDollar} from 'react-icons/bs'


import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <li className="active">
          <a href="#">
            <AiOutlineHome className='icon'/>
            صفحه اصلی
            </a>
        </li>

        <li>
          <a href="#">
            <MdProductionQuantityLimits className='icon'/>
            محصولات
            </a>
        </li>

        <li>
          <a href="#">
            <BiCommentDetail className='icon'/>
            کامنت ها
            </a>
        </li>

        <li>
          <a href="#">
            <FiUsers className='icon'/>
            کاربران
            </a>
        </li>

        <li>
          <a href="#">
            <IoBagCheckOutline className='icon'/>
            سفارشات
            </a>
        </li>

        <li>
          <a href="#">
            <BsCurrencyDollar className='icon'/>
            تخفیف ها
            </a>
        </li>
      </ul>
    </div>
  );
}
