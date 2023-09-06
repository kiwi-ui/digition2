const Footer = () => {
    return (
        <footer className={`position-relative d-flex align-items-center h-100`}>
            <div className="container text-black d-flex flex-column text-center h-100 justify-content-center gap-4">
                <div>
                    <p className="m-0 fs-5">Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.</p>
                    <p className="fs-5 fw-bold">Wassalamu’alaikum Wr. Wb.</p>
                </div>

                <p className="my-1 fs-4 lead">Kami yang berbahagia <br/><p className='fs-1 fw-bold'>Yusni & Anggara</p> </p>
                
                <div className="text-center">
                    <p className="fw-bold m-0">Made with Love</p>
                    <p className="fw-bold">Digition</p>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <p className="fw-bold m-0">Background song by:</p>
                        <i className="text-black" href="https://www.youtube.com/watch?v=Rh9bBSWqCTk">Takkan Terganti - Kahitna | Piano Cover & Tutorial by Andre Panggabean</i>
                    </div>
                    
                    <div className="col-md-6">
                        <p className="fw-bold m-0">Icons by:</p>
                        <i className="text-black" href="https://react-icons.github.io/react-icons/">React Icons</i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
