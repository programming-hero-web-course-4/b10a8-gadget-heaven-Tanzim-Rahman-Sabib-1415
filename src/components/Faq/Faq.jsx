import React from 'react';
import { Helmet } from 'react-helmet-async';

const Faq = () => {
    return (
        <div>
          <Helmet><title>FAQ</title></Helmet>
            <div className='bg-primary-1  text-center py-8 flex flex-col text-white'>
                <span className='font-bold text-[32px] mb-4'>Frequently Asked Questions</span>
                <span>Find answers to the most common questions about our store and services.</span>
            </div>

            <div className="max-w-4xl mx-auto p-6">
      

      
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-gray-800">
          What payment methods do you accept?
        </div>
        <div className="collapse-content p-4">
          <p>We accept a variety of payment methods for your convenience:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Credit/Debit Cards:</strong> Visa, MasterCard, American Express, Discover.</li>
            <li><strong>PayPal:</strong> Secure payments through PayPal.</li>
            <li><strong>Apple Pay:</strong> Easy payments with Apple Pay on compatible devices.</li>
            <li><strong>Google Pay:</strong> Pay with Google Pay from your mobile device.</li>
            <li><strong>Bank Transfer:</strong> For large orders, bank transfers are accepted—please contact us for details.</li>
          </ul>
          <p className="mt-2 text-gray-700">If you experience any payment issues, please contact our support team for assistance.</p>
        </div>
      </div>

      
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-gray-800">
          How can I track my order?
        </div>
        <div className="collapse-content p-4">
          <p>Once your order ships, you'll receive a confirmation email with a tracking number. Here's how to track your order:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Tracking Email:</strong> Look for the email with your tracking number.</li>
            <li><strong>Order Tracking Page:</strong> Visit our “Order Tracking” page and enter the tracking number.</li>
            <li><strong>Carrier’s Website:</strong> Use the carrier's website (e.g., UPS, FedEx) for real-time tracking.</li>
          </ul>
          <p className="mt-2 text-gray-700">If you don’t receive your tracking details, please reach out to our support team.</p>
        </div>
      </div>

      
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-gray-800">
          Do you offer international shipping?
        </div>
        <div className="collapse-content p-4">
          <p>Yes, we ship internationally to over 100 countries. Here’s what you need to know:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Shipping Rates:</strong> Rates are calculated based on your location and order weight.</li>
            <li><strong>Delivery Times:</strong> Typically 7–21 business days, depending on the destination.</li>
            <li><strong>Customs & Duties:</strong> International shipments may be subject to customs fees, taxes, and import duties. These are the customer's responsibility.</li>
            <li><strong>Shipping Partners:</strong> We use carriers like DHL, FedEx, and UPS for international shipping.</li>
          </ul>
          <p className="mt-2 text-gray-700">Contact us for more information on international shipping or if you have trouble placing an order.</p>
        </div>
      </div>

      
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-gray-800">
          What is your return policy?
        </div>
        <div className="collapse-content p-4">
          <p>We want you to be happy with your purchase. If you're not satisfied, here's how our return policy works:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Eligibility:</strong> Returns are accepted within 30 days, as long as the product is in new, unused condition with original packaging.</li>
            <li><strong>Return Process:</strong> Go to “My Orders” on our website, select the item(s) you want to return, and follow the instructions to generate a return label.</li>
            <li><strong>Return Shipping:</strong> You’ll be responsible for return shipping costs unless the item is defective or damaged.</li>
          </ul>
          <p className="mt-2 text-gray-700">If your item is defective or damaged, we will cover return shipping and provide a full refund or replacement.</p>
        </div>
      </div>

     
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-gray-800">
          How do I contact customer support?
        </div>
        <div className="collapse-content p-4">
          <p>If you have any questions or need assistance, here’s how to contact us:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Email:</strong> Send us an email at <a href="" className="text-blue-600">support@gadgetheaven.com</a>.</li>
            <li><strong>Phone:</strong> Call us at 880-172-000-2221 (Mon–Fri, 9 AM – 6 PM).</li>
            <li><strong>Live Chat:</strong> Use the chat feature on our website for real-time support.</li>
            <li><strong>Help Center:</strong> Visit our Help Center for FAQs and troubleshooting guides.</li>
          </ul>
          <p className="mt-2 text-gray-700">Our team responds within 24 hours on business days.</p>
        </div>
      </div>

      
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-gray-800">
          Do you offer product warranties?
        </div>
        <div className="collapse-content p-4">
          <p>Yes, many of our products come with a manufacturer warranty. Here's what you need to know:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Warranty Coverage:</strong> Most electronics come with a 1-year manufacturer warranty against defects in material or workmanship.</li>
            <li><strong>Extended Warranty:</strong> Some products offer extended warranty options at checkout for additional coverage.</li>
            <li><strong>How to Claim:</strong> Contact customer support if you need to claim warranty service. You will need your order number and a description of the issue.</li>
            <li><strong>Exclusions:</strong> Warranty coverage does not include accidental damage, misuse, or wear and tear.</li>
          </ul>
          <p className="mt-2 text-gray-700">For more details, refer to the product page or contact support for specific warranty terms.</p>
        </div>
      </div>

      
      <div className="collapse collapse-arrow bg-gray-100 shadow-md rounded-lg mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-gray-800">
          How can I change or cancel my order?
        </div>
        <div className="collapse-content p-4">
          <p>If you need to change or cancel your order, here’s how to do it:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Changes:</strong> You can change your shipping details, payment method, or even product options if the order hasn’t been processed yet.</li>
            <li><strong>Canceling Orders:</strong> To cancel, contact us within 1–2 hours of placing your order. Once it has been processed or shipped, we can’t cancel it.</li>
            <li><strong>Post-shipping:</strong> If the order has already shipped, you will need to go through the return process once you receive it.</li>
          </ul>
          <p className="mt-2 text-gray-700">If you have any questions, feel free to reach out to our support team.</p>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default Faq;