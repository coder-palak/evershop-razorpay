import PropTypes from 'prop-types';
import React from 'react';

export default function RazorpayLogo({ width = 100, height = 30 }) {
  return (
    <img
      width={width}
      height={height}
      src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMTYiIGhlaWdodD0iNjciIGZpbGw9IiMwNzI2NTQiIHZpZXdCb3g9IjAgMCAxODk2IDQwMSI+PHBhdGggZmlsbD0iIzMzOTVGRiIgZD0ibTEyMi42MyAxMDUuNy0xNS43NSA1Ny45NyA5MC4xNS01OC4zLTU4Ljk2IDIxOS45OCA1OS44OC4wNUwyODUuMDUuNDgiLz48cGF0aCBkPSJNMjUuNiAyMzIuOTIuOCAzMjUuNGgxMjIuNzNsNTAuMjItMTg4LjEzTDI1LjYgMjMyLjkybTQyNi4zMi04MS40MmMtMyAxMS4xNS04Ljc4IDE5LjM0LTE3LjQgMjQuNTctOC42IDUuMjItMjAuNjcgNy44NC0zNi4yNSA3Ljg0aC00OS41bDE3LjM4LTY0LjhoNDkuNWMxNS41NiAwIDI2LjI1IDIuNiAzMi4wNSA3LjkgNS44IDUuMyA3LjIgMTMuNCA0LjIyIDI0LjZtNTEuMjUtMS40YzYuMy0yMy40IDMuNy00MS40LTcuODItNTQtMTEuNS0xMi41LTMxLjY4LTE4LjgtNjAuNDgtMTguOEgzMjQuNGwtNjYuNSAyNDguMWg1My42N2wyNi44LTEwMGgzNS4yYzcuOSAwIDE0LjEyIDEuMyAxOC42NiAzLjggNC41NSAyLjYgNy4yMiA3LjEgOC4wNCAxMy42bDkuNTggODIuNmg1Ny41bC05LjMyLTc3Yy0xLjktMTcuMi05Ljc3LTI3LjMtMjMuNi0zMC4zIDE3LjYzLTUuMSAzMi40LTEzLjYgNDQuMy0yNS40YTkyLjYgOTIuNiAwIDAgMCAyNC40NC00Mi41bTEzMC40NiA4Ni40Yy00LjUgMTYuOC0xMS40IDI5LjUtMjAuNzMgMzguNC05LjM0IDguOS0yMC41IDEzLjMtMzMuNTIgMTMuMy0xMy4yNiAwLTIyLjI1LTQuMy0yNy0xMy00Ljc2LTguNy00LjkyLTIxLjMtLjUtMzcuOCA0LjQyLTE2LjUgMTEuNDctMjkuNCAyMS4xNy0zOC43IDkuNy05LjMgMjEuMDQtMTMuOTUgMzQuMDYtMTMuOTUgMTMgMCAyMS45IDQuNSAyNi40IDEzLjQzIDQuNiA4Ljk3IDQuNyAyMS44LjIgMzguNXptMjMuNTItODcuOC02LjcyIDI1LjFjLTIuOS05LTguNTMtMTYuMi0xNi44NS0yMS42LTguMzQtNS4zLTE4LjY2LTgtMzAuOTctOC0xNS4xIDAtMjkuNiAzLjktNDMuNSAxMS43LTEzLjkgNy44LTI2LjEgMTguOC0zNi41IDMzLTEwLjQgMTQuMi0xOCAzMC4zLTIyLjkgNDguNC00LjggMTguMi01LjggMzQuMS0yLjkgNDcuOSAzIDEzLjkgOS4zIDI0LjUgMTkgMzEuOSA5LjggNy41IDIyLjMgMTEuMiAzNy42IDExLjJhODIuNCA4Mi40IDAgMCAwIDM1LjItNy43IDgyLjExIDgyLjExIDAgMCAwIDI4LjQtMjEuMmwtNyAyNi4xNmg1MS45TDcwOS4zIDE0OWgtNTJ6bTIzOC42NSAwSDc0NC44N2wtMTAuNTUgMzkuNGg4Ny44MmwtMTE2LjEgMTAwLjMtOS45MiAzN2gxNTUuOGwxMC41NS0zOS40aC05NC4xbDExNy44OC0xMDEuOG0xNDIuNCA1MmMtNC42NyAxNy40LTExLjYgMzAuNDgtMjAuNzUgMzktOS4xNSA4LjYtMjAuMjMgMTIuOS0zMy4yNCAxMi45LTI3LjIgMC0zNi4xNC0xNy4zLTI2Ljg2LTUxLjkgNC42LTE3LjIgMTEuNTYtMzAuMTMgMjAuODYtMzguODQgOS4zLTguNzQgMjAuNTctMTMuMSAzMy44Mi0xMy4xIDEzIDAgMjEuNzggNC4zMyAyNi4zIDEzLjA1IDQuNTIgOC43IDQuNDggMjEuNjctLjEzIDM4Ljg3bTMwLjM4LTgwLjgzYy0xMS45NS03LjQ0LTI3LjItMTEuMTYtNDUuOC0xMS4xNi0xOC44MyAwLTM2LjI2IDMuNy01Mi4zIDExLjFhMTEzLjA5IDExMy4wOSAwIDAgMC00MSAzMi4wNmMtMTEuMyAxMy45LTE5LjQzIDMwLjItMjQuNDIgNDguOC00LjkgMTguNTMtNS41IDM0LjgtMS43IDQ4LjczIDMuOCAxMy45IDExLjggMjQuNiAyMy44IDMyIDEyLjEgNy40NiAyNy41IDExLjE3IDQ2LjQgMTEuMTcgMTguNiAwIDM1LjktMy43NCA1MS44LTExLjE4IDE1LjktNy40OCAyOS41LTE4LjEgNDAuOC0zMi4xIDExLjMtMTMuOTQgMTkuNC0zMC4yIDI0LjQtNDguOCA1LTE4LjYgNS42LTM0Ljg0IDEuOC00OC44LTMuOC0xMy45LTExLjctMjQuNi0yMy42LTMyLjA1bTE4NS4xIDQwLjggMTMuMy00OC4xYy00LjUtMi4zLTEwLjQtMy41LTE3LjgtMy41LTExLjkgMC0yMy4zIDIuOTQtMzQuMyA4LjktOS40NiA1LjA2LTE3LjUgMTIuMi0yNC4zIDIxLjE0bDYuOS0yNS45LTE1LjA3LjA2aC0zN2wtNDcuNyAxNzYuN2g1Mi42M2wyNC43NS05Mi4zN2MzLjYtMTMuNDMgMTAuMDgtMjQgMTkuNDMtMzEuNSA5LjMtNy41MyAyMC45LTExLjMgMzQuOS0xMS4zIDguNiAwIDE2LjYgMS45NyAyNC4yIDUuOW0xNDYuNSA0MS4xYy00LjUgMTYuNS0xMS4zIDI5LjEtMjAuNiAzNy44LTkuMyA4Ljc0LTIwLjUgMTMuMS0zMy41IDEzLjFzLTIxLjktNC40LTI2LjYtMTMuMmMtNC44LTguODUtNC45LTIxLjYtLjQtMzguMzYgNC41LTE2Ljc1IDExLjQtMjkuNiAyMC45LTM4LjUgOS41LTguOTcgMjAuNy0xMy40NSAzMy43LTEzLjQ1IDEyLjggMCAyMS40IDQuNiAyNiAxMy45IDQuNiA5LjMgNC43IDIyLjIuMjggMzguN20zNi44LTgxLjRjLTkuNzUtNy44LTIyLjItMTEuNy0zNy4zLTExLjctMTMuMjMgMC0yNS44NCAzLTM3LjggOS4wNi0xMS45NSA2LjA1LTIxLjY1IDE0LjMtMjkuMSAyNC43NGwuMTgtMS4yIDguODMtMjguMWgtNTEuNGwtMTMuMSA0OC45LS40IDEuNy01NCAyMDEuNDRoNTIuN2wyNy4yLTEwMS40YzIuNyA5LjAyIDguMiAxNi4xIDE2LjYgMjEuMjIgOC40IDUuMSAxOC43NyA3LjYzIDMxLjEgNy42MyAxNS4zIDAgMjkuOS0zLjcgNDMuNzUtMTEuMSAxMy45LTcuNDIgMjUuOS0xOC4xIDM2LjEtMzEuOSAxMC4yLTEzLjggMTcuNzctMjkuOCAyMi42LTQ3LjkgNC45LTE4LjEzIDUuOS0zNC4zIDMuMS00OC40NS0yLjg1LTE0LjE3LTkuMTYtMjUuMTQtMTguOS0zMi45bTE3NC42NSA4MC42NWMtNC41IDE2LjctMTEuNCAyOS41LTIwLjcgMzguMy05LjMgOC44Ni0yMC41IDEzLjI3LTMzLjUgMTMuMjctMTMuMyAwLTIyLjMtNC4zLTI3LTEzLTQuOC04LjctNC45LTIxLjMtLjUtMzcuOCA0LjQtMTYuNSAxMS40Mi0yOS40IDIxLjEyLTM4LjcgOS43LTkuMyAyMS4wNS0xMy45NCAzNC4wNy0xMy45NCAxMyAwIDIxLjggNC41IDI2LjQgMTMuNCA0LjYgOC45MyA0LjYzIDIxLjc2LjE1IDM4LjV6bTIzLjUtODcuODUtNi43MyAyNS4xYy0yLjktOS4wNS04LjUtMTYuMjUtMTYuOC0yMS42LTguNC01LjM0LTE4LjctOC0zMS04LTE1LjEgMC0yOS42OCAzLjktNDMuNiAxMS43LTEzLjkgNy44LTI2LjEgMTguNzQtMzYuNSAzMi45LTEwLjQgMTQuMTYtMTggMzAuMy0yMi45IDQ4LjQtNC44NSAxOC4xNy01LjggMzQuMS0yLjkgNDcuOTYgMi45MyAxMy44IDkuMjQgMjQuNDYgMTkgMzEuOSA5Ljc0IDcuNCAyMi4zIDExLjE0IDM3LjYgMTEuMTQgMTIuMyAwIDI0LjA1LTIuNTYgMzUuMi03LjdhODIuMyA4Mi4zIDAgMCAwIDI4LjMzLTIxLjIzbC03IDI2LjE4aDUxLjlsNDcuMzgtMTc2LjdoLTUxLjl6bTI2OS44Ny4wNi4wMy0uMDVoLTMxLjljLTEuMDIgMC0xLjkyLjA1LTIuODUuMDdoLTE2LjU1bC04LjUgMTEuOC0yLjEgMi44LS45IDEuNC02Ny4yNSA5My42OC0xMy45LTEwOS43aC01NS4wOGwyNy45IDE2Ni43LTYxLjYgODUuM2g1NC45bDE0LjktMjEuMTNjLjQyLS42Mi44LTEuMTQgMS4zLTEuOGwxNy40LTI0LjcuNS0uNyA3Ny45My0xMTAuNSA2NS43LTkzIC4xLS4wNmgtLjAzeiIvPjwvc3ZnPg=="
      alt="Paypal"
      role="presentation"
    />
  );
}

RazorpayLogo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

RazorpayLogo.defaultProps = {
  height: 30,
  width: 100
};