<template>
    <!-- Footer Start -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" class="logo-footer">
                        <img src="~/assets/images/logo-light.png" height="24" alt="">
                    </a>
                    <p class="mt-4">کار با لنـدریــک را شروع کنید که می تواند همه چیزهایی را که برای ایجاد آگاهی ، ایجاد
                        ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                    <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <Icon name="uil:linkedin" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <Icon name="uil:instagram" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <Icon name="uil:twitter" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <Icon name="uil:github" />
                            </a>
                        </li>
                    </ul><!--end icon-->
                </div><!--end col-->

                <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 class="text-light footer-head">شرکت </h5>
                    <ul class="list-unstyled footer-list mt-4">
                        <li>
                            <NuxtLink to="/page-aboutus" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> درباره
                                ما </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-services" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> خدمات
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-team" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> تیم
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-pricing" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> قیمت
                                گذاری </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-portfolio-modern" class="text-foot"><i
                                    class="uil uil-angle-left-b me-1"></i> پروژه </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-jobs" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> مشاغل
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-blog-grid" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> وبلاگ
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/auth-cover-login" class="text-foot"><i class="uil uil-angle-left-b me-1"></i>
                                ورود </NuxtLink>
                        </li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 class="text-light footer-head">لینک های مفید </h5>
                    <ul class="list-unstyled footer-list mt-4">
                        <li>
                            <NuxtLink to="/page-terms" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> خدمات
                                سایت </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/page-privacy" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> حریم
                                خصوصی </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/documentation" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> مستند
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/changelog" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> تغییرات
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/components" class="text-foot"><i class="uil uil-angle-left-b me-1"></i> اجزاء
                            </NuxtLink>
                        </li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 class="text-light footer-head">خبرنامه </h5>
                    <p class="mt-4">ثبت نام کنید و آخرین نکات را از طریق ایمیل دریافت کنید.</p>
                    <form>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="foot-subscribe mb-3">
                                    <label class="form-label">ایمیل خود را بنویسید <span
                                            class="text-danger">*</span></label>
                                    <div class="form-icon position-relative">
                                        <Icon name="tabler:mail" />
                                        <input type="email" name="email" id="emailsubscribe"
                                            class="form-control ps-5 rounded" placeholder="ایمیل شما: " required>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="d-grid">
                                    <input type="submit" id="submitsubscribe" name="send" class="btn btn-soft-primary"
                                        value="خبرنامه">
                                </div>
                            </div>
                        </div>
                    </form>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->
    <footer class="footer footer-bar">
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="text-sm-start">
                        <p class="mb-0">© {{ new Date().getFullYear() }} لنـدریــک. طراحی شده با <i
                                class="mdi mdi-heart text-danger"></i> توسط <a
                                href="https://www.rtl-theme.com/author/tn_plugin/" target="_blank" class="text-reset">جعفر
                                عباسی </a>.</p>
                    </div>
                </div><!--end col-->

                <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul class="list-unstyled text-sm-end mb-0">
                        <li class="list-inline-item"><a href="javascript:void(0)"><img
                                    src="~/assets/images/payments/american-ex.png" class="avatar avatar-ex-sm"
                                    title="آمریکن اکسپرس" alt=""></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)"><img
                                    src="~/assets/images/payments/discover.png" class="avatar avatar-ex-sm" title="کشف کردن"
                                    alt=""></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)"><img
                                    src="~/assets/images/payments/master-card.png" class="avatar avatar-ex-sm"
                                    title="مستر کارت" alt=""></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)"><img
                                    src="~/assets/images/payments/paypal.png" class="avatar avatar-ex-sm" title="پی پال"
                                    alt=""></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)"><img
                                    src="~/assets/images/payments/visa.png" class="avatar avatar-ex-sm" title="ویزا"
                                    alt=""></a></li>
                    </ul>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->
    <!-- Footer End -->

    <!-- Back to top -->
    <a href="#" onclick="topFunction()" id="back-to-top" class="btn btn-icon btn-primary back-to-top">
        <Icon name="tabler:arrow-up" />
    </a>
    <!-- Back to top -->

    <!-- Style switcher -->
    <div id="style-switcher" class="bg-light border p-3 pt-2 pb-2" onclick="toggleSwitcher()">
        <div>
            <h6 class="title text-center">رنگ خود را انتخاب کنید </h6>
            <ul class="pattern">
                <li class="list-inline-item">
                    <a class="color1" href="javascript: void(0);" onclick="setColor('default')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color2" href="javascript: void(0);" onclick="setColor('green')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color3" href="javascript: void(0);" onclick="setColor('purple')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color4" href="javascript: void(0);" onclick="setColor('red')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color5" href="javascript: void(0);" onclick="setColor('skyblue')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color6" href="javascript: void(0);" onclick="setColor('skobleoff')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color7" href="javascript: void(0);" onclick="setColor('cyan')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color8" href="javascript: void(0);" onclick="setColor('slateblue')"></a>
                </li>
                <li class="list-inline-item">
                    <a class="color9" href="javascript: void(0);" onclick="setColor('yellow')"></a>
                </li>
            </ul>

            <h6 class="title text-center pt-3 mb-0 border-top">تنظیمات قالب </h6>
            <ul class="text-center list-unstyled mb-0">
                <li class="d-grid"><a href="javascript:void(0)" class=" " onclick="setTheme('style-rtl')"> </a></li>
                <li class="d-grid"><a href="javascript:void(0)" class=" " onclick="setTheme('style')"> </a></li>
                <li class="d-grid"><a href="javascript:void(0)" class=" " onclick="setTheme('style-dark-rtl')"> </a></li>
                <li class="d-grid"><a href="javascript:void(0)" class=" " onclick="setTheme('style-dark')"> </a></li>
                <li class="d-grid"><a href="javascript:void(0)"
                        class="btn btn-sm btn-block btn-dark dark-version t-dark mt-2" onclick="setTheme('style-dark')">تیره
                    </a></li>
                <li class="d-grid"><a href="javascript:void(0)"
                        class="btn btn-sm btn-block btn-dark light-version t-light mt-2" onclick="setTheme('style')">روشن
                    </a></li>
            </ul>
        </div>
        <div class="bottom">
            <a href="javascript: void(0);" class="settings bg-white shadow d-block"><i
                    class="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"></i></a>
        </div>
    </div>
    <!-- end Style switcher -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>