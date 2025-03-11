// // // "use client"
// // // import { useRouter } from 'next/navigation'
// // // import React, {useEffect, useState} from 'react'
// // // import Script from 'next/script'
// // // import { useSession } from 'next-auth/react'
// // // import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
// // // import { useSearchParams } from 'next/navigation'
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import { Bounce } from 'react-toastify';
// // // import { notFound } from "next/navigation"
// // // import Image from 'next/image';
// // // import Razorpay from 'razorpay';




// // // const PaymentPage = ({username}) => {
// // //   // const [paymentform, setPaymentform] = useState({ })
// // //   const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' });

// // //   const [currentUser, setcurrentUser] = useState({ })
// // //   const [payments, setPayments] = useState({ })

// // //   // useEffect(() => {

// // //   //   getData () 
// // //   // }, [])

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       await getData();
// // //     };
// // //     fetchData();
// // //   }, []); 
  
  


// // //   const handleChange = (e) => {
// // //     setPaymentform({...paymentform, [e.target.name]: e.target.value})
// // //   }

// // //   const getData = async (params) => {
// // //     let u = await fetchuser(username)
// // //     setcurrentUser(u)
// // //     let dbpayments = await fetchpayments(username)
// // //     setPayments(dbpayments)
// // //   }
// // //     const pay = async (amount) => {
// // //       //get the order id
// // //       let a = await initiate(amount, username, paymentform)
// // //       let orderId = a.id
// // //         var options = {
// // //           "key": process.env.NEXT_PUBLIC_KEY_ID,
// // //             "amount": amount,
// // //             "currency": "INR",
// // //             "name": "RaiseNest",
// // //             "deScription": "Test Transaction",
// // //             "image": "https://example.com/your_logo",
// // //             "order_id": orderId,
// // //             "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
// // //             "prefill": {
// // //                 "name": "John",
// // //                 "email": "john@example.com",
// // //                 "contact": "9999999999"
// // //             },
// // //             "notes": {
// // //                 "address": "Test address"
// // //             },
// // //             "theme": {
// // //                 "color": "#3399cc"
// // //             }
// // //         }

// // //         var rzp1 = new Razorpay(options);
// // //         rzp1.open();
// // //     }
// // //   return (
// // //     <>
// // //     <ToastContainer
// // //                 position="top-right"
// // //                 autoClose={5000}
// // //                 hideProgressBar={false}
// // //                 newestOnTop={false}
// // //                 closeOnClick
// // //                 rtl={false}
// // //                 pauseOnFocusLoss
// // //                 draggable
// // //                 pauseOnHover
// // //                 theme="light" />
// // //             {/* Same as */}
// // //             <ToastContainer />
// // //         <Script src='https://checkout.razorpay.com/v1/checkout.js'></Script>
   
// // //     <div >
// // //         <div className='cover w-full bg-red-50 relative'> 
// // //           <Image className='object-cover w-full h-[350px]' src="/cover.jpg" alt="" />
// // //         </div>
// // //         <div className='absolute bottom-[9rem] right-[46%] border-white border-2 rounded-full'>
// // //           <Image width={100} height={100} className='rounded-full justify-center sticky top-0 items-center flex' src="/profile.jpg" alt="" />
// // //         </div>
// // //     </div> 
// // //     <div className="info flex justify-center items-center my-36 mb-32 flex-col gap-1">
// // //       <div className='font-bold text-lg'>
// // //       @{username}
// // //       </div>

// // //        <div className='text-slate-400'>
// // //        Lets help {username} get Funds
// // //        </div>
// // //        <div className='text-slate-400'>
// // //         9999 members . 574 posts . $45,078/release
// // //        </div>
// // //        <div className="payment flex gap-3 w-[80%] rounded-lg mt-11">
// // //         <div className="supporter w-1/2 bg-slate-900 rounded-lg text-white p-10">
// // //           {/* show list of all supporters as a leaderboard */}
// // //           <h2 className='text-2xl text-center font-bold my-5'>Supporters</h2>
// // //           <ul className='mx-5 text-lg font-semibold'>
// // //             {payments.map((p, i) => {
// // //             return <li key={i} className='my-4 flex gap-2 items-center'>
// // //               <Image width={33} src="avatar.gif" alt="user avatar" />
// // //               <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;</span>

