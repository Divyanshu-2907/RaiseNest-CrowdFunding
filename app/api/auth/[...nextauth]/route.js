// import NextAuth from 'next-auth'
// // import AppleProvider from 'next-auth/providers/apple'
// // import FacebookProvider from 'next-auth/providers/facebook'
// // import GoogleProvider from 'next-auth/providers/google'
// // import EmailProvider from 'next-auth/providers/email'
// import GitHubProvider from 'next-auth/providers/github';
// import mongoose from 'mongoose';
// import User from '@/models/User';
// import Payment from '@/models/Payment';
// import connectDB from '@/db/connectDB';


// export const authoptions = NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,

//       clientSecret: process.env.GITHUB_SECRET
//     }),
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET
//     // }),
//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_ID,
//     //   clientSecret: process.env.FACEBOOK_SECRET
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID,
//     //   clientSecret: process.env.GOOGLE_SECRET
//     // }),
//     // // Passwordless / email sign in
//     // EmailProvider({
//     //   server: process.env.MAIL_SERVER,
//     //   from: 'NextAuth.js <no-reply@example.com>'
//     // }),
//   ],
// callbacks: {
//   async signIn({ user, account, profile, email, credentials }) {
//     if(account.provider == "github"){
//       await connectDB()
//       const currentUser = await User.findOne({email: email})
//       if(!currentUser){
//         const newUser = new User ({
//           email: email,
//           username: email.split("@")[0],
//         })
//       }
//       return true

//     }
//   },
//   async session({ session, user, token }) {
//     const dbUser = await User.findOne({email: session.user.email})
//     session.user.name = dbUser.username
//     return session

//   },
// }
// })

// export { authoptions as GET, authoptions as POST}

// import NextAuth from 'next-auth'
// import GitHubProvider from 'next-auth/providers/github';
// import mongoose from 'mongoose';
// import User from '@/models/User';
// import connectDB from '@/db/connectDB';

// export const authoptions = NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       const email = user.email || profile?.email;
    
//       if (!email) {
//         console.error("GitHub login failed: No email provided");
//         return false;
//       }
    
//       await connectDB();
//       const currentUser = await User.findOne({ email });
    
//       if (!currentUser) {
//         const newUser = new User({
//           name: user.name || profile?.name || "Anonymous", // ✅ Set name properly
//           email: email,
//           username: email.split("@")[0],  
//         });
//         await newUser.save();
//         console.log("New user saved:", newUser);
//       }
      
//       return true;
//     },

//     async session({ session }) {
//       const dbUser = await User.findOne({ email: session.user.email });
//       if (dbUser) {
//         session.user.name = dbUser.username;
//       }
//       return session;
//     },
//   },
// });

// export { authoptions as GET, authoptions as POST };

import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import User from '@/models/User';
import connectDB from '@/db/connectDB';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        
        const email = user.email || profile?.email;
        if (!email) {
          console.error("❌ GitHub login failed: No email provided");
          return false;
        }

        let existingUser = await User.findOne({ email });

        if (!existingUser) {
          existingUser = new User({
            name: user.name || profile?.name || "Anonymous",
            email: email,
            username: email.split("@")[0],
          });
          await existingUser.save();
          console.log("✅ New user created:", existingUser);
        } else {
          console.log("✅ Existing user found:", existingUser);
        }

        return true;
      } catch (error) {
        console.error("❌ Sign-in error:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.id = dbUser._id.toString();
          session.user.name = dbUser.username;
          console.log("✅ Session Updated:", session.user);
        }
        return session;
      } catch (error) {
        console.error("❌ Session error:", error);
        return session;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


