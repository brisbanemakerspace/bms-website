import { type LegalData } from "./types/configDataTypes";

// Legal content. The privacy policy is written for Meanjin Makerspace Inc. (t/a Brisbane Makerspace)
// against the Australian Privacy Principles. Have it reviewed by a qualified legal professional
// before relying on it.
const legalData = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How Brisbane Makerspace collects, uses and protects your personal information under the Australian Privacy Act.",
    lastUpdated: "2026-11-07",
    intro:
      "This privacy policy explains how Meanjin Makerspace Inc. (trading as Brisbane Makerspace) (“Brisbane Makerspace”, “we”, “us” or “our”) collects, holds, uses and discloses personal information, and how you can access and correct it or make a complaint. We are a small registered charity and may not be legally bound by the Privacy Act 1988 (Cth), but we aim to handle personal information in line with that Act and the Australian Privacy Principles (APPs), and we will do our best to meet them.",
    introBlocks: [
      "This policy applies when you:",
      {
        list: [
          "visit our website at https://brisbanemaker.space;",
          "visit our wiki, forum, e-learning platform or member portal (wiki., forum., learn. and portal. at brisbanemaker.space);",
          "become a member or otherwise deal with us, including at events, classes and in person.",
        ],
      },
      "Please read it carefully. If you do not agree with how we handle personal information, please stop using our services and contact us.",
    ],
    sections: [
      {
        heading: "1. What personal information we collect",
        body: [
          "Personal information is information or an opinion about an identified individual, or an individual who is reasonably identifiable. We collect only what we reasonably need to run the makerspace and our online services.",
          { subheading: "Information you give us" },
          "When you join as a member, register an account, sign up for a class or event, make a payment, or contact us, we may collect:",
          {
            list: [
              "your name, email address, phone number and mailing address;",
              "your username and password;",
              "membership, induction, training and access records;",
              "payment details and transaction history;",
              "emergency contact details, where you choose to give them;",
              "the content of your messages to us and anything you post on our forum or wiki.",
            ],
          },
          { subheading: "Information collected automatically" },
          "When you visit our websites we and our service providers automatically collect technical information such as your IP address, browser and device type, operating system, language, referring page, the pages you view and when. We use it to keep our services secure and working, and for basic analytics. We also use cookies and similar technologies (see section 6).",
          { subheading: "Sensitive information" },
          "We do not ask for sensitive information (such as health, racial or ethnic origin, or criminal record information) unless it is needed for a specific purpose, for example a safety-related health disclosure for a workshop activity. We only collect it with your consent.",
          { subheading: "Anonymity" },
          "You can browse our public websites without telling us who you are. Where practicable, you may also deal with us anonymously or by pseudonym, but we need your details to provide membership, accounts, payments and access to equipment.",
        ],
      },
      {
        heading: "2. How we collect it",
        body: [
          "We collect personal information directly from you (online forms, our member portal, email, in person, at events), from your use of our websites and services, and occasionally from third parties you have authorised, such as when you sign in using a third-party account. If we receive information we did not ask for and are not permitted to keep, we will destroy or de-identify it as soon as practicable.",
        ],
      },
      {
        heading: "3. Why we collect, hold and use it",
        body: [
          "We use personal information for the purposes for which it was collected, or related purposes you would reasonably expect, including to:",
          {
            list: [
              "create and manage your membership and accounts;",
              "provide access to our space, equipment, courses, wiki, forum and learning platform;",
              "process payments and issue receipts;",
              "respond to enquiries and provide support;",
              "send administrative information, such as changes to our terms and policies;",
              "run events, competitions and activities you choose to take part in;",
              "keep our members, premises and services safe and secure, including preventing fraud and misuse;",
              "meet our legal and regulatory obligations, including as an incorporated association; and",
              "improve our services through analytics.",
            ],
          },
          "We aim not to use or disclose your personal information for another purpose unless you consent, the use is otherwise permitted by the Privacy Act 1988 (Cth), or it is required or authorised by law.",
        ],
      },
      {
        heading: "4. Who we disclose it to",
        body: [
          "We do not sell your personal information. We may disclose it to:",
          {
            list: [
              "service providers that help us operate, such as website hosting, email delivery, payment processing, data analytics, our newsletter provider (Mailchimp), our workshop booking and gift card provider (ClassBento) and Google (for the embedded events calendar);",
              "other members, but only information you choose to make public (for example forum posts and profile details);",
              "the public, in the case of webcam snapshots published on our website (see section 7);",
              "professional advisers, insurers and auditors;",
              "government bodies, regulators or law enforcement where required or authorised by law, or to prevent a serious threat to someone’s safety; and",
              "a successor organisation if the makerspace’s operations are transferred.",
            ],
          },
          "We aim to allow our service providers to use your information only to provide services to us.",
        ],
      },
      {
        heading: "5. Overseas disclosure",
        body: [
          "Some of our service providers store or process data outside Australia — for example global hosting and content-delivery networks, email delivery and payment processors, which may be located in the United States or other countries. Before disclosing personal information overseas we aim to take reasonable steps to make sure the recipient handles it in a way consistent with the Australian Privacy Principles, or we rely on your consent or another exception in APP 8.",
        ],
      },
      {
        heading: "6. Cookies and similar technologies",
        body: [
          "Our websites use cookies and similar technologies for essential functions (such as keeping you signed in) and to understand how the site is used. Most browsers let you refuse or delete cookies; if you do, parts of our services may not work properly. We do not respond to “Do Not Track” signals because there is no agreed standard for them.",
        ],
      },
      {
        heading: "7. CCTV and webcams",
        body: [
          "For the safety and security of our members, visitors and premises, we operate CCTV cameras outside in the driveway area and throughout the inside of the space. The cameras record video and may also record audio. Signs at our entry points and inside the premises tell you that cameras are operating.",
          "We keep CCTV recordings for approximately 3 months, after which they are deleted or overwritten, unless we need to keep a recording for longer to investigate an incident, or the law requires it. Access to recordings is limited to a small number of authorised people, and we only use or disclose them for safety, security and incident-investigation purposes, to meet our legal obligations, or to give them to police or other authorities where required or authorised by law.",
          { subheading: "Public webcam snapshots" },
          "We publish still images (snapshots) from webcams covering the public areas of the space on our website. These are publicly visible, so people in those areas may appear in them. They are published so that members and the community can see whether the space is open and how busy it is. We do not publish audio.",
        ],
      },
      {
        heading: "8. Direct marketing",
        body: [
          "We may send you information about our activities, classes and events where you have consented or would reasonably expect it — including our newsletter, if you subscribe through the form on this website (we collect your first name and email address, which are stored by Mailchimp). Every marketing message includes a way to opt out, and you can also opt out at any time by emailing hello@brisbanemaker.space. We will still send you service messages that are necessary for your membership or account.",
        ],
      },
      {
        heading: "9. Keeping your information secure and how long we keep it",
        body: [
          "We aim to take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, modification or disclosure, through technical and organisational measures such as access controls, encryption in transit and limiting access to those who need it. No internet transmission or storage is completely secure, so we cannot guarantee absolute security.",
          "We keep personal information only for as long as we need it for the purposes above or as the law requires (for example, financial and association records). When we no longer need it, we take reasonable steps to destroy or de-identify it.",
          "If a data breach is likely to result in serious harm to you, we aim to follow the Notifiable Data Breaches scheme and notify you and the Office of the Australian Information Commissioner (OAIC).",
        ],
      },
      {
        heading: "10. Accessing and correcting your information",
        body: [
          "You can ask us for access to the personal information we hold about you, and ask us to correct it if it is inaccurate, out of date, incomplete, irrelevant or misleading. You can also update many details yourself by logging in to your account. This includes asking about CCTV footage that shows you, although we may not be able to give access to footage that also shows other people or has already been deleted under our retention period. To make a request, email hello@brisbanemaker.space. We aim to respond within a reasonable period (usually within 30 days). We may need to verify your identity first, and in limited circumstances (such as those allowed by the Privacy Act) we may refuse access or correction — if we do, we will explain why in writing.",
        ],
      },
      {
        heading: "11. Children",
        body: [
          "Our services are intended for adults. We do not knowingly collect personal information from children under 18 without the consent of a parent or guardian. If you believe a child has given us personal information without that consent, contact us and we will take reasonable steps to delete it.",
        ],
      },
      {
        heading: "12. Privacy complaints",
        body: [
          "If you have a concern about how we have handled your personal information, please contact us at hello@brisbanemaker.space with the details. We aim to acknowledge your complaint promptly and respond within 30 days.",
          "If you are not satisfied with our response, you may be able to complain to the Office of the Australian Information Commissioner (OAIC): by phone on 1300 363 992, online at www.oaic.gov.au, or by post to GPO Box 5288, Sydney NSW 2001.",
        ],
      },
      {
        heading: "13. Changes to this policy",
        body: [
          "We may update this policy from time to time. The current version is always published on this page with its “last updated” date, and takes effect when it is published. If we make a material change we may also notify you directly.",
        ],
      },
      {
        heading: "14. Contact us",
        body: [
          "Questions or concerns about this policy or your personal information can be sent to our privacy contact at hello@brisbanemaker.space.",
          "Meanjin Makerspace Inc. (trading as Brisbane Makerspace)",
          "Brisbane, Queensland, Australia",
        ],
      },
    ],
  },
} satisfies LegalData;

export default legalData;
