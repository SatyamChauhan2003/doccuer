import React from "react";

const Doctor_available_timings = () => {
  return (
    <>
      <div className="col-md-7 col-lg-8 col-xl-9">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Schedule Timings</h4>
                <div className="profile-box">
                  <div className="row">
                    <div className="col-sm-6 col-12 avail-time">
                      <div className="mb-3">
                        <div className="schedule-calendar-col justify-content-start">
                          <form className="d-flex">
                            <div className="me-3 d-flex">
                              <span className="input-group-text me-3">Date:</span>
                              <input
                                type="date"
                                className="form-control"
                                name="schedule_date"
                                id="schedule_date"
                                value="2023-05-21"
                                min="2023-05-21"
                              />
                            </div>
                            <div className="search-time-mobile">
                              <input
                                type="submit"
                                name="submit"
                                value="Search"
                                className="btn btn-primary h-100"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="h3 text-center book-btn2 mt-3 px-5 py-1 mx-3 rounded">
                        1<sup>st</sup> Session{" "}
                      </h3>
                      <div className="text-center mt-3">
                        <h4 className="h4 mb-2">Start Time </h4>
                        <span className="h4 btn btn-outline-primary">
                          <b> 09:00 AM</b>
                        </span>
                      </div>
                      <div className="token-slot mt-2">
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              value="18"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="02:40 PM"
                            >
                              02:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="15:00:00"
                              data-end-time="15:20:00"
                              data-session="1"
                              name="token[]"
                              value="19"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="03:00 PM"
                            >
                              03:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="15:20:00"
                              data-end-time="15:40:00"
                              data-session="1"
                              name="token[]"
                              value="20"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="03:20 PM"
                            >
                              03:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="15:40:00"
                              data-end-time="16:00:00"
                              data-session="1"
                              name="token[]"
                              value="21"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="03:40 PM"
                            >
                              03:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="16:00:00"
                              data-end-time="16:20:00"
                              data-session="1"
                              name="token[]"
                              value="22"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="04:00 PM"
                            >
                              04:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="16:20:00"
                              data-end-time="16:40:00"
                              data-session="1"
                              name="token[]"
                              value="23"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="04:20 PM"
                            >
                              04:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="16:40:00"
                              data-end-time="17:00:00"
                              data-session="1"
                              name="token[]"
                              value="24"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="04:40 PM"
                            >
                              04:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="17:00:00"
                              data-end-time="17:20:00"
                              data-session="1"
                              name="token[]"
                              value="25"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="05:00 PM"
                            >
                              05:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="17:20:00"
                              data-end-time="17:40:00"
                              data-session="1"
                              name="token[]"
                              value="26"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="05:20 PM"
                            >
                              05:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="17:40:00"
                              data-end-time="18:00:00"
                              data-session="1"
                              name="token[]"
                              value="27"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="05:40 PM"
                            >
                              05:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="18:00:00"
                              data-end-time="18:20:00"
                              data-session="1"
                              name="token[]"
                              value="28"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="06:00 PM"
                            >
                              06:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="18:20:00"
                              data-end-time="18:40:00"
                              data-session="1"
                              name="token[]"
                              value="29"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="06:20 PM"
                            >
                              06:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="18:40:00"
                              data-end-time="19:00:00"
                              data-session="1"
                              name="token[]"
                              value="30"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="06:40 PM"
                            >
                              06:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="19:00:00"
                              data-end-time="19:20:00"
                              data-session="1"
                              name="token[]"
                              value="31"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="07:00 PM"
                            >
                              07:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="19:20:00"
                              data-end-time="19:40:00"
                              data-session="1"
                              name="token[]"
                              value="32"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="07:20 PM"
                            >
                              07:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="19:40:00"
                              data-end-time="20:00:00"
                              data-session="1"
                              name="token[]"
                              value="33"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="07:40 PM"
                            >
                              07:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="20:00:00"
                              data-end-time="20:20:00"
                              data-session="1"
                              name="token[]"
                              value="34"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="08:00 PM"
                            >
                              08:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="20:20:00"
                              data-end-time="20:40:00"
                              data-session="1"
                              name="token[]"
                              value="35"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="08:20 PM"
                            >
                              08:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="20:40:00"
                              data-end-time="21:00:00"
                              data-session="1"
                              name="token[]"
                              value="36"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="08:40 PM"
                            >
                              08:40 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="21:00:00"
                              data-end-time="21:20:00"
                              data-session="1"
                              name="token[]"
                              value="37"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="09:00 PM"
                            >
                              09:00 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="21:20:00"
                              data-end-time="21:40:00"
                              data-session="1"
                              name="token[]"
                              value="38"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="09:20 PM"
                            >
                              09:20 PM
                            </span>
                          </label>
                        </div>
                        <div className="form-check-inline visits me-0">
                          <label className="visit-btns">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              data-date="2023-05-21"
                              data-timezone="Asia/Calcutta"
                              data-start-time="21:40:00"
                              data-end-time="22:00:00"
                              data-session="1"
                              name="token[]"
                              value="39"
                            />
                            <span
                              className="visit-rsn"
                              data-bs-toggle="tooltip"
                              title="09:40 PM"
                            >
                              09:40 PM
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor_available_timings;
