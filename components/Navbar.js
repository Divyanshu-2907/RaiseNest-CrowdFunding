

// // "use client"
// // import React, { useState } from 'react'
// // import { useSession, signIn, signOut } from "next-auth/react"
// // import Link from 'next/link'

// // const Navbar = () => {
// //   const { data: session } = useSession()
// //   const [showdropdown, setShowdropdown] = useState(false)


// //   return (
// //     <nav className=' bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
// //       <Link className='' href={"/"}>
// //        <div className="logo text-lg font-bold">RaiseNest</div>
// //        </Link>

// //       {/* <ul className='flex justify-between gap-4'>
// //         <li>Home</li>
// //         <li>About</li>
// //         <li>Projects</li>
// //         <li>Sign Up</li>
// //         <li>Login</li>
// //       </ul> */}

// //       <div className='relative flex justify-center items-center  md:block gap-4'>
// //         {session && <>
// //           {/* <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
// //             setTimeout(() => {
// //               setShowdropdown(false)
// //             }, 100);
// //           }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// //               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
// //             </svg>
// //           </button> */ <button 
// //   onClick={() => setShowdropdown(!showdropdown)} 
// //   onBlur={() => {
// //     setTimeout(() => {
// //       setShowdropdown(false);
// //     }, 100);
// //   }} 
// //   id="dropdownDefaultButton" 
// //   data-dropdown-toggle="dropdown" 
// //   className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center' 
// //   type="button"
// // >
// //   Account
// //   <svg 
// //     className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${showdropdown ? 'rotate-180' : ''}`} 
// //     aria-hidden="true" 
// //     xmlns="http://www.w3.org/2000/svg" 
// //     fill="none" 
// //     viewBox="0 0 10 6"
// //   >
// //     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
// //   </svg>
// // </button>
// // }

// //           <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
// //             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
// //               <li>
// //                 <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
// //               </li>
// //               <li>
// //                 <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
// //               </li>
// //               <li>
// //                 <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
// //               </li>
// //             </ul>
// //           </div></>
// //         }

// //         {session && <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => { signOut() }} >Logout</button>}
// //         {!session && <Link href={"/login"}>
// //         <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button></Link>}
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar

// "use client"
// import React, { useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Link from 'next/link'

// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowdropdown] = useState(false)

//   return (
//     <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
//       <Link href="/">
//         <div className="logo text-lg font-bold">RaiseNest</div>
//       </Link>

//       <div className='relative flex items-center gap-4'>
//         {session && (
//           <>
//             <div className="relative">
//               <button
//                 onClick={() => setShowdropdown(!showdropdown)}
//                 onBlur={() => {
//                   setTimeout(() => setShowdropdown(false), 100);
//                 }}
//                 id="dropdownDefaultButton"
//                 className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2'
//                 type="button"
//               >
//                 Account
//                 <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${showdropdown ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                 </svg>
//               </button>

//               <div id="dropdown" className={`absolute left-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${showdropdown ? "" : "hidden"}`}>
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   <li>
//                     <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
//                   </li>
//                   <li>
//                     <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <button 
//               className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
//               onClick={() => signOut()}
//             >
//               Logout
//             </button>
//           </>
//         )}

//         {!session && (
//           <Link href="/login">
//             <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar;

// "use client"
// import React, { useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Link from 'next/link'

// const Navbar = () => {
//   const { data: session } = useSession();
  
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
//       <Link href="/">
//         <div className="logo text-lg font-bold">RaiseNest</div>
//       </Link>

//       <div className='relative flex items-center gap-4'>
//         {session && (
//           <>
//             <div className="relative">
//               <button
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
//                 className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2'
//                 type="button"
//               >
//                 Account
//                 <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                 </svg>
//               </button>

//               <div className={`absolute left-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${showDropdown ? "" : "hidden"}`}>
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   <li>
//                     <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
//                   </li>
//                   <li>
//                     <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <button 
//               className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
//               onClick={() => signOut()}
//             >
//               Logout
//             </button>
//           </>
//         )}

//         {!session && (
//           <Link href="/login">
//             <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar;

"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/app/page"); // Redirect to page.js after sign-out
  };
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-6 lg:px-12 h-16 items-center shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-extrabold tracking-wide">
        Raise<span className="text-blue-500">Nest</span>
      </Link>

      {/* Navigation Menu */}
      <div className="relative flex items-center gap-6">
        {session ? (
          <>
            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-white font-medium transition-all"
                type="button"
              >
                Account
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all ${
                  showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                  <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logout Button */}
            <button
              className="px-5 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-all shadow-md"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="px-6 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all shadow-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


