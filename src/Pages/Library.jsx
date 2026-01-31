
import { Link } from 'react-router-dom';



const Library = () => {
    return (
        <div>
            <div className='fixed top-0 bg-sky-200 w-full py-3 text-2xl text-center'><Link to="/"><button className='btn bg-sky-600 text-white dark:text-white'>Back to Home</button></Link></div>
            <div className='pt-20'>
                <div className="p-6 max-w-3xl mx-auto  shadow-md ">
                    <h2 className="text-3xl font-bold text-center pt-6 pb-10 ">E-Library</h2>
                    {/* Main Technology Used */}
                    <h3 className="text-lg ">
                        <span className="font-semibold">Main technology used: </span> HTML, Tailwind CSS, JavaScript, React
                    </h3>

                    {/* Project Description */}
                    <h3 className="text-lg mt-2">
                        <span className="font-semibold">Description: </span> A React-based website designed for an E-Library to simplify library tasks, such as adding books, showing available books, and tracking borrowed books.
                    </h3>

                    {/* Live Project Link */}
                    <a
                        className=" hover:underline block mt-2"
                        href="https://jolly-salmiakki-820fae.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold ">Live project link: </span><span className="text-blue-500 ">jolly-salmiakki-820fae.netlify.app</span>
                    </a>

                    {/* GitHub Repository Link */}
                    <a
                        className="hover:underline block mt-2"
                        href="https://github.com/MHShiqder/E-Library-an-online-library-management-system-client-side"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold ">GitHub repository link: </span> 
                        <span className="text-blue-500 ">E-Library-an-online-library-management-system-client-side</span> 
                    </a>
                </div>


                <div>
                    <div className="p-6 max-w-3xl mx-auto  shadow-md ">
                        {/* Challenges Faced */}
                        <h3 className="text-xl font-semibold   text-gray-800 dark:text-white mb-2"> Challenges Faced While Developing the Project</h3>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">1️⃣ Database Design:</span> Managing books, users, borrow/return records, and penalties efficiently.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">2️⃣ User Roles & Access Control:</span> Implementing admin, librarian, and member permissions securely.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">3️⃣ Search & Filtering:</span> Making book searches fast and accurate with sorting and filtering options.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">4️⃣ Borrowing & Return Logic:</span> Preventing duplicate bookings, tracking due dates, and handling penalties.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">5️⃣ Frontend UI/UX:</span> Ensuring a responsive, user-friendly design with smooth interactions.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">6️⃣ State Management:</span> Handling global state efficiently using React Context API or Redux.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">7️⃣ API Handling & Performance:</span> Optimizing CRUD operations, reducing redundant API calls, and ensuring security.</p>

                        {/* Potential Improvements */}
                        <h3 className="text-xl font-semibold   text-gray-800 dark:text-white mt-6 mb-2"> Potential Improvements & Future Plans</h3>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">1️⃣ Mobile App:</span> Develop a React Native app for better accessibility.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">2️⃣ AI Book Recommendations:</span> Suggest books based on user history and interests.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">3️⃣ Real-Time Notifications:</span> Email/SMS alerts for due dates, new arrivals, and announcements.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">4️⃣ E-Books & Digital Library:</span> Support for online reading and digital book borrowing.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">5️⃣ QR Code & RFID Integration:</span> Faster book borrowing and returning using QR/RFID scanning.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">6️⃣ AI Chatbot:</span> Assist users with book searches and queries.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">7️⃣ Admin Dashboard & Reports:</span> Analytics on most borrowed books, user activity, and overdue reports.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">8️⃣ Enhanced Security:</span> OAuth login, multi-factor authentication (MFA), and CAPTCHA for security.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">9️⃣ Cloud Backup & Storage:</span> Store book data and images securely in cloud storage.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">🔟 Community Features:</span> Allow users to review, rate books, and join discussions.</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Library;