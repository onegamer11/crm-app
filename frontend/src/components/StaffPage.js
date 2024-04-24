// StaffPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StaffPage.css';

const StaffPage = () => {
    const [biddings, setBiddings] = useState([]);
    const [products, setProducts] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Fetch bidding information from backend
        axios.get('http://localhost:5000/api/biddings')
            .then(response => {
                setBiddings(response.data);
            })
            .catch(error => {
                console.error('Error fetching biddings:', error);
            });

        // Fetch products from backend
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

        // Fetch contracts from backend
        axios.get('http://localhost:5000/api/contracts')
            .then(response => {
                setContracts(response.data);
            })
            .catch(error => {
                console.error('Error fetching contracts:', error);
            });

        // Fetch logged in user's email
        axios.get('http://localhost:5000/api/user')
            .then(response => {
                setEmail(response.data.email);
            })
            .catch(error => {
                console.error('Error fetching user email:', error);
            });
    }, []);

    return (
        <div className="staff-page">
            <div className="banner">
                <h2>uhhh! You are just a Staff ! You don't have any superpower</h2>
            </div>
            <div className="login-info">
                <p>Email: {email}</p>
            </div>
            <div className="biddings-section">
                <h3>Biddings</h3>
                <ul>
                    {biddings.map(bidding => (
                        <li key={bidding.id}>{bidding.title}</li>
                    ))}
                </ul>
            </div>
            <div className="products-section">
                <h3>Products</h3>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
            <div className="contracts-section">
                <h3>Contracts</h3>
                <ul>
                    {contracts.map(contract => (
                        <li key={contract.id}>{contract.details}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StaffPage;
