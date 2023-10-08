// import React, { useState, useEffect } from 'react';

// const DownloadPWA = () => {
//  const [promptInstall, setPromptInstall] = useState(null);

//  const handleInstall = () => {
//     if (!promptInstall) return;
//     promptInstall.prompt();
//     promptInstall.userChoice.then((choice) => {
//       if (choice.outcome === 'accepted') {
//         console.log('PWA installed');
//       } else {
//         console.log('PWA installation dismissed');
//       }
//       setPromptInstall(null);
//     });
//  };

//  useEffect(() => {
//     const handler = (e) => {
//       e.preventDefault();
//       setPromptInstall(e);
//     };
//     window.addEventListener('beforeinstallprompt', handler);
//     return () => window.removeEventListener('beforeinstallprompt', handler);
//  }, []);

//  return (
//     <button onClick={handleInstall} className='text-gray-200 py-4'>
//       {promptInstall ? 'دانلود نرم افزار' : 'نرم افزار نصب شده '}
//     </button>
//  );
// };

// export default DownloadPWA;