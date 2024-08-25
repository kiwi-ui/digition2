import { useState } from 'react';
import style from './style.module.css';
import fonts from '../../App.module.css';

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
        <section id="wish" className="container h-100 pt-5">
            <p className={`fw-bolder text-black m-0 text-center fs-3 ${ fonts.nanum }`}>Harapan</p>
            <p className="text-center border-bottom border-3 border-black pb-2">Kirim harapan dan doa untuk kedua mempelai</p>
        
            <div className="d-flex flex-column justify-content-center h-75">
                <form name="submit-to-google-sheet container w-100" id="form" className="px-1 form-wrapper row py-1" method="post">
                    <div className="col-12 mb-4">
                        <input className="shadow rounded-3 border-0 form-control" name="nama" type="text" placeholder="Nama" onChange={ handleNameChange } value={ formData.name } aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    {/* <div className="col-6 mb-4">
                        <input className="shadow rounded-3 border-0 form-control" name="no" type="number" placeholder="No.Seluler" />
                    </div> */}
                    <div className="col-12 mb-3">
                        <textarea className="shadow pt-2 px-3 rounded-1 border-0 form-control" name="harapan" placeholder="Harapan untuk pengantin" rows={4} onChange={ handleWishChange } value={ formData.harapan } required />
                        { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama harapan anda untuk pengantin</p> }
                    </div>
                </form>

                <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative px-4">
                    <a href='blank' type="submit" className={` ${style['btn-details']} py-2 px-3 text-black rounded-2 border-0 text-black fw-semibold ${isLoading ? 'disabled' : '' }`} aria-disabled="true" onClick={ handleSubmit }>
                        { isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <span className="fw-bold text-white">Kirim</span> }
                    </a>
                    { isSuccess && <p className="position-relative bg-text-primary">Pesan Terkirim!</p> }
                </div>
            </div>
        </section>
    )
}

export default Wish
