<template>
  <!-- شوع آن -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">فرم درخواست شغل</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">صفحه </a></li>
                  <li class="breadcrumb-item"><a href="#">مشاغل </a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    فرم درخواست شغل
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
  <!-- پایان آن -->

  <!-- Shape Start -->
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
  <!--Shape End-->

  <!-- فرم درخواست شغل Start -->
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-7">
          <div class="card custom-form border-0">
            <div class="card-body">
              <form class="rounded shadow p-4">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >نام شما: <span class="text-danger">*</span></label
                      >
                      <div class="form-icon position-relative">
                        <i data-feather="user" class="fea icon-sm icons"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control ps-5"
                          placeholder="نام اول :"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >ایمیل شما :<span class="text-danger">*</span></label
                      >
                      <div class="form-icon position-relative">
                        <i data-feather="mail" class="fea icon-sm icons"></i>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-control ps-5"
                          placeholder="ایمیل شما :"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >تلفن شما :<span class="text-danger">*</span></label
                      >
                      <div class="form-icon position-relative">
                        <i data-feather="phone" class="fea icon-sm icons"></i>
                        <input
                          name="number"
                          id="number"
                          type="number"
                          class="form-control ps-5"
                          placeholder="تلفن شما :"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">عنوان شغل :</label>
                      <div class="form-icon position-relative">
                        <i data-feather="book" class="fea icon-sm icons"></i>
                        <input
                          name="subject"
                          id="subject"
                          class="form-control ps-5"
                          placeholder="عنوان:"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">انواع مشاغل :</label>
                      <select
                        class="form-control custom-select"
                        id="Sortbylist-Shop"
                      >
                        <option>تمام کارها</option>
                        <option>تمام وقت</option>
                        <option>نیمه وقت</option>
                        <option>از راه دور</option>
                        <option>در دفتر</option>
                      </select>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">توضیحات : </label>
                      <div class="form-icon position-relative">
                        <i
                          data-feather="message-circle"
                          class="fea icon-sm icons"
                        ></i>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          class="form-control ps-5"
                          placeholder="شغل را توصیف کنید :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="formFile" class="form-label"
                        >رزومه / رزومه خود را بارگذاری کنید :</label
                      >
                      <input class="form-control" type="file" id="formFile" />
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
                        <label class="form-check-label" for="flexCheckDefault"
                          >تایید میکنم
                          <a href="#" class="text-primary"
                            >قوانین سایت لنـدریـک را و تیکت را فعال میکنم</a
                          ></label
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
                <div class="row">
                  <div class="col-sm-12">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      class="submitBnt btn btn-primary"
                      value="اکنون اعمال کنید"
                    />
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </form>
              <!--end form-->
            </div>
          </div>
          <!--end custom-form-->
        </div>
      </div>
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- فرم درخواست شغل End -->
</template>

<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
