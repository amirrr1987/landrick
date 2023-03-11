<template>
    <!-- Hero Start -->
    <section class="home-slider position-relative">
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <div class="bg-home bg-animation-left d-flex align-items-center"
                        style="background-image:url('images/hotel/bg01.jpg')">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-7">
                                    <div class="title-heading position-relative mt-4" style="z-index: 1;">
                                        <h1 class="heading mb-3">این لندریک از تعطیلات بهتر لذت ببرید</h1>
                                        <p class="para-desc">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و
                                            مدیریت صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                                        <div class="mt-4 pt-2">
                                            <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                                class="btn btn-icon btn-pills btn-primary lightbox"><i data-feather="video"
                                                    class="icons"></i></a><span
                                                class="fw-bold text-uppercase small align-middle ms-2">اکنون تماشا کنید
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item" data-bs-interval="3000">
                    <div class="bg-home bg-animation-left d-flex align-items-center"
                        style="background-image:url('images/hotel/bg02.jpg')">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-7">
                                    <div class="title-heading position-relative mt-4" style="z-index: 1;">
                                        <h1 class="heading mb-3">از دنیای آرامش لذت ببرید</h1>
                                        <p class="para-desc">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و
                                            مدیریت صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                                        <div class="mt-4 pt-2">
                                            <a href="page-aboutus.html" class="btn btn-primary"><i
                                                    class="uil uil-briefcase"></i> درباره ما </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item" data-bs-interval="3000">
                    <div class="bg-home bg-animation-left d-flex align-items-center"
                        style="background-image:url('images/hotel/bg03.jpg')">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-7">
                                    <div class="title-heading position-relative mt-4" style="z-index: 1;">
                                        <h1 class="heading mb-3">به لندریک خوش آمدید، <br> اینجا هتل لندریک است</h1>
                                        <p class="para-desc">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و
                                            مدیریت صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                                        <div class="mt-4 pt-2">
                                            <a href="#bookroom" class="btn btn-primary"><i class="uil uil-home"></i> اکنون
                                                رزرو کنید </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">قبلی </span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">بعدی </span>
            </a>
        </div>
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Partners start -->
    <section class="section-two bg-light" id="bookroom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <form class="p-4 shadow bg-white rounded">
                        <h4 class="mb-3">اکنون رزرو کن !</h4>
                        <div class="row text-start">
                            <div class="col-lg-3 col-md-6">
                                <div class="mb-3 mb-lg-0">
                                    <label class="form-label"> ورود به سیستم: </label>
                                    <input name="date" type="text" class="form-control start" placeholder="انتخاب تاریخ  :">
                                </div>
                            </div><!--end col-->

                            <div class="col-lg-3 col-md-6">
                                <div class="mb-3 mb-lg-0">
                                    <label class="form-label"> خروج : </label>
                                    <input name="date" type="text" class="form-control end" placeholder="انتخاب تاریخ  :">
                                </div>
                            </div><!--end col-->

                            <div class="col-lg-6">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="mb-3 mb-lg-0">
                                            <label class="form-label">بزرگسالان: </label>
                                            <input type="number" min="0" autocomplete="off" id="adult" required=""
                                                class="form-control" placeholder="بزرگسالان:">
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-4">
                                        <div class="mb-3 mb-lg-0">
                                            <label class="form-label">فرزندان : </label>
                                            <input type="number" min="0" autocomplete="off" id="children"
                                                class="form-control" placeholder="فرزندان :">
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-4 mt-lg-4 pt-2 pt-lg-1">
                                        <div class="d-grid">
                                            <input type="submit" id="search" name="search" class="searchbtn btn btn-primary"
                                                value="جستجو ">
                                        </div>
                                    </div><!--end col-->
                                </div>
                            </div>
                        </div>
                    </form>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Partners End -->

    <!-- Rooms Start -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">اتاقها و سوئیت ها</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/01.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق منظم</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>1 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>1 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">250 هزار تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/02.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق بزرگ منظم</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>1 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>1 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">800 هزار تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/03.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق لوکس</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>1 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>2 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">11000 تومان</span> /شب
                                </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/04.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق لوکس جذاب</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>2 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>2 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">1 میلیون تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/05.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق بزرگ لوکس</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>3 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>3 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">2 میلیون تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/06.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق خانواده</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>3 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>2 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">2 میلیون تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/07.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق ممتاز</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>1 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>1 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">4 میلیون تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/08.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق ممتاز عالی</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>1 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>1 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">4 میلیون تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card work-container work-modern rounded border-0 overflow-hidden">
                        <div class="card-body p-0">
                            <img src="~/assets/images/hotel/09.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work"></div>
                            <div class="content">
                                <a href="javascript:void(0)" class="title text-white pb-2 border-bottom">اتاق بزرگ برتر</a>
                                <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                                    <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i>1 اتاق </li>
                                    <li class="list-inline-item"><i class="uil uil-bath me-2"></i>1 حمام </li>
                                </ul>
                                <p class="text-white d-block mb-0">اجاره <span class="text-success">100 هزار تومان</span>
                                    /شب </p>
                            </div>
                            <div class="read_more bg-primary text-center rounded-circle">
                                <a href="javascript:void(0)" class="text-light d-block"><i data-feather="chevron-right"
                                        class="fea icon-sm title-dark"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row justify-content-center">
                <div class="col-12 text-center mt-4 pt-2">
                    <a href="javascript:void(0)" class="btn btn-primary">نمایش بیشتر <i
                            class="uil uil-angle-left-b"></i></a>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Rooms End -->

    <!-- CTA Start -->
    <section class="section bg-cta" style="background: url('images/hotel/bg04.jpg') center center;" id="cta">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title title-dark text-white mb-4">شبیه تور تفریحی لندریک</h4>
                        <p class="text-light para-dark para-desc mx-auto">کار با لنـدریــک را شروع کنید که می تواند همه
                            چیزهایی را که برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                        <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                            class="play-btn border border-light mt-4 lightbox">
                            <i data-feather="play" class="fea icon-ex-md text-white title-dark"></i>
                        </a>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- CTA End -->

    <!-- Services Start -->
    <section class="section">
        <div class="container pb-lg-4 mb-md-5 mb-4">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">بهترین خدمات برای شما</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-md-4 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <i class="uil uil-wifi h1 text-primary"></i>
                        </div>

                        <div class="content mt-4">
                            <h5>اینترنت رایگان</h5>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است.</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <i class="uil uil-process h1 text-primary"></i>
                        </div>

                        <div class="content mt-4">
                            <h5>آرامش </h5>
                            <p class="text-muted mb-0">گفته می شود ، یک محقق لاتین با تأسیس واژه غیرمعمول ، اصل متن را تأسیس
                                کرد.</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <i class="uil uil-dumbbell h1 text-primary"></i>
                        </div>

                        <div class="content mt-4">
                            <h5>آبگرم و تناسب اندام</h5>
                            <p class="text-muted mb-0">به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که
                                امروزه مورد استفاده قرار می گیرد ، باقی مانده است.</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <i class="uil uil-restaurant h1 text-primary"></i>
                        </div>

                        <div class="content mt-4">
                            <h5>رستوران </h5>
                            <p class="text-muted mb-0">به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که
                                امروزه مورد استفاده قرار می گیرد ، باقی مانده است.</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <i class="uil uil-band-aid h1 text-primary"></i>
                        </div>

                        <div class="content mt-4">
                            <h5>اختلاف منظر صاف</h5>
                            <p class="text-muted mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است.</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 col-12 mt-5">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <i class="uil uil-bed-double h1 text-primary"></i>
                        </div>

                        <div class="content mt-4">
                            <h5>اتاق</h5>
                            <p class="text-muted mb-0">گفته می شود ، یک محقق لاتین با تأسیس واژه غیرمعمول ، اصل متن را تأسیس
                                کرد.</p>
                        </div>
                    </div>
                </div><!--end col-->
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End services -->

    <!-- News Start -->
    <section class="section pt-5 pt-sm-0 pt-md-4 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">اخبار اخیر </h4>
                        <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span
                                class="text-primary fw-bold">لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی
                            ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                        <div class="position-relative">
                            <img src="~/assets/images/hotel/bg01.jpg" class="card-img-top rounded-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">برنامه های خود را به روش خود
                                    طراحی کنید</a></h5>
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
                            <img src="~/assets/images/hotel/bg02.jpg" class="card-img-top rounded-top" alt="...">
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
                            <img src="~/assets/images/hotel/bg03.jpg" class="card-img-top rounded-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">هوشمندترین برنامه ها برای
                                    تجارت و کار </a></h5>
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
    <!-- Blog End -->

    <!-- Client Start -->
    <section class="section" style="background: url('images/hotel/bg05.jpg') center center;">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 text-center">
                    <div class="tiny-single-item">
                        <div class="tiny-slider text-center client-testi">
                            <p class="text-light para-dark h6 fst-italic">" به نظر می رسد که تنها تکه هایی از متن اصلی در
                                متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است. به نظر می رسد که تنها تکه هایی از
                                متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-light title-dark"> توماس لوری </h6>
                            <img src="~/assets/images/client/01.jpg"
                                class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                        </div>

                        <div class="tiny-slider text-center client-testi">
                            <p class="text-light para-dark h6 fst-italic">" مزیت ریشه لاتین آن و بی معنی بودن نسبی لورم
                                ایپسوم این است که متن توجه را به خود جلب نمی کند یا توجه بیننده را از طرح منحرف نمی کند.. "
                            </p>
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-light title-dark"> کارلوس </h6>
                            <img src="~/assets/images/client/02.jpg"
                                class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                        </div>

                        <div class="tiny-slider text-center client-testi">
                            <p class="text-light para-dark h6 fst-italic">" به نظر می رسد که تنها تکه هایی از متن اصلی در
                                متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است صرفاً برای پر کردن یک فضا. این گزینه
                                ها برای متن های کلاسیک لورم اپیسوم اغلب سرگرم کننده هستند و داستان های کوتاه ، خنده دار یا
                                مزخرفی را روایت می کنند. "</p>
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-light title-dark"> باباکارما </h6>
                            <img src="~/assets/images/client/03.jpg"
                                class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                        </div>

                        <div class="tiny-slider text-center client-testi">
                            <p class="text-light para-dark h6 fst-italic">" به نظر می رسد که تنها تکه هایی از متن اصلی در
                                متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است در سال 45 قبل از میلاد. گفته می شود
                                ، یک محقق لاتین با جمع آوری تمام موارد کلمه غیرمعمول "لورم اپیسوم" که می توانست پیدا کند ،
                                اصل متن را تأسیس کرد "</p>
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-light title-dark"> چری استین </h6>
                            <img src="~/assets/images/client/04.jpg"
                                class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                        </div>

                        <div class="tiny-slider text-center client-testi">
                            <p class="text-light para-dark h6 fst-italic">" به نظر می رسد که تنها تکه هایی از متن اصلی در
                                متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است. به نظر می رسد که تنها تکه هایی از
                                متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-light title-dark"> دین لوس </h6>
                            <img src="~/assets/images/client/05.jpg"
                                class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                        </div>

                        <div class="tiny-slider text-center client-testi">
                            <p class="text-light para-dark h6 fst-italic">" به نظر می رسد که تنها تکه هایی از متن اصلی در
                                متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است. می توان حدس زد که در طول زمان حروف
                                خاصی به موقعیتهای مختلف متن اضافه یا حذف شده اند. "</p>
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-light title-dark"> جیل شبی </h6>
                            <img src="~/assets/images/client/06.jpg"
                                class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                        </div>
                    </div><!--end owl carousel-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
        <!-- Client End -->
    </section>
