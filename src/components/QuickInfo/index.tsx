import React from "react"

const QuickInfo = ({
  servings,
  cooking_time,
  category,
}: {
  servings: number
  cooking_time: string
  category: string
}) => {
  return (
    <div className="flex items-center content-between divide-x divide-gray-300 w-2/3">
      {servings ? (
        <div className="p-3 pl-0 flex flex-col lg:flex-row items-center justify-center">
          <svg
            x="0px"
            y="0px"
            width="388.331px"
            height="388.33px"
            viewBox="0 0 388.331 388.33"
            className="w-8 h-auto"
          >
            <g>
              <path
                d="M264.07,166.541c21.39,11.462,62.59,7.953,93.913-23.377c31.068-31.062,42.815-76.485,13.442-106.828l0.023-0.012
c-0.139-0.128-0.639-0.627-0.767-0.761c0,0,0,0.012-0.023,0.012c-30.324-29.36-75.742-17.62-106.821,13.443
c-31.324,31.33-34.833,72.53-23.377,93.919c-2.951,17.515-26.979,36.518-48.531,48.851c-16.621-10.253-37.581-28.373-39.783-64.803
c1.592-14.552-3.201-29.674-14.337-40.811c-1.022-1.022-3.962-3.509-3.962-3.509L52.656,19.431l-7.396,7.39l88.099,82.649
l-9.556,9.556L38.452,33.669L30.615,41.5l85.339,85.362l-8.069,8.069L22.546,49.593l-7.14,7.076l84.828,84.834l-9.719,9.754
L8.092,64L0,72.116l67.376,84.897c0,0,1.604,1.644,2.283,2.248c9.806,8.569,22.116,12.612,34.298,12.27
c0.087,0,0.215,0.023,0.261,0.035c32.079,0.32,51.901,19.822,64.368,36.646C138.082,238.733,43.413,333.413,43.413,333.413
l0.023,0.023c-0.093,0.07-0.215,0.151-0.308,0.244c-7.709,7.703-7.709,20.205,0,27.932c0.395,0.383,1.882,1.859,2.26,2.254
c7.709,7.715,20.229,7.715,27.926,0.012c0.093-0.093,0.174-0.209,0.25-0.313l0.023,0.034c0,0,87.913-87.918,121.619-121.612
c32.079,32.067,120.997,120.962,120.997,120.962l0.023-0.023c0.069,0.082,0.104,0.197,0.221,0.314
c7.575,7.563,19.938,7.563,27.524-0.023c7.587-7.599,7.61-19.914,0.011-27.525c-0.115-0.104-0.231-0.139-0.324-0.243l0.022-0.023
c0,0-98.212-98.201-125.458-125.47C230.526,189.9,247.931,169.259,264.07,166.541z M253.636,107.878
c0.464-5.211,1.51-11.206,3.241-17.55c0.918-3.154,1.998-6.402,3.312-9.684c1.452-3.334,2.975-6.437,5.205-9.684
c4.264-6.233,9.457-11.079,14.628-15.145c5.112-4.119,10.306-7.32,14.918-9.748c4.578-2.475,8.679-4.078,11.607-4.996
c2.974-0.976,4.705-1.104,4.705-1.104s-1.429,1.081-3.566,3.079c-2.161,2.01-5.24,4.892-8.946,8.342
c-7.111,6.937-17.242,15.941-24.423,25.735c-1.731,2.237-3.276,5.188-4.624,7.889c-1.464,2.76-2.766,5.612-3.95,8.435
c-2.464,5.612-4.497,11.049-6.251,15.738c-1.708,4.7-3.044,8.673-3.834,11.497c-0.86,2.829-0.744,4.508-0.604,4.508
c-0.069,0.105-1.127-1.522-1.44-4.642C253.229,117.463,253.148,113.077,253.636,107.878z"
              />
            </g>
          </svg>
          <div className="lg:ml-4 text-center lg:text-left mt-2 lg:mt-0">
            <div className="text-sm text-gray-500">Servings</div>
            <span>{servings}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {cooking_time ? (
        <div className="p-3 flex flex-col lg:flex-row items-center justify-center">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 380.721 380.722"
            className="w-8 h-auto"
          >
            <g>
              <g>
                <path
                  d="M309.126,116.036c-7.238,0-27.583,0-53.655,0c-6.785-5.676-16.173-10.352-27.35-13.524
			c0.139-6.57-0.791-17.811-8.029-26.247c-5.844-6.866-14.325-10.34-25.166-10.34c-10.857,0-19.293,3.497-25.044,10.375
			c-6.768,8.116-7.709,18.787-7.528,25.485c-12.293,3.178-22.569,8.151-29.86,14.25c-33.305,0-60.005,0-67.139,0
			c-21.373,0-26.345,18.171-26.345,26.88c9.672,0,293.912,0,300.929,0C339.939,132.384,335.165,116.036,309.126,116.036z
			 M193.985,97.917c-5.966,0-11.676,0.476-17.235,1.202c0.156-4.45,1.144-9.922,4.234-13.611c2.917-3.462,7.482-5.164,13.942-5.164
			c6.495,0,11.143,1.725,14.187,5.234c3.23,3.771,4.346,9.353,4.59,13.838C207.417,98.486,200.829,97.917,193.985,97.917z"
                />
                <path
                  d="M352.406,179.939c-3.427,1.214-7.656,4.816-10.921,7.982c0.848-8.162,1.405-14.802,1.73-19.095h5.646v-14.773H30.127
			v14.762h8.186c0.15,4.369,0.447,11.183,1.011,19.525c-3.288-3.189-7.57-6.867-11.021-8.069c-6.507-2.306-28.303,0-28.303,0v8.807
			c0,0,21.414-0.75,26.02,1.928c4.607,2.672,9.58,25.311,13.408,25.311c0.633,0,1.499,0,2.451,0
			c3.881,33.475,9.957,72.988,26.021,87.303H55.764v11.178h266.213v-11.178h-13.942c15.673-14.36,24.794-54.072,29.859-87.615
			c1.349,0,2.568,0,3.394,0c3.834,0,8.807-22.634,13.407-25.324c4.612-2.689,26.026-1.935,26.026-1.935v-8.807
			C380.721,179.939,358.913,177.632,352.406,179.939z M78.705,279.941c-5.966-10.945-12.234-26.445-14.436-43.513
			c-0.593-4.612-0.831-8.075-0.854-12.583c0.012-4.066,0.082-8.04,0.296-11.921c0.604-7.703,1.51-14.895,2.905-20.995
			c1.284-6.077,2.876-11.073,4.224-14.477c1.295-3.439,2.341-5.281,2.341-5.281s0.872,8.36,1.824,20.344
			c0.546,6.001,1.069,12.949,1.615,20.386c0.272,3.694,0.546,7.528,0.831,11.409c0.279,3.438,0.586,8.052,1.11,11.433
			c0.418,3.637,1.034,7.575,1.69,11.293c0.703,3.788,1.365,7.506,2.033,11.119c1.487,7.285,2.881,14.105,4.055,19.938
			c2.573,11.747,3.974,20.066,3.974,20.066S84.578,290.896,78.705,279.941z"
                />
              </g>
            </g>
          </svg>
          <div className="lg:ml-4 text-center lg:text-left mt-2 lg:mt-0">
            <div className="text-sm text-gray-500">Cooking Time</div>
            <span>{cooking_time}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default QuickInfo
