import g1 from '../../assets/img/g-1.webp';
import g3 from '../../assets/img/g-3.webp';
import g4 from '../../assets/img/g-4.webp';
import g5 from '../../assets/img/g-5.webp';
import g6 from '../../assets/img/g-6.webp';
import g7 from '../../assets/img/g-7.webp';
import g8 from '../../assets/img/bride.jpg';
import g9 from '../../assets/img/bg-1.png';
import g10 from '../../assets/img/profile.jpg';
import { useContext } from 'react';
import { ModalContentContext, ModalToggleContext } from '../../contexts/ZoomModal';

const Gallery = () => {
    const galleryImages = [
        { id: 1, src: g1 },
        { id: 3, src: g3 },
        { id: 4, src: g4 },
        { id: 5, src: g5 },
        { id: 6, src: g6 }
    ]
    const galleryImages2 = [
        { id: 1, src: g7 },
        { id: 3, src: g8 },
        { id: 4, src: g9 },
        { id: 5, src: g10 },
    ]
    const { setisPhotoClicked } = useContext(ModalToggleContext);
    const { setClickedPhoto } = useContext(ModalContentContext);
    const showImage = (param) => {
        setisPhotoClicked((e) => !e);
        setClickedPhoto(param.target.src);
        console.log(param.target.src)
    }
    return (
        <>
            <section id="gallery" className="position-relative my-5 pb-5">
                <div className="container py-2 h-100 text-black">
                    <div className="text-center w-75 position-relative" style={{transform: "translateX(-50%)", right: "-50%"}}>
                        <p className="fw-bold fs-1 m-0">Gallery</p>
                        <p className="border-bottom border-3 border-black pb-2">Momen terbaik terekam abadi</p>
                    </div>

                    <div className="row justify-content-center">
                    { galleryImages.map((image) => (
                    <>
                                <div className="col-6 g-3" key={ image.id }>
                                    <img onClick={ showImage } src={ image.src } className="w-100 rounded-3" alt="prewedding"/>
                                </div>
                    </>
                    ))}
                    {/* { galleryImages2.map((image2) => (
                        <div className="col-6 g-3" key={ image2.id }>
                            <img onClick={ showImage } src={ image2.src } className="w-100 rounded-3" alt="prewedding"/>
                        </div>
                    ))} */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
