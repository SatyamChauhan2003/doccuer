import React from "react";

const Doc_tpl = () => {
  return (
    <div className="main-wrapper">
      <header className="header header-custom header-fixed header-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="index-2" className="navbar-brand logo">
                <img
                  src="/component_assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="index-2" className="menu-logo">
                  <img
                    src="/component_assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li>
                  <a href="index">Home </a>
                </li>
                <li className="has-submenu active">
                  <a href="javascript:void(0);">
                    Doctors <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li className="active">
                      <a href="doctor-dashboard">Doctor Dashboard</a>
                    </li>
                    <li>
                      <a href="appointments">Appointments</a>
                    </li>
                    <li>
                      <a href="schedule-timings">Schedule Timing</a>
                    </li>
                    <li>
                      <a href="my-patients">Patients List</a>
                    </li>
                    <li>
                      <a href="patient-profile">Patients Profile</a>
                    </li>
                    <li>
                      <a href="chat-doctor">Chat</a>
                    </li>
                    <li>
                      <a href="invoices">Invoices</a>
                    </li>
                    <li>
                      <a href="doctor-profile-settings">Profile Settings</a>
                    </li>
                    <li>
                      <a href="reviews">Reviews</a>
                    </li>
                    <li>
                      <a href="doctor-register">Doctor Register</a>
                    </li>
                    <li className="has-submenu">
                      <a href="doctor-blog">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="doctor-blog">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details">Blog view</a>
                        </li>
                        <li>
                          <a href="doctor-add-blog">Add Blog</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Patients <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Doctors</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="map-grid">Map Grid</a>
                        </li>
                        <li>
                          <a href="map-list">Map List</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Search Doctor</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="search">Search Doctor 1</a>
                        </li>
                        <li>
                          <a href="search-2">Search Doctor 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="doctor-profile">Doctor Profile</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Booking</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="booking">Booking 1</a>
                        </li>
                        <li>
                          <a href="booking-2">Booking 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="checkout">Checkout</a>
                    </li>
                    <li>
                      <a href="booking-success">Booking Success</a>
                    </li>
                    <li>
                      <a href="patient-dashboard">Patient Dashboard</a>
                    </li>
                    <li>
                      <a href="favourites">Favourites</a>
                    </li>
                    <li>
                      <a href="chat">Chat</a>
                    </li>
                    <li>
                      <a href="profile-settings">Profile Settings</a>
                    </li>
                    <li>
                      <a href="change-password">Change Password</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Pharmacy <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="pharmacy-index">Pharmacy</a>
                    </li>
                    <li>
                      <a href="pharmacy-details">Pharmacy Details</a>
                    </li>
                    <li>
                      <a href="pharmacy-search">Pharmacy Search</a>
                    </li>
                    <li>
                      <a href="product-all">Product</a>
                    </li>
                    <li>
                      <a href="product-description">Product Description</a>
                    </li>
                    <li>
                      <a href="cart">Cart</a>
                    </li>
                    <li>
                      <a href="product-checkout">Product Checkout</a>
                    </li>
                    <li>
                      <a href="payment-success">Payment Success</a>
                    </li>
                    <li>
                      <a href="pharmacy-register">Pharmacy Register</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Pages <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="about-us">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us">Contact Us</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Call</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="voice-call">Voice Call</a>
                        </li>
                        <li>
                          <a href="video-call">Video Call</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Invoices</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="invoices">Invoices</a>
                        </li>
                        <li>
                          <a href="invoice-view">Invoice View</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Authentication</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="login-email">Login Email</a>
                        </li>
                        <li>
                          <a href="login-phone">Login Phone</a>
                        </li>
                        <li>
                          <a href="doctor-signup">Doctor Signup</a>
                        </li>
                        <li>
                          <a href="patient-signup">Patient Signup</a>
                        </li>
                        <li>
                          <a href="forgot-password">Forgot Password 1</a>
                        </li>
                        <li>
                          <a href="forgot-password2">Forgot Password 2</a>
                        </li>
                        <li>
                          <a href="login-email-otp">Email OTP</a>
                        </li>
                        <li>
                          <a href="login-phone-otp">Phone OTP</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Error Pages</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="error-404">404 Error</a>
                        </li>
                        <li>
                          <a href="error-500">500 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blank-page">Starter Page</a>
                    </li>
                    <li>
                      <a href="pricing">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="faq">FAQ</a>
                    </li>
                    <li>
                      <a href="maintenance">Maintenance</a>
                    </li>
                    <li>
                      <a href="coming-soon">Coming Soon</a>
                    </li>
                    <li>
                      <a href="terms-condition">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="components">Components</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Blog <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="blog-list">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-grid">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-details">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Admin <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="admin/index" target="_blank">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="pharmacy/index" target="_blank">
                        Pharmacy Admin
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item dropdown noti-nav view-cart-header me-3">
                <a
                  href="#"
                  className="dropdown-toggle nav-link p-0 position-relative"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <small className="unread-msg1">7</small>
                </a>
                <div className="dropdown-menu notifications dropdown-menu-end">
                  <div className="shopping-cart">
                    <ul className="shopping-cart-items list-unstyled">
                      <li className="clearfix">
                        <div className="close-icon">
                          <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <a href="product-description">
                          <img
                            className="avatar-img rounded"
                            src="/component_assets/img/products/product.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="product-description" className="item-name">
                          Benzaxapine Croplex
                        </a>
                        <span className="item-price">$849.99</span>
                        <span className="item-quantity">Quantity: 01</span>
                      </li>
                      <li className="clearfix">
                        <div className="close-icon">
                          <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <a href="product-description">
                          <img
                            className="avatar-img rounded"
                            src="/component_assets/img/products/product1.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="product-description" className="item-name">
                          Ombinazol Bonibamol
                        </a>
                        <span className="item-price">$1,249.99</span>
                        <span className="item-quantity">Quantity: 01</span>
                      </li>
                      <li className="clearfix">
                        <div className="close-icon">
                          <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <a href="product-description">
                          <img
                            className="avatar-img rounded"
                            src="/component_assets/img/products/product2.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="product-description" className="item-name">
                          Dantotate Dantodazole
                        </a>
                        <span className="item-price">$129.99</span>
                        <span className="item-quantity">Quantity: 01</span>
                      </li>
                    </ul>
                    <div className="booking-summary pt-3">
                      <div className="booking-item-wrap">
                        <ul className="booking-date">
                          <li>
                            Subtotal <span>$5,877.00</span>
                          </li>
                          <li>
                            Shipping <span>$25.00</span>
                          </li>
                          <li>
                            Tax <span>$0.00</span>
                          </li>
                          <li>
                            Total <span>$5.2555</span>
                          </li>
                        </ul>
                        <div className="booking-total">
                          <ul className="booking-total-list text-align">
                            <li>
                              <div className="clinic-booking pt-3">
                                <a className="apt-btn" href="cart">
                                  View Cart
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="clinic-booking pt-3">
                                <a className="apt-btn" href="product-checkout">
                                  Checkout
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown noti-nav me-3 pe-0">
                <a
                  href="#"
                  className="dropdown-toggle nav-link p-0"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa-solid fa-bell"></i> <span className="badge">5</span>
                </a>
                <div className="dropdown-menu notifications dropdown-menu-end ">
                  <div className="topnav-dropdown-header">
                    <span className="notification-title">Notifications</span>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list">
                      <li className="notification-message">
                        <a href="#">
                          <div className="notify-block d-flex">
                            <span className="avatar">
                              <img
                                className="avatar-img"
                                alt="Ruby perin"
                                src="/component_assets/img/clients/client-01.jpg"
                              />
                            </span>
                            <div className="media-body">
                              <h6>
                                Travis Tremble{" "}
                                <span className="notification-time">18.30 PM</span>
                              </h6>
                              <p className="noti-details">
                                Sent a amount of $210 for his Appointment{" "}
                                <span className="noti-title">Dr.Ruby perin </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="#">
                          <div className="notify-block d-flex">
                            <span className="avatar">
                              <img
                                className="avatar-img"
                                alt="Hendry Watt"
                                src="/component_assets/img/clients/client-02.jpg"
                              />
                            </span>
                            <div className="media-body">
                              <h6>
                                Travis Tremble{" "}
                                <span className="notification-time">
                                  12 Min Ago
                                </span>
                              </h6>
                              <p className="noti-details">
                                {" "}
                                has booked her appointment to{" "}
                                <span className="noti-title">Dr. Hendry Watt</span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="#">
                          <div className="notify-block d-flex">
                            <div className="avatar">
                              <img
                                className="avatar-img"
                                alt="Maria Dyen"
                                src="/component_assets/img/clients/client-03.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6>
                                Travis Tremble{" "}
                                <span className="notification-time">6 Min Ago</span>
                              </h6>
                              <p className="noti-details">
                                {" "}
                                Sent a amount $210 for his Appointment{" "}
                                <span className="noti-title">Dr.Maria Dyen</span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="#">
                          <div className="notify-block d-flex">
                            <div className="avatar avatar-sm">
                              <img
                                className="avatar-img"
                                alt="client-image"
                                src="/component_assets/img/clients/client-04.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6>
                                Travis Tremble{" "}
                                <span className="notification-time">8.30 AM</span>
                              </h6>
                              <p className="noti-details">
                                {" "}
                                Send a message to his doctor
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown has-arrow logged-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                >
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                      width="31"
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <a className="dropdown-item" href="doctor-dashboard">
                    Dashboard
                  </a>
                  <a className="dropdown-item" href="doctor-profile-settings">
                    Profile Settings
                  </a>
                  <a className="dropdown-item" href="login">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Dashboard</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2">Home</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">
                          BDS, MDS - Oral & Maxillofacial Surgery
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <a href="doctor-dashboard">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="appointments">
                          <i className="fas fa-calendar-check"></i>
                          <span>Appointments</span>
                        </a>
                      </li>
                      <li>
                        <a href="my-patients">
                          <i className="fas fa-user-injured"></i>
                          <span>My Patients</span>
                        </a>
                      </li>
                      <li>
                        <a href="schedule-timings">
                          <i className="fas fa-hourglass-start"></i>
                          <span>Schedule Timings</span>
                        </a>
                      </li>
                      <li>
                        <a href="available-timings">
                          <i className="fas fa-clock"></i>
                          <span>Available Timings</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat-doctor">
                          <i className="fas fa-comments"></i>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="login">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc_tpl;