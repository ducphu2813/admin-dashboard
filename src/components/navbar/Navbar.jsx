import "./navbar.scss"
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    console.log("Navbar");
    const location = useLocation();

    let title;
    switch (location.pathname) {
        case '/':
            title = 'Home';
            break;
        case '/users':
            title = 'Users';
            break;
        case '/products':
            title = 'Products';
            break;
        default:
            title = 'React Admin DashBoard';
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src="./logo.svg" alt=""/>
                <span>React Admin DashBoard - {title}</span>
            </div>

            <div className="icons">
                <img src="search.svg" alt="" className="icon"/>
                <img src="app.svg" alt="" className="icon"/>
                <img src="expand.svg" alt="" className="icon"/>
                <div className="notification">
                    <img src="notifications.svg" alt=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="admin.png" alt=""/>
                    <span>Phuu</span>
                </div>
                <img src="setting.svg" alt="" className="icon"/>
            </div>
        </div>
    )
}