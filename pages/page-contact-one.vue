<template>
  <!-- شوع آن -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">تماس با ما</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">صفحه </a></li>
                  <li class="breadcrumb-item"><a href="#">تماس با ما</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    تماس با ما یک
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

  <!-- Start Contact -->
  <section class="section pb-0">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card border-0 text-center features feature-clean">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-phone d-block rounded h3 mb-0"></i>
            </div>
            <div class="content mt-3">
              <h5 class="fw-bold">تلفن</h5>
              <p class="text-muted">
                شروع به کار با لندریک که می تواند همه چیز را فراهم کند
              </p>
              <a href="tel:+152534-468-854" class="text-primary"
                >+152 534-468-854</a
              >
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="card border-0 text-center features feature-clean">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-envelope d-block rounded h3 mb-0"></i>
            </div>
            <div class="content mt-3">
              <h5 class="fw-bold">ایمیل</h5>
              <p class="text-muted">
                شروع به کار با لندریک که می تواند همه چیز را فراهم کند
              </p>
              <a href="mailto:contact@example.com" class="text-primary"
                >contact@example.com</a
              >
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="card border-0 text-center features feature-clean">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-map-marker d-block rounded h3 mb-0"></i>
            </div>
            <div class="content mt-3">
              <h5 class="fw-bold">موقعیت</h5>
              <p class="text-muted">
                ارومیه، شاهین دژ، قزلناو, خیابان دانش, <br />ایران
              </p>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                data-type="iframe"
                class="video-play-icon text-primary lightbox"
                >نمایش در گوگل</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
          <div class="card shadow rounded border-0">
            <div class="card-body py-5">
              <h4 class="card-title">در تماس باشید !</h4>
              <div class="custom-form mt-3">
                <form
                  method="post"
                  name="myForm"
                  onsubmit="return validateForm()"
                >
                  <p id="error-msg" class="mb-0"></p>
                  <div id="simple-msg"></div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >نام شما <span class="text-danger">*</span></label
                        >
                        <div class="form-icon position-relative">
                          <i data-feather="user" class="fea icon-sm icons"></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            class="form-control ps-5"
                            placeholder="نام :"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >ایمیل شما <span class="text-danger">*</span></label
                        >
                        <div class="form-icon position-relative">
                          <i data-feather="mail" class="fea icon-sm icons"></i>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            class="form-control ps-5"
                            placeholder="ایمیل :"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label">موضوع </label>
                        <div class="form-icon position-relative">
                          <i data-feather="book" class="fea icon-sm icons"></i>
                          <input
                            name="subject"
                            id="subject"
                            class="form-control ps-5"
                            placeholder="موضوع  :"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >نظرات <span class="text-danger">*</span></label
                        >
                        <div class="form-icon position-relative">
                          <i
                            data-feather="message-circle"
                            class="fea icon-sm icons clearfix"
                          ></i>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            class="form-control ps-5"
                            placeholder="پیام :"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          class="btn btn-primary"
                        >
                          ارسال پیام
                        </button>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
              </div>
              <!--end custom-form-->
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-7 col-md-6 order-1 order-md-2">
          <div class="card border-0">
            <div class="card-body p-0">
              <img src="~/assets/images/contact.svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <div class="container-fluid mt-100 mt-60">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card map border-0">
            <div class="card-body p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                style="border: 0"
                allowfullscreen
              ></iframe>
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
  <!-- End contact -->
</template>

<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
