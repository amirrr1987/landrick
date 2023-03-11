<template>



        <!-- Hero Start -->
        <section class="bg-half bg-light d-table w-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="page-next-level">
                            <h4 class="title"> مقدمه: لندریک </h4>
                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item"><a href="index.html">لنـدریـک </a></li>
                                        <li class="breadcrumb-item"><a href="forums.html">انجمن ها </a></li>
                                        <li class="breadcrumb-item active" aria-current="page">موضوع انجمن </li>
                                    </ul>
                                </nav>
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

        <!-- Start Forums -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="table-responsive bg-white shadow rounded">
                            <table class="table mb-0 table-center">
                                <thead class="bg-light">
                                    <tr>
                                        <th scope="col" class="border-bottom" style="min-width: 300px;">تاپیک ها</th>
                                        <th scope="col" class="border-bottom text-center" style="width: 100px;">نظرات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <i class="uil uil-comment text-muted h5"></i>
                                                <div class="flex-1 content ms-3">
                                                    <a href="forums-comments.html" class="forum-title text-primary fw-bold">تغییرات </a>
                                                    <p class="text-muted small mb-0 mt-2">نوشته توسط : <a href="javascript:void(0)" class="text-dark fw-bold">کالوین لورس</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center small">2</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <i class="uil uil-comment text-muted h5"></i>
                                                <div class="flex-1 content ms-3">
                                                    <a href="forums-comments.html" class="forum-title text-primary fw-bold">اسناد </a>
                                                    <p class="text-muted small mb-0 mt-2">نوشته توسط : <a href="javascript:void(0)" class="text-dark fw-bold">جعفر عباسی خان</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center small">4</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <i class="uil uil-comment text-muted h5"></i>
                                                <div class="flex-1 content ms-3">
                                                    <a href="forums-comments.html" class="forum-title text-primary fw-bold">اجزاء </a>
                                                    <p class="text-muted small mb-0 mt-2">نوشته توسط : <a href="javascript:void(0)" class="text-dark fw-bold">کریسیت جوزپ</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center small">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="mt-4 pt-2">
                            <div class="rounded shadow p-4">
                                <form class="login-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">ایمیل شما <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="user" class="fea icon-sm icons"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="ایمیل" name="email" required>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">رمز عبور  <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="key" class="fea icon-sm icons"></i>
                                                    <input type="password" class="form-control ps-5" placeholder="رمز عبور " required>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="col-lg-12">
                                            <div class="d-flex justify-content-between">
                                                <div class="mb-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                        <label class="form-check-label" for="flexCheckDefault">مرا به خاطر بسپار </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-0">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">لاگین کنید</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div class="card border-0 sidebar sticky-bar rounded shadow bg-light">
                            <div class="card-body">
                                <!-- SEARCH -->
                                <div class="widget mb-4 pb-2">
                                    <!-- SEARCH -->
                                    <div class="widget">
                                        <form role="search" method="get">
                                            <div class="input-group mb-3 border rounded">
                                                <input type="text" id="s" name="s" class="form-control border-0" placeholder="جستجوی کلمه کلیدی...">
                                                <button type="submit" class="input-group-text bg-white border-0" id="searchsubmit"><i class="uil uil-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- SEARCH -->
                                </div>
                                <!-- SEARCH -->
    
                                <!-- Categories -->
                                <div class="widget mb-4 pb-2">
                                    <h5 class="widget-title">وارد شدن </h5>
                                    <form class="login-form mt-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">ایمیل شما <span class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="user" class="fea icon-sm icons"></i>
                                                        <input type="email" class="form-control ps-5" placeholder="ایمیل" name="email" required>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">رمز عبور  <span class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="key" class="fea icon-sm icons"></i>
                                                        <input type="password" class="form-control ps-5" placeholder="رمز عبور " required>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="col-lg-12">
                                                <div class="d-flex justify-content-between">
                                                    <div class="mb-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                                                            <label class="form-check-label" for="flexCheckDefault2">مرا به خاطر بسپار </label>
                                                        </div>
                                                    </div>
                                                    <p class="forgot-pass mb-0"><a href="auth-re-password-three.html" class="text-dark fw-bold">فراموشی رمز عبور؟ </a></p>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 mb-0">
                                                <div class="d-grid">
                                                    <button class="btn btn-primary">ورود </button>
                                                </div>
                                            </div>
                                            <div class="col-12 text-center">
                                                <p class="mb-0 mt-4"><small class="text-dark me-2">حسابی ندارید؟ </small> <a href="auth-signup-three.html" class="text-dark fw-bold">ثبت نام کنید </a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- Categories -->
    
                                <!-- پست های اخیر -->
                                <div class="widget mb-4 pb-2">
                                    <h5 class="widget-title">پاسخ های اخیر</h5>
                                    <ul class="list-unstyled mb-0 mt-4">
                                        <li class="text-muted small h6"><i data-feather="user" class="fea icon-sm"></i><a href="javascript:void(0)" class="text-dark ms-2">آملیا </a> بر <a href="javascript:void(0)" class="text-primary">حریم خصوصی </a></li>
                                        <li class="text-muted small h6"><i data-feather="user" class="fea icon-sm"></i><a href="javascript:void(0)" class="text-dark ms-2">کریستا </a> بر <a href="javascript:void(0)" class="text-primary">قالب هاست html</a></li>
                                        <li class="text-muted small h6"><i data-feather="user" class="fea icon-sm"></i><a href="javascript:void(0)" class="text-dark ms-2">جان </a> بر <a href="javascript:void(0)" class="text-primary">پیام های خطای خاص</a></li>
                                        <li class="text-muted small h6"><i data-feather="user" class="fea icon-sm"></i><a href="javascript:void(0)" class="text-dark ms-2">جافرین </a> بر <a href="javascript:void(0)" class="text-primary">مدیریت شبکه</a></li>
                                        <li class="text-muted small h6 mb-0"><i data-feather="user" class="fea icon-sm"></i><a href="javascript:void(0)" class="text-dark ms-2">هری </a> بر <a href="javascript:void(0)" class="text-primary">گزینه های الگوی سفارشی</a></li>
                                    </ul>
                                </div>
                                <!-- پست های اخیر -->
                                
                                <!-- SOCIAL -->
                                <div class="widget">
                                    <h5 class="widget-title">دنبال کردن ما</h5>
                                    <ul class="list-unstyled social-icon social mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="github" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="youtube" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="gitlab" class="fea icon-sm fea-social"></i></a></li>
                                    </ul><!--end icon-->
                                </div>
                                <!-- SOCIAL -->
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Start Forums -->        

</template>

<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>