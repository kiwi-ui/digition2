import ring from '../../assets/img/ring.svg';
import venue from '../../assets/img/venue.svg'
import {ImLocation2} from 'react-icons/im';
import EventDetails from '../../components/EventDetails';
import style from './index.module.css';
import fonts from '../../App.module.css'
const Page2 = () => {
    return (
        <>
            <section className={`${ style.textPrimary } position-relative pb-3 pt-5 border border-0 `}>
                <div className="text-center container px-3 pt-4 pb-5 mb-5" style={{borderRadius:'11rem 11rem 0 0', boxShadow:'-2px -1px 9px 4px rgba(0, 0, 0, 0.5)', backgroundColor: 'rgba(255, 255, 255, 0.7)', width:'85%'}}>
                    {/* <img height={ '60px' } src={ ring } alt="ring"/> */}
                    <p className={`${ fonts.nanum } fw-thin m-0 fw-bold fs-3  border-3 border-black pb-2 pt-5`} style={{letterSpacing: '0.1rem'}}>Save The Date</p>
                    <div className="row my-2" style={{height: '8vh'}}>
                        <div className={`${ style.string } col-6 `}></div>
                        <div className="col-6"></div>
                    </div>
                    <div className="row justify-content-center align-items-center gap-2 py-1">
                        <div>
                            <p className="fw-medium mb-1" style={{letterSpacing:'0.1rem'}}>Akad Nikah</p>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>Minggu, 31 Februari 2025</p>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>08.00 WIB - Selesai</p>
                        </div>
                        <div>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>Rumah Mempelai Wanita</p>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>Jl. Hindia 3 No.34 RT. 05 RW. 43 Ds. Melati Kec. Gendang Kab. Sidoarjo</p>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center gap-2 pt-2 pb-4">
                        <div>
                            <p className="fw-medium mb-1" style={{letterSpacing:'0.1rem'}}>Resepsi</p>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>Minggu, 31 Februari 2025</p>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>08.00 WIB - Selesai</p>
                        </div>
                        <div>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>Rumah Mempelai Wanita</p>
                            <p className="mb-0" style={{fontSize:'0.8rem'}}>Jl. Hindia 3 No.34 RT. 05 RW. 43 Ds. Melati Kec. Gendang Kab. Sidoarjo</p>
                        </div>
                        <button type="button" className= {`${style.textPrimary} py-1 border border-1 border-dark mt-2 fw-medium rounded-3 bg-transparent border`} style={{ width:'30vw', fontSize:'0.9rem' }}>
                            Buka Maps
                        </button>
                    </div>
                    <EventDetails />
                </div>
            </section>

            {/* <section>
                <div className="text-center container d-flex flex-column align-items-center justify-content-center">
                    <img height={'60px'} src={venue} alt="ring"/>
                    <p className="fw-bold fs-1 dancing-font m-0 border-bottom border-3 border-black w-50 pb-2">Tempat</p>

                    <div className="d-flex flex-column">
                        <p className="m-0 fs-5 py-3">Jalan bahagia sehat selalu. Nomor 12, Kabupaten Pamekasan madura</p>
                    </div>

                    <a href="https://goo.gl/maps/mDBHHZsaYNr3mnXB6" type="button" target="_blank" rel="noreferrer"  className={`${style['card-details']} py-2 px-3 text-black`}><ImLocation2 color="black"/> <span className="fw-semibold ms-2">Lihat map</span></a>
                </div>
            </section> */}
        </>
    );
};

export default Page2;
