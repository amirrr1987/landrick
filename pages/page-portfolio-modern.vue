<template>
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title"> کار مدرن </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item"><a href="index.html">لنـدریـک </a></li>
                                    <li class="breadcrumb-item"><a href="#">صفحه </a></li>
                                    <li class="breadcrumb-item"><a href="#">نمونه کار ها</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">نمونه کار ها</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div> <!--end col-->
            </div><!--end row-->
        </div> <!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Hero End -->

    <!-- Start Works -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 filters-group-wrap">
                    <div class="filters-group">
                        <ul class="container-filter list-inline mb-0 filter-options text-center">
                            <li class="list-inline-item categories-name border text-dark rounded active" data-group="all">
                                همه </li>
                            <li class="list-inline-item categories-name border text-dark rounded" data-group="branding">
                                برندینگ </li>
                            <li class="list-inline-item categories-name border text-dark rounded" data-group="designing">
                                طراحی </li>
                            <li class="list-inline-item categories-name border text-dark rounded" data-group="photography">
                                عکاسی </li>
                            <li class="list-inline-item categories-name border text-dark rounded" data-group="development">
                                توسعه دهندگی</li>
                        </ul>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div id="grid" class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["branding"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/1.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">تغییر
                                    دیدگاه</a>
                                <small class="text-light">استودیو </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["designing"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/2.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">مجله رنگها</a>
                                <small class="text-light">طراحی وب </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["photography"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/3.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">لوازم آرایشی
                                    اسپا </a>
                                <small class="text-light">در حال توسعه </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["development"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/4.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">قهوه رایزر</a>
                                <small class="text-light">برندینگ </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["branding"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/5.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">رقصیدن با
                                    خودم</a>
                                <small class="text-light">عکاسی </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["branding"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/6.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">روندهای جدید
                                    در سئو</a>
                                <small class="text-light">کسب و کار </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["designing"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/7.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">تغییر
                                    دیدگاه</a>
                                <small class="text-light">استودیو </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["development"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/8.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">مجله رنگها</a>
                                <small class="text-light">طراحی وب </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["branding"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/9.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">لوازم آرایشی
                                    اسپا </a>
                                <small class="text-light">در حال توسعه </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["designing"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/10.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">قهوه رایزر</a>
                                <small class="text-light">برندینگ </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["photography"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/11.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">رقصیدن با
                                    خودم</a>
                                <small class="text-light">عکاسی </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["development"]'>
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="~/assets/images/work/12.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <a href="page-portfolio-detail.html" class="title text-white d-block fw-bold">روندهای جدید
                                    در سئو</a>
                                <small class="text-light">کسب و کار </small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                                <small class="text-light date"><i class="muil uil-calendar-alt"></i> اردیبهشت 1400</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <!-- PAGINATION START -->
                <div class="col-12 mt-4 pt-2">
                    <ul class="pagination justify-content-center mb-0">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">قبلی </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">بعدی </a>
                        </li>
                    </ul>
                </div><!--end col-->
                <!-- PAGINATION END -->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Works -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>