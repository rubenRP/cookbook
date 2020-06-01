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
    <div className="flex items-center content-between divide-x divide-gray-300">
      {servings ? (
        <div className="p-3 flex items-center justify-center w-full">
          <svg
            x="0px"
            y="0px"
            width="388.331px"
            height="388.33px"
            viewBox="0 0 388.331 388.33"
            className="w-1/5 h-auto mb-2"
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
          <div className="ml-4">
            <div className="text-sm text-gray-500">Servings</div>
            <span>{servings}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {cooking_time ? (
        <div className="p-3 flex items-center justify-center w-full">
          <svg
            version="1.1"
            x="0px"
            y="0px"
            width="375.028px"
            height="375.028px"
            viewBox="0 0 375.028 375.028"
            className="w-1/4 h-auto mb-2"
          >
            <g>
              <g>
                <rect x="57.559" y="363.456" width="243.783" height="11.572" />
                <polygon
                  points="175.988,355.473 182.344,355.473 215.259,355.473 219.884,355.473 259.178,355.473 237.219,322.535 
217.583,352.011 197.947,322.535 179.166,350.721 160.378,322.535 140.749,352.011 121.107,322.535 99.142,355.473 
138.442,355.473 143.055,355.473 		"
                />
                <path
                  d="M309.464,186.125c-4.346,1.534-9.923,6.675-13.56,10.369c-0.151-9.19-0.453-15.58-0.522-17.404h8.062v-11.41H69.067v11.41
h9.138c-0.087,1.859-0.406,8.545-0.534,18.102c-3.573-3.497-8.308-7.604-12.112-8.946c-7.023-2.475-30.389,0-30.389,0v9.458
c0,0,22.964-0.802,27.902,2.068c4.961,2.869,10.276,27.164,14.407,27.164c0.151,0,0.401,0,0.569,0
c1.122,25.922,4.758,54.016,14.715,63.09H80.407v15.058h210.605v-15.058h-10.201c10.201-9.318,13.803-38.736,14.826-65.182
c0.72,0,1.37,0,1.882,0c4.112,0,9.458-24.306,14.407-27.164c4.926-2.881,27.932-2.092,27.932-2.092v-9.451
C339.835,186.125,316.435,183.674,309.464,186.125z M106.724,270.786c-2.226-4.393-4.416-9.714-6.071-15.639
c-1.011-2.871-1.44-6.193-2.126-9.389c-0.813-3.3-0.883-6.506-1.133-9.62c-0.308-2.975-0.331-6.6-0.157-9.783
c0.087-3.229,0.192-6.366,0.442-9.388c0.337-3.044,0.204-5.949,0.848-8.737c0.534-2.742,1.046-5.356,1.499-7.761
c1.963-9.656,5.211-15.43,5.211-15.43s-0.035,1.644,0.25,4.479c0.273,2.853,0.261,6.675,0.889,11.438
c0.406,4.718,0.691,10.108,1.499,15.94c0.407,2.905,0.645,5.879,0.895,8.9c0.105,3.091,0.75,5.729,1.156,9.109
c0.807,6.482,1.737,11.92,2.556,17.707c0.784,5.728,1.499,11.131,2.132,15.731c1.15,9.329,1.423,16.126,1.423,16.126
S111.15,279.627,106.724,270.786z"
                />
                <path
                  d="M135.444,94.942c1.365,2.568,2.295,3.283,3.498,5.02l3.09,3.724c0.569,1.237,1.499,2.237,1.917,3.619
c1,2.58,2.104,5.316,2.452,8.325c0.987,5.914,0.912,12.101,0.662,17.492c-0.709,10.805-1.761,18.688-1.761,18.688
s5.775-5.588,10.364-16.655c1.145-2.748,2.26-5.838,2.986-9.289c0.737-3.428,1.464-7.186,1.295-11.247
c0-3.997-0.482-8.423-2.091-12.716c-0.634-2.202-1.976-4.224-2.998-6.338c-0.593-1.04-1.394-1.952-2.097-2.928l-1.127-1.452
l-0.558-0.715l-0.134-0.168c0.07,0.087,0.18,0.204,0.395,0.442l-0.063-0.07l-0.198-0.273c-0.964-1.325-2.881-3.189-3.084-4.026
c-0.465-0.958-1.116-1.772-1.557-3.259c-1.046-2.556-1.859-5.496-2.271-8.47c-0.906-5.984-0.785-12.183-0.535-17.608
c0.709-10.817,1.65-18.712,1.65-18.712s-5.71,5.647-10.3,16.679c-2.283,5.496-4.322,12.374-4.416,20.426
c0.082,3.985,0.157,8.377,1.795,12.688C132.895,90.208,134.132,92.624,135.444,94.942z M150.944,90.3
C150.956,90.312,150.741,90.062,150.944,90.3L150.944,90.3z"
                />
                <path
                  d="M169.446,56.629c1.365,2.574,2.295,3.288,3.498,5.025l3.09,3.724c0.575,1.237,1.499,2.237,1.918,3.613
c0.998,2.585,2.108,5.321,2.451,8.331c0.987,5.914,0.918,12.101,0.668,17.486c-0.715,10.805-1.76,18.694-1.76,18.694
s5.768-5.594,10.357-16.655c1.145-2.748,2.26-5.844,2.98-9.295c0.743-3.428,1.464-7.186,1.301-11.241
c0-3.997-0.488-8.423-2.091-12.722c-0.628-2.196-1.976-4.218-2.998-6.338c-0.593-1.034-1.394-1.952-2.091-2.928l-1.109-1.429
l-0.559-0.714l-0.156-0.198c0.075,0.082,0.18,0.198,0.395,0.441l-0.046-0.075l-0.216-0.273c-0.964-1.307-2.881-3.189-3.084-4.02
c-0.459-0.964-1.115-1.76-1.557-3.248c-1.046-2.574-1.854-5.496-2.271-8.47c-0.895-6.001-0.773-12.182-0.523-17.608
C178.347,7.901,179.3,0,179.3,0s-5.717,5.653-10.307,16.679c-2.294,5.501-4.333,12.374-4.426,20.432
c0.093,3.985,0.156,8.377,1.807,12.682C166.914,51.883,168.151,54.3,169.446,56.629z M184.946,51.982
C184.97,51.994,184.76,51.755,184.946,51.982L184.946,51.982z"
                />
                <path
                  d="M211.448,91.375c1.371,2.568,2.301,3.282,3.509,5.02l3.091,3.724c0.569,1.237,1.498,2.237,1.917,3.613
c0.999,2.585,2.103,5.322,2.451,8.331c0.977,5.914,0.906,12.101,0.663,17.492c-0.709,10.799-1.755,18.688-1.755,18.688
s5.763-5.588,10.364-16.655c1.139-2.748,2.254-5.844,2.974-9.295c0.744-3.422,1.464-7.186,1.302-11.241
c0-3.997-0.488-8.423-2.092-12.716c-0.627-2.202-1.975-4.224-2.997-6.344c-0.604-1.034-1.395-1.952-2.092-2.928l-1.115-1.423
l-0.558-0.714l-0.128-0.18c0.069,0.082,0.175,0.203,0.384,0.441l-0.07-0.099l-0.209-0.273c-0.965-1.307-2.881-3.189-3.079-4.02
c-0.465-0.964-1.127-1.76-1.557-3.248c-1.058-2.574-1.859-5.496-2.277-8.47c-0.895-6.001-0.778-12.182-0.522-17.608
c0.72-10.817,1.649-18.718,1.649-18.718s-5.704,5.653-10.294,16.685c-2.301,5.496-4.334,12.368-4.427,20.426
c0.093,3.985,0.151,8.377,1.801,12.682C208.915,86.629,210.158,89.04,211.448,91.375z M226.971,86.722
C226.982,86.733,226.762,86.495,226.971,86.722L226.971,86.722z"
                />
              </g>
            </g>
          </svg>
          <div className="ml-4">
            <div className="text-sm text-gray-500">Cooking Time</div>
            <span>{cooking_time}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {category ? (
        <div className="p-3 flex items-center justify-center w-full">
          <svg
            x="0px"
            y="0px"
            width="380.716px"
            height="380.716px"
            viewBox="0 0 380.716 380.716"
            className="w-1/5 h-auto mb-2"
          >
            <g>
              <path
                d="M368.95,80.009c-17.044-28.338-50.297-44.592-91.311-44.592c-29.303,0-55.561,12.862-77.066,29.151
c-19.188-21.239-56.252-40.63-95.831-39.596C79.181,25.639,42.919,35.108,15.33,76.5C1.115,97.82-3.242,120.343,2.375,143.447
c10.62,43.709,55.084,76.189,73.773,88.168v108.181c0,8.831,7.163,15.988,15.981,15.988h211.257c8.83,0,15.987-7.157,15.987-15.988
V223.412c19.264-9.679,35.483-23.005,45.173-41.217C384.474,144.73,386.03,108.445,368.95,80.009z M336.337,167.207
c-26.467,49.792-139.441,51.802-180.746,48.386c-8.76-0.79-16.516,5.81-17.242,14.594c-0.737,8.795,5.798,16.533,14.587,17.253
c1.772,0.151,13.827,1.093,31.469,1.093c26.892,0,66.755-2.22,103.018-12.805v88.105H108.105V222.634
c0-5.798-3.154-11.143-8.22-13.966c-0.558-0.313-56.583-31.945-66.47-72.82c-3.451-14.245-0.668-27.868,8.493-41.606
c16.062-24.085,37.464-36.634,63.653-37.313c28.518-0.668,57.286,13.53,71.1,28.768c-21.785,22.046-34.943,43.378-36.053,45.226
c-4.566,7.529-2.161,17.335,5.368,21.924c7.529,4.578,17.358,2.202,21.953-5.345c0.482-0.796,49.548-80.105,109.733-80.105
c29.499,0,52.795,10.614,63.902,29.093C352.638,114.905,350.779,140.019,336.337,167.207z"
              />
            </g>
          </svg>
          <div className="ml-4">
            <div className="text-sm text-gray-500">Category</div>
            <span>{category}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default QuickInfo