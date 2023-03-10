<template>
    <!-- COMING SOON PAGE -->
    <section class="bg-home d-flex align-items-center" data-jarallax='{"speed": 0.5}'
        style="background-image: url('images/comingsoon.jpg');">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 text-center">
                    <a href="javascript:void(0)" class="logo h5"><img src="~/aseets/images/logo-light.png" height="24"
                            alt=""></a>
                    <div class="text-uppercase title-dark text-white mt-2 mb-4 coming-soon">ما به زودی می آییم...</div>
                    <p class="text-light para-desc para-dark mx-auto">شروع به کار با <span class="text-primary fw-bold">
                            لنـدریـک </span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن
                        نیاز دارید فراهم کند.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <div id="countdown">
                        <ul class="count-down list-unstyled">
                            <li id="days" class="count-number list-inline-item m-2"></li>
                            <li id="hours" class="count-number list-inline-item m-2"></li>
                            <li id="mins" class="count-number list-inline-item m-2"></li>
                            <li id="secs" class="count-number list-inline-item m-2"></li>
                            <li id="end" class="h1"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <a href="index.html" class="btn btn-primary mt-4"><i class="mdi mdi-backup-restore"></i> برو صفحه
                        اصلی </a>
                </div>
            </div>
        </div> <!-- end container -->
    </section><!--section end-->
    <!-- COMING SOON PAGE -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>