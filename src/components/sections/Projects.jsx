import { RevealOnScroll } from '../RevealOnScroll' 

export const Projects = () => {
    
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center">
                Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Expense App</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                        <li>
                            Mobile app for tracking personal expenses with create, read, and update functions
                        </li>
                        <li>
                            Built the app's user interface, database, and authentication
                        </li>
                        <li>
                            Ongoing development includes analytics dashboard for expense trends
                        </li>
                    </ul>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Flutter", "Supabase"].map((tech, key) => (
                            <span key={key} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20
                                    hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all
                                "> 
                                {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-300 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">KaraWell</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                            <li>
                                Mobile app integrating open-source ChatPsychiatrist LLM for user-bot mental health interactions
                            </li>
                            <li>
                                Designed the user interface and gamification features (badges, streaks) to enhance user engagement
                            </li>
                            <li>
                                Built the app's database, authentication, chat session flow
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Flutter", "Supabase"].map((tech, key) => (
                            <span key={key} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20
                                    hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all
                                "> 
                                {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-300 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">CMISID Project Management System</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                            <li>
                                Manage and monitor existing projects of an organization digitally
                            </li>
                            <li>
                                Implemented role-based access control for admin, project managers, and developers
                            </li>
                            <li>
                                Developed an activity log for tracking project updates and modifications
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Laravel", "Bootstrap 5" ,"MySQL"].map((tech, key) => (
                            <span key={key} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20
                                    hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all
                                "> 
                                {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-300 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}