import Hero from '../components/hero.tsx'
import anasayfaAfis from '../assets/anasayfa-afis.png'

function PosterSection() {
    return (
        <section>
            <div className="fade-in">
                <img src={anasayfaAfis} alt="Aristo Sanat Atölyesi Afiş" className="poster-image" />
            </div>
        </section>
    )
}

export default function AnaSayfa() {
    return (
        <div className="fade-in">
            <Hero />
            <PosterSection />
            {/* <WorkshopSection /> */}
        </div>
    )
}