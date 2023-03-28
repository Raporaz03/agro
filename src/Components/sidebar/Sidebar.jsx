import "./sidebar.css";
import SpeedIcon from '@mui/icons-material/Speed';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleClick = (e)=>{
    navigate(e.target.name);
  }
  
  return (
    <div className='sideWrapper'>
      <div className='sideWrapperTop'>
        <button name="dashboard" onClick={handleClick}>
          <SpeedIcon className="sidebarIcons" />
          Dashboard
        </button>
        <button name="profile" onClick={handleClick}>
          <PersonIcon className="sidebarIcons" />
          Profile
        </button>
      </div>

      <div className='sideWrapperMiddle'>
        <button name="equipment" onClick={handleClick}>
          <AgricultureIcon className="sidebarIcons" />
          Equipment
        </button>
        <button name="workforce" onClick={handleClick}>
          <img src={require('./Farmer.jpg')} alt="" />
          Work Force
        </button>
        <button name="stores" onClick={handleClick}>
          <StoreIcon className="sidebarIcons" />
          Stores
        </button>
        <button name="specialists" onClick={handleClick}>
        <svg className="sidebarIconsStar sidebarIcons" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="35px" height="35px"><path d="M15.067,15.998c6.589-.024,8.933-3.51,8.933-6.498,0-1.676-1.185-3.077-2.76-3.418,.311-.882,.546-1.731,.702-2.489,.18-.876-.044-1.778-.613-2.476-.579-.71-1.437-1.117-2.352-1.117H5.023c-.916,0-1.773,.407-2.352,1.117-.569,.697-.793,1.6-.613,2.476,.156,.759,.391,1.607,.702,2.489-1.575,.341-2.76,1.742-2.76,3.418,0,2.988,2.344,6.473,8.933,6.498,.03,.211,.067,.421,.067,.639v3.363c0,1.826-1.536,1.992-2,2h-2v2h14v-2h-1.992c-.472-.008-2.008-.174-2.008-2v-3.363c0-.218,.037-.428,.067-.639Zm5.433-7.998c.827,0,1.5,.673,1.5,1.5,0,2.048-1.631,4.225-6.124,4.475,.18-.233,.382-.445,.609-.626,1.718-1.373,3.024-3.351,3.959-5.349h.057ZM2,9.5c0-.827,.673-1.5,1.5-1.5h.057c.935,1.998,2.24,3.976,3.958,5.349,.227,.181,.43,.393,.609,.626-4.493-.25-6.124-2.427-6.124-4.475Zm11,7.137v3.363c0,.806,.191,1.459,.487,2h-2.973c.295-.541,.487-1.194,.487-2v-3.363c0-1.946-.814-3.714-2.236-4.851-2.463-1.969-4.159-5.735-4.746-8.596-.08-.39,.094-.674,.203-.81,.198-.242,.49-.381,.803-.381h13.953c.312,0,.604,.139,.802,.381,.11,.136,.284,.421,.204,.81-.587,2.859-2.282,6.626-4.746,8.596-1.421,1.136-2.236,2.903-2.236,4.851Zm-.476-12.637l.652,2.005h2.109l.3,.918-1.706,1.24,.652,2.006-.781,.567-1.705-1.236-1.71,1.237-.781-.567,.652-2.006-1.706-1.24,.3-.918h2.107l.652-2,.965-.006Z"/></svg>
          Specialist
        </button>
        <button name="finance" onClick={handleClick}>
          <CurrencyRupeeIcon className="sidebarIcons" />
          Finance
        </button>
        <button name="majorcrops" onClick={handleClick}>
          <img src={require('./Crops.jpg')} alt="" />
          Major Crops
        </button>
      </div>
    </div>
  )
}
