export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Aristo Sanat Akademisi</h3>
                    <p className="footer-text">Kaz Dağları'nda doğayla iç içe sanat atölyeleri</p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-subtitle">İletişim</h4>
                    <p className="footer-text">E-posta: info@aristosanat.com</p>
                    <p className="footer-text">Instagram: @aristosanatakademisi</p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-subtitle">Hızlı Linkler</h4>
                    <ul className="footer-links">
                        <li><a href="/" className="footer-link">Ana Sayfa</a></li>
                        <li><a href="/hakkimizda" className="footer-link">Hakkımızda</a></li>
                        <li><a href="/programlar" className="footer-link">Programlar</a></li>
                        <li><a href="/egitmenler" className="footer-link">Eğitmenler</a></li>
                        <li><a href="/iletisim" className="footer-link">İletişim</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">&copy; {new Date().getFullYear()} Aristo Sanat Akademisi. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    )
}

