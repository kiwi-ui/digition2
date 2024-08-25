import bride from '../../assets/img/bride.jpg';
import groom from '../../assets/img/groom.jpg';
import {BsInstagram} from 'react-icons/bs';
import style from './index.module.css';

const Page1 = () => {
  return (
		<section className="text-center container my-5  pb-5">
			<p className="fw-semibold fs-3 dancing-font">Assalamual aikum Wr Wb</p>
			<p className="mb-0">Dengan rahmat ridho Allah <i>Subhanahu Wa Ta'ala,</i> kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>

			<div className="row justify-content-around gap-2 baris my-4 mx-2">
				<div className="col-lg-4 my-2">
					<img src={bride} className={`img-fluid rounded-4 style['w-85'] shadow`} alt="bride"/>

					<div className={`${style['card-details']} container  rounded-4 py-4 position-relative shadow border border-3 border-white`} style={{marginTop: '-3rem', zIndex:10, width:'90%' }}>
						<p className="fs-4 fw-semibold mb-2">Putri Ayuningtyas</p>
						<p className="m-0">Putri dari Bapak Ahmad Hidayat &amp; Ibu Nurul Rahayu</p>
						<button className={` btn  rounded-circle mt-4`} href="https://www.instagram.com">
							<a href="https://www.instagram.com/yusnianggara target='__blank'"><BsInstagram  className="position-relative  fw-bold fs-1" color='#dfc7ac'/></a>
						</button>
					</div>
				</div>
				
				<div className="col-lg-4 my-2">
					<img src={groom} className={`img-fluid rounded-4 style['w-85'] shadow`} alt="goorm"/>
					
					<div className={`${style['card-details']} container  rounded-4 py-4 position-relative shadow border border-3 border-white`} style={{marginTop: '-3rem', zIndex:10, width:'90%' }}>
						<p className="fs-4 fw-semibold mb-2">Baim Ramadhan</p>
						<p className="m-0">Putra dari Bapak Hadi Kusuma &amp; Ibu Anita Rahmawati</p>
						<button className={` btn  rounded-circle mt-4`} href="https://www.instagram.com">
							<a href="https://www.instagram.com/yusnianggara target='__blank'"><BsInstagram  className="position-relative  fw-bold fs-1" color='#dfc7ac'/></a>
						</button>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Page1
