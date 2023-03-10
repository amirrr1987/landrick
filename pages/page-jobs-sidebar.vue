<template>
  <!-- Navbar End -->

  <!-- Hero Start -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">مشاغل / کارها</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">صفحه </a></li>
                  <li class="breadcrumb-item"><a href="#">مشاغل </a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    کار
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
  <!-- Hero End -->

  <!-- Shape Start -->
  <div class="position-relative">
    <div class="shape overflow-hidden text-white">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <!--Shape End-->

  <!-- Job List Start -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="sidebar sticky-bar p-4 rounded shadow">
            <!-- SEARCH -->
            <div class="widget">
              <form role="search" method="get">
                <div class="input-group mb-3 border rounded">
                  <input type="text" id="s" name="s" class="form-control border-0" placeholder="جستجوی کلمه کلیدی..." />
                  <button type="submit" class="input-group-text bg-transparent border-0" id="searchsubmit">
                    <i class="uil uil-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <!-- SEARCH -->

            <!-- Categories -->
            <div class="widget mb-4 pb-4 border-bottom">
              <h5 class="widget-title">دسته بندیها</h5>
              <div class="mt-4 mb-0">
                <select class="form-select form-control" aria-label="به طور پیش فرض مثال انتخاب کنید">
                  <option selected>تمام کارها</option>
                  <option>دیجیتال و خلاق</option>
                  <option>حسابداری</option>
                  <option>بانکی</option>
                  <option>پیمانکار فناوری اطلاعات</option>
                  <option>فارغ التحصیل</option>
                  <option>آژانسی</option>
                </select>
              </div>
            </div>
            <!-- Categories -->

            <!-- Posted -->
            <div class="widget mb-4 pb-4 border-bottom">
              <h5 class="widget-title">تاریخ پست شده</h5>
              <div class="mt-4">
                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault" id="lasthour" />
                  <label class="form-check-label" for="lasthour">ساعت قبل
                  </label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault" id="oneday" />
                  <label class="form-check-label" for="oneday">24 ساعت قبل</label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault" id="sevenday" />
                  <label class="form-check-label" for="sevenday">7 روز قبل</label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault" id="fourteenhour" />
                  <label class="form-check-label" for="fourteenhour">14 روز قبل</label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault" id="onemonth" />
                  <label class="form-check-label" for="onemonth">30 روز قبل</label>
                </div>
              </div>
            </div>
            <!-- Posted -->

            <!-- Job Type -->
            <div class="widget mb-4 pb-4 border-bottom">
              <h5 class="widget-title">نوع شغل</h5>
              <div class="mt-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="contract" />
                  <label class="form-check-label" for="contract">پایه قرارداد</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="freelancer" />
                  <label class="form-check-label" for="freelancer">فریلنسر</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="fulltime" />
                  <label class="form-check-label" for="fulltime">تمام وقت
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="parttime" />
                  <label class="form-check-label" for="parttime">نیمه وقت</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="remote" />
                  <label class="form-check-label" for="remote">از راه دور</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="intern" />
                  <label class="form-check-label" for="intern">کارآموزی </label>
                </div>
              </div>
            </div>
            <!-- Job Type -->

            <!-- Posted -->
            <div class="widget">
              <h5 class="widget-title">تجربه</h5>
              <div class="mt-4">
                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault2" id="fresher" />
                  <label class="form-check-label" for="fresher">تازه تر </label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault2" id="oneyear" />
                  <label class="form-check-label" for="oneyear">+1 سال</label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault2" id="twoyear" />
                  <label class="form-check-label" for="twoyear">+2 سال </label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault2" id="3year" />
                  <label class="form-check-label" for="3year">+3 سال </label>
                </div>

                <div class="form-check mb-0">
                  <input class="form-check-input" checked type="radio" name="flexRadioDefault2" id="fiveyear" />
                  <label class="form-check-label" for="fiveyear">+5 سال </label>
                </div>
              </div>
            </div>
            <!-- Posted -->
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-8 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="row">
            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/full.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">طراحی وب</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-success rounded-pill">تمام وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Circleci.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">کایرکل
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/full.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">توسعه وب</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-success rounded-pill">تمام وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Codepen.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">کد نویسی
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/part.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">طراحان تجربه کاربری</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-warning rounded-pill">نیمه وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Discord.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">اختلاف
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/full.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">UI طراح
                    </a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-success rounded-pill">تمام وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Eslint.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">اسلینت
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/remote.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">توسعه دهنده بک اند</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-danger rounded-pill">از راه دور</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Gitlab.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">گیتلاب
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/part.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">عکاس </a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-warning rounded-pill">نیمه وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Gradle.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">گریدل
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/full.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">مکانیک </a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-success rounded-pill">تمام وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Mg.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">مجله
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/part.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">طراح فرانت اند</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-warning rounded-pill">نیمه وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Sketch.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">طرح
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/remote.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">طراحی وب</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-danger rounded-pill">از راه دور</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Twilio.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">توئلیو
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/part.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">توسعه دهنده php</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-warning rounded-pill">نیمه وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Udemy.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">آموزشی
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/full.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">طراحی وب</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-success rounded-pill">تمام وقت</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Webhooks.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">وب هوک
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-6 col-12 mb-4 pb-2">
              <div class="card job-box rounded shadow border-0 overflow-hidden">
                <div class="border-bottom">
                  <div class="position-relative">
                    <img src="~/assets/images/job/remote.jpg" class="img-fluid" alt="" />
                    <div class="job-overlay bg-white"></div>
                  </div>
                  <h5 class="mb-0 position">
                    <a href="page-job-detail.html" class="text-dark">توسعه دهنده پایتون</a>
                    <ul class="list-unstyled h6 mb-0 text-warning">
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                      <li class="list-inline-item mb-0">
                        <i class="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </h5>
                  <ul class="list-unstyled head mb-0">
                    <li class="badge bg-danger rounded-pill">از راه دور</li>
                  </ul>
                </div>

                <div class="card-body content position-relative">
                  <div class="firm-logo rounded-circle shadow bg-light text-center">
                    <img src="~/assets/images/job/Circleci.svg" class="avatar avatar-md-sm" alt="" />
                  </div>
                  <div class="company-detail text-center mt-3">
                    <h5 class="mb-0">
                      <a href="page-job-company.html" class="text-dark company-name">کایرکل
                      </a>
                    </h5>
                    <p class="text-muted">
                      <a href="#" class="text-muted"><i data-feather="map-pin" class="fea icon-sm"></i>
                        ایران</a>
                    </p>
                  </div>
                  <ul class="job-facts list-unstyled">
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      2 تجربه کار
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      ساعت کار - 6
                    </li>
                    <li class="list-inline-item text-muted">
                      <i data-feather="check" class="fea icon-sm text-success me-1"></i>
                      استراتژی اطلاعات
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="page-job-detail.html" class="btn btn-outline-primary">اعمال کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->

          <div class="row">
            <!-- PAGINATION START -->
            <div class="col-12">
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
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Job List End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
