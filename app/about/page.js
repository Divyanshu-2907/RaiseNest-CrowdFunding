// import React from 'react';
// import Image from 'next/image';


// const About = () => {
//     return (
//         <div className="container mx-auto px-8 md:px-4 py-8">
//             <h1 className="text-3xl font-semibold mb-4">About Get Me Funding</h1>
//             <p className="text-lg mb-6">
//             **RaiseNest** is a crowdfunding platform designed to help students secure funding for their educational projects, startups, and innovations. Whether you need support for tuition, research, or a groundbreaking idea.
//             </p>

//             <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 <div className="flex items-center mb-6">
//                     <Image className="w-20 h-20 rounded-full mr-4" src="/group.gif" width={88} height={88} alt="Fans Want to Collaborate" />
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Students Want to Collaborate</h3>
//                         <p>Students are enthusiastic about collaborating with you on your projects.</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-6">
//                     <Image className="w-20 h-20 rounded-full mr-4" src="/coin.gif" width={88} height={88} alt="Support Through Chai" />
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Support Through Funds</h3>
//                         <p>RaiseNest connects you with donors, investors, and mentors who believe in your potential 🚀.</p>
//                     </div>
//                 </div>
//                 {/* Add more steps as needed */}
//             </div>

//             <h2 className="text-2xl font-semibold mb-4">Benefits for Students</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Direct financial support</li>
//                 <li className="mb-2">Engage with people on a more personal level</li>
//                 <li className="mb-2">Access to a platform tailored for creative projects</li>
//                 {/* Add more benefits */}
//             </ul>

//             <h2 className="text-2xl font-semibold mb-4">Benefits for Students</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Directly contribute in projects</li>
//                 <li className="mb-2">Get supports from innovators</li>
//                 <li className="mb-2">Be part of the creative process and connect with innovators</li>
//                 {/* Add more benefits */}
//             </ul>

//             {/* Additional sections */}
//             <h2 className="text-2xl font-semibold mb-4">Benefits of Collaboration</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Unlock new opportunities through collaboration with fellow students</li>
//                 <li className="mb-2">Expand your network and reach a wider audience</li>
//                 <li className="mb-2">Combine skills and resources to create innovative projects</li>
//                 {/* Add more benefits */}
//             </ul>

//             <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
//                 <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
//                 <li className="mb-2">Participate in discussions and events centered around your interests</li>
//                 {/* Add more benefits */}
//             </ul>

//             <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
//                 <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
//                 <li className="mb-2">Stay updated on industry trends and best practices</li>
//                 {/* Add more benefits */}
//             </ul>

//             <h2 className="text-2xl font-semibold mb-4">Recognition and Exposure</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
//                 <li className="mb-2">Feature in promotional materials and campaigns</li>
//                 <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>
//                 {/* Add more benefits */}
//             </ul>

//             <h2 className="text-2xl font-semibold mb-4">Supportive Community</h2>
//             <ul className="list-disc pl-6 mb-6">
//                 <li className="mb-2">Join a community that values creativity, diversity, and inclusivity</li>
//                 <li className="mb-2">Find encouragement and inspiration from fellow members</li>
//                 <li className="mb-2">Collaborate on projects and share resources for mutual growth</li>
//                 {/* Add more benefits */}
//             </ul>

//         </div>
//     );
// }

// export default About;

// export const metadata = {
//     title: "About - Get Me Fund",
//   }
   

import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 py-12 text-white bg-gray-900">
            <h1 className="text-4xl font-bold mb-6 text-center text-gradient">About RaiseNest</h1>
            <p className="text-lg mb-10 text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                RaiseNest is a crowdfunding platform designed to help students secure funding for their educational projects, startups, and innovations. Whether you need support for tuition, research, or a groundbreaking idea, we help bring your vision to life.
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                    { src: "/group.gif", title: "Students Want to Collaborate", text: "Students are eager to collaborate and support your projects." },
                    { src: "/coin.gif", title: "Support Through Funds", text: "RaiseNest connects you with donors, investors, and mentors who believe in your potential 🚀." }
                ].map((item, index) => (
                    <div key={index} className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <Image className="rounded-full mr-4" src={item.src} width={88} height={88} alt={item.title} />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Joining RaiseNest</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                    {[
                        "Direct financial support for your projects",
                        "Engage with a supportive community",
                        "Expand your network and connect with mentors",
                        "Access educational resources and guidance",
                        "Showcase your work to a global audience",
                        "Receive recognition and build credibility"
                    ].map((benefit, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <p className="flex items-center gap-3">
                                <span className="text-green-400 text-xl">✔</span> {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;

export const metadata = {
    title: "About - RaiseNest",
};