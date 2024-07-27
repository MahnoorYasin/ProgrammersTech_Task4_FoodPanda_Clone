import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { useSearchParams } from 'react-router-dom';

const Card = (props) => {
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let data = useCart();
    const priceRef = useRef();
    const [qty, setQty] = useState(1)
    const [sie, setSie] = useState("")

    const cardImgStyle = {
        width: "100%",
        height: "120px", // Adjust the height as needed
        objectFit: "cover" // Ensures the image covers the entire area while maintaining aspect ratio
    };

    const handleAddtoCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;

                break;
            }
        }

        if (food !== []) {
            if (food.sie === sie) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.sie !== sie) {

                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, sie: sie })
                 return
    
            }
            return
        }

        
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, sie: sie })


    };


    let finalPrice = qty * parseInt(options[sie]);

    useEffect(() => {
        setSie(priceRef.current.value)
    }, [])

    return (
        <div className="card-container">
            <div className="card mt-4" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt={props.foodItem.name} style={cardImgStyle} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>

                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSie(e.target.value)}>
                            {priceOptions.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>

                        <div className='d-inline h-100 fs-5'>{finalPrice}/-</div>
                    </div>
                    <button className="btn btn-success justify-center w-50 mt-2" onClick={handleAddtoCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
