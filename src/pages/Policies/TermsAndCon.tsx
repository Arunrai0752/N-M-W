import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TermsAndCon = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Breadcrumb */}
      <div className="flex items-center px-10 min-h-[60px] bg-white shadow-sm">
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-lg">
          <Link to="/" className="hover:text-green-700 cursor-pointer">
            Home
          </Link>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">Terms & Conditions</p>
        </h1>
      </div>

      {/* Terms & Conditions Section */}
      <div className="flex justify-center py-16 px-6 md:px-20">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl text-gray-700 leading-relaxed">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Natural Milk World - Terms & Conditions
          </h1>

          <p className="mb-6 text-gray-600 text-justify">
            This website is operated by <strong>Natural Milk World</strong>. Throughout
            the site, the terms “we”, “us” and “our” refer to{" "}
            <strong>Natural Milk World</strong>. Natural Milk World offers this
            website, including all information, tools and services available from
            this site to you, the user, conditioned upon your acceptance of all
            terms, conditions, policies and notices stated here.
          </p>

          <p className="mb-6 text-gray-600 text-justify">
            By visiting our site and/or purchasing something from us, you engage in
            our “Service” and agree to be bound by the following Terms and Conditions
            (“Terms of Service”, “Terms”), including those additional terms and
            conditions and policies referenced herein and/or available by hyperlink.
            These Terms of Service apply to all users of the site, including without
            limitation users who are browsers, vendors, customers, merchants, and/or
            contributors of content.
          </p>

          <p className="mb-6 text-gray-600 text-justify">
            Please read these Terms of Service carefully before accessing or using
            our website. By accessing or using any part of the site, you agree to be
            bound by these Terms. If you do not agree to all the terms and
            conditions, then you may not access the website or use any services.
          </p>

          {/* --- SECTION 1 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 1 - ONLINE STORE TERMS
          </h2>
          <p>
            By agreeing to these Terms, you confirm that you are at least the age of
            majority in your region. You may not use our products for illegal
            purposes or violate any laws in your jurisdiction. A breach of these
            Terms will result in immediate termination of your access.
          </p>

          {/* --- SECTION 2 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 2 - GENERAL CONDITIONS
          </h2>
          <p>
            We reserve the right to refuse service to anyone for any reason at any
            time. You agree not to reproduce, duplicate, copy, sell, resell, or
            exploit any part of the Service without our express written permission.
          </p>

          {/* --- SECTION 3 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
          </h2>
          <p>
            We are not responsible if information made available on this site is not
            accurate, complete or current. Any reliance on the material on this site
            is at your own risk.
          </p>

          {/* --- SECTION 4 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
          </h2>
          <p>
            Prices for our products are subject to change without notice. We reserve
            the right to modify or discontinue the Service at any time without prior
            notice.
          </p>

          {/* --- SECTION 5 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 5 - PRODUCTS OR SERVICES
          </h2>
          <p>
            Certain products or services may be available exclusively online through
            the website and may have limited quantities. We make every effort to
            display our products as accurately as possible but cannot guarantee
            color accuracy due to device variations.
          </p>

          {/* --- SECTION 6 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
          </h2>
          <p>
            We reserve the right to refuse any order placed with us. You agree to
            provide accurate and complete billing and account information and to
            promptly update it when necessary.
          </p>

          {/* --- SECTION 7 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 7 - THIRD-PARTY LINKS
          </h2>
          <p>
            Third-party links on this site may direct you to websites that are not
            affiliated with us. We are not responsible for examining or evaluating
            the content or accuracy of any third-party materials.
          </p>

          {/* --- SECTION 8 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 8 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
          </h2>
          <p>
            We do not guarantee that your use of our service will be uninterrupted,
            timely, or error-free. All services and products are provided “as is”
            without warranties of any kind, express or implied.
          </p>

          {/* --- SECTION 9 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 9 - GOVERNING LAW
          </h2>
          <p>
            These Terms of Service and any separate agreements whereby we provide
            you Services shall be governed by and construed in accordance with the
            laws of India.
          </p>

          {/* --- SECTION 10 --- */}
          <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2">
            SECTION 10 - CONTACT INFORMATION
          </h2>
          <p>
            Questions about the Terms of Service should be sent to us at{" "}
            <a
              href="mailto:info@naturalmilkworld.com"
              className="text-green-700 hover:underline"
            >
              info@naturalmilkworld.com
            </a>
            .
          </p>

          <div className="mt-10 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-green-700 font-semibold">
                Natural Milk World
              </span>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndCon;