<!-- Client End -->

<!-- Contact Start -->
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-6 p-0 ps-md-3 pe-md-3">
                <div class="card map map-height-two rounded map-gray border-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                        style="border:0" class="rounded" allowfullscreen></iframe>
                </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="card rounded shadow border-0">
                    <div class="card-body py-5">
                        <h5 class="card-title">در تماس باشید !</h5>

                        <div class="custom-form mt-4">
                            <div id="message"></div>
                            <form method="post"
                                action="https://www.rtl-theme.com/author/tn_plugin/landrick/layouts/php/contact.php"
                                name="contact-form" id="contact-form">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">نام شما <span class="text-danger">*</span></label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="user" class="fea icon-sm icons"></i>
                                                <input name="name" id="name" type="text" class="form-control ps-5"
                                                    placeholder="نام اول :">
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">ایمیل شما <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="mail" class="fea icon-sm icons"></i>
                                                <input name="email" id="email" type="email" class="form-control ps-5"
                                                    placeholder="ایمیل شما :">
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">نظرات </label>
                                            <div class="form-icon position-relative">
                                                <i data-feather="message-circle" class="fea icon-sm icons"></i>
                                                <textarea name="comments" id="comments" rows="4"
                                                    class="form-control ps-5" placeholder="پیام شما :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div><!--end row-->
                                <div class="row">
                                    <div class="col-sm-12 text-center">
                                        <div class="d-grid">
                                            <input type="submit" id="submit" name="send"
                                                class="submitBnt btn btn-primary" value="ارسال پیام ">
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </form><!--end form-->
                        </div><!--end custom-form-->
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
    <!-- Contact End -->
</section><!--end section-->
<!-- News End --></template>

<script setup lang="ts">

</script>

<style scoped></style>