<template>

        <!-- Loader -->
        <!-- <div id="preloader">
            <div id="status">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div> -->
        <!-- Loader -->
        
        <div class="back-to-home rounded d-none d-sm-block">
            <a href="index.html" class="btn btn-icon btn-primary"><i data-feather="home" class="icons"></i></a>
        </div>

        <!-- شوع آن -->
        <section class="cover-user bg-white">
            <div class="container-fluid px-0">
                <div class="row g-0 position-relative">
                    <div class="col-lg-4 cover-my-30 order-2">
                        <div class="cover-user-img d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card login-page border-0" style="z-index: 1">
                                        <div class="card-body p-0">
                                            <h4 class="card-title text-center">وارد شدن </h4>  
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
                                                    </div><!--end col-->
        
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">رمز عبور  <span class="text-danger">*</span></label>
                                                            <div class="form-icon position-relative">
                                                                <i data-feather="key" class="fea icon-sm icons"></i>
                                                                <input type="password" class="form-control ps-5" placeholder="رمز عبور " required>
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->
        
                                                    <div class="col-lg-12">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="mb-3">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                                    <label class="form-check-label" for="flexCheckDefault">مرا به خاطر بسپار </label>
                                                                </div>
                                                            </div>
                                                            <p class="forgot-pass mb-0"><NuxtLink to="/auth-cover-re-password" class="text-dark fw-bold">فراموشی رمز عبور؟ </NuxtLink></p>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-lg-12 mb-0">
                                                        <div class="d-grid">
                                                            <button class="btn btn-primary">ورود </button>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-lg-12 mt-4 text-center">
                                                        <h6>یا با آن وارد شوید</h6>
                                                        <div class="row">
                                                            <div class="col-6 mt-3">
                                                                <div class="d-grid">
                                                                    <a href="javascript:void(0)" class="btn btn-light"><i class="mdi mdi-facebook text-primary"></i> فیس بوک </a>
                                                                </div>
                                                            </div><!--end col-->
                                                            
                                                            <div class="col-6 mt-3">
                                                                <div class="d-grid">
                                                                    <a href="javascript:void(0)" class="btn btn-light"><i class="mdi mdi-google text-danger"></i> گوگل </a>
                                                                </div>
                                                            </div><!--end col-->
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-12 text-center">
                                                        <p class="mb-0 mt-3"><small class="text-dark me-2">حسابی ندارید؟ </small> <NuxtLink to="/auth-cover-signup" class="text-dark fw-bold">ثبت نام کنید </NuxtLink></p>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </form>
                                        </div>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->
                        </div> <!-- end about detail -->
                    </div> <!-- end col -->    

                    <div class="col-lg-8 offset-lg-4 padding-less img order-1" :style="`background-image:url(${bgImg})`" data-jarallax='{"speed": 0.5}'></div><!-- end col -->    
                </div><!--end row-->
            </div><!--end container fluid-->
        </section><!--end section-->
        <!-- پایان آن -->


</template>

<script setup lang="ts">
import bgImg from '~/assets/images/user/01.jpg'
</script>

<style scoped>

</style>