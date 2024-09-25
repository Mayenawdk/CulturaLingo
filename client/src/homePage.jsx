import React from 'react';
import ProfileBlock from './components/profile-block/ProfileBlock';
import Header from './components/header/header.jsx';
import DropDown from './components/dropDown/dropDown';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.leftColumn}>
                <ProfileBlock />
            </div>
            <div style={styles.centerColumn}>
                <h2>Main Content</h2>                   
                <p>Welcome to CulturaLingo! Here you can explore and learn about different cultures.</p>
                 <DropDown />
                {/* Add more components or content here */}
            </div>
            <div style={styles.rightColumn}>
                <h2>Additional Resources</h2>
                <ul style={styles.list}>
                    <li><a href="https://translate.google.com/;%29?sl=auto&tl=en&op=translate">Translator</a></li>
                    <li><a href="https://www.cia.gov/the-world-factbook/field/religions/">Faiths and Spiritual Practices</a></li>
                    <li><a href="https://www.beautystandards.org/">Social Norms and Beauty Standards</a></li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        gap: '20px',
        backgroundColor: '#f0f4f8',
    },
    leftColumn: {
        flex: '1',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    centerColumn: {
        flex: '2',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    rightColumn: {
        flex: '1',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    list: {
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)', // Adjust the number based on your items
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        textAlign: 'center', // Center text inside li
        padding: '10px', // Optional: Add some padding
    },
};

export default HomePage;
