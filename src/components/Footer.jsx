export const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-black px-4 pt-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-52 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-gray-300"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="6.5" cy="7" r="4" />
              <circle cx="6.5" cy="20" r="3" />
              <circle cx="17.5" cy="4" r="3" />
              <circle cx="17.5" cy="17" r="5" />
            </svg>

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-300 ">
              ChatRoom
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-400">
              Various chat rooms on different topics within the application,
              fostering discussions and enhancing user engagement. 
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Smooth authentication options, enabling users to register
              with either their email and password or their Google account for
              enhanced accessibility and ease of use.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-300">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-400">Phone:</p>
            <a
              href="tel:9876543210"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-gray-500 hover:text-white"
            >
              9876543210
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-400">Email:</p>
            <a
              href="mailto:sreyasreesasmal@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300  text-gray-500 hover:text-white"
            >
              sreyasreesasmal@gmail.com
            </a>
          </div>
          {/* <div className="flex">
                        <p className="mr-1 text-gray-400">Address:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300  text-gray-500 hover:text-white"
                        >
                            312 Lovely Street, NY
                        </a>
                    </div> */}
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-300">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <div className="text-sm text-gray-500">
          <div className="container mx-auto text-center">
            <p className="text-sm mb-2">
              &copy; Copyright {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
        <p className="text-md mb-2 text-gray-500">Made for you by Sreyasree</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
