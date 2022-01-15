import NavbarMain from "../components/navbarMain";
import NavbarMobile from "../components/navbarMobile";
import Footer from "../components/footer";
const MainLayout = ({ children }) => {
    return (
        <div>
            <div className='sticky-top'>
                <NavbarMain />
                <NavbarMobile />
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;