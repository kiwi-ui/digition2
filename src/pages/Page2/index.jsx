import ring from '../../assets/img/ring.svg';
import venue from '../../assets/img/venue.svg'
import {ImLocation2} from 'react-icons/im';
import EventDetails from '../../components/EventDetails';
import style from './index.module.css';

const Page2 = () => {
    return (
        <section className="d-flex justify-content-center align-items-center position-relative flex-column gap-lg-5 gap-4 h-lg-100 my-3">
            <div className="text-center container h-50 d-flex flex-column align-items-center justify-content-center">
                <img height={ '60px' } src={ ring } alt="ring"/>
                <p className="m-0 fw-bold fs-1 dancing-font border-bottom border-3 border-black w-50 pb-2">Waktu</p>
                
                <div className="row justify-content-center align-items-center gap-2 py-3">
                    <div className="col-auto fs-2">Minggu</div>
                    <div className="col-auto fs-2 border-start border-end border-solid border-black border-3">02<br/>2023</div>
                    <div className="col-auto fs-2">Juli</div>
                    <p className="m-0 fs-5 py-2">Pukul 13.00 - Selesai</p>
                </div>
                <div className="container">
                    <EventDetails />
                </div>
            </div>
            <div className="text-center container h-50 d-flex flex-column align-items-center justify-content-center">
                <img height={'60px'} src={venue} alt="ring"/>
                <p className="fw-bold fs-1 dancing-font m-0 border-bottom border-3 border-black w-50 pb-2">Tempat</p>

                <div className="d-flex flex-column">
                    <p className="m-0 fs-5 py-3">Jalan bahagia sehat selalu. Nomor 12, Kabupaten Pamekasan madura</p>
                </div>

                <a href="https://goo.gl/maps/mDBHHZsaYNr3mnXB6" type="button" target="_blank" rel="noreferrer"  className={`${style['card-details']} py-2 px-3 text-black`}><ImLocation2 color="black"/> <span className="fw-semibold ms-2">Lihat map</span></a>
            </div>
        </section>
    );
};

export default Page2;
