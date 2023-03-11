<template>
  <NuxtLayout :name="layout">
    <!-- MAINTENANCE PAGE -->
    <section
      class="bg-home d-flex align-items-center"
      data-jarallax='{"speed": 0.5}'
      :style="{ backgroundImage: `url(${accountBg})` }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12 text-center">
            <a href="javascript:void(0)" class="logo h5"
              ><img src="~/assets/images/logo-light.png" height="24" alt=""
            /></a>
            <div
              class="text-uppercase text-white title-dark mt-2 mb-4 maintenance"
            >
              سیستم تحت تعمیر و نگهداری است
            </div>
            <p class="text-white-50 para-desc mx-auto para-dark">
              الگویی عالی و عالی برای ارائه محصول یا خدمات آینده شما. توجه
              مخاطبان هوک فقط به دلیل باز کردن است.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 text-center">
            <div class="text-center">
              <span id="maintenance" class="timer"></span
              ><span class="d-block h6 text-uppercase text-white">دقیقه </span>
              <!-- <div id="maintenance" class="mb-4 overflow-hidden text-center"></div> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <a href="index.html" class="btn btn-primary mt-4"
              ><i class="mdi mdi-backup-restore"></i> برو صفحه اصلی
            </a>
          </div>
        </div>
      </div>
      <!-- end container -->
    </section>
    <!--end section-->
    <!-- MAINTENANCE PAGE -->
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "NullPage";

import accountBg from "~/assets/images/maintenance.jpg";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style></style>
