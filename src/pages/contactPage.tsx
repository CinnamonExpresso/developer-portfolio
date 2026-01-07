const ContactItem = ({
  title,
  subtitle,
  link,
  is_custom = false,
}: {
  title: string;
  subtitle: string;
  link: string;
  is_custom: boolean;
}) => {
  return (
    <div className="contact-item">
      <span className="contact-label">{title}</span>
      <a href={is_custom ? `${link}` : `https://${link}`}>{subtitle}</a>
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Contact</h1>
        <p className="page-subtitle">
          Feel free to reach out if you’d like to collaborate.
        </p>
      </header>
      <section className="contact-content">
        <ContactItem
          title="Email"
          link="mailto:contact@pumped.dev"
          subtitle="contact@pumped.dev"
          is_custom={true}
        />
        <ContactItem
          title="GitHub"
          link="github.com/CinnamonExpresso"
          subtitle="github.com/CinnamonExpresso"
          is_custom={false}
        />
        <ContactItem
          title="YouTube"
          link="https://www.youtube.com/@pumped212"
          subtitle="Coming Soon"
          is_custom={true}
        />
      </section>
    </div>
  );
}
