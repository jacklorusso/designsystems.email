import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <section className="bg-black hero">
    <div className="bg-black pt7-ns pt6 pb6 w-50-l w-70-m w-90 center">
      <div className="flex items-center justify-start">
        <div className="icon pr2">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <g fill="none" fillRule="evenodd" transform="translate(5 5)">
              <rect
                width="59.684"
                height="59.684"
                y="30.316"
                fill="#FFF"
                opacity="0.2"
              />
              <rect
                width="57.684"
                height="57.684"
                x="31.316"
                y="1"
                stroke="#FFF"
                strokeWidth="3"
                opacity="0.9"
              />
            </g>
          </svg>
        </div>
        <div className="icon pr2">
          <svg width="55" height="55" viewBox="0 0 100 100">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#FFF"
              opacity=".9"
              transform="rotate(-52 92.409 28.574)"
            >
              <circle cx="8.225" cy="8.225" r="9" strokeWidth="3" />
              <path
                fill="#FFF"
                strokeWidth="2"
                d="M83.4227434,9.32206926 C83.9589183,13.3463073 87.4047338,16.4507105 91.5756216,16.4507105 C96.1183598,16.4507105 99.8009768,12.7680935 99.8009768,8.22535523 C99.8009768,3.68261698 96.1183598,5.68434189e-14 91.5756216,5.68434189e-14 C87.2171469,5.68434189e-14 83.6504318,3.38992562 83.3682549,7.67699822 L17.821603,7.67699822 L17.821603,9.32206926 L83.4227434,9.32206926 Z"
              />
            </g>
          </svg>
        </div>
        <div className="icon pr2">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <g fill="none" fillRule="evenodd">
              <path
                fill="#FFF"
                fillOpacity=".9"
                d="M12.90625,50.3125 L12.90625,49.625 C17.5625,49.15625 19.75,46.90625 19.75,42.375 L19.75,33.65625 C19.75,28.375 21.625,26.40625 26.09375,26.40625 L27.125,26.40625 L27.125,23 L25.75,23 C18.875,23 15.8125,26.15625 15.8125,33.21875 L15.8125,40.71875 C15.8125,45.8125 14.0625,47.53125 9,47.53125 L9,52.4375 C14.0625,52.4375 15.8125,54.15625 15.8125,59.21875 L15.8125,67.3125 C15.8125,74.40625 18.90625,77.59375 25.75,77.59375 L27.125,77.59375 L27.125,74.1875 L26.09375,74.1875 C21.6875,74.1875 19.75,72.125 19.75,66.84375 L19.75,57.5625 C19.75,53.03125 17.5625,50.78125 12.90625,50.3125 Z M86.3291678,50.3125 C81.7041678,50.75 79.4854178,53.03125 79.4854178,57.59375 L79.4854178,66.84375 C79.4854178,72.125 77.5166678,74.1875 73.1416678,74.1875 L72.1104178,74.1875 L72.1104178,77.59375 L73.4854178,77.59375 C80.2979178,77.59375 83.4229178,74.34375 83.4229178,67.125 L83.4229178,59.1875 C83.4229178,54.15625 85.1416678,52.4375 90.2354178,52.4375 L90.2354178,47.53125 C85.1729178,47.53125 83.4229178,45.8125 83.4229178,40.71875 L83.4229178,33.21875 C83.4229178,26.15625 80.3604178,23 73.4854178,23 L72.1104178,23 L72.1104178,26.40625 L73.1416678,26.40625 C77.6104178,26.40625 79.4854178,28.375 79.4854178,33.65625 L79.4854178,42.375 C79.4854178,46.90625 81.6416678,49.15625 86.3291678,49.625 L86.3291678,50.3125 Z"
              />
              <path
                stroke="#FFF"
                strokeLinecap="square"
                strokeWidth="3"
                d="M29.7222222 38.5L38.5 38.5M50 38.5L69.5 38.5M50 48.5L64.8766325 48.5M29.7222222 58.5L38.5 58.5M50 58.5L69.5 58.5M50 68.5L64.8766325 68.5"
                opacity=".2"
              />
            </g>
          </svg>
        </div>
        <div className="icon">
          <svg width="70" height="70" viewBox="0 0 100 100">
            <g fill="none" fillRule="evenodd" transform="translate(14 16)">
              <circle
                cx="19"
                cy="19"
                r="19"
                fill="#FFF"
                fillOpacity=".2"
                opacity=".9"
              />
              <rect
                width="52"
                height="49"
                x="14"
                y="13"
                stroke="#FFF"
                strokeWidth="2"
              />
              <polygon
                fill="#000"
                stroke="#FFF"
                strokeWidth="3"
                opacity=".9"
                points="53.5 32 72 68 35 68"
              />
              <polygon
                fill="#000"
                stroke="#FFF"
                strokeWidth="3"
                fillopacity=".9"
                points="35.5 45 47 68 24 68"
              />
            </g>
          </svg>
        </div>
      </div>
      <h1 className="pt2 f1 fw5 white">404</h1>
      <p className="white-60 measure f4 fw3 lh-copy">
        Well, sh*t. Loooks like this page doesn't exist.
        <Link to="/">
          <span className="link dim blue fw4">Go home</span>
        </Link>, friend.
      </p>
    </div>
  </section>
)

export default NotFoundPage