// // //               </li>
// // //             })}
// // //             {/* <li className='my-4 flex gap-2 items-center'>
// // //               <Image width={33} src="avatar.gif" alt="user avatar" />
// // //               <span>Divyanshu donated <span className='font-bold'>$1000</span> with a message "I support you bro.lots of ❤️"</span>
// // //               </li>
// // //             <li className='my-4 flex gap-2 items-center'>
// // //               <Image width={33} src="avatar.gif" alt="user avatar" />
// // //               <span>Divyanshu donated <span className='font-bold'>$1000</span> with a message "I support you bro.lots of ❤️"</span>
// // //               </li>
// // //             <li className='my-4 flex gap-2 items-center'>
// // //               <Image width={33} src="avatar.gif" alt="user avatar" />
// // //               <span>Divyanshu donated <span className='font-bold'>$1000</span> with a message "I support you bro.lots of ❤️"</span>
// // //               </li> */}
            
// // //           </ul>

// // //         </div>
// // //         <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
// // //         <h2 className='text-2xl text-center font-bold my-5'>Make a Payment</h2>
// // //         <div className='flex justify-center items-center gap-3 flex-col'>
// // //           {/* input for name and message */}
// // //           <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder="Enter Name" className='w-full bg-slate-800 rounded-lg p-3'/>
// // //           <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder="Enter Message" className='w-full bg-slate-800 rounded-lg p-3'/>
          
// // //           <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" placeholder="Enter Amount" className='w-full bg-slate-800 rounded-lg p-3'/>
        
// // //           <button onClick={() => pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/2 me-2 mb-2">Pay</button>
// // //         </div>
// // //         {/* or chooose from these amounts */}
// // //         <div className='flex justify-center items-center gap-3 mt-5'>
// // //           <button className='bg-slate-800 rounded-lg p-3 text-white' onClick={()=> pay(10)}>₹10</button>
// // //           <button className='bg-slate-800 rounded-lg p-3 text-white' onClick={()=> pay(20)}>₹20</button>
// // //           <button className='bg-slate-800 rounded-lg p-3 text-white' onClick={()=> pay(50)}>₹50</button>
// // //           <button className='bg-slate-800 rounded-lg p-3 text-white' onClick={()=> pay(100)}>₹100</button>
// // //         </div>
// // //         </div>
// // //        </div>
// // //     </div>
// // //     </>
// // //   )
// // // }
// // // export default PaymentPage

// // "use client";
// // import React, { useEffect, useState } from 'react'
// // import Script from 'next/script'
// // import { useSession } from 'next-auth/react'
// // import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
// // import { useSearchParams } from 'next/navigation'
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { Bounce } from 'react-toastify';
// // import { useRouter } from 'next/navigation'
// // import { notFound } from "next/navigation"

// // const PaymentPage = ({ username }) => {
// //   const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' });
// //   const [currentUser, setcurrentUser] = useState({});
// //   const [payments, setPayments] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       await getData();
// //     };
// //     fetchData();
// //   }, [username]);

// //   const handleChange = (e) => {
// //     setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
// //   };

// //   const getData = async () => {
// //     let u = await fetchuser(username);
// //     setcurrentUser(u);
// //     let dbpayments = await fetchpayments(username);
// //     setPayments(dbpayments);
// //   };

// //   const pay = async (amount) => {
// //     const Razorpay = (await import("razorpay")).default; // Dynamic Import
// //     let a = await initiate(amount, username, paymentform);
// //     let orderId = a.id;

// //     var options = {
// //       "key": process.env.NEXT_PUBLIC_KEY_ID,
// //       "amount": amount,
// //       "currency": "INR",
// //       "name": "RaiseNest",
// //       "description": "Test Transaction",
// //       "image": "/logo.png",
// //       "order_id": orderId,
// //       "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
// //       "prefill": {
// //         "name": paymentform.name || "John",
// //         "email": "john@example.com",
// //         "contact": "9999999999"
// //       },
// //       "notes": {
// //         "address": "Test address"
// //       },
// //       "theme": {
// //         "color": "#3399cc"
// //       }
// //     };

// //     var rzp1 = new Razorpay(options);
// //     rzp1.open();
// //   };

// //   return (
// //     <>
// //       <ToastContainer position="top-right" autoClose={5000} theme="light" />
// //       <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

// //       <div className='cover w-full bg-red-50 relative'>
// //         <Image className='object-cover w-full h-[350px]' src="/cover.jpg" alt="" width={1000} height={350} />
// //       </div>
// //       <div className='absolute bottom-[9rem] right-[46%] border-white border-2 rounded-full'>
// //         <Image width={100} height={100} className='rounded-full' src="/profile.jpg" alt="" />
// //       </div>

// //       <div className="info flex justify-center items-center my-36 mb-32 flex-col gap-1">
// //         <div className='font-bold text-lg'>@{username}</div>
// //         <div className='text-slate-400'>Lets help {username} get Funds</div>
// //         <div className='text-slate-400'>9999 members · 574 posts · ₹45,078 raised</div>

