// import React from 'react'
// import PaymentPage from '@/components/PaymentPage'
// import { notFound } from "next/navigation"
// import connectDb from '@/db/connectDB'
// import User from '@/models/User'
// const Username = async ({ params }) => {

//   // If the username is not present in the database, show a 404 page
//   const checkUser = async () => {
//     await connectDb()
//     let u = await User.findOne({ username: params.username })
//     if (!u) {
//       return notFound()
//     }
//   }
//   await checkUser()



//   return (
//     <>
//       <PaymentPage username={params.username} />
//     </>
//   )
// }

// export default Username
 
// export async function generateMetadata({ params }) {
//   return {
//     title: `Support ${params.username} - Get Me A Funding`,
//   }
// }

import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDb from '@/db/connectDB'
import User from '@/models/User'

const Username = async ({ params }) => {
  await connectDb();

  const user = await User.findOne({ username: params.username });

  if (!user) {
    return notFound();
  }

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me A Funding`,
  };
}
