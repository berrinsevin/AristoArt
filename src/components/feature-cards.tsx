const features = [
    { title: 'Oyunculuk', description: 'Beden dili ve doğaçlama eğitimleri', icon: '🎭' },
    { title: 'Müzik', description: 'Doğa içinde sesinizi keşfedin', icon: '🎵' },
    { title: 'Resim', description: 'Assos\'un doğasından ilham alın', icon: '🎨' },
]

export default function FeatureCards() {
    return (
        <section className="features">
            <div className="features-grid">
                {features.map(({ title, description, icon }) => (
                    <div key={title} className="feature-card fade-in">
                        <div className="feature-icon">{icon}</div>
                        <h3 className="feature-title">{title}</h3>
                        <p className="feature-description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}