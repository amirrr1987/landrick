<template>
        <!-- شوع آن -->
        <section class="bg-home bg-circle-gradiant d-flex align-items-center">
            <div class="bg-overlay bg-overlay-white"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8"> 
                        <div class="card shadow rounded border-0">
                            <div class="card-body">
                                <h4 class="card-title text-center"> بازیابی حساب </h4>  
                                <form class="login-form mt-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <p class="text-muted">لطفا آدرس ایمیل خود را وارد کنید. پیوندی برای ایجاد گذرواژه جدید از طریق ایمیل دریافت خواهید کرد.</p>
                                            <div class="mb-3">
                                                <label class="form-label">آدرس ایمیل <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="آدرس ایمیل خود را وارد کنید" name="email" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-lg-12">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">ارسال </button>
                                            </div>
                                        </div><!--end col-->
                                        <div class="mx-auto">
                                            <p class="mb-0 mt-3"><small class="text-dark me-2">رمز عبور خود را به خاطر می آورید؟</small> <a href="auth-login-three.html" class="text-dark fw-bold">وارد شوید </a></p>
                                        </div>
                                    </div>
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