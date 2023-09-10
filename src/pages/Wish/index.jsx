import { useState } from 'react';

const Wish = () => {
    const [formData, setFormData] = useState({
        name: '',
        harapan: '',
    });
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleNameChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            name: e.target.value
        }));
    };  
    const handleWishChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            harapan: e.target.value
        }));
    };
    const handleSubmit = (event) =>  {
        event.preventDefault();
        const url = 'https://script.google.com/macros/s/AKfycbyIT5in_dIBW9rhRRlGMbNqhMBjAxGUFVcQVPHsRRkirSjBT9-rewkr8WRZ158_Ytsg/exec';
        const form = document.getElementById('form');

        if (!formData.name || !formData.harapan) {
            setIsInputEmpty((e) => !e)
            setIsSuccess(e => !e)
            return;
        }
        fetch(url, { method: 'POST', body: new FormData(form) })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            setFormData({name:'', harapan:''})
            setIsSuccess(true) 
            setTimeout(() => {
                setIsSuccess(false)
            }, 1500);
        })
        .catch(() =>  {
            setIsLoading(e => !e)
            alert('Terjadi Kesalahan!')
        }
        );
        setIsLoading(e => !e)
    }

    return (
        <section id="wish" className="container h-100">
            <p className="fw-bold text-black m-0 text-center fs-1">Harapan</p>
            <p className="text-center fs-5">Kirim harapan dan doa untuk kedua mempelai</p>
        
            <div className="d-flex flex-column justify-content-center h-75 px-4">
                <form name="submit-to-google-sheet container w-100" id="form" className="px-4 form-wrapper row py-1" method="post">
                    <div className="col-lg-6 mb-4">
                        <input className="rounded-1 border-0 form-control" name="nama" type="text" placeholder="Nama" onChange={ handleNameChange } value={ formData.name }/>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <input className="rounded-1 border-0 form-control" name="no" type="number" placeholder="Nomor ponsel (opsional)" />
                    </div>
                    <div className="col-12 mb-3">
                        <textarea className="pt-2 px-3 rounded-1 border-0 form-control" name="harapan" placeholder="Harapan untuk pengantin" rows={4} onChange={ handleWishChange } value={ formData.harapan } required />
                        { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama harapan anda untuk pengantin</p> }
                    </div>
                </form>

                <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative px-4">
                    <a href='blank' type="submit" className={`py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold ${isLoading ? 'disabled' : '' } btn`} aria-disabled="true" style={{backgroundColor: "#2b2b2b"}} onClick={ handleSubmit }>
                        { isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Kirim' }
                    </a>

                    { isSuccess && <p className="position-relative bg-text-primary">Pesan Terkirim!</p> }
                </div>
            </div>
        </section>
    )
}

export default Wish
