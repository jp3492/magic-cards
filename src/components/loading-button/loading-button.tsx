import React, { memo } from 'react'
import "./loading-button.scss"


export const LoadingButton = memo(function (props: any) {
  const {
    label = 'Button',
    classes = 'button',
    loading = false,
    disabled = false,
    buttonType = 'button',
    onClick = () => { }
  } = props;

  return (
    <div

      className={`loading-button ${loading ? 'loading-button--loading' : ''}`}>
      <button className={classes} disabled={loading || disabled} type={buttonType == "submit" ? 'submit' : 'button'} onClick={() => onClick()}>
        {label}
        <svg width="100%" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)">
          <circle cx="0" cy="0" r="6" fill="rgba(100%,100%,100%,0.499)" transform="scale(0.976916 0.976916)">
            <animateTransform attributeName="transform" type="scale" begin="-0.44999999999999996s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.2s" repeatCount="indefinite"></animateTransform>
          </circle>
        </g><g transform="translate(40 50)">
            <circle cx="0" cy="0" r="6" fill="rgba(100%,100%,100%,0.659)" transform="scale(0.730603 0.730603)">
              <animateTransform attributeName="transform" type="scale" begin="-0.3s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.2s" repeatCount="indefinite"></animateTransform>
            </circle>
          </g><g transform="translate(60 50)">
            <circle cx="0" cy="0" r="6" fill="rgba(100%,100%,100%,0.692)" transform="scale(0.375564 0.375564)">
              <animateTransform attributeName="transform" type="scale" begin="-0.15s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.2s" repeatCount="indefinite"></animateTransform>
            </circle>
          </g><g transform="translate(80 50)">
            <circle cx="0" cy="0" r="6" fill="rgba(100%,100%,100%,0.508)" transform="scale(0.0817382 0.0817382)">
              <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.2s" repeatCount="indefinite"></animateTransform>
            </circle>
          </g>
        </svg>
      </button>
    </div >
  )
})