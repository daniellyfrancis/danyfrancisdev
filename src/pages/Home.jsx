import React from 'react';
import avatar from '../assets/avatar.png'
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
        <div className={styles.containerHome}r>
            <div className={styles.text}>
                <h1>Hi, I am Dany Francis, <br />
                    React Developer
                </h1>
                <p>
                    Sed at sagittis ipsum, vel laoreet arcu. Nam eleifend semper fermentum. <br /> 
                    Curabitur vitae arcu ac elit pellentesque pretium. Phasellus sem nunc, <br />
                    bibendum commodo iaculis a, condimentum id lorem. Integer vitae ornare odio. <br/>
                </p>
                <button>Download Resume</button>
            </div>
            <div>
                <img src={avatar} alt="avatar image" className={styles.profilePhoto} />
            </div>
        </div>
        </>
    )
};

export default Home;