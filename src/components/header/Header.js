import "./Header.css";
import HeaderIcon from "../../images/HeaderIcon.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
const Header = () => {
    return (
        <div className="h-wrapper" >
            <div className="h-left">
                <div className="h-name">
                <img src={HeaderIcon} alt="" />
                </div>

            </div>
            <div className="h-right">
                <div className="h-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>Home</li>

                        <li>About</li>

                        <li>Product</li>


                        <li>Contact</li>

                        <li>
                         <LockOpenOutlinedIcon/>
                            </li>
                        <li><ShoppingCartOutlinedIcon/></li>


                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default Header;
