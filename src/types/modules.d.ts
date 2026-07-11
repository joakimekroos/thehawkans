declare module 'react-ga' {
  interface ReactGA {
    initialize(trackingId: string): void;
    pageview(path: string): void;
  }

  const ReactGA: ReactGA;
  export default ReactGA;
}

declare module 'react-meta-tags' {
  import { ComponentType, ReactNode } from 'react';

  interface MetaTagsProps {
    children?: ReactNode;
  }

  const MetaTags: ComponentType<MetaTagsProps>;
  export default MetaTags;
}

declare module 'reactstrap';
