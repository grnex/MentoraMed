const SocialLinks = () => (
  <li
    aria-haspopup="true"
    className="h-link d-flex"
    id="header-socials"
    style={{ marginTop: '3px' }}
  >
    <a
      href="https://www.facebook.com/profile.php?id=61578524339692#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook da MentoraMed"
      style={{ paddingLeft: '5px', paddingRight: '0' }}
    >
      <span className="flaticon-facebook"></span>
    </a>

    <a
      href="https://www.instagram.com/mentoramed_/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram da MentoraMed"
      style={{ paddingLeft: '0px', paddingRight: '0' }}
    >
      <span className="flaticon-instagram-1"></span>
    </a>

    <a
      href="https://www.linkedin.com/company/mentoramed/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin da MentoraMed"
      style={{ paddingLeft: '0px', paddingRight: '0' }}
    >
      <span className="flaticon-linkedin-sign"></span>
    </a>
  </li>
);

export default SocialLinks;
