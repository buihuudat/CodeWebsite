const reportWebVitals = onPerEntry => {
  if (onPerEntry && onPerEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCD, getLCP, getTTFB }) => {
      getCLS(onPerEntry);
      getFCD(onPerEntry);
      getFID(onPerEntry);
      getLCP(onPerEntry);
      getTTFB(onPerEntry);
    });
  }
};

export default reportWebVitals;