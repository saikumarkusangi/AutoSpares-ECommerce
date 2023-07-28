import { Helmet } from "react-helmet"


const TermsAndConditions = () => {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Terms & Conditions | Sri Raghava Auto Spares</title>
            </Helmet>
        <div className="py-4 px-4">
            <h1 className="text-2xl">Terms & Conditions</h1>

            <p className="mt-2">Welcome to Sri Raghava Auto Spares. By using our website, you agree to comply with the following Terms and Conditions. Please read them carefully before making any purchases or interacting with our website.</p>
            <h3 className="text-xl mt-2">Account Creation:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">You may need to create an account to place orders and access certain features on our website.</li>
            <li className="list-decimal">You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ol>
        
            
            <h3 className="text-xl mt-2">Prohibited Activities:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">You may not use our website for any unlawful, abusive, or harmful purposes.</li>
            <li className="list-decimal">You may not attempt to gain unauthorized access to our systems or other users' accounts.</li>
            </ol>
            
            <h3 className="text-xl mt-2">Intellectual Property:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">All content and intellectual property on this website belong to Sri Raghava Auto Spares.</li>
            <li className="list-decimal">You may not use, copy, or distribute our content without our explicit permission..</li>
            </ol>
            <h3 className="text-xl mt-2">Disclaimer:</h3>
            <ol className="ml-4 mt-2">
            <li className="list-decimal">We strive to provide accurate and up-to-date product information; however, we do not guarantee the accuracy of all details.</li>
            <li className="list-decimal">Product images on our website may vary slightly from the actual items.</li>
            </ol>
            <h3 className="text-xl mt-2">Limitation of Liability:</h3>
            <li>Sri Raghava Auto Spares will not be liable for any direct, indirect, or consequential damages arising from your use of our website.</li>
            
            <h3 className="text-xl mt-2">Applicable Law:</h3>
            <li>These Terms of Service are governed by the laws of India.</li>
            
            <h3 className="text-xl mt-2">Changes to the Terms:</h3>
            If you have any questions or concerns about our Terms of Service, please contact us at [Your contact email/phone number].
            
        </div>
        </>
    )
}

export default TermsAndConditions