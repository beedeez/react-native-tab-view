// @ts-nocheck
export const isIE = () => {
  if (
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined' &&
    typeof window.navigator.userAgent === 'string'
  ) {
    const ua = window.navigator.userAgent; // Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); // IE 11
    const edge = ua.indexOf('Edge');

    return msie > 0 || trident > 0 || edge > 0;
  }

  return false;
};
