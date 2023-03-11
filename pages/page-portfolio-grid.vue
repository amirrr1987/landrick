<template>
  <!-- Hero Start -->
  <section class="bg-half bg-light d-table w-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title">نمونه کار گرید</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">صفحات </a></li>
                  <li class="breadcrumb-item"><a href="#">نمونه کار </a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    گرید
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
      <div class="row justify-content-center">
        <div class="col-12 filters-group-wrap">
          <div class="filters-group">
            <ul
              class="container-filter list-inline mb-0 filter-options text-center"
            >
              <li
                class="list-inline-item categories-name border text-dark rounded active"
                data-group="all"
              >
                همه
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="branding"
              >
                برندینگ
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="designing"
              >
                طراحی
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="photography"
              >
                عکاسی
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="development"
              >
                توسعه دهندگی
              </li>
            </ul>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->

      <div id="grid" class="row">
        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["branding"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/1.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/1.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >ماکت آیفون</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">نام تجاری</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["designing"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/2.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/2.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >مجموعه ماکت</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">مدل آزمایشگاهی</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["photography"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/3.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/3.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >تصاویر انتزاعی</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">چکیده</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["development"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/4.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/4.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >پس زمینه زرد با کتاب</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">کتابها</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["branding"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/5.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/5.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >کارت ویزیت شرکت</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">ویزیت کارت</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["branding"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/6.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/6.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >جعبه ماکت با رنگ</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">عکاسی</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["designing"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/7.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/7.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >فنجان قهوه
                  </a>
                </h5>
                <h6 class="text-muted tag mb-0">فنجان ها</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["development"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/8.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/8.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >قلم و مقاله</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">مقاله</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["photography"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/9.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/9.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >ماکت جعبه سفید</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">رنگ</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["photography"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/10.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/10.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >بردارهای آرم</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">آرم ها</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["branding"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/11.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/11.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >سیاه و سفید تی شرت</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">لباس ها</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["branding"]'
        >
          <div
            class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
          >
            <div class="card-body p-0">
              <a
                href="images/work/12.jpg"
                class="lightbox d-inline-block"
                title=""
              >
                <img
                  src="~/assets/images/work/12.jpg"
                  class="img-fluid"
                  alt="work-image"
                />
              </a>
              <div class="content bg-white p-3">
                <h5 class="mb-0">
                  <a href="page-portfolio-detail.html" class="text-dark title"
                    >پس زمینه زرد با تلفن همراه</a
                  >
                </h5>
                <h6 class="text-muted tag mb-0">تلفن</h6>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->

      <div class="row">
        <!-- PAGINATION START -->
        <div class="col-12 mt-4 pt-2">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item">
              <a
                class="page-link"
                href="javascript:void(0)"
                aria-label="Previous"
                >قبلی
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
              <a class="page-link" href="javascript:void(0)" aria-label="Next"
                >بعدی
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
  <!-- End -->
</template>

<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
