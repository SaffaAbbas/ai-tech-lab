// import { MailIcon,MapPin, PhoneIcon } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200">
//       <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        
//         {/* Logo */}
//         <div>
//           <div className="flex items-center gap-2">
//             <img
//             src="/logo.png"   // <-- apna exact image name yahan do
//             alt="GenAI Labs Logo"
//             className="h-16 w-auto object-contain"
//           />
//             <span className="text-3xl font-bold">GenAI.Labs</span>
//           </div>
//         </div>

//         {/* Contact Us */}
//         <div>
//           <h3 className="font-bold mb-3 border-b-4 border-blue-800 inline-block pb-1">
//             Contact Us
//           </h3>

//           <ul className="mt-4 space-y-4 text-[#575757] text-sm">
//             <li className="flex items-center gap-3">
//               <PhoneIcon className="text-blue-800 w-4 h-4" />
//               <span>(323)-522-4040</span>
//             </li>

//             <li className="flex items-center gap-3">
//               <MailIcon className="text-blue-800 w-4 h-4" />
//               <span>Eitan@genai-labs.io</span>
//             </li>

//             <li className="flex items-start gap-3">
//               <MapPin className="text-blue-800 w-4 h-4 mt-0.5" />
//               <span>
//                 4035 Lafayette Pl,<br />
//                 Culver City, CA 90232
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="font-bold mb-3 border-b-4 border-blue-800 inline-block pb-1">
//             Newsletter
//           </h3>

//           <p className="mt-4 text-[#575757] text-sm">
//             Sign up for our newsletter for information and offers straight to your inbox!
//           </p>

//           <div className="mt-4 flex flex-col gap-3">
//             <input
//               type="email"
//               placeholder="Enter Email Address*"
//               className="w-full rounded-full px-5 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="bg-blue-800 text-white rounded-full py-3 font-medium hover:bg-blue-700 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
//         © 2025 by GenAI-Labs. All rights reserved.
//       </div>
//     </footer>
//   );
// }
'use client';

import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter email");

    console.log("Subscribed Email:", email); // 👈 backend later
    setSuccess(true);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="GenAI Labs Logo" className="h-16 w-auto" />
            <span className="text-3xl font-bold">TechOriginators</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3 border-b-4 border-blue-800 inline-block pb-1">
            Contact Us
          </h3>

          <ul className="mt-4 space-y-4 text-sm text-[#575757]">
            <li className="flex gap-3">
              <PhoneIcon className="w-4 h-4 text-blue-800" />
              (+92) 331 4480699
            </li>
            <li className="flex gap-3">
              <MailIcon className="w-4 h-4 text-blue-800" />
              info@techoriginators.com
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-blue-800" />
              Lahore, Pakistan
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-3 border-b-4 border-blue-800 inline-block pb-1">
            Newsletter
          </h3>

          <p className="mt-4 text-sm text-[#575757]">
            Sign up for our newsletter for information and offers straight to your inbox!
          </p>

          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address*"
              className="w-full rounded-full px-5 py-3 bg-gray-100 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-800 text-white rounded-full py-3 font-medium hover:bg-blue-700 transition"
            >
              Subscribe
            </button>

            {success && (
              <p className="text-green-600 text-sm">
               Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © 2025 by Tech-Originators. All rights reserved.
      </div>
    </footer>
  );
}
