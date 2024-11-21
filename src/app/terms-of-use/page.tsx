import React from 'react';

export default function TermsOfUse() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 className="text-2xl font-bold mb-4">Terms of Use</h1>
            <section className="text-sm max-w-2xl">
              <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
              <p className="mb-4">By using IWITHLINK, you agree to these Terms of Use. If you disagree with any part of these terms, please do not use our extension.</p>
              
              <h2 className="text-lg font-semibold mb-2">2. Description of Service</h2>
              <p className="mb-4">IWITHLINK is a Chrome extension that provides advanced bookmark management features, allowing users to organize, categorize, and efficiently manage their browser bookmarks.</p>
              
              <h2 className="text-lg font-semibold mb-2">3. Privacy and Data Usage</h2>
              <p className="mb-4">We are committed to protecting your privacy. All bookmark data is handled in accordance with our Privacy Policy, which we encourage you to review for complete understanding of our data practices.</p>
              
              <h2 className="text-lg font-semibold mb-2">4. User Responsibilities</h2>
              <p className="mb-4">You are responsible for managing your bookmarks and maintaining their organization. While our extension facilitates bookmark management, you are responsible for any data loss that may occur through your use of the service.</p>
              
              <h2 className="text-lg font-semibold mb-2">5. Intellectual Property</h2>
              <p className="mb-4">IWITHLINK and its original content, features, and functionality are owned by IWITHLINK and are protected by international copyright, trademark, and other intellectual property laws. Our extension name and logos may not be used without explicit permission.</p>
              
              <h2 className="text-lg font-semibold mb-2">6. Limitation of Liability</h2>
              <p className="mb-4">IWITHLINK is provided "as is" without any warranties of any kind. We shall not be liable for any damages, including but not limited to, damage to bookmarks or loss of bookmark data, arising from your use of our extension.</p>
              
              <h2 className="text-lg font-semibold mb-2">7. Changes to Terms</h2>
              <p className="mb-4">We reserve the right to modify these terms at any time. We will notify users of any material changes through our extension or website. Your continued use of IWITHLINK after such modifications constitutes acceptance of the updated terms.</p>
              
              <h2 className="text-lg font-semibold mb-2">8. Contact</h2>
              <p className="mb-4">For any questions regarding these Terms of Use, please contact us at iwithlink@gmail.com.</p>
            </section>
          </main>
        </div>
      );
}