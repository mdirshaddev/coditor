'use client';

// React
import { Fragment, memo } from 'react';

/**
 * A React component that is memoized.
 * @returns inline js script
 */
// eslint-disable-next-line react/display-name
const ColorSchemeScript = memo(
  (props) => {
    /**
     * This script renders before the react tree is added to browser
     * with this i can toggle theme mode before the component uses the tailwind styles
     */
    const scriptSrc = (() => {
      return `(function () {
  try {
    var mode = localStorage.getItem('mui-mode');
    var supportDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    if (mode === 'light') {
      document.documentElement.setAttribute('data-mui-color-scheme','light')
    } else {
      document.documentElement.setAttribute('data-mui-color-scheme','dark')
    }
    if (mode === 'system') {
      if (supportDarkMode) {
        document.documentElement.setAttribute('data-mui-color-scheme','dark')
      } else {
        document.documentElement.setAttribute('data-mui-color-scheme','light')
      }
    }
  } catch (e) {
    console.log(e)
  }
})();`;
    })();
    return (
      <Fragment>
        <script
          id="color-scheme-hydration"
          dangerouslySetInnerHTML={{
            __html: scriptSrc,
          }}
        />
      </Fragment>
    );
  },
  () => true,
);

export { ColorSchemeScript };
