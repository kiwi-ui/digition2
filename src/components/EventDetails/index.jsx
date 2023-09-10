import { useEffect, useState } from 'react';
import style from './style.module.css';

const EventDetails = () => {
    const [event, setEvent] = useState({
        days : null,
        hours: null,
        minutes:  null,
        seconds:  null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2029-05-01T00:00:00');

        setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({days, hours, minutes, seconds})

            if (timeDifference <= 0) {
                return (setIsEventOver((event) => !event));
            }
        }, 1000)
    }, [])
    
    return (
        <>
            { !isEventOver ? 
                <div className="row text-black g-3 text-center  justify-content-center">
                    <div className="col-4 col-lg-3 rounded-2">
                        <div className={`${style['card-details']}`}>
                            <p className={`fs-5 mb-0 fw-semibold`}>{ event.days }</p>
                            <p className="m-0">Hari</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3 rounded-2">
                        <div className={`${style['card-details']}`}>
                            <p className={`fs-5 mb-0 fw-semibold`}>{ event.hours }</p>
                            <p className="m-0">Jam</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3 rounded-2">
                        <div className={`${style['card-details']}`}>
                            <p className={`fs-5 mb-0 fw-semibold`}>{ event.minutes }</p>
                            <p className="m-0">Menit</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3 rounded-2">
                        <div className={`${style['card-details']} px-4`}>
                            <p className={`fs-5 mb-0 fw-semibold`}>{ event.seconds }</p>
                            <p className="m-0">Detik</p>
                        </div>
                    </div>
                </div>
                :
                <div><p>Acara Sudah Selesai</p></div>
            }
        </>
    )
}

export default EventDetails
