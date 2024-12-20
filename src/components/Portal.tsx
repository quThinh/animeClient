import React from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  element: Element;
}

const Portal: React.FC<PortalProps> = ({ children, element }) => {
  return ReactDOM.createPortal(children, element);
};

export default Portal;
