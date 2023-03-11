<template>
  <header id="topnav" class="defaultscroll sticky bg-white shadow">
    <div class="container">
      <!-- Logo container-->
      <div>
        <NuxtLink to="/" class="logo">
          <img src="~/assets/images/logo-dark.png" height="24" alt="" />
        </NuxtLink>
      </div>
      <div class="buy-button">
        <NuxtLink
          to="https://amirmaghami.ir/"
          target="_blank"
          >
          امیر مقامی

        </NuxtLink>
      </div>
      <!--end login button-->
      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <NuxtLink class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </NuxtLink>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu">
          <li><NuxtLink to="/" class="sub-menu-item">صفحه اصلی </NuxtLink></li>
          <li class="has-submenu parent-parent-menu-item">
            <NuxtLink to="/javascript:void(0)">لندینگ دمو ها </NuxtLink
            ><span class="menu-arrow"></span>
            <ul class="submenu megamenu">
              <li>
                <ul>
                  <li>
                    <NuxtLink to="/index-saas" class="sub-menu-item">ساس </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-classic-saas" class="sub-menu-item"
                      >ساس کلاسیک
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-agency" class="sub-menu-item"
                      >آژانسی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-apps" class="sub-menu-item"
                      >اپلیکیشن
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-classic-app" class="sub-menu-item"
                      >اپلیکیشن کلاسیک
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-studio" class="sub-menu-item"
                      >استدیو
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-marketing" class="sub-menu-item"
                      >مارکتینگ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-enterprise" class="sub-menu-item"
                      >پروژه
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-services" class="sub-menu-item"
                      >خدمات
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-payments" class="sub-menu-item"
                      >پرداخت ها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-crypto" class="sub-menu-item"
                      >کریپتوکارنسی
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>
                    <NuxtLink to="/index-it-solution" class="sub-menu-item"
                      >شرکتی اطلاعاتی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-business" class="sub-menu-item"
                      >کسب و کار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-modern-business" class="sub-menu-item"
                      >کسب و کار مدرن
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-corporate" class="sub-menu-item"
                      >کسب و کار تجارتی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-hotel" class="sub-menu-item"
                      >هتل و رزرو</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-construction" class="sub-menu-item"
                      >ساخت و ساز
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-real-estate" class="sub-menu-item"
                      >مشاوره املاک
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-developer" class="sub-menu-item"
                      >توسعه دهندگی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-seo-agency" class="sub-menu-item"
                      >آژانسی سئو</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-hospital" class="sub-menu-item"
                      >بیمارستان
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-hosting" class="sub-menu-item"
                      >هاستینگ و دامنه
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>
                    <NuxtLink to="/index-finance" class="sub-menu-item"
                      >شرکتی مالی <span class="badge bg-danger">جدید </span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-videocall" class="sub-menu-item"
                      >ویدئو کنفرانس
                      <span class="badge bg-danger">جدید </span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-it-solution-two" class="sub-menu-item"
                      >شرکتی اطلاعاتی دو
                      <span class="badge bg-danger">جدید </span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-freelancer" class="sub-menu-item"
                      >فریلنسری <span class="badge bg-danger">جدید </span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-blockchain" class="sub-menu-item"
                      >بلاکچین <span class="badge bg-danger">جدید </span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-crypto-two" class="sub-menu-item"
                      >کریپتوکارنسی دو
                      <span class="badge bg-danger">جدید </span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-integration" class="sub-menu-item"
                      >ادغام
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-task-management" class="sub-menu-item"
                      >مدیریت وظایف
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-email-inbox" class="sub-menu-item"
                      >صندوق ایمیل
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-travel" class="sub-menu-item"
                      >مسافرت
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-blog" class="sub-menu-item">وبلاگ </NuxtLink>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>
                    <NuxtLink to="/index-landing-one" class="sub-menu-item"
                      >لندینگ یک
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-landing-two" class="sub-menu-item"
                      >لندینگ دو
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-landing-three" class="sub-menu-item"
                      >لندینگ سه
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-landing-four" class="sub-menu-item"
                      >لندینگ چهار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-shop" class="sub-menu-item">فروشگاه </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-insurance" class="sub-menu-item"
                      >بیمه
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-online-learning" class="sub-menu-item"
                      >آموزش آنلاین
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-personal" class="sub-menu-item"
                      >شخصی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-coworking" class="sub-menu-item"
                      >همکار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-course" class="sub-menu-item"
                      >دوره ها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/forums" class="sub-menu-item">انجمن ها </NuxtLink>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>
                    <NuxtLink to="/index-event" class="sub-menu-item"
                      >رویدادها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-single-product" class="sub-menu-item"
                      >محصول
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-portfolio" class="sub-menu-item"
                      >نمونه کار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-job" class="sub-menu-item">کاریابی </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-social-marketing" class="sub-menu-item"
                      >سوشیال مدیا
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-digital-agency" class="sub-menu-item">
                      دیجیتال آژانسی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-car-riding" class="sub-menu-item"
                      >ماشین سواری</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/index-customer" class="sub-menu-item"
                      >مشتریان
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-software" class="sub-menu-item"
                      >نرم افزار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-ebook" class="sub-menu-item"
                      >کتاب الکترونیکی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-onepage" class="sub-menu-item"
                      >ساس
                      <span class="badge bg-warning ms-2">تک صفحه ای </span></NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="has-submenu parent-parent-menu-item">
            <NuxtLink to="/javascript:void(0)">صفحات </NuxtLink
            ><span class="menu-arrow"></span>
            <ul class="submenu">
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> کمپانی </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-aboutus" class="sub-menu-item">
                      درباره ما
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-aboutus-two" class="sub-menu-item">
                      درباره ما 2
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-services" class="sub-menu-item"
                      >خدمات
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-history" class="sub-menu-item"
                      >تاریخچه
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-team" class="sub-menu-item"> تیم </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-pricing" class="sub-menu-item"
                      >قیمت گذاری
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> حساب کاربری </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/account-profile" class="sub-menu-item"
                      >پروفایل
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/account-members" class="sub-menu-item"
                      >اعضا
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/account-works" class="sub-menu-item">کارها</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/account-messages" class="sub-menu-item"
                      >پیام ها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/account-payments" class="sub-menu-item"
                      >پرداخت ها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/account-setting" class="sub-menu-item"
                      >تنظیمات
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-invoice" class="sub-menu-item"
                      >صورتحساب
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> فروشگاه </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/shop-grids" class="sub-menu-item"
                      >گرید محصولات
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-lists" class="sub-menu-item"
                      >محصولات لیستی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-product-detail" class="sub-menu-item"
                      >جزئیات محصول
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-cart" class="sub-menu-item">سبد خرید </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-checkouts" class="sub-menu-item"
                      >پرداختی ها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shop-myaccount" class="sub-menu-item"
                      >حساب من
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> مرکز پشتیبانی </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/helpcenter-overview" class="sub-menu-item"
                      >مرکز ارتباط
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/helpcenter-faqs" class="sub-menu-item"
                      >گفت و گو
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/helpcenter-guides" class="sub-menu-item"
                      >راهنماها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/helpcenter-support-request"
                      class="sub-menu-item"
                      >پشتیبانی تماسی
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> انجمن ها </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/forums" class="sub-menu-item"
                      >بررسی اجمالی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/forums-topic" class="sub-menu-item"
                      >موضوع انجمن
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/forums-comments" class="sub-menu-item"
                      >نظرات انجمن
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> قالب ایمیل</NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/email-confirmation" class="sub-menu-item"
                      >تائیدیه
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/email-password-reset" class="sub-menu-item"
                      >بازیابی رمز عبور</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/email-alert" class="sub-menu-item">هشدار </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/email-invoice" class="sub-menu-item"
                      >صورتحساب
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)">مشاغل </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-jobs" class="sub-menu-item">کارها </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-jobs-sidebar" class="sub-menu-item"
                      >کارها - سایدبار</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-job-detail" class="sub-menu-item"
                      >جزئیات کار</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-job-apply" class="sub-menu-item"
                      >اعمال کار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-job-company-list" class="sub-menu-item"
                      >لیست شرکت
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-job-company" class="sub-menu-item"
                      >جزئیات شرکت</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-job-candidate-list" class="sub-menu-item"
                      >لیست نامزدها
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-job-candidate" class="sub-menu-item"
                      >جزئیات نامزد
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> وبلاگ </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-blog-grid" class="sub-menu-item"
                      >گرید وبلاگ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-blog-sidebar" class="sub-menu-item"
                      >وبلاگ با سایدبار
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-blog-list" class="sub-menu-item"
                      >وبلاگ فهرستی</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-blog-list-sidebar" class="sub-menu-item"
                      >فهرست وبلاگ و سایدبار</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-blog-detail" class="sub-menu-item"
                      >جزئیات وبلاگ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-blog-detail-two" class="sub-menu-item"
                      >جزئیات وبلاگ 2
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> مطالعه موردی </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-cases" class="sub-menu-item"
                      >همه موارد
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-case-detail" class="sub-menu-item"
                      >جزئیات پرونده
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> نمونه کار </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-portfolio-modern" class="sub-menu-item"
                      >نمونه کار مدرن
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-portfolio-classic" class="sub-menu-item"
                      >نمونه کار کلاسیک
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-portfolio-grid" class="sub-menu-item"
                      >نمونه کار گرید
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-portfolio-masonry" class="sub-menu-item"
                      >نمونه کار ساختمانی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-portfolio-detail" class="sub-menu-item"
                      >جزئیات نمونه کار
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> دیگر صفحات </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/auth-login" class="sub-menu-item">ورود </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/auth-cover-login" class="sub-menu-item"
                      >ورود 2
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/auth-login-three" class="sub-menu-item"
                      >ورود 3
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/auth-signup" class="sub-menu-item"
                      >ثبت نام
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/auth-cover-signup" class="sub-menu-item"
                      >ثبت نام 2</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/auth-signup-three" class="sub-menu-item"
                      >ثبت نام 3</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/auth-re-password" class="sub-menu-item"
                      >بازیابی رمز عبور</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/auth-cover-re-password" class="sub-menu-item"
                      >بازیابی رمز عبور 2</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/auth-re-password-three" class="sub-menu-item"
                      >بازیابی رمز عبور 3</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> نرم افزار </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-terms" class="sub-menu-item"
                      >خدمات سایت
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-privacy" class="sub-menu-item"
                      >حریم خصوصی
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> صفحات خاص </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-comingsoon" class="sub-menu-item"
                      >به زودی
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-comingsoon2" class="sub-menu-item"
                      >به زودی 2</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-maintenance" class="sub-menu-item"
                      >در دست ساخت
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-error" class="sub-menu-item">خطا </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-thankyou" class="sub-menu-item"
                      >صفحه تشکر
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink to="/javascript:void(0)"> تماس با ما </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink to="/page-contact-detail" class="sub-menu-item"
                      >جزئیات تماس
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-contact-one" class="sub-menu-item"
                      >تماس 1</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-contact-two" class="sub-menu-item"
                      >تماس 2</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/page-contact-three" class="sub-menu-item"
                      >تماس 3</NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-submenu parent-menu-item">
            <NuxtLink to="/javascript:void(0)">اسناد </NuxtLink
            ><span class="menu-arrow"></span>
            <ul class="submenu">
              <li>
                <NuxtLink to="/documentation" class="sub-menu-item">مستند </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/changelog" class="sub-menu-item">تغییرات </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/components" class="sub-menu-item">اجزاء </NuxtLink>
              </li>
              <li><NuxtLink to="/widget" class="sub-menu-item">ابزارک </NuxtLink></li>
            </ul>
          </li>
        </ul>
        <!--end navigation menu-->
        <div class="buy-menu-btn d-none">
          <NuxtLink
            to="/https://www.rtl-theme.com/?p=133270"
            target="_blank"
            class="btn btn-primary"
            >خرید از راست چین
          </NuxtLink>
        </div>
        <!--end login button-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
