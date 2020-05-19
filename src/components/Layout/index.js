import React from "react"
import { Link } from "gatsby"

import "../../styles/index.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
          <Link
            to={`/`}
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <svg
              className="fill-current h-8 w-8 mr-3"
              width="54"
              height="54"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 481.11 345"
            >
              <title>logo-rr</title>
              <path
                d="M653.3,252.55a102.77,102.77,0,0,1-7.73,40.16,98.49,98.49,0,0,1-21.35,32A103.87,103.87,0,0,1,592,346.49,116.66,116.66,0,0,1,552,356l95.8,126.68H605.62L490.29,328.81c5.14,0,10.9.06,17.26.22s12.79.06,19.29-.22,12.87-.86,19.06-1.59a106,106,0,0,0,17-3.43q25.44-7.69,40.87-26.77t15.42-45.42a77.27,77.27,0,0,0-10-37.67A68.81,68.81,0,0,0,582,186.22a91.82,91.82,0,0,0-32-10.66,270.29,270.29,0,0,0-34.27-2H422.19V142.17h86.72a398.9,398.9,0,0,1,42.45,2.51q22.91,2.51,41.1,11.14,29,13.6,44.95,39.24T653.3,252.55Z"
                transform="translate(-172.19 -137.72)"
              />
              <path
                d="M302,351.56l96.23,126.68H354.72L239.82,324.31h17.27q9.55,0,19.29-.43t19.3-1.59a105.61,105.61,0,0,0,17.27-3.4q24.94-7.73,40.4-26.58t15.44-45.18A79.89,79.89,0,0,0,359,209.23q-9.76-18.38-27-27.47-16.35-9.11-32.44-10.9a313.86,313.86,0,0,0-34.3-1.83H205.79V478.24h-33.6V137.72h86.74c6.34,0,13.17.14,20.4.43s14.63.92,22,1.83a199.61,199.61,0,0,1,21.59,3.83A98.13,98.13,0,0,1,342,150.43q29.06,14,45.17,39.48t16.14,57.67a100.27,100.27,0,0,1-7.93,40.18A105.85,105.85,0,0,1,373.78,320a103.19,103.19,0,0,1-32,22A115.22,115.22,0,0,1,302,351.56Z"
                transform="translate(-172.19 -137.72)"
              />
            </svg>
            <span className="font-light text-xl tracking-tight pl-3 border-l border-white">
              Recipes
            </span>
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 justify-center items-center">
        {children}
      </main>
      <footer>
        <div className="flex justify-between w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-8">
          <p>
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://rubenr.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rubén Rodríguez
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline"
              href="https://github.com/rubenrp/recipes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
