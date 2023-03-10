<template>


        
        <!-- شوع آن -->
        <section class="bg-auth-home bg-circle-gradiant d-table w-100">
            <div class="bg-overlay bg-overlay-white"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8"> 
                        <div class="card shadow rounded border-0 mt-4">
                            <div class="card-body">
                                <h4 class="card-title text-center">ثبت نام </h4>  
                                <form class="login-form mt-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">نام اصلی  <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="user" class="fea icon-sm icons"></i>
                                                    <input type="text" class="form-control ps-5" placeholder="نام اصلی " name="s" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-6">
                                            <div class="mb-3"> 
                                                <label class="form-label">نام خانوادگی  <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="user-check" class="fea icon-sm icons"></i>
                                                    <input type="text" class="form-control ps-5" placeholder="نام خانوادگی" name="s" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">ایمیل شما <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="ایمیل" name="email" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">رمز عبور  <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="key" class="fea icon-sm icons"></i>
                                                    <input type="password" class="form-control ps-5" placeholder="رمز عبور " required>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">تایید میکنم <a href="#" class="text-primary">قوانین سایت لنـدریـک را و تیکت را فعال میکنم</a></label>
                                                </div>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-md-12">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">ثبت نام </button>
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-12 mt-4 text-center">
                                            <h6>یا با آن ثبت نام کنید</h6>
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

                                        <div class="mx-auto">
                                            <p class="mb-0 mt-3"><small class="text-dark me-2">قبلاً حساب دارید؟</small> <a href="auth-login-three.html" class="text-dark fw-bold">وارد شوید </a></p>
                                        </div>
                                    </div><!--end row-->
                                </form>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- پایان آن -->


</template>

<script setup lang="ts">

</script>

<style scoped>

</style>