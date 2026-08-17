function Footer() {
    return ( 
        <div>
            <footer className="navbar text-dark py-2 footerone">
      <div className="container text-center d-flex justify-content-between footerrr">
        {/* Footer Text */}
        <p className="mb-2 head">
          Developed by <strong>Lavanya Pondru</strong>
        </p>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-5 text-dark">
          <a
            href="https://github.com/Lavanyapondru"
            target="_blank"
            rel="noreferrer"
            className="text-dark text-decoration-none fs-6">
            <i className="bi bi-github me-2"></i>Github Profile 
          </a>
          <a
            href="https://www.linkedin.com/in/lavanya-pondru-b49a8b30b/"
            target="_blank"
            rel="noreferrer"
            className="text-dark text-decoration-none"
          >
            <i className="bi bi-linkedin me-2"></i>Linkedin Profile
          </a>
        </div>
      </div>
    </footer>
        </div>
     );
}

export default Footer;