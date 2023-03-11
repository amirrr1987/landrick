<template>
  <!-- Start Contact -->
  <section class="section pt-5 mt-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card map border-0">
            <div class="card-body p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                style="border: 0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
          <div class="card custom-form rounded border-0 shadow p-4">
            <form method="post" name="myForm" onsubmit="return validateForm()">
              <p id="error-msg" class="mb-0"></p>
              <div id="simple-msg"></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">نام شما <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                      <i data-feather="user" class="fea icon-sm icons"></i>
                      <input name="name" id="name" type="text" class="form-control ps-5" placeholder="نام :" />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">ایمیل شما <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                      <i data-feather="mail" class="fea icon-sm icons"></i>
                      <input name="email" id="email" type="email" class="form-control ps-5" placeholder="ایمیل :" />
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">موضوع </label>
                    <div class="form-icon position-relative">
                      <i data-feather="book" class="fea icon-sm icons"></i>
                      <input name="subject" id="subject" class="form-control ps-5" placeholder="موضوع  :" />
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">نظرات <span class="text-danger">*</span></label>
                    <div class="form-icon position-relative">
                      <i data-feather="message-circle" class="fea icon-sm icons clearfix"></i>
                      <textarea name="comments" id="comments" rows="4" class="form-control ps-5"
                        placeholder="پیام :"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="d-grid">
                    <button type="submit" id="submit" name="send" class="btn btn-primary">
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
        <!--end col-->

        <div class="col-lg-7 col-md-6 order-1 order-md-2">
          <div class="title-heading ms-lg-4">
            <h4 class="mb-4">جزئیات تماس با ما</h4>
            <p class="text-muted">
              شروع به کار با
              <span class="text-primary fw-bold"> لنـدریـک </span> که می تواند
              هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن
              نیاز دارید فراهم کند.
            </p>
            <div class="d-flex contact-detail align-items-center mt-3">
              <div class="icon">
                <i data-feather="mail" class="fea icon-m-md text-dark me-3"></i>
              </div>
              <div class="flex-1 content">
                <h6 class="title fw-bold mb-0">ایمیل</h6>
                <a href="mailto:contact@example.com" class="text-primary">contact@example.com</a>
              </div>
            </div>

            <div class="d-flex contact-detail align-items-center mt-3">
              <div class="icon">
                <i data-feather="phone" class="fea icon-m-md text-dark me-3"></i>
              </div>
              <div class="flex-1 content">
                <h6 class="title fw-bold mb-0">تلفن</h6>
                <a href="tel:+152534-468-854" class="text-primary">+152 534-468-854</a>
              </div>
            </div>

            <div class="d-flex contact-detail align-items-center mt-3">
              <div class="icon">
                <i data-feather="map-pin" class="fea icon-m-md text-dark me-3"></i>
              </div>
              <div class="flex-1 content">
                <h6 class="title fw-bold mb-0">موقعیت</h6>
                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                  data-type="iframe" class="video-play-icon text-primary lightbox">نمایش در گوگل</a>
              </div>
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