import React from 'react';
import ProfileBlock from './components/profile-block/ProfileBlock';
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
                    <li><a href="#resource1">Resource 1</a></li>
                    <li><a href="#resource2">Resource 2</a></li>
                    <li><a href="#resource3">Resource 3</a></li>
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
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        marginBottom: '10px',
    },
};

export default HomePage;
