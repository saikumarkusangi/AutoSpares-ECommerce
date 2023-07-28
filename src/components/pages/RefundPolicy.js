import { Helmet } from "react-helmet"


const RefundPolicy = () => {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Refund Policy | Sri Raghava Auto Spares</title>
            </Helmet>
        <div className="py-4 px-4">
            <h1 className="text-2xl">Refund Policy</h1>

            <p className="mt-2">At Sri Raghava Auto Spares, we want to ensure your complete satisfaction with your purchases. If you are not satisfied with your order, we offer a straightforward refund policy outlined below:</p>
            <h3 className="text-xl mt-2 mb-2">1. Returns and Refunds:</h3>
           
               
                <b>1.1.</b> You have [X] days from the date of delivery to initiate a return and request a refund.<br/>
                <b>1.2.</b> To be eligible for a refund, the item must be unused, in its original condition, and in the original packaging.<br/>
                <b>1.3.</b> Certain products, such as engine oils, must be unopened and in their original sealed packaging to qualify for a refund.<br/>

                <h3 className="text-xl mt-2 mb-2"> 2. Return Process:</h3>
                <b>2.1.</b> To request a return and refund, please contact our customer support team at [Your contact email/phone number].<br/>
                <b>2.2.</b> Our team will guide you through the return process and provide you with a return authorization (RA) number, if applicable.<br/>
                <b>2.3.</b> Please ensure to include the RA number on the package before returning the item.

                <h3 className="text-xl mt-2 mb-2"> 3. Refund Processing:</h3>
                <b>3.1.</b> Once we receive the returned item and verify its condition, we will process your refund.<br/>
                <b>3.2.</b> Refunds will be issued to the original payment method used during the purchase.<br/>
                <b>3.3.</b> Please allow [X] business days for the refund to appear in your account.<br/>

                <h3 className="text-xl mt-2 mb-2">    4. Non-Refundable Items:</h3>
                <b>4.1.</b> Certain items, such as perishable goods, used products, and items without the original packaging, are not eligible for a refund.<br/>
                <b>4.2.</b> We reserve the right to refuse refunds on items that do not meet the return criteria.<br/>

                <h3 className="text-xl mt-2 mb-2"> 5. Return Shipping Costs:</h3>
                <b>5.1.</b> Customers are responsible for the return shipping costs, except in cases where the item received was defective or damaged.<br/>
                <b>5.2.</b> If the return is due to our error (e.g., wrong item shipped), we will cover the return shipping costs.<br/>

                <h3 className="text-xl mt-2 mb-2"> 6. Damaged or Defective Items:</h3>
                <b>6.1.</b> If you receive a damaged or defective item, please notify us within [X] days of delivery.<br/>
                <b>6.2.</b> We may request photos or videos to assess the damage or defect before proceeding with a refund or replacement.<br/>

                <h3 className="text-xl mt-2 mb-2">  7. Cancellations:</h3>
                <b>7.1.</b> If you wish to cancel your order before it is shipped, please contact us as soon as possible.<br/>
                <b>7.2.</b> If the order has already been shipped, you may need to follow the regular return process for a refund.<br/>

                <h3 className="text-xl mt-2 mb-2">Contact Information:</h3>
                If you have any questions or concerns about our Refund Policy, please contact us at [Your contact email/phone number].

        </div>
        </>
    )
}

export default RefundPolicy