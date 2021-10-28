import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/">Sapup3</a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="menu-btn">Home</a></li>
                    <li><a href="/sobre" className="menu-btn">Sobre</a></li>
                    <li><a href="/contato" className="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>    
);

export default Menu;