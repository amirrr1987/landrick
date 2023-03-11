<template>

        
        <!-- Hero Start -->
        <section class="bg-profile d-table w-100 bg-primary" :style="{ backgroundImage: `url(${accountBg})` }"
    style="background-position: center center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card public-profile border-0 rounded shadow" style="z-index: 1;">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-lg-2 col-md-3 text-md-start text-center">
                                        <img src="~/assets/images/client/05.jpg" class="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="">
                                    </div><!--end col-->
    
                                    <div class="col-lg-10 col-md-9">
                                        <div class="row align-items-end">
                                            <div class="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                                                <h3 class="title mb-0">جعفر عباسی</h3>
                                                <small class="text-muted h6 me-2">توسعه وب</small>
                                                <ul class="list-inline mb-0 mt-3">
                                                    <li class="list-inline-item me-2"><a href="javascript:void(0)" class="text-muted" title="اینستاگرام"><i data-feather="instagram" class="fea icon-sm me-2"></i>jafar_abbasi</a></li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted" title="لینکدین"><i data-feather="linkedin" class="fea icon-sm me-2"></i>جعفر عباسی</a></li>
                                                </ul>
                                            </div><!--end col-->
                                            <div class="col-md-5 text-md-end text-center">
                                                <ul class="list-unstyled social-icon social mb-0 mt-4">
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Friend"><i class="uil uil-user-plus align-middle"></i></a></li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="پیام ها "><i class="uil uil-comment align-middle"></i></a></li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="اعلانات"><i class="uil uil-bell align-middle"></i></a></li>
                                                    <li class="list-inline-item"><a href="account-setting.html" class="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="تنظیمات"><i class="uil uil-cog align-middle"></i></a></li>
                                                </ul><!--end icon-->
                                            </div><!--end col-->
                                        </div><!--end row-->
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--ed container-->
        </section><!--end section-->
        <!-- Hero End -->

        <!-- Profile Start -->
        <section class="section mt-60">
            <div class="container mt-lg-3">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                        <div class="sidebar sticky-bar p-4 rounded shadow">
                            <div class="widget">
                                <h5 class="widget-title">فالوور :</h5>
                                <div class="row mt-4">
                                    <div class="col-6 text-center">
                                        <i data-feather="user-plus" class="fea icon-ex-md text-primary mb-1"></i>
                                        <h5 class="mb-0">2588</h5>
                                        <p class="text-muted mb-0">فالوو کننده</p>
                                    </div><!--end col-->

                                    <div class="col-6 text-center">
                                        <i data-feather="users" class="fea icon-ex-md text-primary mb-1"></i>
                                        <h5 class="mb-0">454</h5>
                                        <p class="text-muted mb-0">فالووینگ </p>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>

                            <div class="widget mt-4 pt-2">
                                <h5 class="widget-title">پروژه  :</h5>
                                <div class="progress-box mt-4">
                                    <h6 class="title text-muted">پیش رفتن </h6>
                                    <div class="progress">
                                        <div class="progress-bar position-relative bg-primary" style="width:50%;">
                                            <div class="progress-value d-block text-muted h6">24 / 48</div>
                                        </div>
                                    </div>
                                </div><!--end process box-->
                            </div>
                            
                            <div class="widget mt-4">
                                <ul class="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                                    <li class="navbar-item account-menu px-0">
                                        <a href="account-profile.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-dashboard"></i></span>
                                            <h6 class="mb-0 ms-2">پروفایل </h6>
                                        </a>
                                    </li>
                                    
                                    <li class="navbar-item account-menu px-0 mt-2">
                                        <a href="account-members.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-users-alt"></i></span>
                                            <h6 class="mb-0 ms-2">اعضا </h6>
                                        </a>
                                    </li>
                                    
                                    <li class="navbar-item account-menu px-0 mt-2">
                                        <a href="account-works.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-file"></i></span>
                                            <h6 class="mb-0 ms-2">نمونه کار </h6>
                                        </a>
                                    </li>
                                    
                                    <li class="navbar-item account-menu px-0 mt-2">
                                        <a href="account-messages.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-envelope-star"></i></span>
                                            <h6 class="mb-0 ms-2">پیام ها </h6>
                                        </a>
                                    </li>
                                    
                                    <li class="navbar-item account-menu px-0 mt-2">
                                        <a href="account-payments.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-transaction"></i></span>
                                            <h6 class="mb-0 ms-2">پرداخت ها </h6>
                                        </a>
                                    </li>
                                    
                                    <li class="navbar-item account-menu px-0 mt-2">
                                        <a href="account-setting.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-setting"></i></span>
                                            <h6 class="mb-0 ms-2">تنظیمات </h6>
                                        </a>
                                    </li>
                                    
                                    <li class="navbar-item account-menu px-0 mt-2">
                                        <a href="auth-login-three.html" class="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span class="h4 mb-0"><i class="uil uil-dashboard"></i></span>
                                            <h6 class="mb-0 ms-2">خروج </h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="widget mt-4 pt-2">
                                <h5 class="widget-title">دنبال کردن ما :</h5>
                                <ul class="list-unstyled social-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="github" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="youtube" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="gitlab" class="fea icon-sm fea-social"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-8 col-12">
                        <div class="rounded shadow p-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="mb-0">پیام:</h5>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#composemail" class="btn btn-primary"><i data-feather="plus" class="fea icon-sm"></i> ایجاد </a>
                            </div>

                            <!-- Modal Content Start -->
                            <div class="modal fade" id="composemail" tabindex="-1" aria-labelledby="composemail-title" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content rounded shadow border-0">
                                        <div class="modal-header border-bottom">
                                            <h5 class="modal-title" id="composemail-title">تی شرت مارک دار</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
                                        </div>
                                        <div class="modal-body p-4">
                                            <form>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">نام شما <span class="text-danger">*</span></label>
                                                            <div class="form-icon position-relative">
                                                                <i data-feather="user" class="fea icon-sm icons"></i>
                                                                <input name="name" id="name" type="text" class="form-control ps-5" placeholder="نام اول :">
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->
                                                    <div class="col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">موضوع </label>
                                                            <div class="form-icon position-relative">
                                                                <i data-feather="book" class="fea icon-sm icons"></i>
                                                                <input name="subject" id="subject" class="form-control ps-5" placeholder="موضوع شما :">
                                                            </div>
                                                        </div>                                                                               
                                                    </div><!--end col-->
                                                    <div class="col-12">
                                                        <div id="editor"><p>سلام ، <br><br> اگر به عضو خانواده خود برای دریافت کمک فوری م ،ثر ، درمان اضطراری یا یک مشاوره ساده نیاز دارید ، پزشک عالی خواهید بود. <br><br>ممنونم از شما </p></div>
                                                    </div>
                                                </div><!--end row-->
                                            </form>
                                        </div>
                                        <div class="border-top p-4">
                                            <button type="button" class="btn btn-primary">ارسال کنید </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal Content End -->

                            <div class="d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="selectall">
                                            <label class="form-check-label" for="selectall">انتخاب همه</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="btn-group dropdown-primary me-2 mt-2">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        اقدام </button>
                                    <div class="dropdown-menu">
                                        <a href="javascript:void(0)" class="dropdown-item"><i data-feather="eye-off" class="fea icon-sm"></i> خوانده شده</a>
                                        <a href="javascript:void(0)" class="dropdown-item"><i data-feather="corner-up-left" class="fea icon-sm"></i> پاسخ</a>
                                        <a href="javascript:void(0)" class="dropdown-item"><i data-feather="corner-up-right" class="fea icon-sm"></i> ارسال</a>
                                        <div class="dropdown-divider"></div>
                                        <a href="javascript:void(0)" class="dropdown-item text-danger"><i data-feather="trash-2" class="fea icon-sm"></i> حذلف کردن</a>
                                    </div>
                                </div>
                            </div> 

                            <div class="d-flex border-bottom p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail1">
                                            <label class="form-check-label" for="mail1"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/01.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">کالوین لورس</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom bg-light p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail2">
                                            <label class="form-check-label" for="mail2"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/02.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">مریا لاوم</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail3">
                                            <label class="form-check-label" for="mail3"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/03.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">جونیلا راموس</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom bg-light p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail4">
                                            <label class="form-check-label" for="mail4"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/04.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">جک رویس</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail5">
                                            <label class="form-check-label" for="mail5"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/05.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">مریا لوسی</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom bg-light p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail6">
                                            <label class="form-check-label" for="mail6"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/06.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">مانایا رودیگرز</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail7">
                                            <label class="form-check-label" for="mail7"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/07.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">پیتمر رامسی</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 

                            <div class="d-flex border-bottom bg-light p-3">
                                <div class="form-check ps-0">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="mail8">
                                            <label class="form-check-label" for="mail8"></label>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="d-flex ms-2">
                                        <img src="~/assets/images/client/08.jpg" class="avatar avatar-md-sm rounded-pill shadow" alt="">
                                        <div class="flex-1 ms-3">
                                            <h6 class="text-dark">کریستینو مورفی</h6>
                                            <p class="text-muted mb-0">این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="d-flex align-items-center justify-content-between mt-4">
                                <span class="text-muted h6 mb-0">نمایش 8 از 33</span>
                                <a href="javascript:void(0)" class="btn btn-primary">نمایش بیشتر</a>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Profile End -->

</template>

<script setup lang="ts">
import accountBg from "~/assets/images/account/bg.png";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>