declare module 'react-ga' {
  interface ReactGA {
    initialize(trackingId: string): void;
    pageview(path: string): void;
  }

  const ReactGA: ReactGA;
  export default ReactGA;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}