// //         <div className="payment flex gap-3 w-[80%] rounded-lg mt-11">
// //           {/* Supporters Section */}
// //           <div className="supporter w-1/2 bg-slate-900 rounded-lg text-white p-10">
// //             <h2 className='text-2xl text-center font-bold my-5'>Supporters</h2>
// //             <ul className='mx-5 text-lg font-semibold'>
// //               {payments.map((p, i) => (
// //                 <li key={i} className='my-4 flex gap-2 items-center'>
// //                   <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
// //                   <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Payment Form */}
// //           <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
// //             <h2 className='text-2xl text-center font-bold my-5'>Make a Payment</h2>
// //             <div className='flex justify-center items-center gap-3 flex-col'>
// //               <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder="Enter Name" className='w-full bg-slate-800 rounded-lg p-3' />
// //               <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder="Enter Message" className='w-full bg-slate-800 rounded-lg p-3' />
// //               <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" placeholder="Enter Amount" className='w-full bg-slate-800 rounded-lg p-3' />

// //               <button onClick={() => pay(Number(paymentform.amount) * 100)} className="bg-green-500 rounded-lg p-3 w-1/2">Pay</button>
// //             </div>

// //             <div className='flex justify-center items-center gap-3 mt-5'>
// //               {[10, 20, 50, 100].map(amount => (
// //                 <button key={amount} className='bg-slate-800 rounded-lg p-3 text-white' onClick={() => pay(amount * 100)}>₹{amount}</button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// // export default PaymentPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import Script from "next/script";
// import { useSession } from "next-auth/react";
// import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
// import { useSearchParams } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
// import { notFound } from "next/navigation";
// import Image from "next/image"; // Fix: Import Next.js Image component

// const PaymentPage = ({ username }) => {
//   const [paymentform, setPaymentform] = useState({
//     name: "",
//     message: "",
//     amount: "",
//   });

//   const [currentUser, setcurrentUser] = useState({});
//   const [payments, setPayments] = useState([]);

//   // Fetch user data and payment history
//   useEffect(() => {
//     const fetchData = async () => {
//       let u = await fetchuser(username);
//       setcurrentUser(u);

//       let dbpayments = await fetchpayments(username);
//       setPayments(dbpayments);
//     };
//     fetchData();
//   }, [username]);

//   // Handle input changes
//   const handleChange = (e) => {
//     setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
//   };

//   // Handle payment process
//   const pay = async (amount) => {
//     const Razorpay = (await import("razorpay")).default; // Dynamic Import
//     let a = await initiate(amount, username, paymentform);
//     let orderId = a.id;

//     var options = {
//       key: process.env.NEXT_PUBLIC_KEY_ID,
//       amount: amount,
//       currency: "INR",
//       name: "RaiseNest",
//       description: "Support Fundraising",
//       image: "/logo.png",
//       order_id: orderId,
//       callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
//       prefill: {
//         name: paymentform.name || "John",
//         email: "john@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Test address",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     var rzp1 = new Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <>
//       {/* Toast Notifications */}
//       <ToastContainer position="top-right" autoClose={5000} theme="light" />
//       <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

//       {/* Cover Section */}
//       <div className="cover w-full bg-red-50 relative">
//         <Image
//           className="object-cover w-full h-[350px]"
//           src="/cover.jpg"
//           alt="Cover Image"
//           width={1000}
//           height={350}
//         />
//       </div>

//       {/* Profile Picture */}
//       <div className="absolute bottom-[9rem] right-[46%] border-white border-2 rounded-full">
//         <Image
//           width={100}
//           height={100}
//           className="rounded-full"
//           src="/profile.jpg"
//           alt="Profile Picture"
//         />
//       </div>

//       {/* User Info Section */}
//       <div className="info flex justify-center items-center my-36 mb-32 flex-col gap-1">
//         <div className="font-bold text-lg">@{username}</div>
//         <div className="text-slate-400">Let's help {username} get Funds</div>
//         <div className="text-slate-400">9999 members · 574 posts · ₹45,078 raised</div>

//         {/* Payment Section */}
//         <div className="payment flex gap-3 w-[80%] rounded-lg mt-11">
//           {/* Supporters List */}
//           <div className="supporter w-1/2 bg-slate-900 rounded-lg text-white p-10">
//             <h2 className="text-2xl text-center font-bold my-5">Supporters</h2>
//             <ul className="mx-5 text-lg font-semibold">
//               {payments.length > 0 ? (
//                 payments.map((p, i) => (
//                   <li key={i} className="my-4 flex gap-2 items-center">
//                     <Image width={33} height={33} src="/avatar.gif" alt="User Avatar" />
//                     <span>
//                       {p.name} donated <span className="font-bold">₹{p.amount}</span> with a
//                       message &quot;{p.message}&quot;
//                     </span>
//                   </li>
//                 ))
//               ) : (
//                 <li className="text-center">No supporters yet. Be the first to donate!</li>
//               )}
//             </ul>
//           </div>

