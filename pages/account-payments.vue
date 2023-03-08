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
          <div class="rounded shadow p-4">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">روش های پرداخت:</h5>
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#addnewcard"
                class="btn btn-primary"
                ><i data-feather="plus" class="fea icon-sm"></i> افزودن
              </a>
            </div>

            <div class="row">
              <div class="col-md-6 mt-4 pt-2">
                <a href="javascript:void(0)">
                  <div class="card rounded shadow bg-light border-0">
                    <div class="card-body">
                      <img
                        src="~/assets/images/payments/payment/master.png"
                        height="60"
                        class="text-end"
                        alt=""
                      />
                      <div class="mt-4">
                        <h5 class="text-dark">•••• •••• •••• 4559</h5>
                        <div class="d-flex justify-content-between">
                          <p class="h6 text-muted mb-0">کریستینو مورفی</p>
                          <h6 class="mb-0 text-dark">
                            انقضا: <span class="text-muted">10/22</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <a href="javascript:void(0)">
                  <div class="card rounded shadow bg-dark border-0">
                    <div class="card-body">
                      <img
                        src="~/assets/images/payments/payment/visaa.png"
                        height="60"
                        class="text-end"
                        alt=""
                      />
                      <div class="mt-4">
                        <h5 class="text-light">•••• •••• •••• 9856</h5>
                        <div class="d-flex justify-content-between">
                          <p class="h6 text-muted mb-0">کالوین لورس</p>
                          <h6 class="mb-0 text-muted">
                            انقضا: <span class="text-muted">01/24</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <a href="javascript:void(0)">
                  <div class="card rounded shadow bg-info border-0">
                    <div class="card-body">
                      <img
                        src="~/assets/images/payments/payment/rupay.png"
                        height="60"
                        class="text-end"
                        alt=""
                      />
                      <div class="mt-4">
                        <h5 class="text-white">•••• •••• •••• 5465</h5>
                        <div class="d-flex justify-content-between">
                          <p class="h6 text-light mb-0">جعفر عباسی</p>
                          <h6 class="mb-0 text-light">
                            انقضا: <span class="text-light">03/23</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <div class="card rounded shadow bg-light border-0">
                  <div class="card-body">
                    <img
                      src="~/assets/images/payments/payment/paypals.png"
                      height="60"
                      class="text-end"
                      alt=""
                    />
                    <div class="mt-4">
                      <form>
                        <div class="mt-4 pt-3 mb-0">
                          <div class="input-group">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              class="form-control"
                              placeholder="ایمیل پی پال :"
                              required=""
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-primary submitBnt"
                                type="submit"
                                id="paypalmail"
                              >
                                ارسال
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <!--end form-->
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->
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
  <!-- Profile End -->
</template>

<script setup lang="ts">
import accountBg from "~/assets/images/account/bg.png";
</script>

<style scoped></style>
