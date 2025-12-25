import { Link } from 'react-router-dom';

export default function WorkshopSection() {
    const images = [1, 2, 3, 4, 5, 6].map(num => `/src/assets/${num}.png`);
    return (
        <section className="workshops">
            <h2 className="section-title">Atölyelerimiz</h2>
            <div className="workshops-grid">
                {images.map((src, idx) => (
                    <Link to="/programlar" key={src} className="workshop-card-link">
                        <div className="workshop-card slide-up">
                            <img src={src} alt={`Eğitmen ${idx + 1}`} className="educator-img" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}