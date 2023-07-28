import { Helmet } from "react-helmet"


const PrivacyPolicy = () => {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Policy | Sri Raghava Auto Spares</title>
            </Helmet>
        <div className="py-4 px-4">
            <h1 className="text-2xl"> Privacy Policy</h1>

            <p className="mt-2">At Sri Raghava Auto Spares, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.</p>
            <h3 className="text-xl mt-2">Information We Collect:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">Personal information (e.g., name, email address, phone number) provided during account creation or checkout.</li>
            <li className="list-decimal">Shipping and billing address for order processing.</li>
            <li className="list-decimal">Payment information (e.g., credit card details) for secure transaction processing.</li>
            <li className="list-decimal">Usage data, such as website interactions and browsing activities.</li>
            </ol>
        
            
            <h3 className="text-xl mt-2">How We Use Your Information:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">To process and fulfill your orders for auto spare parts, engine oils, and bike tires.</li>
            <li className="list-decimal">To communicate with you regarding your orders, promotions, and updates.</li>
            <li className="list-decimal">To improve our website and services based on your feedback and preferences.</li>
            <li className="list-decimal">To send you relevant marketing materials, if you have opted-in to receive them.</li>
            </ol>
            
            <h3 className="text-xl mt-2">Data Protection:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</li>
            <li className="list-decimal">We do not sell or share your personal information with third parties without your consent, except for order fulfillment purposes.</li>
            </ol>
            <h3 className="text-xl mt-2">Cookies and Tracking Technologies:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">We use cookies and similar technologies to enhance your browsing experience and personalize content.</li>
            <li className="list-decimal">You can modify your browser settings to manage cookie preferences.</li>
            </ol>
            <h3 className="text-xl mt-2">Your Consent:</h3>
            <li>By using our website, you consent to the terms of this Privacy Policy.</li>
            
            <h3 className="text-xl mt-2">Changes to the Policy:</h3>
            <li>We may update this Privacy Policy from time to time. Please review the latest version on our website.</li>
            
            <h3 className="text-xl mt-2">Contact Information:</h3>
            If you have any questions or concerns about our Privacy Policy, please contact us at [Your contact email/phone number].
            
        </div>
        </>
    )
}

export default PrivacyPolicy