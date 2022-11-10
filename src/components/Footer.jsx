import React from "react";

function Footer() {
  return (
    <footer className='bg-dark mt-3'>
      <div className='container'>
        <div className='row d-flex align-items-baseline'>
          <div className='col-md-4 text-muted text-center text-lg-start py-1 py-md-3'>
            Copyright &copy; New Design 2022
          </div>
          <div className='col-md-4 text-center py-2 py-md-3'>
            <a
              href='https://www.linkedin.com/in/unaldutlu/'
              className='mx-2 btn btn-info rounded-4 text-white'
            >
              <i className='bi bi-linkedin'></i>
            </a>
            <a
              href='https://github.com/unaldutlu'
              className='mx-2 btn btn-primary rounded-4'
            >
              <i className='bi bi-github'></i>
            </a>
            <a
              href='https://mail.google.com/mail/u/0/?hl=tr&tf=cm&fs=1&to=unaldutlu@gmail.com'
              className='mx-2 btn btn-danger rounded-4'
            >
              <i className='bi bi-envelope-fill'></i>
            </a>
          </div>
          <div className='col-md-4 py-2 py-md-3 text-center text-md-start text-lg-end'>
            <a className='me-3 me-md-1 me-lg-3 text-decoration-none fst-italic text-muted'>
              Privacy Policy
            </a>
            <a href='#' className='fst-italic text-decoration-none'>
              Home page <i className='bi bi-arrow-up-circle-fill'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
