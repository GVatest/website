import "./footer.scss"
import Logo from "../Logo"
import Social from "../Social"
import { useContext } from "react"
import Context from "../../context"


function Footer() {

    const {isMobile} = useContext(Context)

    return (
        <div className="footer_border_wrapper">
            <footer>
                {!isMobile ? 
                    <>
                        <Logo>
                            <a href=""><span style={{textDecoration: "underline", fontSize: "20px", lineHeight: "25px"}}>Terms</span></a>
                            <a href=""><span style={{textDecoration: "underline", fontSize: "20px", lineHeight: "25px"}}>Privacy</span></a>
                        </Logo>
                        <span className="powered_by">© 2022 Powered by Solution. All Rights Reserved.</span>
                        <Social/>
                    </>
                :
                    <>
                        <span className="powered_by">© 2022 Powered by Solution. All Rights Reserved.</span>
                    </>
                }
            </footer>
        </div>
    )
}

export default Footer