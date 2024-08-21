import { useParams } from 'react-router-dom';
import style from'./cover.module.css';
import { BsEnvelopeHeart } from 'react-icons/bs';

const Cover = ({hide, setHide}) => {
    const { name } = useParams();
    const hideCover = () => { return setHide(!hide) }
    
    return (
        <section className={`${ style.bgCover } text-white position-relative`}>
            <div className="text-center d-flex flex-column justify-content-around align-items-center position-relative z10 h-100 py-5">
                <div>
                    <p className='m-0'>Undangan Pernikahan</p>
                    <p className="text-color-secondary fs-2 m-0 fw-bolder dancing-font m-1 color-name" style={{letterSpacing: '0.2rem'}}>Yusni & Anggara</p>
                    <p className="m-0">Senin, 21 Maret 2023</p>
                </div>
                
                <div className={ ` ${ style['border-dashed'] } text-center py-3 px-5 rounded-3 border-color` }>
                    <p className="m-0">Kepada yang terhormat</p>
                    <p className="m-0">Bapak/Ibu/Saudara</p>
                    <p className="fw-bold mb-3 mt-3 text-color-secondary dancing-font" style={{fontSize: '1.5rem'}}>{ name }</p>
                </div>

                <button onClick={ hideCover } type="button" className={ `btn py-2 px-3 ${style.bgColorPrimary} rounded-4 position-relative d-flex g-3 flex-row align-items-center justify-content-center text-white border-0 gap-1 shadow-md`}>
                    <BsEnvelopeHeart/>
                    <p className="m-0 ps-2">Buka Undangan</p>
                </button>
            </div>
        </section>
  )
}

export default Cover
