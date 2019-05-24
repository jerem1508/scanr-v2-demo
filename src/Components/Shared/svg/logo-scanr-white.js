import React from 'react';
import PropTypes from 'prop-types';

const SVG = props => (
  <svg
    width={props.width}
    style={props.style}
    height={props.width}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${props.className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path d="M144.38,42.09a2.55,2.55,0,0,1-.81.87,2.1,2.1,0,0,1-1.09.25,3.41,3.41,0,0,1-1.49-.39L139.14,42a16.91,16.91,0,0,0-2.38-.87,11.43,11.43,0,0,0-3.16-.39,7.36,7.36,0,0,0-4.46,1.2A3.73,3.73,0,0,0,127.52,45a3,3,0,0,0,.83,2.15,7.48,7.48,0,0,0,2.21,1.53,21.52,21.52,0,0,0,3.12,1.18q1.74.52,3.57,1.14t3.57,1.41a12.44,12.44,0,0,1,3.12,2,8.87,8.87,0,0,1,3,7,13.19,13.19,0,0,1-1,5.29A11.63,11.63,0,0,1,142.87,71a14.34,14.34,0,0,1-5,2.75,23.18,23.18,0,0,1-10.81.62,23.69,23.69,0,0,1-3.76-1A20.75,20.75,0,0,1,120,71.78a16.15,16.15,0,0,1-2.69-1.94l2.21-3.64a3.13,3.13,0,0,1,1-1,2.82,2.82,0,0,1,1.47-.35,3.1,3.1,0,0,1,1.69.5q.79.5,1.84,1.09A16.38,16.38,0,0,0,128,67.51a10.82,10.82,0,0,0,3.59.5,9.3,9.3,0,0,0,2.93-.41,6.19,6.19,0,0,0,2-1.07A4,4,0,0,0,137.65,65a4.59,4.59,0,0,0,.37-1.8,3.22,3.22,0,0,0-.83-2.29A7.32,7.32,0,0,0,135,59.37a21.39,21.39,0,0,0-3.14-1.18q-1.76-.52-3.6-1.14a33.12,33.12,0,0,1-3.6-1.45,12.26,12.26,0,0,1-3.14-2.11,9.55,9.55,0,0,1-2.21-3.14,11,11,0,0,1-.83-4.5,11.45,11.45,0,0,1,1-4.65,10.9,10.9,0,0,1,2.85-3.86A14.15,14.15,0,0,1,127,34.7a19.54,19.54,0,0,1,6.49-1,19.88,19.88,0,0,1,7.48,1.36,16.91,16.91,0,0,1,5.62,3.57Z" fill="#fff" />
        <path d="M181,42.75a4.74,4.74,0,0,1-.83.85,1.92,1.92,0,0,1-1.18.31,2.63,2.63,0,0,1-1.43-.45q-.7-.45-1.67-1a12.5,12.5,0,0,0-2.31-1,10.61,10.61,0,0,0-3.31-.45,10.11,10.11,0,0,0-4.42.91,8.37,8.37,0,0,0-3.16,2.62,11.78,11.78,0,0,0-1.88,4.13,22.16,22.16,0,0,0-.62,5.48,21.49,21.49,0,0,0,.68,5.66,12.09,12.09,0,0,0,2,4.17,8.42,8.42,0,0,0,3.1,2.56,9.39,9.39,0,0,0,4.11.87,10.18,10.18,0,0,0,3.7-.56,11.66,11.66,0,0,0,2.38-1.24q1-.68,1.69-1.24a2.54,2.54,0,0,1,1.61-.56,1.94,1.94,0,0,1,1.74.89l2.75,3.49a17.3,17.3,0,0,1-3.45,3.12,18.63,18.63,0,0,1-3.86,2,19.61,19.61,0,0,1-4.13,1.07,29.34,29.34,0,0,1-4.22.31,17.64,17.64,0,0,1-6.94-1.38,16.18,16.18,0,0,1-5.68-4,19.33,19.33,0,0,1-3.84-6.45,24.93,24.93,0,0,1-1.41-8.7A25.29,25.29,0,0,1,151.62,46a18.39,18.39,0,0,1,3.7-6.47,17,17,0,0,1,6-4.28,20.84,20.84,0,0,1,8.29-1.55,19.74,19.74,0,0,1,7.81,1.43,19.09,19.09,0,0,1,6,4.11Z" fill="#fff" />
        <path d="M220,74.1h-4.3a4.63,4.63,0,0,1-2.13-.41A2.61,2.61,0,0,1,212.44,72l-.85-2.83a32.74,32.74,0,0,1-3,2.38,18,18,0,0,1-3,1.72,15.33,15.33,0,0,1-3.29,1,19.83,19.83,0,0,1-3.88.35,15.23,15.23,0,0,1-4.65-.68,10,10,0,0,1-3.66-2,9.26,9.26,0,0,1-2.38-3.38,12,12,0,0,1-.85-4.71,9.3,9.3,0,0,1,1.18-4.45,11.14,11.14,0,0,1,3.93-4,25.1,25.1,0,0,1,7.33-2.94,46.8,46.8,0,0,1,11.36-1.17V49q0-4-1.69-6a6.16,6.16,0,0,0-4.9-1.93,11.87,11.87,0,0,0-3.88.54,15,15,0,0,0-2.69,1.22q-1.14.68-2.11,1.22a4.29,4.29,0,0,1-2.13.54,2.77,2.77,0,0,1-1.67-.5,4,4,0,0,1-1.12-1.24l-1.74-3.06a23.65,23.65,0,0,1,16.55-6.28,16,16,0,0,1,6.22,1.14,13.23,13.23,0,0,1,4.63,3.18A13.62,13.62,0,0,1,219,42.78a18.69,18.69,0,0,1,1,6.2Zm-18.6-6a12.89,12.89,0,0,0,2.71-.27,10.38,10.38,0,0,0,2.34-.8,12.49,12.49,0,0,0,2.13-1.32,19.28,19.28,0,0,0,2.07-1.85V57.24a38.88,38.88,0,0,0-7,.53,18.5,18.5,0,0,0-4.52,1.35A5.81,5.81,0,0,0,196.76,61a4.25,4.25,0,0,0-.72,2.38A4.2,4.2,0,0,0,197.53,67,6.43,6.43,0,0,0,201.43,68.13Z" fill="#fff" />
        <path d="M227.75,74.1V34.33h5.85A2.35,2.35,0,0,1,236,36.08l.66,3.14A21.84,21.84,0,0,1,239.24,37a17.74,17.74,0,0,1,2.83-1.74,14.43,14.43,0,0,1,3.2-1.12,16.8,16.8,0,0,1,3.72-.39,14.26,14.26,0,0,1,5.78,1.1,11.42,11.42,0,0,1,4.21,3.1,13.64,13.64,0,0,1,2.56,4.77,20.27,20.27,0,0,1,.87,6.1V74.1h-9.57V48.79a8.5,8.5,0,0,0-1.69-5.64,6.25,6.25,0,0,0-5.06-2,10,10,0,0,0-4.65,1.12,16.67,16.67,0,0,0-4.11,3.06V74.1Z" fill="#fff" />
        <path d="M281.6,52.2V74.1H271.17v-56h17.09a35.71,35.71,0,0,1,9.83,1.18,18.74,18.74,0,0,1,6.71,3.31,12.79,12.79,0,0,1,3.84,5.1A17.85,17.85,0,0,1,309,39.53a15.49,15.49,0,0,1-2.4,4.57,16.19,16.19,0,0,1-3.88,3.6,20.33,20.33,0,0,1-5.25,2.48,10.33,10.33,0,0,1,3.41,3.22l14,20.7h-9.38a4.57,4.57,0,0,1-2.31-.54A4.7,4.7,0,0,1,301.64,72L289.86,54.06a4.15,4.15,0,0,0-1.45-1.43,5.1,5.1,0,0,0-2.35-.43Zm0-7.48h6.51a16.14,16.14,0,0,0,5.14-.74,9.93,9.93,0,0,0,3.6-2A8.17,8.17,0,0,0,299,38.87a10.66,10.66,0,0,0,.7-3.91,8,8,0,0,0-2.81-6.55q-2.81-2.29-8.59-2.29H281.6Z" fill="#fff" />
      </g>
      <g>
        <path d="M116.33,80.53h1L120,86.76h.09l2.58-6.24h1v7.64h-.87V82.44h-.07l-2.31,5.67h-.84l-2.31-5.67h-.07v5.73h-.87Z" fill="#fff" />
        <path d="M127.64,88.29a2.42,2.42,0,0,1-2.27-1.4,3.48,3.48,0,0,1-.33-1.55,3.52,3.52,0,0,1,.33-1.56,2.51,2.51,0,0,1,4.54,0,3.52,3.52,0,0,1,.33,1.56,3.48,3.48,0,0,1-.33,1.55,2.42,2.42,0,0,1-2.27,1.4Zm0-.79a1.51,1.51,0,0,0,1-.3,1.78,1.78,0,0,0,.56-.79,3,3,0,0,0,.18-1.07,3.07,3.07,0,0,0-.18-1.07,1.8,1.8,0,0,0-.56-.8,1.69,1.69,0,0,0-1.94,0,1.8,1.8,0,0,0-.56.8,3.07,3.07,0,0,0-.18,1.07,3,3,0,0,0,.18,1.07,1.78,1.78,0,0,0,.56.79A1.51,1.51,0,0,0,127.64,87.49Z" fill="#fff" />
        <path d="M133.76,82.44v.82h-1.22v3.27a1.11,1.11,0,0,0,.11.56.54.54,0,0,0,.28.25,1.09,1.09,0,0,0,.37.06l.24,0,.15,0,.18.79-.25.07a1.93,1.93,0,0,1-.41,0,1.76,1.76,0,0,1-.73-.16,1.44,1.44,0,0,1-.59-.49,1.39,1.39,0,0,1-.23-.83V83.26h-.87v-.82h.87V81.21h.88v1.22Z" fill="#fff" />
        <path d="M137.12,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.55,3.55,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15,2.2,2.2,0,0,1,.79.48,2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37h-4.15a2.19,2.19,0,0,0,.53,1.41,1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.9-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,137.12,88.29ZM137,83.15a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25h3.24a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,137,83.15Z" fill="#fff" />
        <path d="M144.32,85.9V82.44h.88v5.73h-.88v-.81h-.06a2.17,2.17,0,0,1-.63.6,1.9,1.9,0,0,1-1.07.28,1.79,1.79,0,0,1-.84-.23,1.87,1.87,0,0,1-.72-.71,2.35,2.35,0,0,1-.29-1.23V82.44h.88v3.64a1.29,1.29,0,0,0,.35,1,1.24,1.24,0,0,0,.9.34,1.66,1.66,0,0,0,.67-.15,1.37,1.37,0,0,0,.57-.48A1.46,1.46,0,0,0,144.32,85.9Z" fill="#fff" />
        <path d="M149.87,82.56l-.3.82-.18-.08a.92.92,0,0,0-.31,0,1.27,1.27,0,0,0-.8.26,1.69,1.69,0,0,0-.51.64,1.93,1.93,0,0,0-.18.77v3.24h-.88V82.44h.88v1h.06a1.38,1.38,0,0,1,.3-.52,1.72,1.72,0,0,1,.52-.4,1.4,1.4,0,0,1,.64-.15,1.37,1.37,0,0,1,.43.07A1.72,1.72,0,0,1,149.87,82.56Z" fill="#fff" />
        <path d="M158.51,88.17h-.85v-.88h-.09q-.1.16-.28.39a1.64,1.64,0,0,1-.52.42,1.84,1.84,0,0,1-.89.18,2.24,2.24,0,0,1-1.26-.36,2.43,2.43,0,0,1-.86-1,4.14,4.14,0,0,1,0-3.14,2.41,2.41,0,0,1,.86-1,2.27,2.27,0,0,1,1.28-.36,1.82,1.82,0,0,1,.89.18,1.61,1.61,0,0,1,.51.42l.27.38h.06V80.53h.88Zm-4.18-2.86a3.11,3.11,0,0,0,.19,1.11,1.78,1.78,0,0,0,.56.79,1.44,1.44,0,0,0,.92.29,1.39,1.39,0,0,0,1.22-.61,2.72,2.72,0,0,0,.42-1.58,2.65,2.65,0,0,0-.42-1.56,1.4,1.4,0,0,0-1.22-.59,1.48,1.48,0,0,0-.93.29,1.71,1.71,0,0,0-.56.77A3.06,3.06,0,0,0,154.34,85.3Z" fill="#fff" />
        <path d="M162.42,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.55,3.55,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15A2.2,2.2,0,0,1,164,83a2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37h-4.15a2.19,2.19,0,0,0,.53,1.41,1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.9-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,162.42,88.29Zm-.09-5.13a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25h3.24a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,162.33,83.15Z" fill="#fff" />
        <path d="M170,80.53v7.64h-.88V80.53Z" fill="#fff" />
        <path d="M174.92,88.17v-.78h0a1.54,1.54,0,0,1-.3.4,1.72,1.72,0,0,1-.56.36,2.14,2.14,0,0,1-.85.15,2.31,2.31,0,0,1-1-.21,1.63,1.63,0,0,1-1-1.55,1.47,1.47,0,0,1,.19-.79,1.38,1.38,0,0,1,.51-.48,2.75,2.75,0,0,1,.72-.26q.4-.09.8-.14l.73-.08a2.19,2.19,0,0,0,.54-.1.27.27,0,0,0,.21-.26h0a1.2,1.2,0,0,0-.34-1,1.33,1.33,0,0,0-.85-.27,1.56,1.56,0,0,0-1.51.87l-.84-.3a2,2,0,0,1,.6-.81,2.25,2.25,0,0,1,.82-.41,3.43,3.43,0,0,1,.88-.12,3.62,3.62,0,0,1,.64.07,2.08,2.08,0,0,1,.7.27,1.56,1.56,0,0,1,.56.61,2.26,2.26,0,0,1,.22,1.09v3.77Zm0-2.07v-.81a.51.51,0,0,1-.24.12l-.43.09-.47.07-.37,0a3.45,3.45,0,0,0-.64.14,1.11,1.11,0,0,0-.48.29.75.75,0,0,0-.18.53.78.78,0,0,0,.34.69,1.5,1.5,0,0,0,.87.23,1.76,1.76,0,0,0,.88-.21,1.41,1.41,0,0,0,.54-.53A1.36,1.36,0,0,0,174.92,86.09Z" fill="#fff" />
        <path d="M184.8,88.17l-1.52-3h-1.87v3h-.92V80.53H183a3,3,0,0,1,1.48.32,2,2,0,0,1,.83.85,2.6,2.6,0,0,1,.26,1.17,2.32,2.32,0,0,1-.36,1.32,2.17,2.17,0,0,1-1,.8l1.65,3.17Zm-3.39-6.82v3h1.52a2.39,2.39,0,0,0,1.06-.19,1.14,1.14,0,0,0,.54-.53,1.73,1.73,0,0,0,.16-.76,2,2,0,0,0-.13-.71,1.18,1.18,0,0,0-.49-.58,1.92,1.92,0,0,0-1-.23Z" fill="#fff" />
        <path d="M189.25,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.56,3.56,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15,2.2,2.2,0,0,1,.79.48,2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37h-4.15A2.2,2.2,0,0,0,188,87a1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.89-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,189.25,88.29Zm-.09-5.13a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25h3.24a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,189.16,83.15Z" fill="#fff" />
        <path d="M197.44,84.15h-.88a1.38,1.38,0,0,0-.45-.7,1.35,1.35,0,0,0-.93-.3,1.52,1.52,0,0,0-1.24.59,2.42,2.42,0,0,0-.47,1.56,2.53,2.53,0,0,0,.47,1.59,1.5,1.5,0,0,0,1.25.6,1.47,1.47,0,0,0,.88-.26,1.27,1.27,0,0,0,.49-.73h.88a2,2,0,0,1-.37.91,2.06,2.06,0,0,1-.77.64,2.49,2.49,0,0,1-3.39-1.19,3.61,3.61,0,0,1-.32-1.55,3.44,3.44,0,0,1,.32-1.52,2.53,2.53,0,0,1,.9-1,2.43,2.43,0,0,1,1.36-.38,2.57,2.57,0,0,1,1.09.22,2.09,2.09,0,0,1,.79.63A2,2,0,0,1,197.44,84.15Z" fill="#fff" />
        <path d="M199.5,84.7v3.46h-.88V80.53h.88v2.72h.06a2.17,2.17,0,0,1,.63-.6,1.9,1.9,0,0,1,1.07-.28,1.75,1.75,0,0,1,1.33.55,2.26,2.26,0,0,1,.52,1.61v3.64h-.88V84.53a1.32,1.32,0,0,0-.34-1,1.23,1.23,0,0,0-.91-.34,1.7,1.7,0,0,0-.69.15,1.31,1.31,0,0,0-.56.48A1.51,1.51,0,0,0,199.5,84.7Z" fill="#fff" />
        <path d="M207,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.56,3.56,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15,2.2,2.2,0,0,1,.79.48,2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37h-4.15a2.2,2.2,0,0,0,.53,1.41,1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.89-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,207,88.29Zm-.09-5.13a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25h3.24a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,206.92,83.15Z" fill="#fff" />
        <path d="M213.79,82.56l-.3.82-.18-.08a.91.91,0,0,0-.31,0,1.27,1.27,0,0,0-.8.26,1.69,1.69,0,0,0-.51.64,1.94,1.94,0,0,0-.18.77v3.24h-.88V82.44h.88v1h.06a1.38,1.38,0,0,1,.3-.52,1.73,1.73,0,0,1,.52-.4,1.4,1.4,0,0,1,.64-.15,1.37,1.37,0,0,1,.43.07A1.72,1.72,0,0,1,213.79,82.56Z" fill="#fff" />
        <path d="M219,84.15h-.88a1.38,1.38,0,0,0-.45-.7,1.35,1.35,0,0,0-.93-.3,1.52,1.52,0,0,0-1.24.59A2.42,2.42,0,0,0,215,85.3a2.53,2.53,0,0,0,.47,1.59,1.5,1.5,0,0,0,1.25.6,1.47,1.47,0,0,0,.88-.26,1.27,1.27,0,0,0,.49-.73H219a2,2,0,0,1-.37.91,2.06,2.06,0,0,1-.77.64,2.49,2.49,0,0,1-3.39-1.19,3.61,3.61,0,0,1-.32-1.55,3.44,3.44,0,0,1,.32-1.52,2.53,2.53,0,0,1,.9-1,2.43,2.43,0,0,1,1.36-.38,2.57,2.57,0,0,1,1.09.22,2.09,2.09,0,0,1,.79.63A2,2,0,0,1,219,84.15Z" fill="#fff" />
        <path d="M221.06,84.7v3.46h-.88V80.53h.88v2.72h.06a2.17,2.17,0,0,1,.63-.6,1.9,1.9,0,0,1,1.07-.28,1.75,1.75,0,0,1,1.33.55,2.26,2.26,0,0,1,.52,1.61v3.64h-.88V84.53a1.32,1.32,0,0,0-.34-1,1.23,1.23,0,0,0-.91-.34,1.7,1.7,0,0,0-.69.15,1.31,1.31,0,0,0-.56.48A1.51,1.51,0,0,0,221.06,84.7Z" fill="#fff" />
        <path d="M228.57,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.56,3.56,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15,2.2,2.2,0,0,1,.79.48,2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37h-4.15a2.2,2.2,0,0,0,.53,1.41,1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.89-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,228.57,88.29Zm-.09-5.13a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25H230a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,228.48,83.15Z" fill="#fff" />
        <path d="M237.65,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.56,3.56,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15,2.2,2.2,0,0,1,.79.48,2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37h-4.15a2.2,2.2,0,0,0,.53,1.41,1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.89-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,237.65,88.29Zm-.09-5.13a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25h3.24a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,237.56,83.15Z" fill="#fff" />
        <path d="M243.6,82.44v.82h-1.22v3.27a1.11,1.11,0,0,0,.11.56.54.54,0,0,0,.28.25,1.09,1.09,0,0,0,.37.06l.24,0,.15,0,.18.79-.25.07a1.93,1.93,0,0,1-.41,0,1.76,1.76,0,0,1-.73-.16,1.44,1.44,0,0,1-.59-.49,1.4,1.4,0,0,1-.23-.83V83.26h-.87v-.82h.87V81.21h.88v1.22Z" fill="#fff" />
        <path d="M252.67,88.17h-.85v-.88h-.09q-.1.16-.28.39a1.64,1.64,0,0,1-.52.42,1.84,1.84,0,0,1-.89.18,2.24,2.24,0,0,1-1.26-.36,2.43,2.43,0,0,1-.86-1,4.14,4.14,0,0,1,0-3.14,2.41,2.41,0,0,1,.86-1,2.28,2.28,0,0,1,1.28-.36,1.83,1.83,0,0,1,.89.18,1.62,1.62,0,0,1,.51.42l.27.38h.06V80.53h.88Zm-4.18-2.86a3.11,3.11,0,0,0,.19,1.11,1.78,1.78,0,0,0,.56.79,1.44,1.44,0,0,0,.92.29,1.39,1.39,0,0,0,1.22-.61,2.72,2.72,0,0,0,.42-1.58,2.65,2.65,0,0,0-.42-1.56,1.4,1.4,0,0,0-1.22-.59,1.48,1.48,0,0,0-.93.29,1.71,1.71,0,0,0-.56.77A3.06,3.06,0,0,0,248.49,85.3Z" fill="#fff" />
        <path d="M256.58,88.29a2.67,2.67,0,0,1-1.43-.37,2.42,2.42,0,0,1-.92-1,3.48,3.48,0,0,1-.32-1.54,3.56,3.56,0,0,1,.32-1.55,2.53,2.53,0,0,1,.9-1.05,2.42,2.42,0,0,1,1.36-.38,2.71,2.71,0,0,1,.88.15,2.2,2.2,0,0,1,.79.48,2.34,2.34,0,0,1,.57.88,3.75,3.75,0,0,1,.21,1.35v.37H254.8a2.2,2.2,0,0,0,.53,1.41,1.65,1.65,0,0,0,1.25.48,1.7,1.7,0,0,0,.89-.22,1.28,1.28,0,0,0,.54-.67l.85.24a1.91,1.91,0,0,1-.81,1A2.62,2.62,0,0,1,256.58,88.29Zm-.09-5.13a1.53,1.53,0,0,0-1.11.44,2.06,2.06,0,0,0-.56,1.25h3.24a1.75,1.75,0,0,0-.43-1.21A1.45,1.45,0,0,0,256.49,83.15Z" fill="#fff" />
        <path d="M264.14,80.53v7.64h-.88V80.53Z" fill="#fff" />
        <path d="M266.74,80.53v.67a2.37,2.37,0,0,1-.25,1,2.43,2.43,0,0,1-.69.89l-.48-.39a4.89,4.89,0,0,0,.41-.7,1.78,1.78,0,0,0,.17-.78v-.69Z" fill="#fff" />
        <path d="M269.3,80.53v7.64h-.92V80.53Z" fill="#fff" />
        <path d="M271.84,84.78v3.39H271V82.44h.88v1h.06a1.87,1.87,0,0,1,.63-.74,1.8,1.8,0,0,1,1.07-.3,1.78,1.78,0,0,1,1.33.53,2.25,2.25,0,0,1,.52,1.63v3.64h-.88V84.59a1.4,1.4,0,0,0-.35-1,1.19,1.19,0,0,0-.9-.37,1.51,1.51,0,0,0-.67.17,1.47,1.47,0,0,0-.57.51A1.55,1.55,0,0,0,271.84,84.78Z" fill="#fff" />
        <path d="M277.83,84.78v3.39H277V82.44h.88v1h.06a1.87,1.87,0,0,1,.63-.74,1.8,1.8,0,0,1,1.07-.3,1.78,1.78,0,0,1,1.33.53,2.25,2.25,0,0,1,.52,1.63v3.64h-.88V84.59a1.4,1.4,0,0,0-.35-1,1.19,1.19,0,0,0-.9-.37,1.51,1.51,0,0,0-.67.17,1.47,1.47,0,0,0-.57.51A1.55,1.55,0,0,0,277.83,84.78Z" fill="#fff" />
        <path d="M285.26,88.29a2.42,2.42,0,0,1-2.27-1.4,3.48,3.48,0,0,1-.33-1.55,3.52,3.52,0,0,1,.33-1.56,2.51,2.51,0,0,1,4.54,0,3.52,3.52,0,0,1,.33,1.56,3.48,3.48,0,0,1-.33,1.55,2.42,2.42,0,0,1-2.27,1.4Zm0-.79a1.51,1.51,0,0,0,1-.3,1.78,1.78,0,0,0,.56-.79,3,3,0,0,0,.18-1.07,3.07,3.07,0,0,0-.18-1.07,1.8,1.8,0,0,0-.56-.8,1.69,1.69,0,0,0-1.94,0,1.81,1.81,0,0,0-.56.8,3.07,3.07,0,0,0-.18,1.07,3,3,0,0,0,.18,1.07,1.78,1.78,0,0,0,.56.79A1.51,1.51,0,0,0,285.26,87.49Z" fill="#fff" />
        <path d="M293.49,82.44l-2.12,5.73h-.9l-2.12-5.73h1L290.89,87H291l1.58-4.57Z" fill="#fff" />
        <path d="M297.77,88.17v-.78h0a1.55,1.55,0,0,1-.3.4,1.72,1.72,0,0,1-.56.36,2.14,2.14,0,0,1-.85.15,2.31,2.31,0,0,1-1-.21,1.62,1.62,0,0,1-1-1.55,1.48,1.48,0,0,1,.19-.79,1.38,1.38,0,0,1,.51-.48,2.76,2.76,0,0,1,.72-.26q.4-.09.8-.14l.73-.08a2.19,2.19,0,0,0,.54-.1.27.27,0,0,0,.21-.26h0a1.2,1.2,0,0,0-.34-1,1.33,1.33,0,0,0-.85-.27,1.56,1.56,0,0,0-1.51.87l-.84-.3a2,2,0,0,1,.6-.81,2.25,2.25,0,0,1,.82-.41,3.43,3.43,0,0,1,.88-.12,3.62,3.62,0,0,1,.64.07,2.08,2.08,0,0,1,.7.27,1.56,1.56,0,0,1,.56.61,2.26,2.26,0,0,1,.22,1.09v3.77Zm0-2.07v-.81a.51.51,0,0,1-.24.12l-.43.09-.47.07-.37,0a3.45,3.45,0,0,0-.64.14,1.12,1.12,0,0,0-.48.29.75.75,0,0,0-.18.53.78.78,0,0,0,.34.69,1.5,1.5,0,0,0,.87.23,1.76,1.76,0,0,0,.88-.21,1.41,1.41,0,0,0,.54-.53A1.36,1.36,0,0,0,297.77,86.09Z" fill="#fff" />
        <path d="M302.49,82.44v.82h-1.22v3.27a1.11,1.11,0,0,0,.11.56.54.54,0,0,0,.28.25,1.09,1.09,0,0,0,.37.06l.24,0,.15,0,.18.79-.25.07a1.93,1.93,0,0,1-.41,0,1.76,1.76,0,0,1-.73-.16,1.44,1.44,0,0,1-.59-.49,1.4,1.4,0,0,1-.23-.83V83.26h-.87v-.82h.87V81.21h.88v1.22Z" fill="#fff" />
        <path d="M304.07,81.62a.6.6,0,0,1-.46-.18.59.59,0,0,1-.17-.42.6.6,0,0,1,.17-.41.66.66,0,0,1,.92,0,.6.6,0,0,1,.17.41.59.59,0,0,1-.17.42A.6.6,0,0,1,304.07,81.62Zm.45.82v5.73h-.88V82.44Z" fill="#fff" />
        <path d="M308.32,88.29a2.42,2.42,0,0,1-2.27-1.4,3.48,3.48,0,0,1-.33-1.55,3.52,3.52,0,0,1,.33-1.56,2.51,2.51,0,0,1,4.54,0,3.52,3.52,0,0,1,.33,1.56,3.48,3.48,0,0,1-.33,1.55,2.42,2.42,0,0,1-2.27,1.4Zm0-.79a1.51,1.51,0,0,0,1-.3,1.78,1.78,0,0,0,.56-.79,3,3,0,0,0,.18-1.07,3.07,3.07,0,0,0-.18-1.07,1.8,1.8,0,0,0-.56-.8,1.69,1.69,0,0,0-1.94,0,1.81,1.81,0,0,0-.56.8,3.07,3.07,0,0,0-.18,1.07,3,3,0,0,0,.18,1.07,1.78,1.78,0,0,0,.56.79A1.51,1.51,0,0,0,308.32,87.49Z" fill="#fff" />
        <path d="M313,84.78v3.39h-.88V82.44H313v1h.06a1.87,1.87,0,0,1,.63-.74,1.8,1.8,0,0,1,1.07-.3,1.78,1.78,0,0,1,1.33.53,2.25,2.25,0,0,1,.52,1.63v3.64h-.88V84.59a1.4,1.4,0,0,0-.35-1,1.19,1.19,0,0,0-.9-.37,1.51,1.51,0,0,0-.67.17,1.47,1.47,0,0,0-.57.51A1.55,1.55,0,0,0,313,84.78Z" fill="#fff" />
      </g>
      <path d="M55.24,10.41A42.51,42.51,0,0,0,24.33,82.09H86.15A42.51,42.51,0,0,0,55.24,10.41Z" fill={props.fill} />
      <polygon points="102.13 79.59 102.13 82.09 8.35 82.09 8.35 79.59 3.35 79.59 3.35 89.59 8.35 89.59 8.35 87.09 102.13 87.09 102.13 89.59 107.13 89.59 107.13 79.59 102.13 79.59" fill="#fff" />
      <path d="M85.43,41.55a3.1,3.1,0,0,0-3,3.84L65.61,54a6.25,6.25,0,0,0-4-2.64l1.13-16.89a4.94,4.94,0,1,0-1.5-.08L60.1,51.27A6.22,6.22,0,0,0,56.16,53L33.73,34.23a3.71,3.71,0,0,0,.46-1.77,3.79,3.79,0,1,0-1.42,2.92L55.19,54.1a6.23,6.23,0,0,0-.29,6.31L39.43,71.11a5.14,5.14,0,1,0,.85,1.24l15.48-10.7a6.24,6.24,0,0,0,8.18,1l8.57,9.84a3.82,3.82,0,1,0,1.13-1l-8.57-9.84a6.2,6.2,0,0,0,1.22-6.35l16.79-8.62a3.12,3.12,0,1,0,2.34-5.17Z" fill="#fff" />
    </g>
  </svg>
);

export default SVG;

SVG.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

SVG.defaultProps = {
  style: {},
  fill: '#000',
  width: '100%',
  className: '',
};
