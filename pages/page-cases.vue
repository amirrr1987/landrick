<template>
  <!-- Hero Start -->
  <section
    class="bg-half d-table w-100"
    :style="`background: url(${bgImg}) center center`"
  >
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="page-next-level">
            <h4 class="title text-white title-dark">همه موارد</h4>
            <div class="page-next">
              <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb bg-white rounded shadow mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">لنـدریـک </a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">صفحات </a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    کیس
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
                data-group="business"
              >
                شرکتی
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="marketing"
              >
                مارکتینگ
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="finance"
              >
                مالی
              </li>
              <li
                class="list-inline-item categories-name border text-dark rounded"
                data-group="human"
              >
                تحقیقات انسانی
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
          data-groups='["business"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/1.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-primary"
                  >کسب و کار
                </a>
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >200% دسترسی گسترده به فیس بوک</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["marketing"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/2.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-warning"
                  >بازاریابی</a
                >
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >موفقیت در جستجوگرها برای عایق بندی</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["finance"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/3.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-success"
                  >مالی
                </a>
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >مبارزات دوستانه برای موبایل</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["human"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/4.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-info"
                  >HR</a
                >
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >کمپین HVAC سئو</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["business"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/5.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-primary"
                  >کسب و کار
                </a>
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >شبکه سوشیال و کسب و کار کوچک
                  </a>
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["marketing"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/6.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-warning"
                  >بازاریابی</a
                >
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >موفقیت PPC برای شرکت HVAC</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["finance"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/7.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-success"
                  >مالی
                </a>
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >مطالعات موردی تجارت الکترونیکی PPC</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["human"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/8.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-info"
                  >HR</a
                >
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >ماکت آیفون</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div
          class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item"
          data-groups='["human"]'
        >
          <div
            class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden"
          >
            <img
              src="~/assets/images/work/9.jpg"
              class="img-fluid work-image"
              alt=""
            />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-link bg-info"
                  >HR</a
                >
                <h5 class="mt-3">
                  <a href="page-case-detail.html" class="text-dark title"
                    >ماکت آیفون</a
                  >
                </h5>
                <p class="text-muted">
                  این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس
                  نیست.
                </p>
                <a href="javascript:void(0)" class="text-primary h6"
                  >ادامه مطلب <i class="uil uil-angle-left-b align-middle"></i
                ></a>
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
</template>

<script setup lang="ts">
import bgImg from "~/assets/images/2.jpg";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
