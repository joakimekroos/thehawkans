import React, { useEffect } from 'react';

interface MetaTagsProps {
  children?: React.ReactNode;
}

function applyMeta(children: React.ReactNode) {
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (child.type === 'title') {
      document.title = React.Children.toArray(
        (child.props as { children?: React.ReactNode }).children
      ).join('');
      return;
    }

    if (child.type !== 'meta') {
      return;
    }

    const { name, property, content } = child.props as {
      name?: string;
      property?: string;
      content?: string;
    };

    let selector = '';
    if (name) {
      selector = `meta[name="${name}"]`;
    } else if (property) {
      selector = `meta[property="${property}"]`;
    }

    if (!selector || content == null) {
      return;
    }

    let element = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      if (name) {
        element.setAttribute('name', name);
      }
      if (property) {
        element.setAttribute('property', property);
      }
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });
}

const MetaTags: React.FC<MetaTagsProps> = ({ children }) => {
  useEffect(() => {
    applyMeta(children);
  }, [children]);

  return null;
};

export default MetaTags;
