<template>
        <!-- شوع آن -->
        <section class="bg-half bg-light d-table w-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="page-next-level">
                            <h4 class="title"> اسناد </h4>
                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item"><a href="index.html">لنـدریـک </a></li>
                                        <li class="breadcrumb-item"><a href="#">مستند </a></li>
                                        <li class="breadcrumb-item active" aria-current="page">اسناد </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>  <!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- پایان آن -->
        <!-- Shape Start -->
        <div class="position-relative">
            <div class="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <!--Shape End-->
        <!-- Documentation Start -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>معرفی</h3>
                        <p class="text-muted h6 fw-normal">شروع با <span class="text-primary fw-bold">لنـدریــک .</span> کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و مدیریت تبدیل محور بهره مند شوید <strong class="text-primary">بوت استرپ 5</strong> صفحه html.</p>
                        <h4 class="mt-4 pt-2">شروع سریع </h4>
                        <p class="text-muted">شروع به کار با <span class="text-primary fw-bold"> لنـدریـک  </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند. <a href="https://getbootstrap.com/docs/5.0/getting-started/download/" target="_blank" class="text-primary h6">به صفحه بارگیری ها بروید.</a></p>
                        <h5 class="mt-4 pt-2">CSS</h5>
                        <p class="text-muted">شیوه نامه را کپی و پیست کنید <code class="text-danger fw-bold">&lt;link&gt;</code> به شما <code class="text-danger fw-bold">&lt;head&gt;</code> قبل از تمام صفحه های دیگر ، بارگذاری CSS بوت استرپ را انجام دهید.</p>
                        <code class="text-success rounded p-2 bg-dark fw-bold">&lt;link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" /&gt;</code>
                        <h5 class="mt-4 pt-2">JS</h5>
                        <p class="text-muted">بسیاری از اجزائ های ما نیاز به استفاده از جاوا اسکریپت برای عملکرد و پلاگین های جاوا اسکریپت دارند. موارد زیر را قرار دهید <code class="text-danger fw-bold">&lt;script&gt;</code> نزدیک به پایان از صفحات شما ، درست قبل از بسته شدن <code class="text-danger fw-bold">&lt;/body&gt;</code> برای فعال کردن آنها ، برچسب بزنید. ابتدا باید Bootstrap.bundle.min.js و سپس افزونه های جاوا اسکریپت ما حضور پیدا کنند.</p>
                        <h6 class="mt-3"><code class="text-success rounded p-2 bg-dark fw-bold">&lt;script src="js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></h6>
                        <h5 class="mt-4 pt-2">شروع قالب</h5>
                        <p class="text-muted">حتماً صفحات خود را با آخرین استانداردهای طراحی و توسعه تنظیم کنید. این بدان معنی است که برای استفاده از رفتارهای مناسب پاسخ گویا ، از یک HTML نوع HTML5 و شامل یک متا تگ viewport استفاده کنید. همه را کنار هم قرار دهید و صفحات شما باید به این شکل باشد:</p>
                        <h5 class="mt-4"><i class="uil uil-angle-left-b"></i> HTML : </h5>
                        <pre class="code mb-0 mt-4 fw-bold p-4 bg-light rounded shadow text-muted">
