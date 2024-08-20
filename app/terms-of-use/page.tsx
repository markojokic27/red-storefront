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
              <h1>Terms of Use for Red</h1>
              <p>
                Welcome to Red Fashion Brand ("Red," "we," "us," or "our").
                These Terms of Use govern your access to and use of our website,
                products, and services. By accessing or using our platform, you
                agree to be bound by these terms and conditions. If you do not
                agree with any part of these terms, please do not use our
                website.
              </p>
              <h2>1. What Are Cookies:</h2>
              <p>
                All content and materials on our website, including text,
                graphics, logos, images, videos, and trademarks, are the
                property of Red or its licensors and are protected by
                intellectual property laws. You may not use, reproduce, modify,
                or distribute any of our content without our prior written
                permission.
              </p>

              <h2>2. Use of the Website:</h2>
              <p>
                a. Eligibility: You must be at least 16 years old to use our
                website. If you are under the age of 18, you should review these
                terms with a parent or guardian to ensure their understanding
                and agreement.
              </p>
              <p>
                b. User Account: Some features of our website may require you to
                create an account. You are responsible for maintaining the
                confidentiality of your account credentials and are solely
                responsible for any activity that occurs under your account.
              </p>
              <p>
                c. Prohibited Activities: You agree not to engage in any of the
                following activities:
              </p>
              <ul>
                <li>
                  Violating any applicable laws or regulations. Collecting or
                  harvesting any information from our website without our
                  consent.
                </li>
                <li>
                  Impersonating any person or entity or falsely representing
                  your affiliation with any person or entity.
                </li>
                <li>
                  Interfering with or disrupting the functionality of our
                  website or servers.
                </li>
                <li>
                  Uploading or transmitting any viruses, malware, or other
                  malicious code.
                </li>
                <li>
                  Collecting or harvesting any information from our website
                  without our consent.
                </li>
              </ul>
              <h2>3. Third-Party Links and Content:</h2>
              <p>
                Our website may contain links to third-party websites or display
                content from third parties. We do not endorse or control these
                third-party websites or content, and your use of them is at your
                own risk. We are not responsible for the accuracy, reliability,
                or legality of any third-party websites or content.
              </p>
              <h2>4. Disclaimer of Warranties:</h2>
              <p>
                Our website is provided on an "as is" and "as available" basis.
                We do not make any warranties, express or implied, regarding the
                operation, availability, or accuracy of our website or the
                content therein. Your use of our website is at your sole risk.
              </p>

              <h2>5. Limitation of Liability:</h2>
              <p>
                To the maximum extent permitted by law, Red and its affiliates,
                officers, directors, employees, and agents shall not be liable
                for any direct, indirect, incidental, consequential, or special
                damages arising out of or in connection with your use of our
                website, even if advised of the possibility of such damages.
              </p>
              <h2>6. Indemnification:</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Red and its
                affiliates, officers, directors, employees, and agents from and
                against any claims, liabilities, damages, losses, and expenses,
                including reasonable attorney's fees, arising out of or in
                connection with your use of our website or violation of these
                Terms of Use.
              </p>

              <h2>7. Modifications to the Terms:</h2>
              <p>
                We may update or modify these Terms of Use at any time without
                prior notice. Any changes will be effective immediately upon
                posting on our website. Your continued use of our website after
                the changes constitutes your acceptance of the modified terms.
              </p>
              <h2>8. Governing Law and Jurisdiction:</h2>
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with the laws of [Jurisdiction]. Any disputes arising
                out of or in connection with these terms shall be subject to the
                exclusive jurisdiction of the courts of [Jurisdiction].
              </p>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
