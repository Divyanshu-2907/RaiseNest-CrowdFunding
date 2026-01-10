// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <div className="flex justify-center items-center flex-col gap-4 text-white h-[44vh]">
//       <div className="font-bold text-4xl flex justify-center items-center gap-1">
//         Fund Your Project <span><Image src="/money.gif" alt="" width={50} height={50} />
//         </span>
//       </div>
//       <p>A crowdfunding platform for creators. Get funded now Start Now!</p>
//       <div>
//       <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
//       <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
//       </div>
//     </div>
//     <div className="bg-white h-1 opacity-10 "></div>

//     <div className="text-white container mx-auto pb-32 pt-14">
//       <h2 className="text-3xl font-bold text-center mb-12">Get Your Project Funded</h2>
//       <div className="flex gap-5 justify-around">
//         <div className="item space-y-3 flex justify-center items-center flex-col">
//           <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/man.gif" alt="" />
//           <p className="font-bold">Follows want to help</p>
//           <p className="text-center">Your fans are avaiable for you to help you</p>
//         </div>
//         <div className="item space-y-3 flex justify-center items-center flex-col">
//           <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/coin.gif" alt="" />
//           <p className="font-bold">Follows want to help</p>
//           <p className="text-center">Your fans are avaiable for you to help you</p>
//         </div>
//         <div className="item space-y-3 flex justify-center items-center flex-col">
//           <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/group.gif" alt="" />
//           <p className="font-bold">Follows want to help</p>
//           <p className="text-center">Your fans are avaiable for you to help you</p>
//         </div>
//       </div>
      
//     </div>
//       <div className="bg-white h-1 opacity-10 "></div>

//       <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
//       <h2 className="text-3xl font-bold text-center mb-12">Learn more about us</h2>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_-WLn7EHC8?si=JZJQVBoy8odUbgPW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
//     </div>
//     </>
//   );
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="bg-gray-900 min-h-screen">
//       {/* Hero Section */}
//       <div className="flex justify-center items-center flex-col gap-6 text-white h-[50vh] text-center">
//         <h1 className="font-extrabold text-5xl flex justify-center items-center gap-2">
//           Fund Your Project 
//           <span>
//             <Image src="/money.gif" alt="Money Gif" width={50} height={50} />
//           </span>
//         </h1>
//         <p className="text-lg text-gray-300 max-w-lg">
//           A crowdfunding platform for students. Get funded now and start your journey!
//         </p>
//         <div className="flex gap-4">
//           <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:scale-105 transition-transform">
//             Start Here
//           </button>
//           <button className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:scale-105 transition-transform">
//             Read More
//           </button>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="bg-white h-1 opacity-10 mx-8"></div>

//       {/* Funding Features */}
//       <section className="text-white container mx-auto py-20 text-center">
//         <h2 className="text-4xl font-bold mb-10">Get Your Project Funded</h2>
//         <div className="flex gap-8 justify-center">
//           {[
//             { src: "/man.gif", title: "Supportive Community", text: "Your fans are here to back you." },
//             { src: "/coin.gif", title: "Easy Transactions", text: "Receive funds seamlessly." },
//             { src: "/group.gif", title: "Global Reach", text: "Connect with backers worldwide." },
//           ].map((item, index) => (
//             <div key={index} className="space-y-4 flex flex-col items-center max-w-xs">
//               <Image className="bg-gray-700 rounded-full p-3 shadow-lg" width={90} height={90} src={item.src} alt={item.title} />
//               <h3 className="font-bold text-xl">{item.title}</h3>
//               <p className="text-gray-300">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="bg-white h-1 opacity-10 mx-8"></div>

//       {/* Learn More Section */}
//       <section className="text-white container mx-auto py-20 flex flex-col items-center text-center">
//         <h2 className="text-4xl font-bold mb-10">Learn More About Us</h2>
//         <iframe
//           className="rounded-lg shadow-lg"
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/Z_-WLn7EHC8?si=JZJQVBoy8odUbgPW"
//           title="YouTube Video Player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-6 h-[50vh] justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold flex items-center gap-3 animate-fade-in">
        Fund Your Project 
          <span>
          <Image src="/money.gif" alt="Money Gif" width={50} height={50} />
          </span>
        </h1>
        <p className="text-lg text-gray-300 max-w-lg">
        A crowdfunding platform for students. Get funded now and start your journey!
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:scale-105 transition-transform">
              Start Here
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-gray-700 px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:scale-105 transition-transform">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-white h-1 opacity-10 mx-8"></div>

      {/* Funding Features */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Get Your Project Funded</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { src: "/man.gif", title: "Supportive Community", text: "Your fans are here to back you." },
            { src: "/coin.gif", title: "Easy Transactions", text: "Receive funds seamlessly." },
            { src: "/group.gif", title: "Global Reach", text: "Connect with backers worldwide." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center max-w-xs space-y-4">
              <Image className="bg-gray-700 rounded-full p-3 shadow-lg" width={90} height={90} src={item.src} alt={item.title} />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white h-1 opacity-10 mx-8"></div>

      {/* Learn More Section */}
     <section className="text-white container mx-auto py-20 flex flex-col items-center text-center">
         <h2 className="text-4xl font-bold mb-10">Learn More About Us</h2>
         <iframe
          className="rounded-lg shadow-lg"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z_-WLn7EHC8?si=JZJQVBoy8odUbgPW"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}