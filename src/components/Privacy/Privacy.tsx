import styles from "./Privacy.module.scss"

export default function Privacy() {
  return (
    <div className={styles.privacy}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <p className={styles.text}>
          Your privacy is important to us. This policy explains how we collect,
          use and protect your personal information.
        </p>

        <div className={styles.content}>
          <h2>Information we collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, shipping address and payment details when you use our
            website or services.
          </p>

          <h2>How we use your information</h2>
          <p>
            Your information is used to process orders, provide customer
            support, improve our services and communicate with you about your
            account or purchases.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze site
            traffic and personalize content.
          </p>

          <h2>Data protection</h2>
          <p>
            We take appropriate security measures to protect your personal data
            against unauthorized access, alteration or disclosure.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at hello@avion.co.uk.
          </p>
        </div>
      </div>
    </div>
  )
}
