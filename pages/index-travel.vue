<template>
    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100" style="background: url('images/travel/bg.jpg') center center;">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6">
                    <div class="title-heading mt-4">
                        <h1 class="display-4 fw-bold text-white title-dark mb-3">تور رزرو <br> به راحتی بدست بیارید</h1>
                        <p class="para-desc text-white-50">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و مدیریت
                            صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                        <div class="mt-4">
                            <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-lg btn-light"><i
                                    data-feather="arrow-down" class="icons"></i></a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="card shadow rounded border-0 ms-lg-5">
                        <div class="card-body">
                            <h5 class="card-title">می توانید از اینجا جستجو کنید</h5>

                            <form class="login-form">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">مقصد </label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="map-pin" class="fea icon-sm icons"></i>
                                                <input type="text" class="form-control ps-5" placeholder="بنویس" name="s"
                                                    :required="true">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label"> ورود به سیستم: </label>
                                            <input name="date" type="text" class="form-control start"
                                                placeholder="انتخاب تاریخ  :">
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label"> خروج : </label>
                                            <input name="date" type="text" class="form-control end"
                                                placeholder="انتخاب تاریخ  :">
                                        </div>
                                    </div><!--end col-->
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">ایمیل شما </label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="mail" class="fea icon-sm icons"></i>
                                                <input type="email" class="form-control ps-5" placeholder="ایمیل"
                                                    name="email" :required="true">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckDefault">
                                                <label class="form-check-label" for="flexCheckDefault">تایید میکنم <a
                                                        href="#" class="text-primary">قوانین سایت لنـدریـک را و تیکت را فعال
                                                        میکنم</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="d-grid">
                                            <button class="btn btn-primary">اکنون جستجو کنید</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!--end col-->
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

    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">برای مسافر سود ببرید</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-shield-check"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>پرداخت امن </h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-shield-check"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-thumbs-up"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>رزرو آسان </h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-thumbs-up"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-keyboard-show"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>امکانات رفاهی رایگان</h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-keyboard-show"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-award"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>بهترین پیشنهادات</h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-award"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-bookmark"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>ارزان تر از سایر</h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-bookmark"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-favorite"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>رتبه بالا</h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-favorite"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-clock"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>24/7 پشتیبانی</h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-clock"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 pt-2">
                    <div
                        class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-process"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>بازپرداخت سریع</h5>
                            <p class="para text-muted mb-0">این یک واقعیت ثابت شده طولانی است که یک خواننده.</p>
                        </div>
                        <span class="big-icon text-center">
                            <i class="uil uil-process"></i>
                        </span>
                    </div>
                </div><!--end col-->

                <div class="col-lg-12 text-center col-md-4 mt-4 pt-2">
                    <a href="javascript:void(0)" class="btn btn-primary">نمایش بیشتر <i data-feather="arrow-left"
                            class="fea icon-sm"></i></a>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-end mb-4 pb-2">
                <div class="col-md-8">
                    <div class="section-title text-center text-md-start">
                        <h6 class="text-primary">بیشتر بدانید</h6>
                        <h4 class="title mb-4">مقصد محبوب</h4>
                        <p class="text-muted mb-0 para-desc">شروع به کار با <span class="text-primary fw-bold">لنـدریـک
                            </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید
                            فراهم کند.</p>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 mt-4 mt-sm-0">
                    <div class="text-center text-md-end">
                        <a href="javascript:void(0)" class="text-primary h6">نمایش بیشتر <i data-feather="arrow-left"
                                class="fea icon-sm"></i></a>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 mt-4 pt-2">
                    <div class="tiny-six-item">
                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/dubai.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">دبی </a>
                                </div>
                            </div><!--end tour post-->
                        </div>

                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/thailand.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">تایلند </a>
                                </div>
                            </div><!--end tour post-->
                        </div>

                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/india.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">هند </a>
                                </div>
                            </div><!--end tour post-->
                        </div>

                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/london.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">لندن </a>
                                </div>
                            </div><!--end tour post-->
                        </div>

                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/paris.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">پاریس </a>
                                </div>
                            </div><!--end tour post-->
                        </div>

                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/singapore.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">سنگاپور </a>
                                </div>
                            </div><!--end tour post-->
                        </div>

                        <div class="tiny-slide">
                            <div class="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                <img src="~/assets/images/travel/dubai.jpg" class="img-fluid" alt="">
                                <div class="overlay-work bg-dark"></div>
                                <div class="content">
                                    <a href="javascript:void(0)" class="title text-white h4 title-dark">دبی </a>
                                </div>
                            </div><!--end tour post-->
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div>
    </section><!--end section-->

    <section class="section bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title fw-bold mb-4">همه به سفر نیاز دارند. <br> می خواهید برای مدتی آزاد شوید</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="~/assets/images/travel/1.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">مکالمه ، بازخورد ، شناخت</a>
                            </h5>
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

                <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title ms-lg-4">
                        <h4 class="title mb-4">تجربه لوکس و<br> پایگاه خود را پیدا کنید</h4>
                        <p class="text-muted">شما می توانید تمام الگوهای لنـدریــک را در یک قالب واحد ترکیب کنید ، می توانید
                            یک نظر را از موضوع برنامه بگیرید و از آن در وب سایت استفاده کنید.</p>
                        <ul class="list-unstyled text-muted">
                            <li class="mb-0"><span class="text-primary h5 me-2"><i
                                        class="uil uil-check-circle align-middle"></i></span>راه حل های بازاریابی دیجیتال
                                برای فردا</li>
                            <li class="mb-0"><span class="text-primary h5 me-2"><i
                                        class="uil uil-check-circle align-middle"></i></span>آژانس بازاریابی با استعداد و با
                                تجربه ما</li>
                            <li class="mb-0"><span class="text-primary h5 me-2"><i
                                        class="uil uil-check-circle align-middle"></i></span>پوست خود را متناسب با نام تجاری
                                خود ایجاد کنید</li>
                        </ul>
                        <a href="javascript:void(0)" class="mt-3 h6 text-primary">مقصد را جستجو کنید <i
                                class="uil uil-angle-left-b"></i></a>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6 order-1 order-md-2">
                    <img src="~/assets/images/travel/3.jpg" class="img-fluid rounded shadow-md" alt="">
                </div><!--end col-->

                <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title me-lg-5">
                        <h4 class="title mb-4">100٪ بازگشت پول <br> در صورت لغو تضمین کنید</h4>
                        <p class="text-muted">شما می توانید تمام الگوهای لنـدریــک را در یک قالب واحد ترکیب کنید ، می توانید
                            یک نظر را از موضوع برنامه بگیرید و از آن در وب سایت استفاده کنید.</p>
                    </div>

                    <div class="accordion mt-4 pt-2" id="accordionExample">
                        <div class="accordion-item rounded shadow">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button border-0 bg-light" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    چگونه کار می کند؟
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse border-0 collapse show"
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-muted bg-white">
                                    تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده
                                    اند.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item rounded shadow mt-2">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button border-0 bg-light collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    آیا برای استفاده از لندریک به طراح نیاز دارم؟
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-muted bg-white">
                                    تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده
                                    اند.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item rounded shadow mt-2">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button border-0 bg-light collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    برای شروع فروش چه کاری باید انجام دهم؟
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse border-0 collapse"
                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-muted bg-white">
                                    تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده
                                    اند.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item rounded shadow mt-2">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button border-0 bg-light collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    با دریافت سفارش چه اتفاقی می افتد؟
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse border-0 collapse"
                                aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-muted bg-white">
                                    تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده
                                    اند.
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <img src="~/assets/images/travel/2.jpg" class="img-fluid rounded shadow-md" alt="">
                </div><!--end col-->

                <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title ms-lg-4">
                        <h4 class="title mb-4">ما بیش از 500 داریم <br> مقصد انتخاب شده است</h4>
                        <p class="text-muted">شما می توانید تمام الگوهای لنـدریــک را در یک قالب واحد ترکیب کنید ، می توانید
                            یک نظر را از موضوع برنامه بگیرید و از آن در وب سایت استفاده کنید.</p>
                        <ul class="list-unstyled text-muted">
                            <li class="mb-0"><span class="text-primary h5 me-2"><i
                                        class="uil uil-check-circle align-middle"></i></span>راه حل های بازاریابی دیجیتال
                                برای فردا</li>
                            <li class="mb-0"><span class="text-primary h5 me-2"><i
                                        class="uil uil-check-circle align-middle"></i></span>آژانس بازاریابی با استعداد و با
                                تجربه ما</li>
                            <li class="mb-0"><span class="text-primary h5 me-2"><i
                                        class="uil uil-check-circle align-middle"></i></span>پوست خود را متناسب با نام تجاری
                                خود ایجاد کنید</li>
                        </ul>
                        <a href="javascript:void(0)" class="mt-3 h6 text-primary">مقصد را جستجو کنید <i
                                class="uil uil-angle-left-b"></i></a>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">آنچه مشتریان ما در مورد آن گفته اند <span class="text-primary">لنـدریـک
                            </span> پروژه ساز است </h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row justify-content-center">
                <div class="col-lg-12 mt-4">
                    <div class="tiny-three-item">
                        <div class="tiny-slide">
                            <div class="d-flex client-testi m-2">
                                <img src="~/assets/images/client/01.jpg"
                                    class="avatar avatar-small client-image rounded shadow" alt="">
                                <div class="flex-1 content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                        اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                                    <h6 class="text-primary">- توماس لوری <small class="text-muted">سئو</small></h6>
                                </div>
                            </div>
                        </div>

                        <div class="tiny-slide">
                            <div class="d-flex client-testi m-2">
                                <img src="~/assets/images/client/02.jpg"
                                    class="avatar avatar-small client-image rounded shadow" alt="">
                                <div class="flex-1 content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star-half text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                        اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                                    <h6 class="text-primary">- باباکارما <small class="text-muted">مترجم </small></h6>
                                </div>
                            </div>
                        </div>

                        <div class="tiny-slide">
                            <div class="d-flex client-testi m-2">
                                <img src="~/assets/images/client/03.jpg"
                                    class="avatar avatar-small client-image rounded shadow" alt="">
                                <div class="flex-1 content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                        اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                                    <h6 class="text-primary">- کارلوس <small class="text-muted">P.A</small></h6>
                                </div>
                            </div>
                        </div>

                        <div class="tiny-slide">
                            <div class="d-flex client-testi m-2">
                                <img src="~/assets/images/client/04.jpg"
                                    class="avatar avatar-small client-image rounded shadow" alt="">
                                <div class="flex-1 content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <p class="text-muted mt-2">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                    اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                                <h6 class="text-primary">- چری استین <small class="text-muted">مدیر </small></h6>
                            </div>
                        </div>
                    </div>

                    <div class="tiny-slide">
                        <div class="d-flex client-testi m-2">
                            <img src="~/assets/images/client/05.jpg"
                                class="avatar avatar-small client-image rounded shadow" alt="">
                            <div class="flex-1 content p-3 shadow rounded bg-white position-relative">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <p class="text-muted mt-2">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                    اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                                <h6 class="text-primary">- دین لوس <small class="text-muted">توسعه دهنده </small></h6>
                            </div>
                        </div>
                    </div>

                    <div class="tiny-slide">
                        <div class="d-flex client-testi m-2">
                            <img src="~/assets/images/client/06.jpg"
                                class="avatar avatar-small client-image rounded shadow" alt="">
                            <div class="flex-1 content p-3 shadow rounded bg-white position-relative">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <p class="text-muted mt-2">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم
                                    اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                                <h6 class="text-primary">- جیل شبی <small class="text-muted">طراح </small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</section><!--end section--></template>

<script setup lang="ts">

</script>

<style scoped></style>