import React, { useEffect } from 'react';
import { Box } from '@mui/material';

const WeatherWidget: React.FC = () => {
  useEffect(() => {
    const scriptId = 'tomorrow-sdk';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).__TOMORROW__) {
          (window as any).__TOMORROW__.renderWidget();
        }
      };
      document.body.appendChild(script);
    } else if ((window as any).__TOMORROW__) {
      (window as any).__TOMORROW__.renderWidget();
    }
  }, []);

  return (
 
      <div
        className="tomorrow"
        data-location-id="132132"
        data-language="EN"
        data-unit-system="METRIC"
        data-skin="light"
        data-widget-type="summary"
        style={{ paddingBottom: '22px', position: 'relative' }}
      >
        <a
          href="https://www.tomorrow.io/weather-api/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{
            position: 'absolute',
            bottom: 0,
            transform: 'translateX(-50%)',
            left: '50%',
          }}
        >
          <img
            alt="Powered by the Tomorrow.io Weather API"
            src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
            width="250"
            height="18"
          />
        </a>
      </div>
 
  );
};

export default WeatherWidget;
