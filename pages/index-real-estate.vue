<template>
    <!-- Hero Start -->
    <section class="bg-half-260 d-table w-100" id="home">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h4 class="display-4 fw-bold text-white title-dark mb-3">خاصیت عالی خود را پیدا کنید</h4>
                        <p class="para-desc text-white-50 mb-0 mx-auto">کمپین خود را راه اندازی کنید و از تخصص ما در
                            زمینه طراحی و مدیریت صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                    </div>
                </div>
            </div><!--end row-->
        </div> <!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Start -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-11 col-12 text-center mt-sm-0 pt-sm-0">
                    <div class="text-center features-absolute">
                        <ul class="nav nav-pills shadow border-bottom flex-column flex-sm-row d-md-inline-flex nav-justified mb-0 bg-white rounded-top position-relative overflow-hidden"
                            id="pills-tab" role="tablist">
                            <li class="nav-item m-1">
                                <a class="nav-link py-2 px-5 active rounded" id="buy-login" data-bs-toggle="pill"
                                    href="#buy" role="tab" aria-controls="buy" aria-selected="false">
                                    <div class="text-center">
                                        <h6 class="mb-0">خرید </h6>
                                    </div>
                                </a><!--end nav link-->
                            </li><!--end nav item-->

                            <li class="nav-item m-1">
                                <a class="nav-link py-2 px-5 rounded" id="sold-login" data-bs-toggle="pill" href="#sold"
                                    role="tab" aria-controls="sold" aria-selected="false">
                                    <div class="text-center">
                                        <h6 class="mb-0">فروش </h6>
                                    </div>
                                </a><!--end nav link-->
                            </li><!--end nav item-->

                            <li class="nav-item m-1">
                                <a class="nav-link py-2 px-5 rounded" id="rent-login" data-bs-toggle="pill" href="#rent"
                                    role="tab" aria-controls="rent" aria-selected="false">
                                    <div class="text-center">
                                        <h6 class="mb-0">اجاره </h6>
                                    </div>
                                </a><!--end nav link-->
                            </li><!--end nav item-->
                        </ul>

                        <div class="tab-content bg-white rounded-bottom shadow" id="pills-tabContent">
                            <div class="card border-0 tab-pane fade show active" id="buy" role="tabpanel"
                                aria-labelledby="buy-login">
                                <form class="card-body text-start">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3">
                                                <label class="form-label">جستجو : </label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="search" class="fea icon-sm icons"></i>
                                                    <input name="name" id="name" type="text" class="form-control ps-5"
                                                        placeholder="خانه خود را جستجو کنید :">
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3">
                                                <label class="form-label">انتخاب دسته بندیها:</label>
                                                <select class="form-control custom-select" id="buy-properties">
                                                    <option>خانه ها </option>
                                                    <option>آپارتمان </option>
                                                    <option>دفتر </option>
                                                    <option>خانه خانه </option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3">
                                                <label class="form-label">حداقل قیمت :</label>
                                                <select class="form-control custom-select" id="buy-min-price">
                                                    <option>حداقل قیمت</option>
                                                    <option>500</option>
                                                    <option>1000</option>
                                                    <option>2000</option>
                                                    <option>3000</option>
                                                    <option>4000</option>
                                                    <option>5000</option>
                                                    <option>6000</option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3">
                                                <label class="form-label">حداکثر قیمت :</label>
                                                <select class="form-control custom-select" id="buy-max-price">
                                                    <option>حداکثر قیمت</option>
                                                    <option>500</option>
                                                    <option>1000</option>
                                                    <option>2000</option>
                                                    <option>3000</option>
                                                    <option>4000</option>
                                                    <option>5000</option>
                                                    <option>6000</option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-12">
                                            <a href="javascript:void(0)" class="btn btn-primary">اکنون جستجو کنید</a>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form><!--end form-->
                            </div><!--end teb pane-->

                            <div class="card border-0 tab-pane fade" id="sold" role="tabpanel" aria-labelledby="sold-login">
                                <form class="card-body text-start">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">جستجو : </label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="search" class="fea icon-sm icons"></i>
                                                    <input name="name" id="name" type="text" class="form-control ps-5"
                                                        placeholder="خانه خود را جستجو کنید :">
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">انتخاب دسته بندیها:</label>
                                                <select class="form-control custom-select" id="buy-properties">
                                                    <option>خانه ها </option>
                                                    <option>آپارتمان </option>
                                                    <option>دفتر </option>
                                                    <option>خانه خانه </option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">حداقل قیمت :</label>
                                                <select class="form-control custom-select" id="buy-min-price">
                                                    <option>حداقل قیمت</option>
                                                    <option>500</option>
                                                    <option>1000</option>
                                                    <option>2000</option>
                                                    <option>3000</option>
                                                    <option>4000</option>
                                                    <option>5000</option>
                                                    <option>6000</option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">حداکثر قیمت :</label>
                                                <select class="form-control custom-select" id="buy-max-price">
                                                    <option>حداکثر قیمت</option>
                                                    <option>500</option>
                                                    <option>1000</option>
                                                    <option>2000</option>
                                                    <option>3000</option>
                                                    <option>4000</option>
                                                    <option>5000</option>
                                                    <option>6000</option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-12">
                                            <a href="javascript:void(0)" class="btn btn-primary">اکنون جستجو کنید</a>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form><!--end form-->
                            </div><!--end teb pane-->

                            <div class="card border-0 tab-pane fade" id="rent" role="tabpanel" aria-labelledby="rent-login">
                                <form class="card-body text-start">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">جستجو : </label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="search" class="fea icon-sm icons"></i>
                                                    <input name="name" id="name" type="text" class="form-control ps-5"
                                                        placeholder="خانه خود را جستجو کنید :">
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">انتخاب دسته بندیها:</label>
                                                <select class="form-control custom-select" id="buy-properties">
                                                    <option>خانه ها </option>
                                                    <option>آپارتمان </option>
                                                    <option>دفتر </option>
                                                    <option>خانه خانه </option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">حداقل قیمت :</label>
                                                <select class="form-control custom-select" id="buy-min-price">
                                                    <option>حداقل قیمت</option>
                                                    <option>500</option>
                                                    <option>1000</option>
                                                    <option>2000</option>
                                                    <option>3000</option>
                                                    <option>4000</option>
                                                    <option>5000</option>
                                                    <option>6000</option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-3 col-md-6 col-12">
                                            <div class="mb-3 text-start">
                                                <label class="form-label">حداکثر قیمت :</label>
                                                <select class="form-control custom-select" id="buy-max-price">
                                                    <option>حداکثر قیمت</option>
                                                    <option>500</option>
                                                    <option>1000</option>
                                                    <option>2000</option>
                                                    <option>3000</option>
                                                    <option>4000</option>
                                                    <option>5000</option>
                                                    <option>6000</option>
                                                </select>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-12">
                                            <a href="javascript:void(0)" class="btn btn-primary">اکنون جستجو کنید</a>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form><!--end form-->
                            </div><!--end teb pane-->
                        </div><!--end tab content-->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title mb-4 pb-2 text-center">
                        <span class="badge rounded-pill bg-soft-primary">روند </span>
                        <h4 class="title mt-3 mb-4">چطور کار میکند </h4>
                        <p class="text-muted para-desc mb-0 mx-auto">شروع به کار با <span class="text-primary fw-bold">
                                لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال
                            به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card border-0 text-center features feature-clean rounded">
                        <div class="icons text-primary text-center mx-auto">
                             <h3><i class="uil uil-map-marker-plus d-block rounded h3 mb-0"></i></h3>
                        </div>

                        <div class="card-body p-0 mt-4">
                            <a href="javascript:void(0)" class="title h5 text-dark">جستجوی نقشه </a>
                            <p class="text-muted mt-3 mb-0">ساخته شده در یک زبان شبه لاتین است که کم و بیش شبه لاتین
                                مطابقت دارد.</p>
                            <div class="mt-2">
                                <a href="javascript:void(0)" class="text-primary">ادامه مطلب <i data-feather="arrow-left"
                                        class="fea icon-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card border-0 text-center features feature-clean rounded">
                        <div class="icons text-primary text-center mx-auto">
                            <h3><i class="uil uil-estate d-block rounded h3 mb-0"></i></h3>
                        </div>

                        <div class="card-body p-0 mt-4">
                            <a href="javascript:void(0)" class="title h5 text-dark">جستجوی املاک</a>
                            <p class="text-muted mt-3 mb-0">ساخته شده در یک زبان شبه لاتین است که کم و بیش شبه لاتین
                                مطابقت دارد.</p>
                            <div class="mt-2">
                                <a href="javascript:void(0)" class="text-primary">ادامه مطلب <i data-feather="arrow-left"
                                        class="fea icon-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card border-0 text-center features feature-clean rounded">
                        <div class="icons text-primary text-center mx-auto">
                             <h3><i class="uil uil-house-user d-block rounded h3 mb-0"></i></h3>
                        </div>

                        <div class="card-body p-0 mt-4">
                            <a href="javascript:void(0)" class="title h5 text-dark">خرید / فروش ملک</a>
                            <p class="text-muted mt-3 mb-0">ساخته شده در یک زبان شبه لاتین است که کم و بیش شبه لاتین
                                مطابقت دارد.</p>
                            <div class="mt-2">
                                <a href="javascript:void(0)" class="text-primary">ادامه مطلب <i data-feather="arrow-left"
                                        class="fea icon-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="section-title text-center text-lg-start mb-4 mb-lg-0">
                        <span class="badge rounded-pill bg-soft-primary">آیتم های ویژه</span>
                        <h4 class="title mt-3 mb-4">آخرین دارایی</h4>
                        <p class="text-muted mx-auto mx-lg-star para-desc mb-0">شروع به کار با <span
                                class="text-primary fw-bold"> لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد
                            آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                        <div class="mt-4 d-none d-lg-block">
                            <a href="javascript:void(0)" class="btn btn-primary">نمایش بیشتر</a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-8 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div class="tiny-two-item">
                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p1.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p2.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p3.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p4.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p5.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p6.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p7.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>

                        <div class="tiny-slide">
                            <div class="card client-testi shop-list border-0 shadow position-relative overflow-hidden m-2">
                                <div class="shop-image position-relative overflow-hidden shadow">
                                    <a href="shop-product-detail.html"><img src="~/assets/images/real/p8.jpg" class="img-fluid"
                                            alt=""></a>
                                    <ul class="list-unstyled shop-icons">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-estate icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-heart icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="btn btn-icon btn-pills btn-primary"><i
                                                    class="uil uil-camera icons"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body content p-4">
                                    <a href="javascript:void(0)" class="text-dark product-name h6">آپارتمان لوکس در
                                        چلسی</a>
                                    <ul class="list-unstyled text-muted mt-2 mb-0">
                                        <li class="list-inline-item me-3"><i class="uil uil-bed me-1"></i>1 اتاق </li>
                                        <li class="list-inline-item"><i class="uil uil-bath me-1"></i>1 حمام </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                        <li class="list-inline-item"><b>44000000 تومان</b></li>
                                        <li class="list-inline-item text-muted">85000 در هر متر مربع</li>
                                    </ul>
                                </div>
                            </div><!--end items-->
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container-fluid mt-100 mt-60">
            <div class="rounded shadow py-5" style="background: url('images/real/1.jpg') center center;">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="rounded p-4 bg-light">
                                <div class="tiny-single-item">
                                    <div class="tiny-slider">
                                        <div class="client-testi text-center">
                                            <p class="h6 text-muted fst-italic fw-normal">" به نظر می رسد که تنها تکه
                                                هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده
                                                است. این شامل یک سری کلمات واقعی لاتین است. "</p>
                                            <div class="commenter mt-4">
                                                <img src="~/assets/images/client/01.jpg"
                                                    class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                                    alt="">
                                                <div class="content mt-4">
                                                    <ul class="list-unstyled h6 text-warning mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                    </ul>
                                                    <h5 class="text-primary mb-0">رونالد کینزی</h5>
                                                    <small class="text-muted">کاربر </small>
                                                </div>
                                            </div>
                                        </div><!--end review content-->
                                    </div>

                                    <div class="tiny-slider">
                                        <div class="client-testi text-center">
                                            <p class="h6 text-muted fst-italic fw-normal">" به نظر می رسد که تنها تکه
                                                هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده
                                                است. این شامل یک سری کلمات واقعی لاتین است. "</p>
                                            <div class="commenter mt-4">
                                                <img src="~/assets/images/client/02.jpg"
                                                    class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                                    alt="">
                                                <div class="content mt-4">
                                                    <ul class="list-unstyled h6 text-warning mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                    </ul>
                                                    <h5 class="text-primary mb-0">سرویس راکل</h5>
                                                    <small class="text-muted">کاربر اپ </small>
                                                </div>
                                            </div>
                                        </div><!--end review content-->
                                    </div>

                                    <div class="tiny-slider">
                                        <div class="client-testi text-center">
                                            <p class="h6 text-muted fst-italic fw-normal">" به نظر می رسد که تنها تکه
                                                هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده
                                                است. این شامل یک سری کلمات واقعی لاتین است. "</p>
                                            <div class="commenter mt-4">
                                                <img src="~/assets/images/client/03.jpg"
                                                    class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                                    alt="">
                                                <div class="content mt-4">
                                                    <ul class="list-unstyled h6 text-warning mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                    </ul>
                                                    <h5 class="text-primary mb-0">لئونا مور</h5>
                                                    <small class="text-muted">مشتری </small>
                                                </div>
                                            </div>
                                        </div><!--end review content-->
                                    </div>

                                    <div class="tiny-slider">
                                        <div class="client-testi text-center">
                                            <p class="h6 text-muted fst-italic fw-normal">" به نظر می رسد که تنها تکه
                                                هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده
                                                است. این شامل یک سری کلمات واقعی لاتین است. "</p>
                                            <div class="commenter mt-4">
                                                <img src="~/assets/images/client/04.jpg"
                                                    class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                                    alt="">
                                                <div class="content mt-4">
                                                    <ul class="list-unstyled h6 text-warning mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                    </ul>
                                                    <h5 class="text-primary mb-0">جعفر عباسی</h5>
                                                    <small class="text-muted">متخصص سئو </small>
                                                </div>
                                            </div>
                                        </div><!--end review content-->
                                    </div>

                                    <div class="tiny-slider">
                                        <div class="client-testi text-center">
                                            <p class="h6 text-muted fst-italic fw-normal">" به نظر می رسد که تنها تکه
                                                هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده
                                                است. این شامل یک سری کلمات واقعی لاتین است. "</p>
                                            <div class="commenter mt-4">
                                                <img src="~/assets/images/client/05.jpg"
                                                    class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                                    alt="">
                                                <div class="content mt-4">
                                                    <ul class="list-unstyled h6 text-warning mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                    </ul>
                                                    <h5 class="text-primary mb-0">مارشا دونوهو</h5>
                                                    <small class="text-muted">کاربر </small>
                                                </div>
                                            </div>
                                        </div><!--end review content-->
                                    </div>

                                    <div class="tiny-slider">
                                        <div class="client-testi text-center">
                                            <p class="h6 text-muted fst-italic fw-normal">" به نظر می رسد که تنها تکه
                                                هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده
                                                است. این شامل یک سری کلمات واقعی لاتین است. "</p>
                                            <div class="commenter mt-4">
                                                <img src="~/assets/images/client/06.jpg"
                                                    class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                                    alt="">
                                                <div class="content mt-4">
                                                    <ul class="list-unstyled h6 text-warning mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                    </ul>
                                                    <h5 class="text-primary mb-0">خاویر جیانکولا</h5>
                                                    <small class="text-muted">کاربر اپ </small>
                                                </div>
                                            </div>
                                        </div><!--end review content-->
                                    </div>
                                </div><!--end owl carousel-->
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end container-->
            </div>
        </div><!--end container fluid-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title mb-4 pb-2 text-center">
                        <h4 class="title mb-4">کارشناسان ما</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">شروع به کار با <span class="text-primary fw-bold">
                                لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال
                            به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-3 col-md-6 mt-4 pt-2">
                    <div class="card team bg-light text-center rounded shadow border-0">
                        <div class="card-body">
                            <div class="position-relative">
                                <img src="~/assets/images/client/01.jpg"
                                    class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                            <div class="content pt-3">
                                <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">رونی جفرا</a></h5>
                                <small class="designation text-muted">کارگزار تجاری</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-6 mt-4 pt-2">
                    <div class="card team bg-light text-center rounded shadow border-0">
                        <div class="card-body">
                            <div class="position-relative">
                                <img src="~/assets/images/client/04.jpg"
                                    class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                            <div class="content pt-3">
                                <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">میاکل</a></h5>
                                <small class="designation text-muted">کارگزار تجاری</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-6 mt-4 pt-2">
                    <div class="card team bg-light text-center rounded shadow border-0">
                        <div class="card-body">
                            <div class="position-relative">
                                <img src="~/assets/images/client/03.jpg"
                                    class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                            <div class="content pt-3">
                                <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">موسی ماری</a></h5>
                                <small class="designation text-muted">کارگزار تجاری</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-6 mt-4 pt-2">
                    <div class="card team bg-light text-center rounded shadow border-0">
                        <div class="card-body">
                            <div class="position-relative">
                                <img src="~/assets/images/client/02.jpg"
                                    class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                            <div class="content pt-3">
                                <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">لوسی</a></h5>
                                <small class="designation text-muted">کارگزار تجاری</small>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <section class="section pt-0" style="background: url('images/real/build.png') bottom no-repeat;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">آحرین اخبار سایت</h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span class="text-primary fw-bold">
                                لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال
                            به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                        <div class="position-relative">
                            <img src="~/assets/images/real/p1.jpg" class="card-img-top rounded-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">برنامه های خود را به روش
                                    خود طراحی کنید</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item me-2 mb-0"><a href="javascript:void(0)"
                                            class="text-muted like"><i class="uil uil-heart me-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i
                                                class="uil uil-comment me-1"></i>08</a></li>
                                </ul>
                                <a href="page-blog-detail.html" class="text-muted readmore">ادامه مطلب <i
                                        class="uil uil-angle-left-b align-middle"></i></a>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                            <small class="text-light date"><i class="uil uil-calendar-alt"></i> اردیبهشت 1400</small>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                        <div class="position-relative">
                            <img src="~/assets/images/real/p2.jpg" class="card-img-top rounded-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">برنامه ها چگونه دنیای
                                    اطلاعات را تغییر می دهند</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item me-2 mb-0"><a href="javascript:void(0)"
                                            class="text-muted like"><i class="uil uil-heart me-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i
                                                class="uil uil-comment me-1"></i>08</a></li>
                                </ul>
                                <a href="page-blog-detail.html" class="text-muted readmore">ادامه مطلب <i
                                        class="uil uil-angle-left-b align-middle"></i></a>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                            <small class="text-light date"><i class="uil uil-calendar-alt"></i> اردیبهشت 1400</small>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                        <div class="position-relative">
                            <img src="~/assets/images/real/p3.jpg" class="card-img-top rounded-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">هوشمندترین برنامه ها
                                    برای تجارت و کار </a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item me-2 mb-0"><a href="javascript:void(0)"
                                            class="text-muted like"><i class="uil uil-heart me-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i
                                                class="uil uil-comment me-1"></i>08</a></li>
                                </ul>
                                <a href="page-blog-detail.html" class="text-muted readmore">ادامه مطلب <i
                                        class="uil uil-angle-left-b align-middle"></i></a>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
                            <small class="text-light date"><i class="uil uil-calendar-alt"></i> اردیبهشت 1400</small>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
</template>

<script setup lang="ts">

</script>

<style scoped></style>