import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        
        <section className="text-sm max-w-2xl">
          <p className="mb-4">At BookmarkCat, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension for bookmark management.</p>
          
          <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-4">We collect only the bookmark data that you choose to manage through our extension, including bookmark titles, URLs, and any organizational structures you create. We do not collect any personal information beyond what is necessary for the core functionality of our bookmark management features.</p>
          
          <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">The information we collect is used solely for providing and improving our bookmark management services. This includes organizing, categorizing, and syncing your bookmarks. We do not use this information for any other purpose, nor do we share it with third parties.</p>
          
          <h2 className="text-lg font-semibold mb-2">3. Data Storage and Security</h2>
          <p className="mb-4">Your bookmark data is stored locally in your browser using Chrome&quot;s storage API. Any cloud synchronization is handled through your Chrome account&quot;s built-in sync features. We implement industry-standard security measures to protect your data during all operations.</p>
          
          <h2 className="text-lg font-semibold mb-2">4. Your Rights and Choices</h2>
          <p className="mb-4">You have full control over your bookmark data. You can add, modify, or delete your bookmarks at any time through our extension. You can also choose to disable or uninstall our extension, which will not affect your existing Chrome bookmarks.</p>
          
          <h2 className="text-lg font-semibold mb-2">5. Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through our extension or website.</p>
          
          <h2 className="text-lg font-semibold mb-2">6. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy or our practices, please contact us at lnmput@gmail.com.</p>
        </section>
      </main>
    </div>
  );
}