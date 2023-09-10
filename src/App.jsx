import { FlippingPages } from './assets/flipping-pages';
import './assets/flipping-pages/dist/style.css';
import { useMemo, useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Wish from './pages/Wish';
import Footer from './pages/Footer';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import style from './App.module.css';
import MusicPlayer from './components/MusicPlayer';
import GiftModal from './components/GiftModal';
import {BsFillGiftFill} from 'react-icons/bs'
import Cover from './components/Cover';
import './index.css';
import ModalImage from './components/ModalImage';
import { ModalContentContext, ModalToggleContext } from './contexts/ZoomModal';

const App = () => {

    const [isModalShown, setIsModalShown] = useState(false);
    const toggleModal = () => { setIsModalShown((e) => !e) }
    const [selected, setSelected] = useState(0);

    const back = (e) => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 4));
    };
    const pages = [
        {
            id: 1,
            name: <Page1/> 
        },
        {
            id: 2,
            name: <Page2/>
        },
        {
            id: 3,
            name: <Page3/> 
        },
        {
            id: 4,
            name: <Wish />
        },
        {
            id: 5,
            name: <Footer />
        }
    ]
    const [hideCover, setHideCover] = useState(false);
    const [isPhotoClicked, setisPhotoClicked] = useState(false);
    const [clickedPhoto, setClickedPhoto] = useState('');
    const modalToggleContextValue = useMemo(() => ({ isPhotoClicked, setisPhotoClicked }), [isPhotoClicked, setisPhotoClicked]);
    const modalContentContextValue = useMemo(() => ({ clickedPhoto, setClickedPhoto }), [clickedPhoto, setClickedPhoto]);

    return (
        <ModalToggleContext.Provider value={modalToggleContextValue}>
            <ModalContentContext.Provider value={modalContentContextValue}>

            { !hideCover ? <Cover hide= { hideCover } setHide= { setHideCover }/> : 
            <>

                <article className={`$ d-flex ${style['bg-img']} justify-content-center align-items-center vh-100 vw-100`}>
                    <div className={` ${style['bg-white-05']} ${style['w-90']} ${style['h-90']} position-relative rounded-4 shadow-lg py-4`}>
                        <button className={`${ selected === 0 ? 'disabled opacity-20' : ''} position-absolute bg-transparent start-0 top-50 translate-middle-y z10 fw-bold`} onClick={back}><MdOutlineArrowBackIosNew className="fw-bold fs-1"/></button>
                        <button className={` ${ selected === 4 ? 'disabled opacity-20' : ''} position-absolute bg-transparent end-0 top-50 translate-middle-y z10 fw-bold` } onClick={next}><MdOutlineArrowForwardIos className="fw-bold fs-1"/></button>
                        <FlippingPages direction="right-to-left" onSwipeEnd={ setSelected } selected={ selected }>
                        { pages.map((page) => {
                            return (
                                <div key={page.id} className={`page page${page.id} h-100`}>{page.name}</div>
                            )
                        }) }
                        </FlippingPages>
                    </div>

                    <MusicPlayer />
                    <GiftModal isModalShown={isModalShown} toggleModal={toggleModal}/>
                    
                    <div className="position-fixed text-center text-white end-0 me-3 mb-3 bottom-0">
                        <button className="d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0 color-music" onClick={ toggleModal }>
                            <BsFillGiftFill className="text-color-primary fs-1"/>
                        </button>
                    </div>
                </article>
                    <ModalImage />
            </>
            }
            </ModalContentContext.Provider>
        </ModalToggleContext.Provider>
    );
};

export default App;
