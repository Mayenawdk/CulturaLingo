import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>CulturaLingo</h1>
            <div style={styles.buttonGroup}>
                <Link to= "/signup" style={styles.button}>Sign-Up</Link>
                <Link to= "/login" style={styles.button}>Login</Link>
                <button style={styles.button}>Logout</button>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#cdc1ff',
        padding: '10px 20px',
        borderRadius: '5px',
    },
    logo: {
        fontSize: '24px',
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonGroup: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        backgroundColor: '#fff',
        color: '#000',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    }
};

export default Header;
