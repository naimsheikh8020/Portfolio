
import { Link } from 'react-router-dom';



const Visa = () => {
    return (
        <div>
            <div className='fixed top-0 bg-sky-200 w-full py-3 text-2xl text-center'><Link to={'/'}><button className='btn bg-sky-600 text-white dark:text-white'>Back to Home</button></Link></div>
            <div className='pt-20'>
                <div className="p-6 max-w-3xl mx-auto  shadow-md ">
                    <h2 className="text-3xl font-bold text-center pt-6 pb-10 ">Visa Navigator</h2>
                    {/* Main Technology Used */}
                    <h3 className="text-lg ">
                        <span className="font-semibold">Main technology used: </span> HTML, Tailwind CSS, JavaScript, React
                    </h3>

                    {/* Project Description */}
                    <h3 className="text-lg mt-2">
                        <span className="font-semibold">Description: </span> A React-based website designed for Visa Navigator Portal to simplify the process of checking visa requirements,applying for visas online, and tracking applications
                    </h3>

                    {/* Live Project Link */}
                    <a
                        className=" hover:underline block mt-2"
                        href="https://jovial-parfait-df020d.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold ">Live project link: </span><span className="text-blue-500 ">jovial-parfait-df020d.netlify.app</span>
                    </a>

                    {/* GitHub Repository Link */}
                    <a
                        className="hover:underline block mt-2"
                        href="https://github.com/MHShiqder/Visa-Navigator-Client-Side"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold ">GitHub repository link: </span>
                        <span className="text-blue-500 ">Visa-Navigator-Client-Side</span>
                    </a>
                </div>


                <div>
                    <div className="p-6 max-w-3xl mx-auto shadow-md">
                        {/* Challenges Faced */}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Challenges Faced While Developing the Project</h3>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">1️⃣ Complex Visa Rules:</span> Handling diverse and ever-changing visa regulations across different countries.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">2️⃣ Data Accuracy & Updates:</span> Ensuring real-time updates for visa requirements and policies.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">3️⃣ API Integration:</span> Fetching embassy details, processing times, and application procedures dynamically.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">4️⃣ Multi-Step Forms:</span> Designing a seamless user experience for visa application eligibility checks.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">5️⃣ Authentication & Security:</span> Protecting user data and preventing unauthorized access.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">6️⃣ Multi-Language Support:</span> Ensuring accessibility for users from different regions.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">7️⃣ Performance Optimization:</span> Managing large datasets efficiently without slowing down the site.</p>

                        {/* Potential Improvements */}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">Potential Improvements & Future Plans</h3>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">1️⃣ AI Chat Assistant:</span> Guide users with visa-related queries and document preparation.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">2️⃣ Real-Time Visa Tracking:</span> Allow users to check their application status instantly.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">3️⃣ Visa Fee Calculator:</span> Provide estimated costs, including embassy fees and service charges.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">4️⃣ Document Verification:</span> AI-powered scanning for document validation and missing information.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">5️⃣ Mobile App:</span> Enhance accessibility with a user-friendly mobile version.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">6️⃣ User Reviews & Experiences:</span> Let applicants share visa success stories and tips.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">7️⃣ Interactive Eligibility Checker:</span> A step-by-step process to determine visa eligibility.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">8️⃣ Notifications & Alerts:</span> Automatic reminders for visa expiry and application deadlines.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">9️⃣ Flight & Hotel Assistance:</span> Provide travel recommendations based on visa type.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">🔟 Country-Specific Guides:</span> Offer local embassy contacts, travel regulations, and safety tips.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Visa;