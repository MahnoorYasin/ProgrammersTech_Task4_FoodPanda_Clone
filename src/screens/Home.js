import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState("");

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            response = await response.json();
            setFoodItem(response[0]);
            setFoodCat(response[1]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner" id='carosuel'>
                    <div className="carousel-caption" style={{ zIndex: 15, color: '#fff' }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>

                    <div className="carousel-item active">
                        <img src="/images/pic1.png" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: 'cover', height: '100vh' }} alt="..." />
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



            <div className='container'>
                {foodCat.length > 0 ? foodCat.map((category) => (
                    <div key={category.id} className='row mb-3'>
                        <div className='fs-3 m-3'>{category.CategoryName}</div>
                        <hr />
                        {foodItem.length > 0 ? foodItem.filter(item => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())).map(filteredItem => (
                            <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                                <Card foodItem={filteredItem} options={filteredItem.options[0]} />
                            </div>
                        )) : <div>No such data</div>}
                    </div>
                )) : "Loading..."}
            </div>



            <Footer />
        </div>
    );
};

export default Home;
