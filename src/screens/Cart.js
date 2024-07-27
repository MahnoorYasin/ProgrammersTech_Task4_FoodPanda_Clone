import React from 'react';
import trash from '../screens/trash.svg'; // Adjust the path accordingly
import { useDispatchCart, useCart } from '../components/ContextReducer';

const Cart = () => {
    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        );
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("UserEmail");
        
        // Check if userEmail exists
        if (!userEmail) {
            console.error("User email is not set");
            return;
        }
    
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data, // Ensure `data` is correctly defined and not empty
                email: userEmail,
                order_date: new Date().toDateString() // Add the current date
            })
        });
    
        console.log("Order response:", response);
    
        if (response.status === 200) {
            dispatch({ type: "DROP" });
        } else {
            const responseData = await response.json();
            console.error("Failed to process the order:", responseData.error || response.statusText);
        }
    };
    
    

    let totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col' style={{ color: 'white' }}>#</th>
                            <th scope='col' style={{ color: 'white' }}>Name</th>
                            <th scope='col' style={{ color: 'white' }}>Quantity</th>
                            <th scope='col' style={{ color: 'white' }}>Option</th>
                            <th scope='col' style={{ color: 'white' }}>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr key={index}>
                                <th scope='row' style={{ color: 'white' }}>{index + 1}</th>
                                <td style={{ color: 'white' }}>{food.name}</td>
                                <td style={{ color: 'white' }}>{food.qty}</td>
                                <td style={{ color: 'white' }}>{food.size}</td>
                                <td style={{ color: 'white' }}>{food.price}</td>
                                <td>
                                    <button type='button' className='btn p-0'><img src={trash} alt='delete'
                                        onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <h1 className='fs-2'>Total price: {totalPrice}/-</h1>
                </div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
