import FormInput from '../components/form-input.tsx'

export default function Kayit() {
    return (
        <div className="page-container fade-in">
            <div className="form-container">
                <h1 className="form-title">Kayıt Ol</h1>
                <form className="space-y-4">
                    <FormInput label="Ad" id="ad" />
                    <FormInput label="Soyad" id="soyad" />
                    <FormInput label="E-posta" id="email" type="email" />
                    <FormInput label="İlgi Alanı" id="ilgi" />
                    <button type="submit" className="btn btn-primary">Gönder</button>
                </form>
            </div>
        </div>
    )
}