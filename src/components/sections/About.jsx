import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
    const langSkills = ["Dart", "PHP", "JavaScript", "Python", "SQL","MySQL"];
    const frameworkSkills = ["Flutter", "Laravel", "React Native", "Supabase", "Github"]
    
    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Developer with a passion of turning complex ideas into 
                    seamless mobile and web solutions through purposeful design and efficient code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Languages and Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {langSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20
                                    hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition
                                "> 
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frameworks and Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {frameworkSkills.map((tech, key) => (
                                <span key={key} className="bg-green-400/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-400/20
                                    hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition
                                "> 
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. in Computer Science</strong> - Xavier University Ateneo de Cagayan
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Software Engineering, Applications Development...
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="text-lg font-bold ">Software Developer Intern</h4>
                            <ul className="text-sm list-disc list-inside text-gray-300 space-y-2 italic">
                                <li>
                                    City Management Information Systems and Innovation Department, City Hall of Cagayan de Oro
                                </li>
                                <li>
                                    June to December 2024 (486 hours)
                                </li>
                                <li>
                                    Designed and developed responsive websites for various city government offices
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
}