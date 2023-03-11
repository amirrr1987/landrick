<template>
  <!-- شوع آن -->
  <section class="cover-user bg-white">
    <div class="container-fluid px-0">
      <div class="row g-0 position-relative">
        <div class="col-lg-4 cover-my-30 order-2">
          <div class="cover-user-img d-lg-flex align-items-center">
            <div class="row">
              <div class="col-12">
                <div class="card border-0" style="z-index: 1">
                  <div class="card-body p-0">
                    <h4 class="card-title text-center">ثبت نام</h4>
                    <form class="login-form mt-4">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >نام اصلی
                              <span class="text-danger">*</span></label
                            >
                            <div class="form-icon position-relative">
                              <i
                                data-feather="user"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                type="text"
                                class="form-control ps-5"
                                placeholder="نام اصلی "
                                name="s"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >نام خانوادگی
                              <span class="text-danger">*</span></label
                            >
                            <div class="form-icon position-relative">
                              <i
                                data-feather="user-check"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                type="text"
                                class="form-control ps-5"
                                placeholder="نام خانوادگی"
                                name="s"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >ایمیل شما
                              <span class="text-danger">*</span></label
                            >
                            <div class="form-icon position-relative">
                              <i
                                data-feather="mail"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                type="email"
                                class="form-control ps-5"
                                placeholder="ایمیل"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >رمز عبور
                              <span class="text-danger">*</span></label
                            >
                            <div class="form-icon position-relative">
                              <i
                                data-feather="key"
                                class="fea icon-sm icons"
                              ></i>
                              <input
                                type="password"
                                class="form-control ps-5"
                                placeholder="رمز عبور "
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-md-12">
                          <div class="mb-3">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                                >تایید میکنم
                                <a href="#" class="text-primary"
                                  >قوانین سایت لنـدریـک را و تیکت را فعال
                                  میکنم</a
                                ></label
                              >
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-md-12">
                          <div class="d-grid">
                            <button class="btn btn-primary">ثبت نام</button>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-12 mt-4 text-center">
                          <h6>یا با آن ثبت نام کنید</h6>
                          <div class="row">
                            <div class="col-6 mt-3">
                              <div class="d-grid">
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-light"
                                  ><i class="mdi mdi-facebook text-primary"></i>
                                  فیس بوک
                                </a>
                              </div>
                            </div>
                            <!--end col-->

                            <div class="col-6 mt-3">
                              <div class="d-grid">
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-light"
                                  ><i class="mdi mdi-google text-danger"></i>
                                  گوگل
                                </a>
                              </div>
                            </div>
                            <!--end col-->
                          </div>
                        </div>
                        <!--end col-->

                        <div class="mx-auto">
                          <p class="mb-0 mt-3">
                            <small class="text-dark me-2"
                              >قبلاً حساب دارید؟</small
                            >
                            <NuxtLink
                              to="/auth-cover-login"
                              class="text-dark fw-bold"
                              >وارد شوید
                            </NuxtLink>
                          </p>
                        </div>
                      </div>
                      <!--end row-->
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!--end row-->
          </div>
          <!-- end about detail -->
        </div>
        <!-- end col -->

        <div
          class="col-lg-8 offset-lg-4 padding-less img order-1"
          style="background-image: url('images/user/02.jpg')"
          data-jarallax='{"speed": 0.5}'
        ></div>
        <!-- end col -->
      </div>
      <!--end row-->
    </div>
    <!--end container fluid-->
  </section>
  <!--end section-->
  <!-- پایان آن -->
</template>
<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
