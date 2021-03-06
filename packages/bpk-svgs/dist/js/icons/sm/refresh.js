function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M21.3 12H20c0-4.4-3.6-8-8-8-1.8 0-3.5.6-4.8 1.6-.5.4-.5 1.1-.1 1.5s.9.4 1.3.1C9.4 6.4 10.7 6 12 6c3.3 0 6 2.7 6 6h-1.3c-.5 0-.9.6-.6 1l2.3 3.7c.3.4.9.4 1.2 0l2.3-3.7c.3-.4-.1-1-.6-1zm-5.7 4.8c-1 .8-2.2 1.2-3.6 1.2-3.3 0-6-2.7-6-6h1.3c.5 0 .9-.6.6-1L5.6 7.3c-.3-.4-.9-.4-1.2 0L2.1 11c-.3.4.1 1 .6 1H4c0 4.4 3.6 8 8 8 1.8 0 3.5-.6 4.8-1.6.5-.4.5-1.1.1-1.5s-.9-.4-1.3-.1z" /></svg>;
});