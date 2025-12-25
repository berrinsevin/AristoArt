import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2 className="hero-title">Aristo Sanat Akademisi</h2>
                <p className="hero-subtitle">"Doğa ve sanatın iyileştirici gücü."</p>
                <p className="hero-subtitle" style={{margin: '0 15em 2em 15em' }}>Doğayla iç içe, özgün ve disiplinlerarası bir sanat yolculuğuna davetlisiniz!
                    Aristo Sanat Akademisi, Kaz Dağları’nın eşsiz atmosferinde sanat, felsefe ve doğayı buluşturan özel bir eğitim ve deneyim alanı sunar. Oyunculuk kampından yazarlık ve diksiyona, yoga ve beden hareketinden felsefe sohbetlerine uzanan geniş bir yelpazede, doğanın kalbinde yaratıcı gücünüzü keşfedin.</p>
                <Link to="/kayit" className="btn btn-primary">
                    Detaylı Bilgi Al
                </Link>
            </div>
        </section>
    )
}