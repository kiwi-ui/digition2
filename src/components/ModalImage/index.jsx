import style from './style.module.css';
import {AiOutlineClose} from 'react-icons/ai'
import { useContext } from 'react';
import { ModalContentContext, ModalToggleContext } from '../../contexts/ZoomModal';
const ModalImage = () => {
    const {isPhotoClicked, setisPhotoClicked} = useContext(ModalToggleContext);
    const {clickedPhoto} = useContext(ModalContentContext);

    const closeModal = () => { setisPhotoClicked(false) }

    return (
        <>
            {
                isPhotoClicked ? 
                    <div className={ `${ style.bgDark50 } position-absolute vh-100 z100 w-100 row justify-content-center align-items-center` }>        
                        <img src={ clickedPhoto } className="col-lg-6 col-10 position-relative z100 " alt="prewedding" /> 
                        <button className="bg-transparent fs-4 position-absolute rounded-circle px-3 pt-3 top-0 text-white border-0 fw-bold d-flex justify-content-end" onClick={closeModal} style={{zIndex: 10}}><AiOutlineClose className='text-white'/></button>
                    </div> : null
            }
        </>
    )
}

export default ModalImage
