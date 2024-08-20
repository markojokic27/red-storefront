'use client';

// External packages
import * as React from 'react';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout>
        <LayoutRow>
          <LayoutColumn span={12} lgOffset={2} lgSpan={6}>
            <div className="article">
              <h1>Cookie Policy for Red</h1>
              <p>
                This Cookie Policy explains how Red Fashion Brand ("Red," "we,"
                "us," or "our") uses cookies and similar technologies on our
                website. By using our website, you consent to the use of cookies
                as described in this policy.
              </p>
              <h2>1. What Are Cookies:</h2>
              <p>
                Cookies are small text files that are placed on your computer or
                device when you visit a website. They are widely used to make
                websites work more efficiently and provide a better browsing
                experience. Cookies also enable website owners to collect
                certain information about visitors.
              </p>

              <h2>2. Types of Cookies We Use:</h2>
              <p>We use the following types of cookies on our website:</p>
              <div>
                <ul>
                  <li>
                    <b>Essential Cookies:</b> These cookies are necessary for
                    the operation of our website and enable you to navigate and
                    use its features. They are typically set in response to your
                    actions, such as setting your privacy preferences, logging
                    in, or filling out forms.
                  </li>
                  <li>
                    <b>Analytics and Performance Cookies:</b> These cookies help
                    us understand how visitors interact with our website by
                    collecting information such as the number of visitors, pages
                    visited, and sources of traffic. This data helps us improve
                    our website's performance and usability.
                  </li>
                  <li>
                    <b>Functionality Cookies:</b> These cookies allow our
                    website to remember choices you make (such as language
                    preferences) and provide enhanced features. They may also be
                    used to provide personalized content based on your browsing
                    history.
                  </li>
                  <li>
                    <b>Advertising and Targeting Cookies:</b> These cookies are
                    used to deliver advertisements that are relevant to your
                    interests. They may also be used to limit the number of
                    times you see an advertisement and measure the effectiveness
                    of advertising campaigns.
                  </li>
                </ul>
              </div>
              <h2>3. Third-Party Cookies:</h2>
              <p>
                We may allow third-party service providers, such as analytics
                and advertising companies, to place cookies on our website.
                These third parties may collect information about your online
                activities over time and across different websites.
              </p>
              <h2>4. Cookie Management:</h2>
              <p>
                You can manage and control cookies through your browser
                settings. Most web browsers allow you to block or delete
                cookies. However, please note that blocking or deleting certain
                cookies may impact the functionality and user experience of our
                website.
              </p>

              <p>
                For more information on how to manage cookies, you can visit the
                help or settings section of your browser.
              </p>
              <h2>5. Updates to the Cookie Policy:</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our use of cookies or for other operational, legal,
                or regulatory reasons. We will notify you of any material
                changes by posting a prominent notice on our website.
              </p>

              <h2>6. Contact Us:</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or how we handle your personal information,
                please contact us at:
              </p>
              <p>
                Email: privacy@red.com
                <br />
                Address: [Your Fashion Brand Address]
              </p>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
