
import { Link } from 'react-router-dom';



const LingoBingo = () => {
    return (
        <div>
            <div className='fixed top-0 bg-sky-200 w-full py-3 text-2xl text-center'><Link to={'/'}><button className='btn bg-sky-600 text-white dark:text-white'>Back to Home</button></Link></div>
            <div className='pt-20'>
                <div className="p-6 max-w-3xl mx-auto  shadow-md ">
                    <h2 className="text-3xl font-bold text-center pt-6 pb-10 ">Lingo Bingo</h2>
                    {/* Main Technology Used */}
                    <h3 className="text-lg ">
                        <span className="font-semibold">Main technology used: </span> HTML, Tailwind CSS, JavaScript, React
                    </h3>

                    {/* Project Description */}
                    <h3 className="text-lg mt-2">
                        <span className="font-semibold">Description: </span> A React-based website designed for Japanese Vocabulary Learning .
                    </h3>

                    {/* Live Project Link */}
                    <a
                        className=" hover:underline block mt-2"
                        href="https://stellar-muffin-9a927b.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold ">Live project link: </span><span className="text-blue-500 ">stellar-muffin-9a927b.netlify.app</span>
                    </a>

                    {/* GitHub Repository Link */}
                    <a
                        className="hover:underline block mt-2"
                        href="https://github.com/MHShiqder/LingoBingo-A-japanese-language-learning-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold ">GitHub repository link: </span>
                        <span className="text-blue-500 ">LingoBingo-A-japanese-language-learning-website</span>
                    </a>
                </div>


                <div>
                    <div className="p-6 max-w-3xl mx-auto shadow-md">
                        {/* Challenges Faced */}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Challenges Faced While Developing the Project</h3>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">1️⃣ Language Complexity:</span> Handling kanji, hiragana, and katakana effectively for beginners.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">2️⃣ Audio Pronunciations:</span> Implementing clear and accurate native speaker audio clips.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">3️⃣ Interactive Learning:</span> Creating engaging quizzes, flashcards, and practice exercises.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">4️⃣ Progress Tracking:</span> Allowing users to monitor learning progress and revisit weak areas.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">5️⃣ Firebase Authentication:</span> Ensuring smooth and secure login/signup for users.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">6️⃣ Performance Optimization:</span> Managing large sets of vocabulary efficiently without lag.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">7️⃣ UI/UX Simplicity:</span> Making the interface intuitive for all age groups while keeping it visually appealing.</p>

                        {/* Potential Improvements */}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">Potential Improvements & Future Plans</h3>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">1️⃣ AI-Powered Learning:</span> Personalize lessons based on user strengths and weaknesses.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">2️⃣ Speech Recognition:</span> Allow users to practice pronunciation and get instant feedback.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">3️⃣ Gamification Elements:</span> Introduce points, badges, and leaderboards for motivation.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">4️⃣ Community Features:</span> Enable users to interact, discuss, and challenge friends.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">5️⃣ Mobile App Version:</span> Improve accessibility with a React Native-based mobile app.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">6️⃣ Offline Mode:</span> Allow users to access lessons and flashcards without an internet connection.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">7️⃣ Cultural Insights:</span> Add explanations of Japanese traditions and etiquette alongside language lessons.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">8️⃣ Integration with JLPT Levels:</span> Structure lessons according to JLPT (N5-N1) difficulty levels.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">9️⃣ Daily Learning Streaks:</span> Encourage consistent practice with reminders and rewards.</p>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">🔟 AI Chatbot:</span> Let users practice conversations with an AI-powered virtual Japanese tutor.</p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default LingoBingo;