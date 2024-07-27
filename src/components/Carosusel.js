import React from 'react'

export default function Carosusel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id='carosuel'>
                    <div className="carousel-caption" style={{ zIndex: 15, color: '#fff' }}> {/* Adjust color for visibility */}
                        <form className="d-flex">
                            <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> {/* Use btn-outline-light for visibility */}
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src="/images/pic1.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pic2.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pic3.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pic4.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pic5.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pic6.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pic7.png" className="d-block w-100" style={{ filter: "brightness(50%)",objectFit: 'cover', height: '100vh' }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
