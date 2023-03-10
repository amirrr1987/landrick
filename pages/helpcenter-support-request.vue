<template>

        
        <!-- شوع آن -->
        <section class="bg-half bg-light d-table w-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="page-next-level">
                            <h4 class="title"> درخواست پشتیبانی خود را ارسال کنید </h4>

                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item"><a href="index.html">لنـدریـک </a></li>
                                        <li class="breadcrumb-item"><a href="helpcenter-overview.html">مرکز کمک</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">پشتیبانی </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- پایان آن -->

        <!-- Start Section -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-12">
                        <div class="rounded p-4 shadow">
                            <div class="row">
                                <div class="col-12">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">نام شما <span class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="user" class="fea icon-sm icons"></i>
                                                        <input name="name" id="name" type="text" class="form-control ps-5" placeholder="نام اول :">
                                                    </div>
                                                </div>
                                            </div><!--end col-->
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">ایمیل شما <span class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input name="email" id="email" type="email" class="form-control ps-5" placeholder="ایمیل شما :">
                                                    </div>
                                                </div> 
                                            </div><!--end col-->
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label">موضوع </label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="book" class="fea icon-sm icons"></i>
                                                        <input name="subject" id="subject" class="form-control ps-5" placeholder="موضوع شما :">
                                                    </div>
                                                </div>
                                            </div><!--end col-->
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label">نظرات </label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="message-circle" class="fea icon-sm icons"></i>
                                                        <textarea name="comments" id="comments" rows="4" class="form-control ps-5" placeholder="پیام شما :"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!--end row-->
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <input type="submit" id="submit" name="send" class="btn btn-primary" value="ارسال درخواست">
                                            </div><!--end col-->
                                        </div><!--end row-->
                                    </form><!--end form-->
                                </div><!--end col-->
                            </div><!--end row-->
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="d-flex align-items-center features feature-clean shadow rounded p-4">
                            <div class="icons text-primary text-center">
                                <i class="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                            </div>
                            <div class="flex-1 content ms-4">
                                <h5 class="mb-1"><a href="javascript:void(0)" class="text-dark">در تماس باشید !</a></h5>
                                <p class="text-muted mb-0">این مورد زمانی لازم است که ، برای متن هنوز در دسترس نیست.</p>
                                <div class="mt-2">
                                    <a href="javascript:void(0)" class="btn btn-sm btn-soft-primary">ارسال درخواست </a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="d-flex align-items-center features feature-clean shadow rounded p-4">
                            <div class="icons text-primary text-center">
                                <i class="uil uil-webcam d-block rounded h3 mb-0"></i>
                            </div>
                            <div class="flex-1 content ms-4">
                                <h5 class="mb-1"><a href="javascript:void(0)" class="text-dark">شروع یک جلسه</a></h5>
                                <p class="text-muted mb-0">این مورد زمانی لازم است که ، برای متن هنوز در دسترس نیست.</p>
                                <div class="mt-2">
                                    <a href="javascript:void(0)" class="btn btn-sm btn-soft-primary">شروع چت ویدئویی</a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section -->

       
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>