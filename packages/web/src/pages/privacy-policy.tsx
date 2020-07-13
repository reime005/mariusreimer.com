import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Layout from '../components/layout';
import { Intro } from '../components/Styled';

interface Data {
  title: string;
  desc: string;
  date: string;
  location?: string;
  imgSource?: string;
}

export const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro>
          <h1>Privacy Policy</h1>

          <p>
            Our website may be used without entering personal information.
            Different rules may apply to certain services on our site, however,
            and are explained separately below. We collect personal information
            from you (e.g. name, address, email address, telephone number, etc.)
            in accordance with the provisions of German data protection
            statutes. Information is considered personal if it can be associated
            exclusively to a specific natural person. The legal framework for
            data protection may be found in the German Federal Data Protection
            Act (BDSG) and the Telemedia Act (TMG). The provisions below serve
            to provide information as to the manner, extent and purpose for
            collecting, using and processing personal information by the
            provider.
          </p>

          <div
            style={{
              backgroundImage: `url(${require('../assets/email.png')})`,
              backgroundRepeat: 'no-repeat',
              width: 200,
              height: 40,
            }}
          />

          <p>
            Please be aware that data transfer via the internet is subject to
            security risks and, therefore, complete protection against
            third-party access to transferred data cannot be ensured.
          </p>

          <h2>Information Collection and Usage</h2>

          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information. The
            information that we request will be retained on your device and is
            not collected by us in any way. The applications do use third party
            services that may collect information used to identify you.
          </p>

          <p>
            Links to privacy policies of third party service providers used are
            as follow:
          </p>

          <ul>
            <li>
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/admob/answer/6128543?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                AdMob
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/policies/analytics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics for Firebase
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/support/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase Crashlytics
              </a>
            </li>
            <li>
              <a
                href="https://expo.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo
              </a>
            </li>
          </ul>

          <h2>Error Logging</h2>

          <p>
            We want to inform you that whenever you use one of our Services,
            that in a case of an error, we may collect data and information
            (through third party products) on your phone. This data may include
            information such as your device Internet Protocol ("IP") address,
            device name, operating system version, the configuration of the app
            when utilizing the Service, the time and date of your use of the
            Service, and other statistics.
          </p>

          <h2>Service Providers</h2>

          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services;</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            We want to inform users of this Service that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>

          <h2>Contacting Us</h2>

          <p>
            On our website we offer you the opportunity to contact us, either by
            email and/or by using a contact form. In such event, information
            provided by the user is stored for the purpose of facilitating
            communications with the user. No data is transferred to third
            parties. Nor is any of this information matched to any information
            that may be collected by other components of our website.
          </p>

          <h2>Links to Other Sites</h2>

          <p>
            Contents of external websites on which we are linking direct or
            indirect (through „hyperlinks“ or „deeplinks“) are beyond our
            responsibility and are not adopted as our own content. When the
            links were published, we didn’t have knowledge of any illegal
            activities or contents on these websites. Since we do not have any
            control on the contents of these websites, we distance ourselves
            from all contents of all linked websites, which were updated after
            the setting of the links. For all contents and especially damages,
            resulting of the use of the linked websites, only the provider of
            these linked websites can be held liable. If we receive knowledge of
            illegal contents on these linked websites, we will delete the
            according links.
          </p>

          <h2>Contents of the website and apps</h2>

          <p>
            The contents of this website and apps were written with due
            diligence and by the author’s best knowledge. We can be held liable
            only by general laws, especially for our own contents acc. § 7 TMG
            (German law on tele-media) and for external contents acc. §§ 8 – 10
            TMG. As a Provider of tele-media we can be held liable for external
            contents only once we have knowledge of a concrete infringement of
            law. We reserve the right to change or delete contents of this
            webpage which are not subject to any contractual obligation.
          </p>

          <h2>Children</h2>

          <p>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            me with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact me
            so that we will be able to do necessary actions.
          </p>

          <h2>Intellectual Property Rights</h2>

          <p>
            All content of this website, especially texts, pictures, images,
            graphical presentations, music, trademarks, brands and so forth, are
            subject to copyright laws. The use, reproduction and so on are
            subject to the individual rights of the respective owner of the
            copyright or administrator of these rights. If you want to use such
            content, please let us know and we will establish contact with the
            respective owner/administrator.
          </p>

          <h2>Changes to this Policy</h2>

          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. This policy is effective as of 2020-07-06
          </p>

          <h2>Information, Cancellation, Deletion</h2>

          <p>
            On the basis of the Federal Data Protection Act, you may contact us
            at no cost if you have questions relating to the collection,
            processing or use of your personal information, if you wish to
            request the correction, blocking or deletion of the same, or if you
            wish to cancel explicitly granted consent. Please note that you have
            the right to have incorrect data corrected or to have personal data
            deleted, where such claim is not barred by any legal obligation to
            retain this data.
          </p>
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export default PrivacyPolicyPage;
