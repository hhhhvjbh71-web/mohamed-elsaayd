// ═══════════════════════════════════════════════════════════════
// templates.js — HTML Templates separated from Application Logic
// منصة الأستاذ محمد الصياد — أستاذ الفيزياء — Physics Platform
// ═══════════════════════════════════════════════════════════════

window.Templates = (function () {
    'use strict';

    // ── 404 Page Template ──────────────────────────────────────────
    function page404() {
        return `
        <div style="padding:calc(var(--header-height) + var(--space-4xl)) 0 var(--space-4xl);">
            <div class="container">
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <h3>الصفحة غير موجودة</h3>
                    <p>الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
                    <a href="#home" class="btn btn-primary">العودة للرئيسية</a>
                </div>
            </div>
        </div>`;
    }

    // ── Auth Required Template ────────────────────────────────────
    function authRequired(courseId) {
        return `
        <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;padding:var(--space-2xl);">
            <div class="card" style="max-width:440px;width:100%;text-align:center;padding:var(--space-2xl);">
                <div style="font-size:4rem;margin-bottom:var(--space-md);">🔐</div>
                <h2 style="margin-bottom:var(--space-sm);">تسجيل الدخول مطلوب</h2>
                <p style="color:var(--text-secondary);margin-bottom:var(--space-xl);">
                    للوصول إلى محتوى هذا الكورس، سجّل الدخول أو أنشئ حسابًا جديدًا.
                </p>
                <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                    <a href="#login" class="btn btn-primary">تسجيل الدخول</a>
                    <a href="#register" class="btn btn-outline">إنشاء حساب</a>
                </div>
            </div>
        </div>`;
    }

    // ── Course Search & Filters Template ──────────────────────────
    function courseFilterBar(grades) {
        const chipsHTML = grades.map((g, i) => `
            <button class="filter-chip ${i === 0 ? 'active' : ''}" data-grade="${g}"
                onclick="filterByGrade('${g}', this)">${g}</button>
        `).join('');

        return `
        <div class="courses-filter-bar">
            <div class="filter-search">
                <span class="search-icon">🔍</span>
                <input type="text" id="courseSearchInput" placeholder="ابحث عن كورس..."
                    oninput="filterCourses()">
            </div>
            <div class="filter-chips" id="filterChips">
                ${chipsHTML}
            </div>
        </div>`;
    }

    // ── Full Courses Page Template ─────────────────────────────────
    function coursesPage(grades, coursesGridHTML) {
        return `
        <div style="padding-top:calc(var(--header-height) + var(--space-2xl));padding-bottom:var(--space-3xl);">
            <div class="container">
                <div class="text-center" style="margin-bottom:var(--space-2xl);">
                    <span class="section-badge sb-blue"><span class="icon">📚</span> الكورسات</span>
                    <h2 class="section-title">كل الكورسات المتاحة</h2>
                    <p class="section-subtitle">اختر صفك الدراسي واستكشف الكورسات المتاحة لك.</p>
                </div>
                ${courseFilterBar(grades)}
                <div class="courses-grid" id="coursesGrid">
                    ${coursesGridHTML}
                </div>
                <div class="empty-state" id="coursesEmpty" style="display:none;">
                    <div class="empty-state-icon">🔍</div>
                    <h3>لا توجد نتائج</h3>
                    <p>جرّب تغيير كلمة البحث أو فلتر الصف.</p>
                </div>
            </div>
        </div>`;
    }

    // ── Hero Banner Template ──────────────────────────────────────
    function heroBanner(siteName) {
        return `
        <section id="homeHeroBanner" class="hb-section">
            <div class="hb-bg" aria-hidden="true">
                <div class="hb-orb hb-orb-1"></div>
                <div class="hb-orb hb-orb-2"></div>
                <span class="hb-float hb-f1">F = ma</span>
                <span class="hb-float hb-f2">E = mc²</span>
                <span class="hb-float hb-f3">V = IR</span>
                <span class="hb-float hb-f4">λ = v / f</span>
                <span class="hb-float hb-f5">ΔE = hf</span>
                <span class="hb-float hb-f6">∑F = 0</span>
            </div>
            <div class="hb-container">
                <div class="hb-body">
                    <div class="hb-text-side">
                        <h1 class="hb-heading">
                            <span class="hb-h-prefix">الفيزياء مع</span>
                            <span class="hb-h-name" dir="rtl"><span class="hb-n1">الأستاذ</span> <span class="hb-n2">محمد الصياد</span></span>
                            <span class="hb-h-suffix" dir="rtl">أستاذ الفيزياء</span>
                            <span class="hb-h-levels">المراحل الثانوية والإعدادية</span>
                        </h1>
                        <p class="hb-tagline">افهم الفيزياء... مش تحفظها.</p>
                        <div class="hb-btns">
                            <a href="#register" class="hb-btn-orange">
                                <span>✨ إنشاء حساب الآن</span>
                                <span class="hb-arrow">←</span>
                            </a>
                            <a href="#courses" class="hb-btn-green">
                                <span>📚 استكشف الكورسات</span>
                            </a>
                        </div>
                    </div>

                    <div class="hb-img-side">
                        <svg class="hb-orbits" viewBox="0 0 800 800" fill="none" stroke="currentColor" aria-hidden="true">
                            <g class="hb-o-spin hb-o-a"><g transform="rotate(24 400 400)"><ellipse cx="400" cy="400" rx="390" ry="148" stroke-width="1"/><circle cx="790" cy="400" r="4.5" class="hb-cy" stroke="none"/></g></g>
                            <g class="hb-o-spin hb-o-b"><g transform="rotate(-38 400 400)"><ellipse cx="400" cy="400" rx="340" ry="118" stroke-width=".9"/><circle cx="60" cy="400" r="3.5" fill="currentColor" stroke="none"/></g></g>
                            <g class="hb-o-spin hb-o-c"><g transform="rotate(84 400 400)"><ellipse cx="400" cy="400" rx="290" ry="96" stroke-width=".8" stroke-dasharray="2 8"/><circle cx="690" cy="400" r="3" class="hb-cy" stroke="none"/></g></g>
                            <circle cx="400" cy="400" r="150" stroke-width=".7"/><circle cx="400" cy="400" r="245" stroke-width=".6" stroke-dasharray="1.5 9"/>
                            <path d="M400 20V780M20 400H780" stroke-width=".4" opacity=".55"/>
                            <g stroke="none"><circle class="hb-p hb-cy" cx="150" cy="200" r="2"/><circle class="hb-p" cx="650" cy="150" r="1.7" fill="currentColor"/><circle class="hb-p hb-cy" cx="700" cy="580" r="1.8"/><circle class="hb-p" cx="210" cy="670" r="1.8" fill="currentColor"/><circle class="hb-p" cx="560" cy="60" r="1.5" fill="currentColor"/></g>
                        </svg>
                        
                        <div class="hb-img-frame">
                            <img src="teacher-hero.webp?v=20260923" alt="الأستاذ محمد الصياد — أستاذ الفيزياء" class="hb-img" width="784" height="1000" loading="eager" decoding="async" fetchpriority="high" onload="this.parentNode.classList.add('is-loaded')" onerror="if(this.dataset.fb){this.parentNode.classList.add('is-loaded')}else{this.dataset.fb=1;this.classList.add('is-fb');this.src='teacher-hero.webp?v=20260923'}">
                        </div>
                    </div>

                </div>
            </div>
        </section>`;
    }

    // ── 3 Steps Section Template ──────────────────────────────────
    function stepsSection() {
        return `
        <section class="page-section" style="background:var(--bg-alt);">
            <div class="container text-center">
                <span class="section-badge sb-teal"><span class="icon">🚀</span> بداية سهلة</span>
                <h2 class="section-title">كيف تبدأ رحلتك في 3 خطوات</h2>
                <p class="section-subtitle">خطوات بسيطة وسريعة لتبدأ في دقائق معدودة.</p>
                <div class="steps-grid">
                    <div class="step-card reveal">
                        <div class="step-badge">1</div>
                        <div class="step-icon">👤</div>
                        <h3>إنشاء حساب مجاني</h3>
                        <p>سجّل اسمك ورقم هاتفك وصفك الدراسي في أقل من دقيقة.</p>
                    </div>
                    <div class="step-card reveal reveal-delay-1">
                        <div class="step-badge">2</div>
                        <div class="step-icon">🔑</div>
                        <h3>اختر كورسك</h3>
                        <p>تصفّح الكورسات وابدأ بالكورس التأسيسي المجاني أو فعّل كود كورس صفك الدراسي.</p>
                    </div>
                    <div class="step-card reveal reveal-delay-2">
                        <div class="step-badge">3</div>
                        <div class="step-icon">🏆</div>
                        <h3>تعلّم وتدرّب وتفوّق!</h3>
                        <p>شاهد المحاضرات وحُلّ التمارين والاختبارات الإلكترونية وحقّق الدرجة النهائية.</p>
                    </div>
                </div>
            </div>
        </section>`;
    }

    // ── Teacher Section Template ──────────────────────────────────
    function teacherSection(teacherName) {
        return `
        <section class="page-section">
            <div class="container">
                <div class="teacher-section-card reveal">
                    <div class="teacher-visual">
                        <div class="teacher-avatar-circle">👨‍🏫</div>
                        <div class="teacher-name-badge">${teacherName}</div>
                        <div class="teacher-role-badge">أستاذ الفيزياء — المراحل الثانوية والإعدادية</div>
                    </div>
                    <div class="teacher-content">
                        <span class="section-badge sb-volt"><span class="icon">⭐</span> المدرّس الرئيسي</span>
                        <h2>نجعل الفيزياء واضحة وبديهية وملهمة</h2>
                        <p>
                            «رسالتي الأساسية ليست تدريس القوانين فحسب، بل بناء عقلية علمية تفهم من أين تأتي القوانين وكيف تُطبَّق لحلّ أصعب المسائل بثقة. على مدار أكثر من 15 عامًا، كان لي شرف توجيه آلاف الطلاب إلى أفضل الكليات والدرجات النهائية.»"
                        </p>
                        <div class="teacher-pills">
                            <div class="teacher-pill"><span>🏆</span> خبرة +15 عامًا</div>
                            <div class="teacher-pill"><span>🎯</span> مراكز متقدمة على مستوى الجمهورية</div>
                            <div class="teacher-pill"><span>⚛️</span> أسلوب مبسّط حصري</div>
                            <div class="teacher-pill"><span>⚡</span> متابعة شخصية للواجبات</div>
                        </div>
                        <div style="display:flex;gap:12px;flex-wrap:wrap;">
                            <a href="#courses" class="btn btn-primary btn-lg">تصفّح الكورسات</a>
                            <a href="https://wa.me/201000000000" target="_blank" rel="noopener"
                                class="btn btn-outline btn-lg">💬 تواصل مع الأستاذ محمد</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }

    // ── FAQ Section Template ──────────────────────────────────────
    function faqSection(faqItems) {
        const itemsHTML = faqItems.map((faq, idx) => `
            <div class="faq-item ${idx === 0 ? 'open' : ''}" id="faq-item-${idx}">
                <button class="faq-question" onclick="toggleFaq(${idx})">
                    <span>${faq.q}</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <p>${faq.a}</p>
                </div>
            </div>
        `).join('');

        return `
        <section class="page-section" id="faq-section">
            <div class="container text-center">
                <span class="section-badge sb-cyan"><span class="icon">❓</span> مساعدة ومعلومات</span>
                <h2 class="section-title">الأسئلة الشائعة</h2>
                <p class="section-subtitle">كل ما تحتاج معرفته عن التسجيل وتفعيل الكورسات واستخدام المنصة.</p>
                <div class="faq-grid">
                    ${itemsHTML}
                </div>
            </div>
        </section>`;
    }

    // ── CTA Banner Template ──────────────────────────────────────
    function ctaBanner(isLoggedIn) {
        const btnsHTML = isLoggedIn ? `
            <a href="#dashboard" class="btn btn-accent btn-xl reveal reveal-delay-2">
                📊 Go to Dashboard &larr;
            </a>
            <a href="#courses" class="btn btn-outline btn-xl reveal reveal-delay-2"
                style="border-color:#fff;color:#fff;">📚 استكشف الكورسات</a>
        ` : `
            <a href="#register" class="btn btn-accent btn-xl reveal reveal-delay-2"
                id="ctaBannerRegisterBtn">✨ أنشئ حسابك المجاني الآن &larr;</a>
            <a href="#login" class="btn btn-outline btn-xl reveal reveal-delay-2"
                style="border-color:#fff;color:#fff;">🔑 تسجيل الدخول</a>
        `;

        return `
        <section class="cta-section">
            <div class="container text-center">
                <h2 class="reveal">جاهز للتفوق في الفيزياء مع الأستاذ محمد الصياد؟</h2>
                <p class="reveal reveal-delay-1">انضم إلى آلاف الطلاب واستمتع برحلة تعلّم ممتعة تصنع الفارق.</p>
                <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:var(--space-xl);">
                    ${btnsHTML}
                </div>
            </div>
        </section>`;
    }

    // ── Login Page Template ──────────────────────────────────────
    function loginPage(siteName) {
        return `
        <div class="auth-page auth-page--login">
            <div class="auth-visual">
                <div class="auth-visual-mesh"></div>
                <div class="auth-visual-content">
                    <div class="auth-teacher-badge">
                        ${AUTH_ORBITS}
                        <img src="teacher-hero.webp?v=20260923" alt="الأستاذ محمد الصياد — أستاذ الفيزياء" class="auth-t-img" onerror="this.src='صورة المدرس الجديد.jpeg'">
                        <div class="auth-t-info">
                            <div class="auth-t-name" dir="rtl">الأستاذ محمد الصياد</div>
                            <div class="auth-t-sub" dir="rtl">أستاذ الفيزياء</div>
                        </div>
                    </div>
                    <h2 class="auth-visual-title">مرحبًا بعودتك إلى التفوق في الفيزياء!</h2>
                    <p class="auth-visual-desc">سجّل الدخول لتواصل رحلتك نحو الدرجة النهائية مع الأستاذ محمد الصياد.</p>
                    <div class="auth-features-list">
                        <div class="auth-feat-item">
                            <span class="auth-feat-icon">${AUTH_ICONS.check}</span>
                            <span>وصول فوري إلى كل كورساتك المفعّلة</span>
                        </div>
                        <div class="auth-feat-item">
                            <span class="auth-feat-icon">${AUTH_ICONS.check}</span>
                            <span>تابع تقدمك ودرجاتك لحظة بلحظة</span>
                        </div>
                        <div class="auth-feat-item">
                            <span class="auth-feat-icon">${AUTH_ICONS.check}</span>
                            <span>إشعارات فورية بالدروس الجديدة وتحديثات المنهج</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="auth-form-side">
                <div class="auth-form-card">
                    <div class="auth-card-header">
                        <a href="#home" class="auth-logo-badge">
                            <span class="auth-logo-icon">${physicsLogoMark('au', 'auth-logo-svg')}</span>
                            <span class="auth-logo-text">${siteName}</span>
                        </a>
                        <h1 class="auth-heading">تسجيل الدخول</h1>
                        <p class="auth-subtitle">مرحبًا بعودتك، تابع رحلتك التعليمية</p>
                    </div>

                    <div id="loginErrorMsg" class="auth-alert-error" style="display:none;"></div>

                    <form class="auth-form" onsubmit="event.preventDefault(); handleLogin();"
                        id="loginForm" novalidate>
                        <div class="form-group">
                            <div class="form-label-row">
                                <label class="form-label">رقم هاتف الطالب</label>
                                <span class="phone-len-counter" id="loginPhoneCounter">0 / 11 رقمًا</span>
                            </div>
                            <div class="form-input-icon-wrapper">
                                <span class="form-input-icon">${AUTH_ICONS.phone}</span>
                                <input type="tel" class="form-input phone-input"
                                    placeholder="01xxxxxxxxx" required id="loginPhone"
                                    dir="ltr" maxlength="11" inputmode="numeric"
                                    autocomplete="tel"
                                    oninput="handlePhoneInputLive(this, 'loginPhoneCounter')">
                            </div>
                            <div class="form-hint" id="loginPhoneHint">
                                أدخل 11 رقمًا يبدأ بـ 01 (أرقام فقط)
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-label-row">
                                <label class="form-label">كلمة المرور</label>
                                <a href="#" onclick="event.preventDefault();
                                    showToast('تواصل مع الدعم الفني لاستعادة كلمة المرور', 'info');"
                                    class="forgot-pw-link">نسيت كلمة المرور؟</a>
                            </div>
                            <div class="form-input-icon-wrapper" style="position:relative;">
                                <span class="form-input-icon">${AUTH_ICONS.lock}</span>
                                <input type="password" class="form-input"
                                    placeholder="أدخل كلمة المرور" required id="loginPassword"
                                    autocomplete="current-password">
                                <span class="password-toggle"
                                    onclick="togglePassword('loginPassword', this)"
                                    title="إظهار/إخفاء كلمة المرور">${AUTH_ICONS.eye}</span>
                            </div>
                        </div>

                        <div class="form-options-row">
                            <label class="remember-label">
                                <input type="checkbox" checked class="custom-checkbox" id="loginRemember">
                                <span>تذكّرني على هذا الجهاز</span>
                            </label>
                        </div>

                        <button type="submit" class="btn btn-auth-submit" id="loginSubmitBtn">
                            <span>تسجيل الدخول</span>
                            <span class="btn-arrow-icon">←</span>
                        </button>
                    </form>

                    <div class="auth-footer-box">
                        <span>ليس لديك حساب؟</span>
                        <a href="#register" class="auth-switch-link">إنشاء حساب</a>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // ── Register Page Template ──────────────────────────────────
    function registerPage(siteName) {
        const governorates = [
            'Cairo', 'Giza', 'Alexandria', 'Dakahlia', 'Beheira', 'Fayoum',
            'Gharbia', 'Ismailia', 'Monufia', 'Minya', 'Qalyubia', 'New Valley',
            'Suez', 'Aswan', 'Asyut', 'Beni Suef', 'Port Said', 'Damietta',
            'Sharkia', 'South Sinai', 'Kafr El Sheikh', 'Matrouh', 'Luxor', 'Qena',
            'North Sinai', 'Sohag', 'Red Sea'
        ];
        const govOptions = governorates.map(g => `<option value="${g}">${GOV_AR[g] || g}</option>`).join('');

        return `
        <div class="auth-page auth-page--register">
            <div class="auth-visual">
                <div class="auth-visual-mesh"></div>
                <div class="auth-visual-content">
                    <div class="auth-teacher-badge">
                        ${AUTH_ORBITS}
                        <img src="teacher-hero.webp?v=20260923" alt="الأستاذ محمد الصياد — أستاذ الفيزياء" class="auth-t-img" onerror="this.src='صورة المدرس الجديد.jpeg'">
                        <div class="auth-t-info">
                            <div class="auth-t-name" dir="rtl">الأستاذ محمد الصياد</div>
                            <div class="auth-t-sub" dir="rtl">أستاذ الفيزياء</div>
                        </div>
                    </div>
                    <h2 class="auth-visual-title">انضم إلى المتفوقين في الفيزياء!</h2>
                    <p class="auth-visual-desc">أنشئ حسابك المجاني في ثوانٍ واحصل على دروس حصرية واختبارات تفاعلية.</p>
                    <div class="auth-features-list">
                        <div class="auth-feat-item">
                            <span class="auth-feat-icon">${AUTH_ICONS.check}</span>
                            <span>شروحات واضحة ومنظّمة للموضوعات الصعبة</span>
                        </div>
                        <div class="auth-feat-item">
                            <span class="auth-feat-icon">${AUTH_ICONS.check}</span>
                            <span>اختبارات شاملة بتصحيح فوري وإجابات نموذجية</span>
                        </div>
                        <div class="auth-feat-item">
                            <span class="auth-feat-icon">${AUTH_ICONS.check}</span>
                            <span>متابعة دورية للأداء وتقارير التقدم</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="auth-form-side">
                <div class="auth-form-card auth-register-card">
                    <div class="auth-card-header">
                        <a href="#home" class="auth-logo-badge">
                            <span class="auth-logo-icon">${physicsLogoMark('au', 'auth-logo-svg')}</span>
                            <span class="auth-logo-text">${siteName}</span>
                        </a>
                        <h1 class="auth-heading">إنشاء حساب</h1>
                        <p class="auth-subtitle">أنشئ حسابك وانضم إلى المنصة</p>
                    </div>

                    <div id="registerErrorMsg" class="auth-alert-error" style="display:none;"></div>

                    <form class="auth-form"
                        onsubmit="event.preventDefault(); handleRegister();"
                        id="registerForm" novalidate>

                        <!-- الاسم بالكامل
                        <div class="form-group">
                            <label class="form-label">اسم الطالب بالكامل</label>
                            <div class="form-input-icon-wrapper">
                                <span class="form-input-icon">${AUTH_ICONS.user}</span>
                                <input type="text" class="form-input"
                                    placeholder="مثال: أحمد محمد علي"
                                    required id="registerFullName" autocomplete="name">
                            </div>
                        </div>

                        <!-- Phone Numbers -->
                        <div class="form-row-auth">
                            <div class="form-group">
                                <div class="form-label-row">
                                    <label class="form-label">رقم هاتف الطالب</label>
                                    <span class="phone-len-counter" id="regPhoneCounter">0 / 11 رقمًا</span>
                                </div>
                                <div class="form-input-icon-wrapper">
                                    <span class="form-input-icon">${AUTH_ICONS.phone}</span>
                                    <input type="tel" class="form-input phone-input"
                                        placeholder="01xxxxxxxxx" required dir="ltr"
                                        id="registerPhone" maxlength="11" inputmode="numeric"
                                        autocomplete="tel"
                                        oninput="handlePhoneInputLive(this, 'regPhoneCounter')">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-label-row">
                                    <label class="form-label">رقم هاتف ولي الأمر</label>
                                    <span class="phone-len-counter" id="regParentPhoneCounter">0 / 11 رقمًا</span>
                                </div>
                                <div class="form-input-icon-wrapper">
                                    <span class="form-input-icon">${AUTH_ICONS.phone}</span>
                                    <input type="tel" class="form-input phone-input"
                                        placeholder="01xxxxxxxxx" required dir="ltr"
                                        id="registerParentPhone" maxlength="11" inputmode="numeric"
                                        autocomplete="tel"
                                        oninput="handlePhoneInputLive(this, 'regParentPhoneCounter')">
                                </div>
                            </div>
                        </div>

                        <!-- Grade & Governorate -->
                        <div class="form-row-auth">
                            <div class="form-group">
                                <label class="form-label">الصف الدراسي</label>
                                <select class="form-select" id="registerGrade" required
                                    onchange="handleGradeChange(this.value)">
                                    <option value="">— اختر الصف —</option>
                                    <optgroup label="المرحلة الثانوية">
                                        <option value="تالتة ثانوي">الصف الثالث الثانوي</option>
                                        <option value="تانية ثانوي">الصف الثاني الثانوي</option>
                                        <option value="تانية ثانوي برمجة">الصف الثاني الثانوي (برمجة)</option>
                                        <option value="بكالوريا عام برمجة">بكالوريا عام (برمجة)</option>
                                        <option value="أولى ثانوي">الصف الأول الثانوي</option>
                                    </optgroup>
                                    <optgroup label="المرحلة الإعدادية">
                                        <option value="تالتة إعدادي">الصف الثالث الإعدادي</option>
                                        <option value="تانية إعدادي">الصف الثاني الإعدادي</option>
                                        <option value="أولى إعدادي">الصف الأول الإعدادي</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">المحافظة</label>
                                <select class="form-select" id="registerGovernorate" required>
                                    <option value="">— اختر المحافظة —</option>
                                    ${govOptions}
                                </select>
                            </div>
                        </div>

                        <!-- Section (For 2nd secondary) -->
                        <div class="form-group" id="sectionGroup" style="display:none;">
                            <label class="form-label">اختر الشعبة</label>
                            <div class="section-radio-pills">
                                <label class="radio-pill-card">
                                    <input type="radio" name="registerSection"
                                        value="عام" id="sectionAmm">
                                    <span>عام (علمي / أدبي)</span>
                                </label>
                                <label class="radio-pill-card">
                                    <input type="radio" name="registerSection"
                                        value="بكالوريا" id="sectionBak">
                                    <span>بكالوريا دولية / لغات</span>
                                </label>
                            </div>
                        </div>

                        <!-- Password -->
                        <div class="form-row-auth">
                            <div class="form-group">
                                <label class="form-label">كلمة المرور
                                    <small>(6 أحرف أو أكثر)</small></label>
                                <div class="form-input-icon-wrapper" style="position:relative;">
                                    <span class="form-input-icon">${AUTH_ICONS.lock}</span>
                                    <input type="password" class="form-input"
                                        placeholder="أدخل كلمة المرور" required
                                        id="registerPassword"
                                        oninput="checkPasswordStrength(this.value)"
                                        autocomplete="new-password">
                                    <span class="password-toggle"
                                        onclick="togglePassword('registerPassword', this)">${AUTH_ICONS.eye}</span>
                                </div>
                                <div class="password-strength-bar" id="passwordStrengthBar"
                                    style="margin-top:6px;height:4px;border-radius:4px;
                                           background:var(--border);overflow:hidden;display:none;">
                                    <div id="passwordStrengthFill"
                                        style="height:100%;border-radius:4px;transition:all 0.3s;">
                                    </div>
                                </div>
                                <div id="passwordStrengthText"
                                    style="font-size:0.75rem;margin-top:4px;"></div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">تأكيد كلمة المرور</label>
                                <div class="form-input-icon-wrapper" style="position:relative;">
                                    <span class="form-input-icon">${AUTH_ICONS.lock}</span>
                                    <input type="password" class="form-input"
                                        placeholder="أعد كتابة كلمة المرور" required
                                        id="registerConfirmPassword"
                                        autocomplete="new-password">
                                    <span class="password-toggle"
                                        onclick="togglePassword('registerConfirmPassword', this)">${AUTH_ICONS.eye}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Terms -->
                        <div class="form-options-row">
                            <label class="remember-label">
                                <input type="checkbox" required class="custom-checkbox"
                                    id="registerTerms" checked>
                                <span>أوافق على
                                    <a href="#" onclick="event.preventDefault();
                                        showToast('الشروط تضمن الخصوصية الكاملة وأمان بياناتك', 'info');"
                                        class="auth-link-terms">شروط الخدمة وسياسة الخصوصية</a>
                                </span>
                            </label>
                        </div>

                        <button type="submit" class="btn btn-auth-submit" id="registerSubmitBtn">
                            <span>إنشاء حساب الآن ✨</span>
                            <span class="btn-arrow-icon">✨</span>
                        </button>
                    </form>

                    <div class="auth-footer-box">
                        <span>لديك حساب بالفعل؟</span>
                        <a href="#login" class="auth-switch-link">تسجيل الدخول</a>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // ── Footer Template ───────────────────────────────────────────
    function footer(config, isLoggedIn, year) {
        return `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="footer-logo-icon">${physicsLogoMark('f', 'footer-logo-svg', 'dark')}</div>
                        <span class="footer-logo-text">${config.fullName}</span>
                    </div>
                    <p>${config.description}</p>
                    <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">
                        <span class="badge badge-primary">Class of ${year}</span>
                        <span class="badge badge-accent">محتوى تأسيسي وشامل</span>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>روابط سريعة</h4>
                    <a href="#home">الرئيسية</a>
                    <a href="#courses">كل الكورسات</a>
                    <a href="#home" onclick="scrollToSection('courses-section')">الكورسات</a>
                    <a href="#home" onclick="scrollToSection('faq-section')">الأسئلة الشائعة</a>
                    ${!isLoggedIn
                        ? '<a href="#register">إنشاء حساب</a>'
                        : '<a href="#profile">ملفي الشخصي</a>'}
                </div>
                <div class="footer-col">
                    <h4>المراحل الدراسية</h4>
                    <a href="#courses" onclick="filterHomeStage('تالتة ثانوي')">الصف الثالث الثانوي</a>
                    <a href="#courses" onclick="filterHomeStage('تانية ثانوي')">الصف الثاني الثانوي</a>
                    <a href="#courses" onclick="filterHomeStage('أولى ثانوي')">الصف الأول الثانوي</a>
                    <a href="#courses" onclick="filterHomeStage('بكالوريا عام برمجة')">بكالوريا برمجة</a>
                    <a href="#courses" onclick="filterHomeStage('أولى إعدادي')">الصف الأول الإعدادي</a>
                    <a href="#courses" onclick="filterHomeStage('تانية إعدادي')">الصف الثاني الإعدادي</a>
                    <a href="#courses" onclick="filterHomeStage('تالتة إعدادي')">الصف الثالث الإعدادي</a>
                    <a href="#courses" onclick="filterHomeStage('مجاني')">كورسات مجانية 🎁</a>
                </div>
                <div class="footer-col">
                    <h4>تواصل معنا</h4>
                    <a href="https://wa.me/201000000000" target="_blank" rel="noopener">📱 دعم واتساب</a>
                    <a href="#" target="_blank" rel="noopener">💬 قناة تيليجرام</a>
                    <a href="#" target="_blank" rel="noopener">📘 صفحة فيسبوك</a>
                    <a href="#login">🔑 دخول الطالب</a>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; ${year} ${config.fullName}. جميع الحقوق محفوظة.</span>
                <div class="footer-social">
                    <a href="https://wa.me/201000000000" target="_blank" rel="noopener"
                        aria-label="واتساب" title="واتساب">💬</a>
                    <a href="#" aria-label="تيليجرام" title="تيليجرام">✈️</a>
                    <a href="#" aria-label="فيسبوك" title="فيسبوك">📘</a>
                </div>
            </div>
        </div>`;
    }

    // ── Public API ────────────────────────────────────────────────
    return {
        page404,
        authRequired,
        coursesPage,
        courseFilterBar,
        heroBanner,
        stepsSection,
        teacherSection,
        faqSection,
        ctaBanner,
        loginPage,
        registerPage,
        footer
    };

})();
