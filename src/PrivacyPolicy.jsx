import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={page}>
      <button onClick={() => window.history.back()} style={backBtn}>
        ← Back
      </button>
      <h1 style={heading}>Privacy Policy</h1>

      <p style={meta}>Effective Date: April 9, 2026</p>
      <p style={meta}>Version 1.0</p>
      <p style={meta}>Owner: Mary Geter | Licensed Operator: Chat Chew and Do Empowerment Women Group (CCDEW)</p>

      <p style={bold}>Your privacy is not an afterthought here. Beyond the Hairline™ was built specifically for people with scarring alopecia — a community that has too often felt unseen by the healthcare system. The information you share in this App is personal, sensitive, and yours. This Privacy Policy is our commitment to you about how we handle it.</p>

      <h2 style={sectionHead}>1. Who We Are</h2>
      <p style={text}>Owner: Mary Geter, doing business as Beyond the Hairline™</p>
      <p style={text}>Licensed Operator: Chat Chew and Do Empowerment Women Group (CCDEW), a Mississippi nonprofit corporation</p>
      <p style={text}>Email: mgeter@601sistas.com</p>
      <p style={text}>Website: beyondthehairline.com</p>
      <p style={text}>CCDEW operates the App under a Trademark License Agreement with Mary Geter and is bound by the same privacy obligations as the Owner. References to "we," "us," or "our" throughout this policy include both the Owner and CCDEW in their respective capacities.</p>

      <h2 style={sectionHead}>2. Scope of This Policy</h2>
      <p style={text}>This Privacy Policy applies to all personal information collected through the Beyond the Hairline™ App, including information collected during account registration, during use of the App's tracking and documentation features, through SMS verification, and through any communications you have with us.</p>
      <p style={text}>This policy does not apply to third-party websites or services that may be linked from the App. We encourage you to review the privacy policies of any third-party services you access.</p>

      <h2 style={sectionHead}>3. Information We Collect</h2>

      <h3 style={subHead}>3a. Account Registration Information</h3>
      <p style={text}>When you create an account, we collect:</p>
      <ul style={list}>
        <li>Your preferred name or display name</li>
        <li>Email address</li>
        <li>Mobile phone number (for one-time SMS verification)</li>
        <li>Password (stored in encrypted, hashed form — we never store your plaintext password)</li>
      </ul>

      <h3 style={subHead}>3b. Health and Tracking Information</h3>
      <p style={text}>When you use the App's tracking features, you may provide:</p>
      <ul style={list}>
        <li>Symptom logs and severity ratings</li>
        <li>Hair care routine information, including products used</li>
        <li>Treatment history and clinical notes</li>
        <li>Medical appointment preparation records</li>
        <li>Scalp and hair photographs</li>
        <li>Condition-related notes and personal observations</li>
      </ul>
      <p style={bold}>Your Choice: All health tracking information is entirely voluntary. You choose what to enter, what to photograph, and what to document. You can use as much or as little of the App as you find helpful.</p>

      <h3 style={subHead}>3c. Technical Information</h3>
      <p style={text}>We automatically collect limited technical data necessary to operate the App securely:</p>
      <ul style={list}>
        <li>Device type and operating system version</li>
        <li>App version number</li>
        <li>Session timestamps (login and logout times)</li>
        <li>Error logs for security monitoring and troubleshooting</li>
      </ul>
      <p style={text}>We do not use third-party behavioral analytics platforms, advertising trackers, or social media pixels in the App.</p>

      <h3 style={subHead}>3d. Information We Do Not Collect</h3>
      <p style={text}>We do not collect Social Security numbers, financial account information, government-issued identification numbers, insurance information, or biometric identifiers such as fingerprints or facial recognition data.</p>

      <h2 style={sectionHead}>4. How We Use Your Information</h2>

      <h3 style={subHead}>4a. To Operate the App</h3>
      <p style={text}>We use your information to create and maintain your account, enable all App features including symptom tracking and photo storage, send your one-time SMS account verification code, respond to your support requests and communications, and maintain the security and integrity of the App.</p>

      <h3 style={subHead}>4b. To Improve the App</h3>
      <p style={text}>We may use aggregated, de-identified usage patterns (never individual user data) to understand which features are most useful, identify technical issues, and improve the App experience. This analysis never involves your personal health information in identifiable form.</p>

      <h3 style={subHead}>4c. What We Will Never Do</h3>
      <p style={text}>We will never:</p>
      <ul style={list}>
        <li>Sell your personal information or health data to any third party</li>
        <li>Share your data with advertisers or use it for advertising targeting</li>
        <li>Use your health data to train AI or machine learning models without your explicit written consent</li>
        <li>Use your data for research without IRB approval and your separate written informed consent</li>
        <li>Share your data with the Scarring Alopecia Foundation or any other institution without your separate written consent and a formal data sharing agreement</li>
      </ul>

      <h2 style={sectionHead}>5. Research and Data Governance</h2>

      <h3 style={subHead}>5a. Current Status</h3>
      <p style={bold}>Current Status: As of the effective date of this Privacy Policy, the App is in pre-launch beta. No user data is being collected, used, or shared for any research purpose. The App is being developed in preparation for an IRB-approved research study.</p>

      <h3 style={subHead}>5b. IRB-Governed Research</h3>
      <p style={text}>If and when an IRB-approved research study is initiated, the following protections will apply without exception:</p>
      <ul style={list}>
        <li>You will be contacted separately and provided with the full IRB-approved informed consent document before any research use of your data.</li>
        <li>You will have adequate time to review the consent document and ask questions.</li>
        <li>Your decision to participate or decline will be entirely voluntary and will have no effect on your ability to use the App.</li>
        <li>You may withdraw from any research study at any time without penalty or consequence.</li>
        <li>Any data used for research will be governed by the IRB-approved protocol, which will specify permissible uses, data handling requirements, and participant protections.</li>
      </ul>

      <h3 style={subHead}>5c. SAF Data Partnership</h3>
      <p style={text}>Beyond the Hairline™ is pursuing a formal research and data partnership with the Scarring Alopecia Foundation (SAF) to support the development of a national scarring alopecia patient registry. Any data sharing with SAF will occur only when all of the following conditions are met:</p>
      <ul style={list}>
        <li>An IRB has approved the research protocol governing the data sharing</li>
        <li>A formal Data Sharing Agreement is executed between Beyond the Hairline™ and SAF</li>
        <li>You have provided separate, explicit written informed consent for your data to be included</li>
        <li>Data is de-identified in accordance with HIPAA Safe Harbor or Expert Determination standards prior to sharing</li>
      </ul>

      <h3 style={subHead}>5d. HIPAA Alignment</h3>
      <p style={text}>Beyond the Hairline™ is not currently a HIPAA covered entity. However, we voluntarily adopt HIPAA-aligned data protection standards because your health information deserves that level of protection. Specifically, we follow principles consistent with the HIPAA Privacy Rule and Security Rule, including minimum necessary use, access controls, and breach notification standards. If the App's role expands through a covered entity partnership or federally funded research, this policy will be updated and you will be notified.</p>

      <h3 style={subHead}>5e. Data Governance Framework</h3>
      <p style={text}>Detailed data governance provisions, including data access controls, roles and responsibilities, audit procedures, breach response protocols, and the research data lifecycle, are set forth in the Beyond the Hairline™ Data Governance Framework, which is incorporated by reference into this Privacy Policy and is available upon request to IRB reviewers, institutional partners, and funding agencies.</p>

      <h2 style={sectionHead}>6. How We Share Your Information</h2>
      <p style={text}>We do not sell, rent, or trade your personal information. We share information only in the following limited and controlled circumstances:</p>

      <h3 style={subHead}>6a. Service Providers</h3>
      <p style={text}>We work with the following trusted service providers who access your data only as necessary to provide their services and are bound by confidentiality agreements and data processing terms:</p>
      <ul style={list}>
        <li>Supabase (database hosting, authentication, and row-level security)</li>
        <li>Twilio (one-time SMS verification)</li>
      </ul>
      <p style={text}>These providers are prohibited from using your data for their own purposes or sharing it with others.</p>

      <h3 style={subHead}>6b. Legal Requirements</h3>
      <p style={text}>We may disclose your information if required by applicable law, regulation, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect the rights, property, or safety of Beyond the Hairline™, our users, or the public.</p>

      <h3 style={subHead}>6c. Business Transitions</h3>
      <p style={text}>In the event of a merger, acquisition, or transfer of substantially all of the App's assets, we will provide you with at least 30 days' advance notice and ensure that your data is protected under terms no less protective than this Privacy Policy.</p>

      <h3 style={subHead}>6d. Research</h3>
      <p style={text}>Only with your explicit, separate written informed consent and subject to IRB approval and a formal data sharing agreement, as described in Section 5.</p>

      <h2 style={sectionHead}>7. Data Security</h2>

      <h3 style={subHead}>7a. Technical Safeguards</h3>
      <p style={text}>We implement the following security measures to protect your information:</p>
      <ul style={list}>
        <li>Encryption in transit using TLS 1.2 or higher for all data transmitted to and from the App</li>
        <li>Encrypted storage of all passwords using industry-standard hashing algorithms</li>
        <li>Row-level security in our database, ensuring each user can only access their own data</li>
        <li>Phone number verification at account creation to prevent unauthorized account access</li>
        <li>Secure, access-controlled cloud infrastructure through Supabase</li>
      </ul>

      <h3 style={subHead}>7b. Limitations</h3>
      <p style={text}>No data security system is impenetrable. While we implement reasonable and industry-standard security measures, we cannot guarantee absolute security of your information. You acknowledge and accept this inherent risk when using any internet-connected service.</p>

      <h2 style={sectionHead}>8. Your Rights</h2>
      <p style={text}>You have the following rights with respect to your personal information:</p>
      <ul style={list}>
        <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
        <li><strong>Deletion:</strong> Request deletion of your account and associated personal data</li>
        <li><strong>Portability:</strong> Request an export of your health data in a standard format</li>
        <li><strong>Withdrawal of Consent:</strong> Withdraw consent for any optional data use, including research participation</li>
        <li><strong>Restriction:</strong> Request that we restrict processing of your data in certain circumstances</li>
      </ul>
      <p style={text}>To exercise any of these rights, contact us at mgeter@601sistas.com. We will acknowledge your request within 5 business days and fulfill it within 30 days. If we are unable to fulfill your request, we will explain why.</p>

      <h2 style={sectionHead}>9. Data Retention</h2>
      <p style={text}>We retain your account and associated health data for as long as your account remains active or as otherwise necessary to provide services.</p>
      <p style={text}>If you request account deletion, we will delete your personal data within 60 days of receiving your verified request, except where:</p>
      <ul style={list}>
        <li>We are required by applicable law or regulation to retain the data for a longer period</li>
        <li>The data has been de-identified and contributed to a research dataset with your prior written consent, in which case the de-identified data may be retained as part of that research record</li>
        <li>The data is necessary to resolve a pending dispute or enforce our agreements</li>
      </ul>

      <h2 style={sectionHead}>10. Children's Privacy</h2>
      <p style={text}>The App is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a minor has created an account, we will promptly delete the account and associated information. If you believe a minor is using the App, please contact us at mgeter@601sistas.com.</p>

      <h2 style={sectionHead}>11. Changes to This Policy</h2>
      <p style={text}>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the App's features. If we make material changes — particularly changes that affect how we use your health data or whether we share it for research — we will:</p>
      <ul style={list}>
        <li>Notify you by email at least 30 days before the changes take effect</li>
        <li>Post a prominent notice in the App</li>
        <li>Where required, obtain your renewed consent</li>
      </ul>

      <h2 style={sectionHead}>12. Contact Us</h2>
      <p style={text}>If you have questions, concerns, or requests related to this Privacy Policy or our data practices, please contact:</p>
      <p style={text}>Mary Geter | Beyond the Hairline™</p>
      <p style={text}>Email: mgeter@601sistas.com</p>
      <p style={text}>Website: beyondthehairline.com</p>
      <p style={text}>Mailing Address: Available upon written request</p>

      <div style={footer}>
        Beyond the Hairline™ | Privacy Policy | beyondthehairline.com | mgeter@601sistas.com
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#F4F0FA",
  fontFamily: "'DM Sans', sans-serif",
  padding: "32px 24px",
  maxWidth: 700,
  margin: "0 auto",
};

const backBtn = {
  background: "#5B4B7A",
  color: "#F4F0FA",
  border: "none",
  borderRadius: 10,
  padding: "10px 22px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  marginBottom: 32,
};

const heading = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 32,
  fontWeight: 800,
  color: "#2D1B5C",
  marginBottom: 8,
};

const meta = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  color: "#5B4B7A",
  margin: "2px 0",
};

const sectionHead = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 22,
  fontWeight: 700,
  color: "#2D1B5C",
  marginTop: 32,
  marginBottom: 12,
};

const subHead = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 17,
  fontWeight: 700,
  color: "#5B4B7A",
  marginTop: 20,
  marginBottom: 8,
};

const text = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 15,
  color: "#2D1B5C",
  lineHeight: 1.7,
  margin: "8px 0",
};

const bold = {
  ...text,
  fontWeight: 700,
};

const list = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 15,
  color: "#2D1B5C",
  lineHeight: 1.7,
  paddingLeft: 24,
  margin: "8px 0",
};

const footer = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  color: "#5B4B7A",
  textAlign: "center",
  marginTop: 48,
  paddingTop: 24,
  borderTop: "1px solid #C4B0E0",
};
