<template>
  <!-- Hero Start -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">همه شرکتها</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">صفحه </a></li>
                  <li class="breadcrumb-item"><a href="#">مشاغل </a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    شرکت ها
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <div class="position-relative">
    <div class="shape overflow-hidden text-white">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <!-- Hero End -->

  <section class="section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9 col-md-8">
          <div class="section-title">
            <h6 class="mb-0">نمایش 1 - 8 از 10 نتیجه</h6>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="form custom-form">
            <div class="mb-0">
              <select class="form-select form-control" aria-label="به طور پیش فرض مثال انتخاب کنید" id="Sortbylist-job">
                <option selected>همه شرکتها</option>
                <option>محبوب</option>
                <option>جدید</option>
              </select>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->

      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Circleci.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">کاریکل
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Mg.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">مجله
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Twilio.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">تولیو
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Udemy.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">ایدومی
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Webhooks.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">وب هوک</a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Discord.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">دیسکارد
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Eslint.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">اسلینت
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="company-list card border-0 rounded shadow bg-white">
            <div class="text-center py-5 border-bottom">
              <img src="~/assets/images/job/Gitlab.svg" class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                alt="" />
              <a href="page-job-company.html" class="text-dark h5 name">گیتلب
              </a>
              <p class="text-muted mt-1 mb-0">خدمات اینترنتی</p>
            </div>

            <div class="p-4">
              <h5>جزئیات شرکت :</h5>
              <ul class="list-unstyled mb-4">
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-map-pin fea icon-sm text-warning me-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span class="text-muted">موقعیت :</span> ایران
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-link fea icon-sm text-warning me-2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg><span class="text-muted">کمپانی :</span> circleci.com
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-dollar-sign fea icon-sm text-warning me-2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg><span class="text-muted">درآمد:</span> 5 میلیون تومان |
                  سالانه
                </li>
                <li class="h6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users fea icon-sm text-warning me-2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg><span class="text-muted">تعداد کارمندان :</span> 200
                </li>
              </ul>
              <div class="d-grid">
                <a href="page-job-company.html" class="btn btn-soft-primary">نمایش جزئیات
                  <i class="uil uil-angle-left-b align-middle"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <!-- PAGINATION START -->
        <div class="col-12 mt-4 pt-2">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)" aria-label="Previous">قبلی
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0)">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)" aria-label="Next">بعدی
              </a>
            </li>
          </ul>
        </div>
        <!--end col-->
        <!-- PAGINATION END -->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
</template>

<script setup lang="ts">

</script>

<style scoped></style>