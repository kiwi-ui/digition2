import bride from '../../assets/img/bride.jpg';
import groom from '../../assets/img/groom.jpg';
import {BsInstagram} from 'react-icons/bs';
import style from './index.module.css';

const Page1 = () => {

  return (
		<section className="text-center container py-4">
			<p className="fw-semibold fs-1 dancing-font">Assalamualaikum Wr Wb</p>
			<p className="mb-0">Dengan rahmat ridho Allah <i>Subhanahu Wa Ta'ala,</i> kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>

			<div className="row justify-content-around gap-2 baris my-4 mx-2">
				<div className="col-lg-4 my-2">
					<img src={bride} className={`img-fluid rounded-4 style['w-85'] shadow`} alt="bride"/>

					<div className={`${style['card-details']} container w-75 rounded-4 py-4 position-relative shadow`} style={{marginTop: '-2rem', zIndex:10}}>
						<p className="fs-3 fw-semibold dancing-font">Putri Ayuningtyas</p>
						<p className="m-0">Putri dari Bapak Ahmad Hidayat &amp; Ibu Nurul Rahayu</p>
						<button className={`text-white btn  mt-2`} href="https://www.instagram.com">
							<BsInstagram  className="fs-4 text-black position-relative "/>
						</button>
					</div>
				</div>
				
				<div className="col-lg-4 my-2">
					<img src={groom} className={`img-fluid rounded-4 style['w-85'] shadow`} alt="goorm"/>
					
					<div className={`${style['card-details']} container w-75 rounded-4 py-4 position-relative shadow`} style={{marginTop: '-2rem', zIndex:10}}>
						<p className="fs-3 fw-semibold dancing-font">Baim Ramadhan</p>
						<p className="m-0">Putra dari Bapak Hadi Kusuma &amp; Ibu Anita Rahmawati</p>
						<button className={`text-white btn  mt-2`} href="https://www.instagram.com">
							<BsInstagram  className="fs-4 text-black position-relative "/>
						</button>
					</div>
				</div>
			</div>

			<div>
				<p>Untuk melaksanakan syari'at agama dan menjalankan sunnah Rasul dalam membina keluarga yang sakinah, mawaddah warahmah</p>
			</div>
		</section>
  );
};

export default Page1
