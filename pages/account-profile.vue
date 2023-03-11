<template>
  <!-- Hero Start -->
  <section
    class="bg-profile d-table w-100 bg-primary"
    :style="{ backgroundImage: `url(${accountBg})` }"
    style="background-position: center center"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="card public-profile border-0 rounded shadow"
            style="z-index: 1"
          >
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-lg-2 col-md-3 text-md-start text-center">
                  <img
                    src="~/assets/images/client/05.jpg"
                    class="avatar avatar-large rounded-circle shadow d-block mx-auto"
                    alt=""
                  />
                </div>
                <!--end col-->

                <div class="col-lg-10 col-md-9">
                  <div class="row align-items-end">
                    <div
                      class="col-md-7 text-md-start text-center mt-4 mt-sm-0"
                    >
                      <h3 class="title mb-0">جعفر عباسی</h3>
                      <small class="text-muted h6 me-2">توسعه وب</small>
                      <ul class="list-inline mb-0 mt-3">
                        <li class="list-inline-item me-2">
                          <a
                            href="javascript:void(0)"
                            class="text-muted"
                            title="اینستاگرام"
                            ><i
                              data-feather="instagram"
                              class="fea icon-sm me-2"
                            ></i
                            >jafar_abbasi</a
                          >
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            class="text-muted"
                            title="لینکدین"
                            ><i
                              data-feather="linkedin"
                              class="fea icon-sm me-2"
                            ></i
                            >جعفر عباسی</a
                          >
                        </li>
                      </ul>
                    </div>
                    <!--end col-->
                    <div class="col-md-5 text-md-end text-center">
                      <ul class="list-unstyled social-icon social mb-0 mt-4">
                        <li class="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            class="rounded"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Add Friend"
                            ><i class="uil uil-user-plus align-middle"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            class="rounded"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="پیام ها "
                            ><i class="uil uil-comment align-middle"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            class="rounded"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="اعلانات"
                            ><i class="uil uil-bell align-middle"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="account-setting.html"
                            class="rounded"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="تنظیمات"
                            ><i class="uil uil-cog align-middle"></i
                          ></a>
                        </li>
                      </ul>
                      <!--end icon-->
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--ed container-->
  </section>
  <!--end section-->
  <!-- Hero End -->

  <!-- Profile Start -->
  <section class="section mt-60">
    <div class="container mt-lg-3">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
          <div class="sidebar sticky-bar p-4 rounded shadow">
            <div class="widget">
              <h5 class="widget-title">فالوور :</h5>
              <div class="row mt-4">
                <div class="col-6 text-center">
                  <i
                    data-feather="user-plus"
                    class="fea icon-ex-md text-primary mb-1"
                  ></i>
                  <h5 class="mb-0">2588</h5>
                  <p class="text-muted mb-0">فالوو کننده</p>
                </div>
                <!--end col-->

                <div class="col-6 text-center">
                  <i
                    data-feather="users"
                    class="fea icon-ex-md text-primary mb-1"
                  ></i>
                  <h5 class="mb-0">454</h5>
                  <p class="text-muted mb-0">فالووینگ</p>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>

            <div class="widget mt-4 pt-2">
              <h5 class="widget-title">پروژه :</h5>
              <div class="progress-box mt-4">
                <h6 class="title text-muted">پیش رفتن</h6>
                <div class="progress">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style="width: 50%"
                  >
                    <div class="progress-value d-block text-muted h6">
                      24 / 48
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
            </div>

            <div class="widget mt-4">
              <ul class="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                <li class="navbar-item account-menu px-0">
                  <a
                    href="account-profile.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"
                      ><i class="uil uil-dashboard"></i
                    ></span>
                    <h6 class="mb-0 ms-2">پروفایل</h6>
                  </a>
                </li>

                <li class="navbar-item account-menu px-0 mt-2">
                  <a
                    href="account-members.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"
                      ><i class="uil uil-users-alt"></i
                    ></span>
                    <h6 class="mb-0 ms-2">اعضا</h6>
                  </a>
                </li>

                <li class="navbar-item account-menu px-0 mt-2">
                  <a
                    href="account-works.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"><i class="uil uil-file"></i></span>
                    <h6 class="mb-0 ms-2">نمونه کار</h6>
                  </a>
                </li>

                <li class="navbar-item account-menu px-0 mt-2">
                  <a
                    href="account-messages.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"
                      ><i class="uil uil-envelope-star"></i
                    ></span>
                    <h6 class="mb-0 ms-2">پیام ها</h6>
                  </a>
                </li>

                <li class="navbar-item account-menu px-0 mt-2">
                  <a
                    href="account-payments.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"
                      ><i class="uil uil-transaction"></i
                    ></span>
                    <h6 class="mb-0 ms-2">پرداخت ها</h6>
                  </a>
                </li>

                <li class="navbar-item account-menu px-0 mt-2">
                  <a
                    href="account-setting.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"><i class="uil uil-setting"></i></span>
                    <h6 class="mb-0 ms-2">تنظیمات</h6>
                  </a>
                </li>

                <li class="navbar-item account-menu px-0 mt-2">
                  <a
                    href="auth-login-three.html"
                    class="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span class="h4 mb-0"
                      ><i class="uil uil-dashboard"></i
                    ></span>
                    <h6 class="mb-0 ms-2">خروج</h6>
                  </a>
                </li>
              </ul>
            </div>

            <div class="widget mt-4 pt-2">
              <h5 class="widget-title">دنبال کردن ما :</h5>
              <ul class="list-unstyled social-icon mb-0 mt-4">
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i
                      data-feather="facebook"
                      class="fea icon-sm fea-social"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i
                      data-feather="instagram"
                      class="fea icon-sm fea-social"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i
                      data-feather="twitter"
                      class="fea icon-sm fea-social"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i
                      data-feather="linkedin"
                      class="fea icon-sm fea-social"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i data-feather="github" class="fea icon-sm fea-social"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i
                      data-feather="youtube"
                      class="fea icon-sm fea-social"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded"
                    ><i data-feather="gitlab" class="fea icon-sm fea-social"></i
                  ></a>
                </li>
              </ul>
              <!--end icon-->
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-8 col-12">
          <div class="border-bottom pb-4">
            <h5>جعفر عباسی</h5>
            <p class="text-muted mb-0">
              من کار خود را به عنوان یک کارآموز آغاز کرده ام و خودم را اثبات می
              کنم و با راهنمایی خوب به همه نقاط عطف می رسم و به مدیر پروژه می
              رسم. در این سفر ، من تمام رویه هایی را می شناسم که من را به یک
              توسعه دهنده ، رهبر تیم و یک مدیر پروژه خوب تبدیل می کند.
            </p>
          </div>

          <div class="border-bottom pb-4">
            <div class="row">
              <div class="col-md-6 mt-4">
                <h5>جزئیات شخصی :</h5>
                <div class="mt-4">
                  <div class="d-flex align-items-center">
                    <i
                      data-feather="mail"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">ایمیل :</h6>
                      <a href="javascript:void(0)" class="text-muted"
                        >kristajoseph0203@mail.com</a
                      >
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <i
                      data-feather="bookmark"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">مهارت :</h6>
                      <a href="javascript:void(0)" class="text-muted">html</a>,
                      <a href="javascript:void(0)" class="text-muted">css</a>,
                      <a href="javascript:void(0)" class="text-muted">js</a>,
                      <a href="javascript:void(0)" class="text-muted">mysql</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <i
                      data-feather="italic"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">زبان :</h6>
                      <a href="javascript:void(0)" class="text-muted">انگلیسی</a
                      >,
                      <a href="javascript:void(0)" class="text-muted">ژاپنی</a>,
                      <a href="javascript:void(0)" class="text-muted">چینی</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <i
                      data-feather="globe"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">وب سایت:</h6>
                      <a href="javascript:void(0)" class="text-muted"
                        >www.kristajoseph.com</a
                      >
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <i
                      data-feather="gift"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">تاریخ تولد :</h6>
                      <p class="text-muted mb-0">تیر 1377</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <i
                      data-feather="map-pin"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">موقعیت :</h6>
                      <a href="javascript:void(0)" class="text-muted">چین</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <i
                      data-feather="phone"
                      class="fea icon-ex-md text-muted me-3"
                    ></i>
                    <div class="flex-1">
                      <h6 class="text-primary mb-0">شماره تلفن :</h6>
                      <a href="javascript:void(0)" class="text-muted"
                        >(+12) 1254-56-4896</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2 pt-sm-0">
                <h5>تجربه :</h5>

                <div
                  class="d-flex key-feature align-items-center p-3 rounded shadow mt-4"
                >
                  <img
                    src="~/assets/images/job/Circleci.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
                  <div class="flex-1 content ms-3">
                    <h4 class="title mb-0">توسعه وب سینور</h4>
                    <p class="text-muted mb-0">3 سال تجربه</p>
                    <p class="text-muted mb-0">
                      <a href="javascript:void(0)" class="text-primary"
                        >کاریکل
                      </a>
                      @لندن
                    </p>
                  </div>
                </div>

                <div
                  class="d-flex key-feature align-items-center p-3 rounded shadow mt-4"
                >
                  <img
                    src="~/assets/images/job/Codepen.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
                  <div class="flex-1 content ms-3">
                    <h4 class="title mb-0">طراحی وب</h4>
                    <p class="text-muted mb-0">2 سال تجربه</p>
                    <p class="text-muted mb-0">
                      <a href="javascript:void(0)" class="text-primary"
                        >راست چین</a
                      >
                      آمریکا
                    </p>
                  </div>
                </div>

                <div
                  class="d-flex key-feature align-items-center p-3 rounded shadow mt-4"
                >
                  <img
                    src="~/assets/images/job/Gitlab.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
                  <div class="flex-1 content ms-3">
                    <h4 class="title mb-0">UI طراح</h4>
                    <p class="text-muted mb-0">2 سال تجربه</p>
                    <p class="text-muted mb-0">
                      <a href="javascript:void(0)" class="text-primary"
                        >گیتلب
                      </a>
                      @آمریکا
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>

          <h5 class="mt-4 mb-0">پست ها و اخبار :</h5>
          <div class="row">
            <div class="col-md-6 mt-4 pt-2">
              <div class="card blog rounded border-0 shadow">
                <div class="position-relative">
                  <img
                    src="~/assets/images/blog/01.jpg"
                    class="card-img-top rounded-top"
                    alt="..."
                  />
                  <div class="overlay rounded-top bg-dark"></div>
                </div>
                <div class="card-body content">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      class="card-title title text-dark"
                      >برنامه های خود را به روش خود طراحی کنید</a
                    >
                  </h5>
                  <div class="post-meta d-flex justify-content-between mt-3">
                    <ul class="list-unstyled mb-0">
                      <li class="list-inline-item me-2 mb-0">
                        <a href="javascript:void(0)" class="text-muted like"
                          ><i class="uil uil-heart me-1"></i>33</a
                        >
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void(0)" class="text-muted comments"
                          ><i class="uil uil-comment me-1"></i>08</a
                        >
                      </li>
                    </ul>
                    <a href="page-blog-detail.html" class="text-muted readmore"
                      >ادامه مطلب
                      <i class="uil uil-angle-left-b align-middle"></i
                    ></a>
                  </div>
                </div>
                <div class="author">
                  <small class="text-light user d-block"
                    ><i class="uil uil-user"></i> کالوین لورس</small
                  >
                  <small class="text-light date"
                    ><i class="uil uil-calendar-alt"></i> اردیبهشت 1400</small
                  >
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-md-6 mt-4 pt-2">
              <div class="card blog rounded border-0 shadow">
                <div class="position-relative">
                  <img
                    src="~/assets/images/blog/02.jpg"
                    class="card-img-top rounded-top"
                    alt="..."
                  />
                  <div class="overlay rounded-top bg-dark"></div>
                </div>
                <div class="card-body content">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      class="card-title title text-dark"
                      >برنامه ها چگونه دنیای اطلاعات را تغییر می دهند</a
                    >
                  </h5>
                  <div class="post-meta d-flex justify-content-between mt-3">
                    <ul class="list-unstyled mb-0">
                      <li class="list-inline-item me-2 mb-0">
                        <a href="javascript:void(0)" class="text-muted like"
                          ><i class="uil uil-heart me-1"></i>33</a
                        >
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void(0)" class="text-muted comments"
                          ><i class="uil uil-comment me-1"></i>08</a
                        >
                      </li>
                    </ul>
                    <a href="page-blog-detail.html" class="text-muted readmore"
                      >ادامه مطلب
                      <i class="uil uil-angle-left-b align-middle"></i
                    ></a>
                  </div>
                </div>
                <div class="author">
                  <small class="text-light user d-block"
                    ><i class="uil uil-user"></i> کالوین لورس</small
                  >
                  <small class="text-light date"
                    ><i class="uil uil-calendar-alt"></i> اردیبهشت 1400</small
                  >
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-12 mt-4 pt-2">
              <a href="page-blog-grid.html" class="btn btn-primary"
                >نمایش بیشتر <i class="uil uil-angle-left-b align-middle"></i
              ></a>
            </div>
            <!--end col-->
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
  <!-- Profile End -->
</template>

<script setup lang="ts">
import accountBg from "~/assets/images/account/bg.png";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
