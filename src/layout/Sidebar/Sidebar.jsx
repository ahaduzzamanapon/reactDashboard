import "./Sidebar.css"
import {personsImgs} from "../../assets/utils/images";
import {navigationLinks} from "../../assets/data/data"

const Sidebar =() =>{
    return(
        <div className="sidebar">
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    <img src={personsImgs.person_two} alt="Profile Image"/>
                </div>
                <span className="info-name">alice-de</span>
            </div>
            <nav className="navigation">
                <ul>
                    {
                        navigationLinks.map((navigationLink)=>(
                            <li className="nav-item" key={
                                navigationLink.id
                            }>
                                <a href="" className="{`nav-link`}">
                                    <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.titel}/>
                                    <span className="nav-link-text">
                                        {navigationLink.title}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    )
}
export default Sidebar;