<span class="text-primary">&lt;!doctype html&gt;</span>
<span class="text-warning">&lt;html lang="en"&gt;</span>
    <span class="text-danger">&lt;head&gt;</span>
        <span class="text-danger">&lt;meta charset="utf-8" /&gt;</span>
        <span class="text-danger">&lt;title&gt;</span><span class="text-primary"> لندریک  - قالب چندمنظوره ای مدرن html </span><span class="text-danger">&lt;/title&gt;</span>
        <span class="text-danger">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</span>
        <span class="text-danger">&lt;meta name="description" content="Site description" /&gt;</span>
        <span class="text-danger">&lt;meta name="keywords" content="Your tags" /&gt;</span>
        <span class="text-muted">&lt;!-- favicon icon --&gt;</span>
        <span class="text-info">&lt;link rel="shortcut icon" href="images/favicon.ico"&gt;</span>
        <span class="text-muted">&lt;!-- Bootstrap --&gt;</span>
        <span class="text-info">&lt;link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" /&gt;</span>
        <span class="text-muted">&lt;!-- Main css --&gt;</span>
        <span class="text-info">&lt;link href="css/style.css" rel="stylesheet" type="text/css" /&gt;</span>
    <span class="text-danger">&lt;/head&gt;</span>
    <span class="text-danger">&lt;body&gt;</span>
        <span class="text-muted">&lt;!-- لودر شروع کنید --&gt;</span>
        <span class="text-danger">&lt;div id="#--------"&gt;</span>
            --------
            --------
        <span class="text-danger">&lt;/div&gt;</span>
        <span class="text-muted">&lt;!-- لودر پایان --&gt;</span>
        <span class="text-muted">&lt;!-- شروع نوار --&gt;</span>
        <span class="text-danger">&lt;header&gt;</span>
            <span class="text-danger">&lt;div class="--------"&gt;</span>
                --------
                --------
                --------
                --------
            <span class="text-danger">&lt;/div&gt;</span>
        <span class="text-danger">&lt;/header&gt;</span>
        <span class="text-muted">&lt;!-- پایان  نوار --&gt;</span>
        <span class="text-muted">&lt;!-- شوع آن --&gt;</span>
        <span class="text-danger">&lt;section class="--------"&gt;</span>
            <span class="text-danger">&lt;div class="--------"&gt;</span>
                --------
                --------
                --------
                --------
            <span class="text-danger">&lt;/div&gt;</span>
        <span class="text-danger">&lt;/section&gt;</span>
        <span class="text-muted">&lt;!-- پایان آن --&gt;</span>
        <span class="text-muted">&lt;!-- شروع فوتر --&gt;</span>
        <span class="text-danger">&lt;footer&gt;</span>
            <span class="text-danger">&lt;div class="--------"&gt;</span>
                --------
                --------
                --------
                --------
            <span class="text-danger">&lt;/div&gt;</span>
        <span class="text-danger">&lt;/footer&gt;</span>
        <span class="text-muted">&lt;!-- پایان فوتر --&gt;</span>
        <span class="text-muted">&lt;!-- بازکشت به صفحه اصلی --&gt;</span>
        <span class="text-danger">&lt;a href="#" class="--------" id="#--------"&gt;</span>
            --------
            --------
        <span class="text-danger">&lt;/a&gt;</span>
        <span class="text-muted">&lt;!-- بازکشت به صفحه اصلی --&gt;</span>
        <span class="text-muted">&lt;!-- Javascript Start --&gt;</span>
        <span class="text-info">&lt;script src="js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</span>
        --------
        --------
        --------
        <span class="text-info">&lt;script src="js/app.js"&gt;&lt;/script&gt;</span>
        <span class="text-muted">&lt;!-- پایان جاوا اسکریپت  --&gt;</span>
    <span class="text-danger">&lt;/body&gt;</span>
<span class="text-warning">&lt;/html&gt;</span>
                        </pre><!--end pre code-->
                        <h5 class="mt-5">ورژن راست چین</h5>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">برای فعال کردن حالت RTL ، مرجع را جایگزین کنید <code class="fw-bold">style.css</code> به<code class="fw-bold">style-rtl.css</code></p>
                        </div><!--end RTL-->
                        <h5 class="mt-5">نسخه تیره</h5>
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> نسخه تیره : </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">برای فعال کردن حالت تاریک ، مرجع را جایگزین کنید <code class="fw-bold">style.css</code> به<code class="fw-bold">style-dark.css</code></p>
                        </div><!--end Dark-->
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> تیره ، ورژن راست چین : </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">برای فعال کردن حالت تیره RTL ، مرجع را جایگزین کنید <code class="fw-bold">style.css</code> به<code class="fw-bold">style-dark-rtl.css</code></p>
                        </div><!--end Dark RTL-->
                        <h5 class="mt-5">منو </h5>
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> مرکز منو به راست </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">برای انتقال منو از مرکز به سمت راست ، سپس فقط کلاس را اضافه کنید <code class="fw-bold">navigation-menu</code> همراه با <code class="fw-bold">nav-right</code></p>
                        </div>
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> مرکز منو به چپ </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">برای انتقال منو از مرکز به سمت راست ، سپس فقط کلاس را اضافه کنید <code class="fw-bold">navigation-menu</code> همراه با <code class="fw-bold">nav-left</code></p>
                        </div>
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> نور منو با مرکز </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">اگر مرکز فهرست و ناوبری سبک می خواهید ، فقط کلاس اضافه کنید <code class="fw-bold">navigation-menu</code> همراه با <code class="fw-bold">nav-light</code></p>
                        </div>
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> نور منو با راست </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">اگر می خواهید منو سمت راست و ناوبری سبک داشته باشید ، فقط کلاس را اضافه کنید<code class="fw-bold">navigation-menu nav-right</code> همراه با <code class="fw-bold">nav-light</code></p>
                        </div>
                        <h6 class="h6 mt-4"><i class="uil uil-angle-left-b"></i> نور منو با چپ </h6>
                        <div class="mt-4 p-4 bg-light rounded shadow">
                            <p class="mb-0 text-muted">اگر می خواهید منو در سمت چپ و ناوبری سبک قرار دهید ، فقط کلاس را اضافه کنید <code class="fw-bold">navigation-menu nav-left</code> همراه با <code class="fw-bold">nav-light</code></p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--en d section-->
        <!-- Documentation End -->
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>