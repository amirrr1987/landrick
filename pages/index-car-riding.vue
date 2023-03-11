<template>
    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="bg-white shadow rounded position-relative overflow-hidden">
                        <div class="text-center">
                            <ul class="nav nav-pills nav-justified flex-sm-row mb-0" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link py-2 active rounded-0" id="User-login" data-bs-toggle="pill"
                                        href="#user" role="tab" aria-controls="user" aria-selected="false">
                                        <div class="text-center py-2">
                                            <h6 class="mb-0">کاربر </h6>
                                        </div>
                                    </a><!--end nav link-->
                                </li><!--end nav item-->

                                <li class="nav-item">
                                    <a class="nav-link py-2 rounded-0" id="Driver-login" data-bs-toggle="pill"
                                        href="#driver" role="tab" aria-controls="driver" aria-selected="false">
                                        <div class="text-center py-2">
                                            <h6 class="mb-0">راننده </h6>
                                        </div>
                                    </a><!--end nav link-->
                                </li><!--end nav item-->
                            </ul>
                        </div>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="card border-0 tab-pane fade show active" id="user" role="tabpanel"
                                aria-labelledby="User-login">
                                <form class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">نام اصلی <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="user" class="fea icon-sm icons"></i>
                                                    <input type="text" class="form-control ps-5" placeholder="نام اصلی "
                                                        name="s" required="">
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">ایمیل شما <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="ایمیل"
                                                        name="email" required="">
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">رمز عبور <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="key" class="fea icon-sm icons"></i>
                                                    <input type="password" class="form-control ps-5" placeholder="رمز عبور "
                                                        required="">
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="user-check">
                                                    <label class="form-check-label" for="user-check">تایید میکنم <a href="#"
                                                            class="text-primary">قوانین سایت لنـدریـک را و تیکت را فعال
                                                            میکنم</a></label>
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">ثبت نام </button>
                                            </div>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form><!--end form-->
                            </div><!--end teb pane-->

                            <div class="card border-0 tab-pane fade" id="driver" role="tabpanel"
                                aria-labelledby="Driver-login">
                                <form class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">نام اصلی <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="user" class="fea icon-sm icons"></i>
                                                    <input type="text" class="form-control ps-5" placeholder="نام اصلی "
                                                        name="s" required="">
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">ایمیل شما <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="ایمیل"
                                                        name="email" required="">
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">رمز عبور <span
                                                        class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="key" class="fea icon-sm icons"></i>
                                                    <input type="password" class="form-control ps-5" placeholder="رمز عبور "
                                                        required="">
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="driver-check">
                                                    <label class="form-check-label" for="driver-check">تایید میکنم <a
                                                            href="#" class="text-primary">قوانین سایت لنـدریـک را و تیکت را
                                                            فعال میکنم</a></label>
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">ثبت نام </button>
                                            </div>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form><!--end form-->
                            </div><!--end teb pane-->
                        </div><!--end tab content-->
                    </div>
                </div><!--end col-->

                <div class="col-lg-7 offset-lg-1 col-md-7 order-1 order-md-2">
                    <div class="title-heading mt-4">
                        <h1 class="display-4 fw-normal mb-3">خدمات بی نظیر و قیمت بی نظیر</h1>
                        <p class="para-desc text-muted">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و مدیریت
                            صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                        <div class="mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-primary mt-2 me-2"><i class="uil uil-apple"></i> اپ
                                استور</a>
                            <a href="javascript:void(0)" class="btn btn-outline-primary mt-2"><i
                                    class="uil uil-google-play"></i> پلی استور</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Hero End -->

    <!-- Features Start -->
    <section class="section bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">سواری های بهتر خود را پیدا کنید</h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="ride-image position-relative">
                            <img src="~/assets/images/riding/01.png" class="avatar avatar-ex-large shadow" alt="">
                        </div>
                        <div class="content mt-5 pt-3">
                            <h4 class="title-2"><a href="javascript:void(0)" class="text-dark">انتخاب خودرو</a></h4>
                            <p class="text-muted mb-0">متن ساختگی متنی است که در انتشارات استفاده می شود صنعت یا توسط طراحی
                                وب برای اشغال فضا است</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="ride-image">
                            <img src="~/assets/images/riding/02.png" class="avatar avatar-ex-large shadow" alt="">
                        </div>
                        <div class="content mt-5 pt-3">
                            <h4 class="title-2"><a href="javascript:void(0)" class="text-dark">مقصد خود را تعیین کنید</a>
                            </h4>
                            <p class="text-muted mb-0">متن ساختگی متنی است که در انتشارات استفاده می شود صنعت یا توسط طراحی
                                وب برای اشغال فضا است</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="ride-image">
                            <img src="~/assets/images/riding/03.png" class="avatar avatar-ex-large shadow" alt="">
                        </div>
                        <div class="content mt-5 pt-3">
                            <h4 class="title-2"><a href="javascript:void(0)" class="text-dark">تماس با فروشنده</a></h4>
                            <p class="text-muted mb-0">متن ساختگی متنی است که در انتشارات استفاده می شود صنعت یا توسط طراحی
                                وب برای اشغال فضا است</p>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Features End -->

    <!-- Ride Request Start -->
    <section class="section">
        <div class="container">
            <div class="card bg-light rounded border-0 overflow-hidden">
                <div class="row g-0 align-items-center">
                    <div class="col-md-6 mt-2 mt-sm-0 order-2 order-md-1">
                        <div class="card-body section-title p-lg-5">
                            <h2 class="mb-4 fw-normal">همین حالا درخواست یک سواری کنید</h2>
                            <form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">نقطه شروع را انتخاب کنید</label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="map-pin" class="fea icon-sm icons text-success"></i>
                                                <input name="name" id="location1" type="text" class="form-control ps-5"
                                                    placeholder="نقطه شروع را انتخاب کنید...">
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">مقصد خود را انتخاب کنید</label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="map-pin" class="fea icon-sm icons text-danger"></i>
                                                <input name="name" id="location2" type="text" class="form-control ps-5"
                                                    placeholder="مقصد خود را انتخاب کنید...">
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                                <a href="javascript:void(0)" class="btn btn-primary">اکنون درخواست کنید <i
                                        class="uil uil-angle-left-b"></i></a>
                            </form><!--end form-->
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 order-1 order-md-2">
                        <div class="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                                style="border:0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div><!--end row-->
            </div>
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">ما خدمات بیشتری نیز ارائه داده ایم</h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="~/assets/images/icon/car.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">حمل و نقل </h4>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد..</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="~/assets/images/icon/food-and-restaurant.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">غذا </h4>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد..</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="~/assets/images/icon/fast.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">تحویل </h4>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد..</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="~/assets/images/icon/card.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">مبلغ پرداختی </h4>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد..</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="~/assets/images/icon/movie-tickets.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">بلیط ها </h4>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد..</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="~/assets/images/icon/hotel.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">هتل ها </h4>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد..</p>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">آنچه مشتری ما می گوید!</h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row justify-content-center mt-4">
                <div class="col-lg-8 col-12">
                    <div class="tiny-single-item">
                        <div class="tiny-slide">
                            <!-- Review Start -->
                            <div class="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                <div class="row align-items-center g-0">
                                    <div class="col-md-5">
                                        <img src="~/assets/images/client/01.jpg" class="img-fluid" alt="">
                                    </div><!--end col-->

                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h6 class="text-primary fw-bold">توماس لوری <small
                                                    class="text-muted d-block">راننده </small></h6>
                                            <ul class="list-unstyled mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <p class="text-muted h6 mb-0 fst-italic">" به نظر می رسد که تنها تکه هایی از متن
                                                اصلی در متن اپیسوم که امروزه استفاده می شود باقی مانده است. شناخته شده در
                                                قرن شانزدهم پدید آمده است. "</p>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                            <!-- Review End -->
                        </div>

                        <div class="tiny-slide">
                            <!-- Review Start -->
                            <div class="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                <div class="row align-items-center g-0">
                                    <div class="col-md-5">
                                        <img src="~/assets/images/client/02.jpg" class="img-fluid" alt="">
                                    </div><!--end col-->

                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h6 class="text-primary fw-bold">باباکارما <small
                                                    class="text-muted d-block">کاربر </small></h6>
                                            <ul class="list-unstyled mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <p class="text-muted h6 mb-0 fst-italic">" به نظر می رسد که تنها تکه هایی از متن
                                                اصلی در متن اپیسوم که امروزه استفاده می شود باقی مانده است. شناخته شده در
                                                قرن شانزدهم پدید آمده است. "</p>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                            <!-- Review End -->
                        </div>

                        <div class="tiny-slide">
                            <!-- Review Start -->
                            <div class="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                <div class="row align-items-center g-0">
                                    <div class="col-md-5">
                                        <img src="~/assets/images/client/03.jpg" class="img-fluid" alt="">
                                    </div><!--end col-->

                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h6 class="text-primary fw-bold">چری استین <small
                                                    class="text-muted d-block">مسافر </small></h6>
                                            <ul class="list-unstyled mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <p class="text-muted h6 mb-0 fst-italic">" به نظر می رسد که تنها تکه هایی از متن
                                                اصلی در متن اپیسوم که امروزه استفاده می شود باقی مانده است. شناخته شده در
                                                قرن شانزدهم پدید آمده است. "</p>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                            <!-- Review End -->
                        </div>

                        <div class="tiny-slide">
                            <!-- Review Start -->
                            <div class="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                <div class="row align-items-center g-0">
                                    <div class="col-md-5">
                                        <img src="~/assets/images/client/04.jpg" class="img-fluid" alt="">
                                    </div><!--end col-->

                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h6 class="text-primary fw-bold">کارلوس <small class="text-muted d-block">راننده
                                                </small></h6>
                                            <ul class="list-unstyled mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <p class="text-muted h6 mb-0 fst-italic">" به نظر می رسد که تنها تکه هایی از متن
                                                اصلی در متن اپیسوم که امروزه استفاده می شود باقی مانده است. شناخته شده در
                                                قرن شانزدهم پدید آمده است. "</p>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                            <!-- Review End -->
                        </div>

                        <div class="tiny-slide">
                            <!-- Review Start -->
                            <div class="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                <div class="row align-items-center g-0">
                                    <div class="col-md-5">
                                        <img src="~/assets/images/client/05.jpg" class="img-fluid" alt="">
                                    </div><!--end col-->

                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h6 class="text-primary fw-bold">جیل شبی <small class="text-muted d-block">مسافر
                                                </small></h6>
                                            <ul class="list-unstyled mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <p class="text-muted h6 mb-0 fst-italic">" به نظر می رسد که تنها تکه هایی از متن
                                                اصلی در متن اپیسوم که امروزه استفاده می شود باقی مانده است. شناخته شده در
                                                قرن شانزدهم پدید آمده است. "</p>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                            <!-- Review End -->
                        </div>

                        <div class="tiny-slide">
                            <!-- Review Start -->
                            <div class="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                <div class="row align-items-center g-0">
                                    <div class="col-md-5">
                                        <img src="~/assets/images/client/06.jpg" class="img-fluid" alt="">
                                    </div><!--end col-->

                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h6 class="text-primary fw-bold">دین لوس <small class="text-muted d-block">کاربر
                                                </small></h6>
                                            <ul class="list-unstyled mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <p class="text-muted h6 mb-0 fst-italic">" به نظر می رسد که تنها تکه هایی از متن
                                                اصلی در متن اپیسوم که امروزه استفاده می شود باقی مانده است. شناخته شده در
                                                قرن شانزدهم پدید آمده است. "</p>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                            <!-- Review End -->
                        </div>
                    </div><!--end owl-fade-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Ride Request End -->

    <!-- App Start -->
    <section class="section bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">سوالی دارید؟</h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="row">
                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="d-flex">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mt-0">آیا این <span class="text-primary">لنـدریـک </span> نسخه جدید است؟ </h5>
                                <p class="answer text-muted mb-0">به دلیل استفاده گسترده از آن به عنوان متن پر کننده برای
                                    طرح بندی, غیرقابل خواندن از اهمیت زیادی برخوردار است: ادراک انسان برای شناسایی الگوها و
                                    تکرارهای خاص در متن تنظیم شده است.</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="d-flex">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mt-0"> فرآیند اصلی حساب باز چیست؟</h5>
                                <p class="answer text-muted mb-0">اگر توزیع حروف و کلمات تصادفی باشد ، خواننده حواس او را
                                    پرت نمی کند از قضاوت بی طرف در مورد تأثیر بصری</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="d-flex">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mt-0"> چگونه می توان داده نامحدود را وارد کرد؟</h5>
                                <p class="answer text-muted mb-0">بعلاوه ، هنگامی که متن ساختگی نسبتاً واقعی بینانه باشد ،
                                    به گونه ای سودمند خواهد بود که طرح ایجاد شده از انتشار نهایی به خطر نیفتد.</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="d-flex">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mt-0"> آیا <span class="text-primary">لنـدریـک </span> با حساب من استفاده ایمن تر
                                    است؟</h5>
                                <p class="answer text-muted mb-0">به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                    اپیسوم که امروزه استفاده می شود باقی مانده است. لورم اپیسوم ساخته شده است به زبان شبه
                                    لاتین که کم و بیش با 'مناسب' لاتین مطابقت دارد.</p>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end row-->

            <div class="row mt-5 pt-lg-3 justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title mb-4">برنامه ما را بارگیری کنید!</h4>
                        <p class="text-muted para-desc mx-auto">شروع به کار با <span class="text-primary fw-bold">لنـدریـک
                            </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید
                            فراهم کند.</p>
                        <div class="mt-4 pt-2">
                            <div class="text-center subcribe-form">
                                <form class="mb-4">
                                    <input name="number" id="number" type="number" class="form-control rounded-pill"
                                        placeholder="شماره تلفن شما :" required="" aria-describedby="cellnumber">
                                    <button class="btn btn-pills btn-primary submitBnt" type="submit" id="cellnumber">ارسال
                                        پیوند برنامه</button>
                                </form><!--end form-->
                            </div>

                            <p class="text-muted">یا </p>

                            <a href="javascript:void(0)" class="btn btn-primary mt-2 me-2"><i class="uil uil-apple"></i> اپ
                                استور</a>
                            <a href="javascript:void(0)" class="btn btn-outline-primary mt-2"><i
                                    class="uil uil-google-play"></i> پلی استور</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end contanainer-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-footer">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- App End -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>