//           {/* Payment Form */}
//           <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
//             <h2 className="text-2xl text-center font-bold my-5">Make a Payment</h2>
//             <div className="flex justify-center items-center gap-3 flex-col">
//               <input
//                 onChange={handleChange}
//                 value={paymentform.name}
//                 name="name"
//                 type="text"
//                 placeholder="Enter Name"
//                 className="w-full bg-slate-800 rounded-lg p-3"
//               />
//               <input
//                 onChange={handleChange}
//                 value={paymentform.message}
//                 name="message"
//                 type="text"
//                 placeholder="Enter Message"
//                 className="w-full bg-slate-800 rounded-lg p-3"
//               />
//               <input
//                 onChange={handleChange}
//                 value={paymentform.amount}
//                 name="amount"
//                 type="number"
//                 placeholder="Enter Amount"
//                 className="w-full bg-slate-800 rounded-lg p-3"
//               />

//               <button
//                 onClick={() => pay(Number(paymentform.amount) * 100)}
//                 className="bg-green-500 rounded-lg p-3 w-1/2"
//               >
//                 Pay
//               </button>
//             </div>

//             {/* Quick Payment Options */}
//             <div className="flex justify-center items-center gap-3 mt-5">
//               {[10, 20, 50, 100].map((amount) => (
//                 <button
//                   key={amount}
//                   className="bg-slate-800 rounded-lg p-3 text-white"
//                   onClick={() => pay(amount * 100)}
//                 >
//                   ₹{amount}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentPage;

"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let u = await fetchuser(username);
      setcurrentUser(u);
      let dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
    };
    fetchData();
  }, [username]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    const Razorpay = (await import("razorpay")).default;
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;

    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "RaiseNest",
      description: `Support ${username}`,
      image: "/logo.png",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name || "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Support Address",
      },
      theme: {
        color: "#4CAF50",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <div className='cover w-full relative shadow-[0px_0px_30px_10px_rgba(0,255,255,0.8)] rounded-lg'>
        <Image className='object-cover w-full h-[350px] brightness-75 rounded-lg' src="/cover.jpg" alt="Cover" width={1000} height={350} />
        <div className='absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 border-4 border-white rounded-full p-1 shadow-[0px_0px_20px_8px_rgba(0,255,255,0.8)] bg-gray-900'>
          <Image width={120} height={120} className='rounded-full shadow-[0px_0px_30px_10px_rgba(0,255,255,0.8)]' src="/profile.jpg" alt="Profile" />
        </div>
      </div>

      <div className="info flex flex-col items-center my-16 gap-2">
        <div className='font-bold text-lg text-white drop-shadow-lg'>@{username}</div>
        <div className='text-slate-400 drop-shadow-lg'>Let's help {username} get funded!</div>
        <div className='text-slate-400 drop-shadow-lg'>9999 members · 574 posts · ₹45,078 raised</div>

        <div className="payment flex gap-6 w-[80%] rounded-lg mt-8">
          <div className="supporter w-1/2 bg-gray-900 rounded-lg text-white p-6 shadow-lg">
            <h2 className='text-2xl text-center font-bold my-4 text-green-400'>Supporters</h2>
            <ul className='mx-4 text-lg font-semibold'>
              {payments.map((p, i) => (
                <li key={i} className='my-3 flex gap-2 items-center'>
                  <Image width={33} height={33} src="/avatar.gif" alt="Avatar" className='drop-shadow-lg' />
                  <span>{p.name} donated <span className='font-bold text-green-400'>₹{p.amount}</span> "{p.message}"</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-gray-900 rounded-lg text-white p-6 shadow-lg">
            <h2 className='text-2xl text-center font-bold my-4 text-green-400'>Make a Payment</h2>
            <div className='flex flex-col gap-3'>
              <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder="Enter Name" className='w-full bg-gray-800 rounded-lg p-3 text-white shadow-md' />
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder="Enter Message" className='w-full bg-gray-800 rounded-lg p-3 text-white shadow-md' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" placeholder="Enter Amount" className='w-full bg-gray-800 rounded-lg p-3 text-white shadow-md' />
              <button onClick={() => pay(Number(paymentform.amount) * 100)} className="bg-green-500 rounded-lg p-3 w-full text-white shadow-lg hover:shadow-green-400">Pay</button>
            </div>
            <div className='flex justify-center gap-3 mt-5'>
              {[10, 20, 50, 100].map(amount => (
                <button key={amount} className='bg-gray-800 rounded-lg p-3 text-white shadow-md hover:shadow-gray-500' onClick={() => pay(amount * 100)}>₹{amount}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
