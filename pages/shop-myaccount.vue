<template>
  <!-- Hero Start -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">حساب کاربری و پروفایل</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="index-shop.html">فروشگاه </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    حساب من
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
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
  <!-- Hero End -->

  <!-- Start -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-4 pt-2">
          <div class="d-flex align-items-center">
            <img
              src="~/assets/images/client/05.jpg"
              class="avatar avatar-md-md rounded-circle"
              alt=""
            />
            <div class="ms-3">
              <h6 class="text-muted mb-0">سلام ،</h6>
              <h5 class="mb-0">جعفر عباسی</h5>
            </div>
          </div>

          <ul
            class="nav nav-pills nav-justified flex-column bg-white rounded mt-4 shadow p-3 mb-0"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link rounded active"
                id="dashboard"
                data-bs-toggle="pill"
                href="#dash"
                role="tab"
                aria-controls="dash"
                aria-selected="false"
              >
                <div class="text-start py-1 px-3">
                  <h6 class="mb-0">
                    <i class="uil uil-dashboard h5 align-middle me-2 mb-0"></i>
                    داشبورد
                  </h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item mt-2">
              <a
                class="nav-link rounded"
                id="order-history"
                data-bs-toggle="pill"
                href="#orders"
                role="tab"
                aria-controls="orders"
                aria-selected="false"
              >
                <div class="text-start py-1 px-3">
                  <h6 class="mb-0">
                    <i class="uil uil-list-ul h5 align-middle me-2 mb-0"></i>
                    سفارشات
                  </h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item mt-2">
              <a
                class="nav-link rounded"
                id="download"
                data-bs-toggle="pill"
                href="#down"
                role="tab"
                aria-controls="down"
                aria-selected="false"
              >
                <div class="text-start py-1 px-3">
                  <h6 class="mb-0">
                    <i
                      class="uil uil-arrow-circle-down h5 align-middle me-2 mb-0"
                    ></i>
                    دانلود ها
                  </h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item mt-2">
              <a
                class="nav-link rounded"
                id="addresses"
                data-bs-toggle="pill"
                href="#address"
                role="tab"
                aria-controls="address"
                aria-selected="false"
              >
                <div class="text-start py-1 px-3">
                  <h6 class="mb-0">
                    <i class="uil uil-map-marker h5 align-middle me-2 mb-0"></i>
                    آدرس ها
                  </h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item mt-2">
              <a
                class="nav-link rounded"
                id="account-details"
                data-bs-toggle="pill"
                href="#account"
                role="tab"
                aria-controls="account"
                aria-selected="false"
              >
                <div class="text-start py-1 px-3">
                  <h6 class="mb-0">
                    <i class="uil uil-user h5 align-middle me-2 mb-0"></i>
                    جزئیات حساب
                  </h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item mt-2">
              <a
                class="nav-link rounded"
                href="auth-login.html"
                aria-selected="false"
              >
                <div class="text-start py-1 px-3">
                  <h6 class="mb-0">
                    <i
                      class="uil uil-sign-out-alt h5 align-middle me-2 mb-0"
                    ></i>
                    خروج
                  </h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->
          </ul>
          <!--end nav pills-->
        </div>
        <!--end col-->

        <div class="col-md-8 col-12 mt-4 pt-2">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade bg-white show active shadow rounded p-4"
              id="dash"
              role="tabpanel"
              aria-labelledby="dashboard"
            >
              <h6 class="text-muted">
                سلام <span class="text-dark">Jafar_abbasi</span> (نیستید
                <span class="text-dark">Jafar_abbasi</span>?
                <a href="javascript:void(0)" class="text-danger">خروج</a>)
              </h6>

              <h6 class="text-muted mb-0">
                از داشبورد حساب خود می توانید خود را مشاهده کنید
                <a href="javascript:void(0)" class="text-danger">سفارشات اخیر</a
                >, با مدیریت شما
                <a href="javascript:void(0)" class="text-danger"
                  >آدرس حمل و نقل و صورتحساب</a
                >, و
                <a href="javascript:void(0)" class="text-danger"
                  >رمز ورود و جزئیات حساب خود را ویرایش کنید</a
                >.
              </h6>
            </div>
            <!--end teb pane-->

            <div
              class="tab-pane fade bg-white shadow rounded p-4"
              id="orders"
              role="tabpanel"
              aria-labelledby="order-history"
            >
              <div class="table-responsive bg-white shadow rounded">
                <table class="table mb-0 table-center table-nowrap">
                  <thead>
                    <tr>
                      <th scope="col" class="border-bottom">شماره سفارش</th>
                      <th scope="col" class="border-bottom">تاریخ</th>
                      <th scope="col" class="border-bottom">وضعیت</th>
                      <th scope="col" class="border-bottom">مجموع</th>
                      <th scope="col" class="border-bottom">اقدام</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">7107</th>
                      <td>اردیبهشت 1400</td>
                      <td class="text-success">تحویل داده شده</td>
                      <td>
                        320 هزار تومان
                        <span class="text-muted">برای 2 موارد</span>
                      </td>
                      <td>
                        <a href="javascript:void(0)" class="text-primary"
                          >نمایش <i class="uil uil-arrow-right"></i
                        ></a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">8007</th>
                      <td>اردیبهشت 1400</td>
                      <td class="text-muted">در حال پردازش</td>
                      <td>
                        800 هزار تومان
                        <span class="text-muted">برای 1موارد</span>
                      </td>
                      <td>
                        <a href="javascript:void(0)" class="text-primary"
                          >نمایش <i class="uil uil-arrow-right"></i
                        ></a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">8008</th>
                      <td>اردیبهشت 1400</td>
                      <td class="text-danger">لغو شده</td>
                      <td>
                        800 هزار تومان
                        <span class="text-muted">برای 1موارد</span>
                      </td>
                      <td>
                        <a href="javascript:void(0)" class="text-primary"
                          >نمایش <i class="uil uil-arrow-right"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!--end teb pane-->

            <div
              class="tab-pane fade bg-white shadow rounded p-4"
              id="down"
              role="tabpanel"
              aria-labelledby="download"
            >
              <div class="table-responsive bg-white shadow rounded">
                <table class="table mb-0 table-center table-nowrap">
                  <thead>
                    <tr>
                      <th scope="col" class="border-bottom">نام محصول</th>
                      <th scope="col" class="border-bottom">توضیحات</th>
                      <th scope="col" class="border-bottom">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">سریع التیام یابد</th>
                      <td class="text-muted">
                        گفته می شود آهنگسازان آهنگ گذشته <br />
                        هنگام نوشتن از متن ساختگی به عنوان شعر استفاده می کرد
                        <br />
                        ملودی به منظور داشتن "آماده" است' <br />
                        متن برای خواندن با ملودی.
                      </td>
                      <td class="text-success">دانلود</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!--end teb pane-->

            <div
              class="tab-pane fade bg-white shadow rounded p-4"
              id="address"
              role="tabpanel"
              aria-labelledby="addresses"
            >
              <h6 class="text-muted mb-0">
                به طور پیش فرض آدرس های زیر در صفحه پرداخت استفاده می شود.
              </h6>

              <div class="row">
                <div class="col-lg-6 mt-4 pt-2">
                  <div
                    class="d-flex align-items-center mb-4 justify-content-between"
                  >
                    <h5 class="mb-0">ساخت آدرس:</h5>
                    <a
                      href="javascript:void(0)"
                      class="text-primary h5 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-original-title="Edit"
                      ><i class="uil uil-edit align-middle"></i
                    ></a>
                  </div>
                  <div class="pt-4 border-top">
                    <p class="h6">جعفر عباسی</p>
                    <p class="h6 text-muted">ارومیه، شاهین دژ، قزلناو,</p>
                    <p class="h6 text-muted">خیابان دانش,</p>
                    <p class="h6 text-muted">ایران</p>
                    <p class="h6 text-muted mb-0">+123 897 5468</p>
                  </div>
                </div>

                <div class="col-lg-6 mt-4 pt-2">
                  <div
                    class="d-flex align-items-center mb-4 justify-content-between"
                  >
                    <h5 class="mb-0">آدرس فروشگاه:</h5>
                    <a
                      href="javascript:void(0)"
                      class="text-primary h5 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-original-title="Edit"
                      ><i class="uil uil-edit align-middle"></i
                    ></a>
                  </div>
                  <div class="pt-4 border-top">
                    <p class="h6">جعفر عباسی</p>
                    <p class="h6 text-muted">ارومیه، شاهین دژ، قزلناو,</p>
                    <p class="h6 text-muted">خیابان دانش,</p>
                    <p class="h6 text-muted">ایران</p>
                    <p class="h6 text-muted mb-0">+123 897 5468</p>
                  </div>
                </div>
              </div>
            </div>
            <!--end teb pane-->

            <div
              class="tab-pane fade bg-white shadow rounded p-4"
              id="account"
              role="tabpanel"
              aria-labelledby="account-details"
            >
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">نام اصلی </label>
                      <div class="form-icon position-relative">
                        <i data-feather="user" class="fea icon-sm icons"></i>
                        <input
                          name="name"
                          id="first-name"
                          type="text"
                          class="form-control ps-5"
                          value="Cally"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">نام خانوادگی </label>
                      <div class="form-icon position-relative">
                        <i
                          data-feather="user-check"
                          class="fea icon-sm icons"
                        ></i>
                        <input
                          name="name"
                          id="last-name"
                          type="text"
                          class="form-control ps-5"
                          value="Joseph"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">ایمیل شما </label>
                      <div class="form-icon position-relative">
                        <i data-feather="mail" class="fea icon-sm icons"></i>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-control ps-5"
                          value="callyjoseph@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">نام نمایشی</label>
                      <div class="form-icon position-relative">
                        <i
                          data-feather="user-check"
                          class="fea icon-sm icons"
                        ></i>
                        <input
                          name="name"
                          id="display-name"
                          type="text"
                          class="form-control ps-5"
                          value="Jafar_abbasi"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-12 mt-2 mb-0">
                    <button class="btn btn-primary">ذخیره تغییرات</button>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </form>

              <h5 class="mt-4">تغییر رمز عبور :</h5>
              <form>
                <div class="row mt-3">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">رمز عبور قدیمی : </label>
                      <div class="form-icon position-relative">
                        <i data-feather="key" class="fea icon-sm icons"></i>
                        <input
                          type="password"
                          class="form-control ps-5"
                          placeholder="رمز قدیمی"
                          :required="true"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">رمز عبور جدید : </label>
                      <div class="form-icon position-relative">
                        <i data-feather="key" class="fea icon-sm icons"></i>
                        <input
                          type="password"
                          class="form-control ps-5"
                          placeholder="رمز جدید"
                          :required="true"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">تایید رمز عبور جدید : </label>
                      <div class="form-icon position-relative">
                        <i data-feather="key" class="fea icon-sm icons"></i>
                        <input
                          type="password"
                          class="form-control ps-5"
                          placeholder="رمز عبور جدید"
                          :required="true"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-12 mt-2 mb-0">
                    <button class="btn btn-primary">ذخیره رمز عبور</button>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </form>
            </div>
            <!--end teb pane-->
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>
<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>