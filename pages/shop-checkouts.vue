<template>
  <!-- Hero Start -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">صندوق ها</h4>
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
                    صندوق ها
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
        <div class="col-lg-7 col-md-6">
          <div class="rounded shadow-lg p-4">
            <h5 class="mb-0">جزئیات صورتحساب :</h5>

            <form class="mt-4">
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >نام شما <span class="text-danger">*</span></label
                    >
                    <input
                      name="name"
                      id="firstname"
                      type="text"
                      class="form-control"
                      placeholder="نام اول :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >نام خانوادگی <span class="text-danger">*</span></label
                    >
                    <input
                      name="name"
                      id="lastname"
                      type="text"
                      class="form-control"
                      placeholder="نام خانوادگی :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >نام شرکت <span class="text-muted">(اختیاری)</span></label
                    >
                    <input
                      name="name"
                      id="companyname"
                      type="text"
                      class="form-control"
                      placeholder="نام شرکت :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >آدرس خیابان <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      name="address1"
                      id="address1"
                      class="form-control"
                      placeholder="شماره خانه و نام خیابان :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >آپارتمان، واحد 44.
                      <span class="text-muted">(اختیاری)</span></label
                    >
                    <input
                      type="text"
                      name="address2"
                      id="address2"
                      class="form-control"
                      placeholder="آپارتمان، واحد 44. :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >شهر / منطقه <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="form-control"
                      placeholder="نام شهر :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >کد پستی <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      name="postcode"
                      id="postcode"
                      class="form-control"
                      placeholder="کد پستی :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >منطقه <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      name="state"
                      id="state"
                      class="form-control"
                      placeholder="نام شهر :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >کشور <span class="text-danger">*</span></label
                    >
                    <select
                      class="form-select form-control"
                      aria-label="به طور پیش فرض مثال انتخاب کنید"
                    >
                      <option selected>هند</option>
                      <option value="AF">افغانستان</option>
                      <option value="AX">ایسلند</option>
                      <option value="AL">آلبانیا</option>
                      <option value="DZ">الجزیره</option>
                      <option value="AS">آمریکا</option>
                      <option value="AD">آندروا</option>
                      <option value="AO">آنگولا</option>
                      <option value="AI">آنگالیا</option>
                      <option value="AQ">کاستاریکا</option>
                    </select>
                  </div>
                </div>
                <!--end col-->
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >تلفن <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="form-control"
                      placeholder="نام شهر :"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >ایمیل شما <span class="text-danger">*</span></label
                    >
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="ایمیل شما :"
                    />
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </form>
            <!--end form-->
          </div>

          <div class="form-check form-check-inline my-4">
            <div class="mb-0">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="creataccount"
                />
                <label class="form-check-label" for="creataccount"
                  >ایجاد حساب کاربری؟</label
                >
              </div>
            </div>
          </div>

          <div class="rounded shadow-lg p-4">
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="addresscheck"
                />
                <label class="form-check-label" for="addresscheck"
                  >به آدرس دیگری ارسال شود؟</label
                >
              </div>
            </div>

            <div>
              <label class="form-label">نظرات </label>
              <textarea
                name="comments"
                id="comments"
                rows="4"
                class="form-control"
                placeholder="یادداشت هایی در مورد سفارش شما :"
              ></textarea>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="rounded shadow-lg p-4 sticky-bar">
            <div class="d-flex mb-4 justify-content-between">
              <h5>4 آیتم</h5>
              <a href="shop-cart.html" class="text-muted h6">نمایش جزئیات</a>
            </div>
            <div class="table-responsive">
              <table class="table table-center table-padding mb-0">
                <tbody>
                  <tr>
                    <td class="h6 border-0">مجموع</td>
                    <td class="text-end fw-bold border-0">289000 تومان</td>
                  </tr>
                  <tr>
                    <td class="h6">هزینه حمل و نقل</td>
                    <td class="text-end fw-bold">رایگان</td>
                  </tr>
                  <tr class="bg-light">
                    <td class="h5 fw-bold">مجموع</td>
                    <td class="text-end text-primary h4 fw-bold">
                      289000 تومان
                    </td>
                  </tr>
                </tbody>
              </table>

              <ul class="list-unstyled mt-4 mb-0">
                <li>
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input"
                        checked
                        type="radio"
                        name="flexRadioDefault"
                        id="banktransfer"
                      />
                      <label class="form-check-label" for="banktransfer"
                        >انتقال مبلغ</label
                      >
                    </div>
                  </div>
                </li>

                <li class="mt-3">
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="chequepay"
                      />
                      <label class="form-check-label" for="chequepay"
                        >پرداخت را چک کنید</label
                      >
                    </div>
                  </div>
                </li>

                <li class="mt-3">
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="cashdelivery"
                      />
                      <label class="form-check-label" for="cashdelivery"
                        >پرداخت نقدی هنگام تحویل</label
                      >
                    </div>
                  </div>
                </li>

                <li class="mt-3">
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="paypalpay"
                      />
                      <label class="form-check-label" for="paypalpay"
                        >پی پال
                        <a
                          href="https://www.paypal.com/uk/webapps/mpp/paypal-popup"
                          target="_blank"
                          class="ms-2 text-primary"
                          >پی پال چیست؟</a
                        ></label
                      >
                    </div>
                  </div>
                </li>
              </ul>

              <div class="mt-4 pt-2">
                <div class="d-grid">
                  <a href="shop-checkouts.html" class="btn btn-primary"
                    >سفارش دهید</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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