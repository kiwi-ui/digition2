import icons from '../../assets/img/ring.svg';
import {ImLocation2} from 'react-icons/im';
import EventDetails from '../../components/EventDetails';
import style from './index.module.css';

const Page2 = () => {
    return (
        <section className="d-flex justify-content-center align-items-center position-relative flex-column gap-3 py-4 h-lg-100">
            <div className="text-center container h-50 d-flex flex-column align-items-center justify-content-center">
                <img height={ '60px' } src={ icons } alt="ring"/>
                <p className="m-0 fw-bold fs-1 dancing-font">Waktu</p>
                
                <div className="row justify-content-center align-items-center gap-2 py-3">
                    <div className="col-auto fs-2">Minggu</div>
                    <div className="col-auto fs-2 border-start border-end border-solid border-black">02<br/>2023</div>
                    <div className="col-auto fs-2">Juli</div>
                    <p className="m-0 fs-5 py-2">Pukul 13.00 - Selesai</p>
                </div>
            </div>
            <div className="container">
                <EventDetails />
            </div>
            <div className="text-center container h-50 d-flex flex-column align-items-center justify-content-center gap-2">
                <img height={'60px'} src={icons} alt="ring"/>
                <p className="fw-bold fs-1 dancing-font">Tempat</p>

                <div className="d-flex flex-column py-3">
                    <p className="m-0 fs-5">Bertempat di:</p>
                    <p className="m-0 fs-5 fw-bold">Jalan bahagia sehat selalu. Nomor 12, Kabupaten Pamekasan madura</p>
                </div>

                <a href="https://goo.gl/maps/mDBHHZsaYNr3mnXB6" type="button" target="_blank" rel="noreferrer"  className={`${style['card-details']} btn text-white`}><ImLocation2 color="white"/> <span>Lihat map</span></a>
            </div>
        </section>
    );
};

export default Page2;
