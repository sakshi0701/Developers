import React from 'react'
import './services.css'
import two from './Images/5.webp'
import one from './Images/6.webp'
import three from './Images/4.png'

const Services = () => {
    return (
        <>
            <div className="service-container">
                <div className="service-card">
                    <div className="imgBox">
                        <img src={one} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Returns &amp; Refunds</h3>
                        <p>Want to return or exchange items?Print return mailing labels or any pictures during delivering.Note that you contact us within 1 week.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="imgBox">
                    <img src={two} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Account Settings</h3>
                        <p>Change your email address or password in case you forget or for security purpose.Update login information.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="imgBox">
                    <img src={three} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Payment Settings</h3>
                        <p>Add or edit payment methods.Change expired debit or credit card.There is also an EMI service option.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
