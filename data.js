// ═══════════════════════════════════════════════════════════════
// منصة الأستاذ محمد الصياد — أستاذ الفيزياء — Physics Platform — Data
// ═══════════════════════════════════════════════════════════════


// ── Display labels (values stored in the database stay unchanged) ──
const GOV_AR = {'Cairo':'القاهرة','Giza':'الجيزة','Alexandria':'الإسكندرية','Dakahlia':'الدقهلية','Beheira':'البحيرة','Fayoum':'الفيوم','Gharbia':'الغربية','Ismailia':'الإسماعيلية','Monufia':'المنوفية','Menofia':'المنوفية','Minya':'المنيا','Qalyubia':'القليوبية','New Valley':'الوادي الجديد','Suez':'السويس','Aswan':'أسوان','Asyut':'أسيوط','Assiut':'أسيوط','Beni Suef':'بني سويف','Port Said':'بورسعيد','Damietta':'دمياط','Sharkia':'الشرقية','Sharqia':'الشرقية','South Sinai':'جنوب سيناء','Kafr El Sheikh':'كفر الشيخ','Matrouh':'مطروح','Luxor':'الأقصر','Qena':'قنا','North Sinai':'شمال سيناء','Sohag':'سوهاج','Red Sea':'البحر الأحمر'};
const GRADE_AR = {'1st Year Preparatory':'الصف الأول الإعدادي','2nd Year Preparatory':'الصف الثاني الإعدادي','3rd Year Preparatory':'الصف الثالث الإعدادي','1st Year Secondary':'الصف الأول الثانوي','2nd Year Secondary':'الصف الثاني الثانوي','2nd Year Secondary — General':'الصف الثاني الثانوي — عام','2nd Year Secondary — Baccalaureate':'الصف الثاني الثانوي — بكالوريا','2nd Year Secondary — Programming':'الصف الثاني الثانوي — برمجة','Baccalaureate Programming':'بكالوريا برمجة','3rd Year Secondary':'الصف الثالث الثانوي'};

// ── Auth icon family (outline, 1.8 stroke) ──
const _au = (p, s) => `<svg viewBox="0 0 24 24" width="${s || 20}" height="${s || 20}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const AUTH_ICONS = {
    user: _au('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'),
    phone: _au('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
    lock: _au('<rect x="4" y="11" width="16" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    eye: _au('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    eyeOff: _au('<path d="M3 3l18 18"/><path d="M6.5 6.8A16.6 16.6 0 0 0 2 12s3.6 7 10 7c1.5 0 2.9-.3 4.1-.8M10.6 5.1A9.6 9.6 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'),
    cap: _au('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>'),
    pin: _au('<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    check: _au('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 16)
};
const AUTH_ORBITS = `<svg class="auth-orbits" viewBox="0 0 800 800" fill="none" stroke="currentColor" aria-hidden="true"><g class="hb-o-spin hb-o-a"><g transform="rotate(24 400 400)"><ellipse cx="400" cy="400" rx="390" ry="148" stroke-width="1.2"/><circle cx="790" cy="400" r="5" class="hb-cy" stroke="none"/></g></g><g class="hb-o-spin hb-o-b"><g transform="rotate(-38 400 400)"><ellipse cx="400" cy="400" rx="330" ry="116" stroke-width="1.1"/><circle cx="70" cy="400" r="4" fill="currentColor" stroke="none"/></g></g><circle cx="400" cy="400" r="160" stroke-width=".9"/><circle cx="400" cy="400" r="250" stroke-width=".8" stroke-dasharray="2 9"/><path d="M400 20V780M20 400H780" stroke-width=".5" opacity=".5"/><g stroke="none"><circle class="hb-p hb-cy" cx="150" cy="200" r="2.4"/><circle class="hb-p" cx="650" cy="150" r="2" fill="currentColor"/><circle class="hb-p hb-cy" cx="700" cy="580" r="2.2"/><circle class="hb-p" cx="210" cy="670" r="2" fill="currentColor"/></g></svg>`;
const SITE_CONFIG = {
    name: 'منصة الأستاذ محمد الصياد',
    fullName: 'منصة الأستاذ محمد الصياد — أستاذ الفيزياء',
    subtitle: 'أستاذ الفيزياء',
    description: 'المنصة التعليمية الأولى لمادة الفيزياء مع الأستاذ محمد الصياد، أستاذ الفيزياء — شروحات واضحة وتمارين تفاعلية واختبارات شاملة لجميع المراحل الدراسية.',
    teacher: 'الأستاذ محمد الصياد',
    year: 2026,
};

// ── Brand mark (wave-M inside an orbit) — one source of truth for header / footer / auth ──
// variant: 'light' (for light & dark headers) | 'dark' (for deep-purple tiles). uid keeps gradient ids unique.
function physicsLogoMark(uid, cls, variant) {
    const u = 'pm' + (uid || Math.random().toString(36).slice(2, 6));
    const inner = variant === 'dark' ? `<defs>
<linearGradient id="${u}m" x1="10" y1="34" x2="38" y2="14" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D8C4FF"/></linearGradient>
<linearGradient id="${u}o" x1="3" y1="34" x2="45" y2="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#C9A8FF"/><stop offset="1" stop-color="#8C62DB"/></linearGradient>
</defs>
<circle cx="24" cy="24" r="21.4" stroke="url(#${u}o)" stroke-width="1.7" fill="none" opacity="1.0"/>
<path d="M10 34 C10 24 12 14 17 14 C20.5 14 21 30 24 30 C27 30 27.5 14 31 14 C36 14 38 24 38 34" stroke="url(#${u}m)" stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="39.9" cy="9.68" r="4.9" fill="#D9B6F5" opacity=".22"/>
<circle cx="39.9" cy="9.68" r="2.7" fill="#F0DBFF"/>` : `<defs>
<linearGradient id="${u}m" x1="10" y1="34" x2="38" y2="14" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6A3FBD"/><stop offset="1" stop-color="#A468DA"/></linearGradient>
<linearGradient id="${u}o" x1="3" y1="34" x2="45" y2="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B07CE6"/><stop offset="1" stop-color="#6A3FBD"/></linearGradient>
</defs>
<circle cx="24" cy="24" r="21.4" stroke="url(#${u}o)" stroke-width="1.7" fill="none" opacity="0.95"/>
<path d="M10 34 C10 24 12 14 17 14 C20.5 14 21 30 24 30 C27 30 27.5 14 31 14 C36 14 38 24 38 34" stroke="url(#${u}m)" stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="39.9" cy="9.68" r="4.9" fill="#B47AE6" opacity=".22"/>
<circle cx="39.9" cy="9.68" r="2.7" fill="#B47AE6"/>`;
    return `<svg class="${cls || ''}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${inner}</svg>`;
}

const QUIZ_DATA = {
    title: 'اختبار الوحدة الأولى — الميكانيكا',
    questions: [
        {
            id: 'q1',
            text: 'ما وحدة القوة في النظام الدولي؟',
            options: ['جول', 'نيوتن', 'واط', 'باسكال'],
            correct: 1
        },
        {
            id: 'q2',
            text: 'تتسارع سيارة من السكون بانتظام بعجلة 3 م/ث². ما سرعتها بعد 4 ث؟',
            options: ['7 m/s', '9 m/s', '12 m/s', '16 m/s'],
            correct: 2
        },
        {
            id: 'q3',
            text: 'أي قانون للحركة تعبّر عنه المعادلة F = ma؟',
            options: ['قانون نيوتن الأول', 'قانون نيوتن الثاني', 'قانون نيوتن الثالث', 'قانون الجذب العام'],
            correct: 1
        },
        {
            id: 'q4',
            text: 'مقاومة 4 Ω موصولة بمصدر جهده 12 V. ما شدة التيار المار فيها؟',
            options: ['3 A', '8 A', '16 A', '48 A'],
            correct: 0
        },
        {
            id: 'q5',
            text: 'أي من الكميات التالية كمية متجهة؟',
            options: ['السرعة القياسية', 'الكتلة', 'السرعة المتجهة', 'الطاقة'],
            correct: 2
        }
    ]
};

const TESTIMONIALS_DATA = [
    {
        name: 'أحمد محمد',
        initials: 'AM',
        text: 'الشرح واضح وسهل الفهم، والاختبارات تساعدني على قياس مستواي بدقة. حصلت على أعلى درجة في الفيزياء بفضل هذه المنصة.',
        rating: 5,
        grade: 'الصف الثالث الثانوي'
    },
    {
        name: 'فاطمة علي',
        initials: 'FA',
        text: 'هذه المنصة غيّرت نظرتي للفيزياء تمامًا. كنت أكره المادة والآن أصبحت من موادي المفضلة!',
        rating: 5,
        grade: 'الصف الأول الثانوي'
    },
    {
        name: 'عمر حسن',
        initials: 'OH',
        text: 'أسلوب الأستاذ ممتاز — شرح خطوة بخطوة. الملخصات وملازم PDF مفيدة جدًا وقت المراجعة.',
        rating: 5,
        grade: 'الصف الثاني الثانوي'
    },
    {
        name: 'نور الدين',
        initials: 'NE',
        text: 'المنصة سهلة الاستخدام والكورسات منظّمة جدًا. أنصح بها كل طالب.',
        rating: 4,
        grade: 'الصف الثالث الإعدادي'
    },
    {
        name: 'ياسمين خالد',
        initials: 'YK',
        text: 'أفضل منصة فيزياء استخدمتها. الاختبارات التفاعلية رائعة وتجهّزني جيدًا للامتحانات الفعلية.',
        rating: 5,
        grade: 'الصف الثالث الثانوي'
    },
    {
        name: 'كريم سعيد',
        initials: 'KS',
        text: 'الشرح واضح والتمارين متدرّجة. لاحظت تحسنًا كبيرًا في مستواي خلال شهر واحد فقط.',
        rating: 5,
        grade: 'الصف الأول الثانوي'
    }
];

const FEATURES_DATA = [
    {
        icon: '💡',
        title: 'شرح مفاهيمي مبسّط',
        description: 'شرح خطوة بخطوة من الأساسيات يوضّح المفاهيم الفيزيائية بأمثلة عملية — بلا حفظ أعمى.',
        colorClass: 'green'
    },
    {
        icon: '📚',
        title: 'تغطية كاملة للكتب الخارجية',
        description: 'تغطية شاملة لتمارين الكتب الخارجية وأصعب أسئلة الوزارة والامتحانات السابقة.',
        colorClass: 'yellow'
    },
    {
        icon: '📝',
        title: 'اختبارات إلكترونية تفاعلية',
        description: 'امتحانات نهاية العام التجريبية بتصحيح فوري وإجابة نموذجية تشرح كل خطوة حل بالتفصيل.',
        colorClass: 'blue'
    },
    {
        icon: '📄',
        title: 'ملازم وملخصات PDF حصرية',
        description: 'ملازم ملوّنة تلخّص كل القوانين والمعادلات مع خرائط ذهنية لكل درس — جاهزة للتحميل والطباعة.',
        colorClass: 'green'
    },
    {
        icon: '📊',
        title: 'تقارير الأداء والمتابعة المستمرة',
        description: 'متابعة تفصيلية لتقدم كل طالب ودرجاته في الاختبارات لضمان أعلى مستويات التفوق الدراسي.',
        colorClass: 'yellow'
    },
    {
        icon: '💬',
        title: 'دعم تعليمي وإجابة عن الأسئلة',
        description: 'فريق دعم متخصص متاح على مدار الساعة للإجابة عن كل أسئلة الطلاب وحل المسائل الصعبة.',
        colorClass: 'blue'
    }
];

const STAGES_DATA = [
    {
        id: 'stage-3sec',
        title: 'الصف الثالث الثانوي',
        subtitle: 'فيزياء — الثانوية العامة',
        gradeTag: 'تالتة ثانوي',
        icon: '🎯',
        description: 'منهج كامل مع مراجعات ليلة الامتحان وبنوك أسئلة الوزارة والنماذج الامتحانية.',
        tags: ['الكهربية التيارية', 'المغناطيسية', 'الفيزياء الحديثة', 'أشباه الموصلات']
    },
    {
        id: 'stage-2sec',
        title: 'الصف الثاني الثانوي',
        subtitle: 'Scientific & Literary',
        gradeTag: 'تانية ثانوي',
        icon: '📊',
        description: 'شرح تفصيلي للميكانيكا والحرارة والديناميكا الحرارية والموجات والبصريات.',
        tags: ['Mechanics', 'Thermodynamics', 'Waves', 'Optics']
    },
    {
        id: 'stage-1sec',
        title: 'الصف الأول الثانوي',
        subtitle: 'General & Al-Azhar',
        gradeTag: 'أولى ثانوي',
        icon: '⚛️',
        description: 'تأسيس قوي لفيزياء الثانوية في القياس والحركة والقوى والطاقة.',
        tags: ['Measurement', 'Kinematics', 'Dynamics', 'Work & الطاقة']
    },
    {
        id: 'stage-1prep',
        title: 'الصف الأول الإعدادي',
        subtitle: 'المرحلة الإعدادية',
        gradeTag: 'أولى إعدادي',
        icon: '💡',
        description: 'بداية التفوق في المرحلة الإعدادية — المادة والحركة وأولى قوانين الفيزياء.',
        tags: ['Matter & Density', 'Motion', 'Forces', 'الطاقة']
    },
    {
        id: 'stage-2prep',
        title: 'الصف الثاني الإعدادي',
        subtitle: 'المرحلة الإعدادية',
        gradeTag: 'تانية إعدادي',
        icon: '📊',
        description: 'تأسيس قوي في الحرارة والضوء والصوت والآلات البسيطة.',
        tags: ['الحرارة', 'الضوء', 'الصوت', 'الآلات البسيطة']
    },
    {
        id: 'stage-3prep',
        title: 'الصف الثالث الإعدادي',
        subtitle: 'الشهادة الإعدادية',
        gradeTag: 'تالتة إعدادي',
        icon: '🔭',
        description: 'شرح متعمق للمنهج الإعدادي يضمن الدرجة النهائية والاستعداد للمرحلة الثانوية.',
        tags: ['Electricity', 'المغناطيسية', 'Light & Lenses', 'Exercises']
    },
    {
        id: 'stage-free',
        title: 'الكورسات التأسيسية المجانية',
        subtitle: 'متاح للجميع 🎁',
        gradeTag: 'مجاني',
        icon: '🎁',
        description: 'كورس تمهيدي وتأسيسي مجاني 100% لتجربة أسلوب الشرح وإتقان أساسيات الفيزياء.',
        tags: ['Units & Measurement', 'أساسيات الحركة', 'Forces & الطاقة', 'هدية المنصة']
    }
];

const FAQ_DATA = [
    {
        q: 'كيف أسجّل وأبدأ مشاهدة الكورسات؟',
        a: 'انقر على زر «إنشاء حساب» في أعلى الصفحة وأدخل بياناتك (الاسم ورقم الهاتف والصف الدراسي وكلمة مرور من 6 أحرف). بعد التسجيل يمكنك مشاهدة الكورسات المجانية فورًا أو تفعيل كورس صفك بكود التفعيل.'
    },
    {
        q: 'ما هو كود التفعيل وكيف أحصل عليه؟',
        a: 'كود التفعيل كود فريد يفتح كورسًا مدفوعًا على المنصة مدى الحياة. يمكنك الحصول عليه من سنتر الأستاذ محمد الصياد أو بالتواصل مباشرة مع فريق الدعم الفني عبر واتساب.'
    },
    {
        q: 'هل الفيديوهات والملازم متاحة طوال الترم الدراسي؟',
        a: 'نعم! بمجرد تفعيل الكورس تظل كل الفيديوهات والاختبارات التفاعلية وملازم PDF متاحة لك على مدار 24 ساعة طوال الترم الدراسي — يمكنك المشاهدة والمراجعة كما تشاء.'
    },
    {
        q: 'هل تحتوي المنصة على اختبارات إلكترونية بتصحيح فوري؟',
        a: 'بالتأكيد! بعد كل وحدة ودرس يوجد اختبار إلكتروني تفاعلي يحاكي أحدث مواصفات وزارة التربية والتعليم، مع تصحيح فوري وإجابة نموذجية توضح كل خطوة صحيحة.'
    },
    {
        q: 'هل تعمل المنصة على الموبايل والتابلت والكمبيوتر؟',
        a: 'نعم. منصة الأستاذ محمد الصياد مصمّمة لتعمل بسلاسة وتجاوب على كل الأجهزة: الهواتف الذكية والتابلت واللابتوب وأجهزة الكمبيوتر.'
    },
    {
        q: 'كيف أتواصل مع الأستاذ محمد الصياد للاستفسار ومتابعة الواجبات؟',
        a: 'يوجد فريق تعليمي متخصص بالإضافة إلى مجموعات واتساب وتيليجرام للطلاب المشتركين للإجابة عن كل الأسئلة وحل المسائل الصعبة ومتابعة الواجبات والاختبارات الدورية.'
    }
];

const STATS_DATA = [
    { icon: '👨‍🎓', number: 5000, suffix: '+', label: 'طالب ناجح' },
    { icon: '📚', number: 150, suffix: '+', label: 'Lessons & Lectures' },
    { icon: '⏱️', number: 120, suffix: '+', label: 'ساعات محتوى تفاعلي' },
    { icon: '⭐', number: 99, suffix: '%', label: 'نسبة النجاح والتفوق' },
];

const CURRENT_USER = {
    name: 'أحمد محمد',
    initials: 'AM',
    email: 'student@example.com',
    phone: '01012345678',
    grade: 'الصف الأول الثانوي',
    enrolledCourses: ['math-grade1-term1', 'math-grade2-term1'],
    completedLessons: 5,
    totalLessons: 54,
    avgScore: 87,
};

const ACTIVITY_DATA = [
    { icon: '✅', text: 'أتممت درس «قوانين الحركة»"Laws of Motion"', time: '2 hours ago', color: 'green' },
    { icon: '📝', text: 'حصلت على 90% في اختبار الحركة', time: '5 hours ago', color: 'yellow' },
    { icon: '🎥', text: 'شاهدت درس «المجالات الكهربية»"Electric Fields"', time: 'Yesterday', color: 'blue' },
    { icon: '📄', text: 'حمّلت ملخص الوحدة الأولى PDF', time: '2 days ago', color: 'red' },
    { icon: '🏆', text: 'أنهيت الوحدة الأولى بنجاح', time: '3 days ago', color: 'green' },
];

// ═══════════════════════════════════════════════════════════════
// ADMIN CONFIG
// ═══════════════════════════════════════════════════════════════
const ADMIN_EMAIL = 'admin@iraqi.com';
// (حُذفت كلمة مرور الأدمن المكتوبة في الكود — الأدمن حساب حقيقي في Firebase Authentication + مستند admins/{uid})

// ═══════════════════════════════════════════════════════════════
// LESSONS DATABASE — localStorage CRUD
// ═══════════════════════════════════════════════════════════════
const LESSONS_KEY = 'iraqiplatform_lessons';
const CONTENTS_KEY = 'iraqiplatform_contents';

// ── Lessons ──────────────────────────────────────────────────

function getLessons() {
    try { return JSON.parse(localStorage.getItem(LESSONS_KEY)) || []; }
    catch (e) { return []; }
}

function saveLessons(lessons) {
    localStorage.setItem(LESSONS_KEY, JSON.stringify(lessons));
    if (typeof window.FirebaseService !== 'undefined' && window.FirebaseService.lessons) {
        try { (lessons || []).forEach(l => window.FirebaseService.lessons.saveLesson(l)); } catch (e) { }
    }
}

function getCourseLessons(courseId) {
    return getLessons()
        .filter(l => l.courseId === courseId)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
}

function createLesson(courseId, data) {
    const lessons = getLessons();
    const courseLessons = getCourseLessons(courseId);
    const newLesson = {
        lessonId: 'lesson_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        courseId: courseId,
        title: data.title || 'New Lesson',
        description: data.description || '',
        order: data.order || (courseLessons.length + 1),
        status: data.status || 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    lessons.push(newLesson);
    saveLessons(lessons);
    return newLesson;
}

function updateLesson(lessonId, data) {
    const lessons = getLessons();
    const idx = lessons.findIndex(l => l.lessonId === lessonId);
    if (idx === -1) return null;
    lessons[idx] = {
        ...lessons[idx],
        ...data,
        lessonId: lessonId, // لا نغيّر الـ ID
        updatedAt: new Date().toISOString(),
    };
    saveLessons(lessons);
    return lessons[idx];
}

function deleteLesson(lessonId) {
    // حذف الدرس وجميع محتوياته
    const lessons = getLessons().filter(l => l.lessonId !== lessonId);
    saveLessons(lessons);
    const contents = getContents().filter(c => c.lessonId !== lessonId);
    saveContents(contents);
}

function reorderLessons(courseId, orderedIds) {
    const lessons = getLessons();
    orderedIds.forEach((id, index) => {
        const idx = lessons.findIndex(l => l.lessonId === id);
        if (idx !== -1) {
            lessons[idx].order = index + 1;
            lessons[idx].updatedAt = new Date().toISOString();
        }
    });
    saveLessons(lessons);
}

// ── Contents ─────────────────────────────────────────────────

function getContents() {
    try { return JSON.parse(localStorage.getItem(CONTENTS_KEY)) || []; }
    catch (e) { return []; }
}

function saveContents(contents) {
    localStorage.setItem(CONTENTS_KEY, JSON.stringify(contents));
    if (typeof window.FirebaseService !== 'undefined' && window.FirebaseService.lessons) {
        try { (contents || []).forEach(c => window.FirebaseService.lessons.saveContent(c)); } catch (e) { }
    }
}

function getLessonContents(lessonId) {
    return getContents()
        .filter(c => c.lessonId === lessonId)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
}

function createContent(lessonId, data) {
    const contents = getContents();
    const lessonContents = getLessonContents(lessonId);
    const newContent = {
        contentId: 'content_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        lessonId: lessonId,
        type: data.type || 'video',
        title: data.title || 'New Content',
        content: data.content || '',
        duration: data.duration || '',
        order: data.order || (lessonContents.length + 1),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    contents.push(newContent);
    saveContents(contents);
    return newContent;
}

function updateContent(contentId, data) {
    const contents = getContents();
    const idx = contents.findIndex(c => c.contentId === contentId);
    if (idx === -1) return null;
    contents[idx] = {
        ...contents[idx],
        ...data,
        contentId: contentId,
        updatedAt: new Date().toISOString(),
    };
    saveContents(contents);
    return contents[idx];
}

function deleteContent(contentId) {
    const contents = getContents().filter(c => c.contentId !== contentId);
    saveContents(contents);
}

function reorderContents(lessonId, orderedIds) {
    const contents = getContents();
    orderedIds.forEach((id, index) => {
        const idx = contents.findIndex(c => c.contentId === id);
        if (idx !== -1) {
            contents[idx].order = index + 1;
            contents[idx].updatedAt = new Date().toISOString();
        }
    });
    saveContents(contents);
}

// ── Content Type Config ───────────────────────────────────────
const CONTENT_TYPES = [
    { value: 'video', label: 'Video', icon: '🎥', badge: 'badge-primary' },
    { value: 'pdf', label: 'ملف PDF', icon: '📄', badge: 'badge-danger' },
    { value: 'quiz', label: 'Quiz', icon: '📝', badge: 'badge-accent' },
    { value: 'text', label: 'Text / Notes', icon: '📋', badge: 'badge-success' },
];

function getContentTypeConfig(type) {
    return CONTENT_TYPES.find(t => t.value === type) || CONTENT_TYPES[0];
}

// ── Bridge Helper for Student View ────────────────────────────
function getEffectiveCoursePackages(course, isEnrolled) {
    if (!course) return [];

    function normalizeVideoUrl(url) {
        return String(url || '')
            .trim()
            .replace(/[?&]autoplay=false\b/g, '')
            .replace(/\/$/, '')
            .toLowerCase();
    }

    function uniqueSegments(segs) {
        var seen = {};
        return (Array.isArray(segs) ? segs : []).filter(function (s) {
            if (!s) return false;
            var bunnyId = String(s.bunnyVideoId || '').trim();
            var videoUrl = normalizeVideoUrl(s.videoUrl || s.content || '');
            if (!bunnyId && !videoUrl) return false;
            var key = bunnyId ? ('b:' + bunnyId) : ('u:' + videoUrl);
            if (seen[key]) return false;
            seen[key] = true;
            return true;
        });
    }

    // ── Check Enrollment Status ────────────────────────────────
    var enrolled = isEnrolled;
    if (enrolled === undefined) {
        try {
            var session = (window.AuthService && window.AuthService.getCurrentUser()) || null;   // من الحساب الموثَّق، لا من كاش المتصفح
            if (session && Array.isArray(session.enrolledCourses)) {
                enrolled = session.enrolledCourses.some(function (id) {
                    return String(id) === String(course.id);
                });
            }
        } catch (e) { enrolled = false; }
    }
    var courseUnlocked = !!course.isFree || !!enrolled;

    // ── 1. If course has direct lessons (Firebase / Dashboard) ──
    if (Array.isArray(course.lessons) && course.lessons.length > 0) {
        var pkgs = course.lessons.map(function (dl, idx) {
            var lessonId = String(dl.id || ('l_' + course.id + '_' + idx));
            var segs = Array.isArray(dl.segments) && dl.segments.length > 0 ? dl.segments : [];
            var validSegs = uniqueSegments(segs);

            var rawVideo = dl.videoUrl || '';
            if (!rawVideo && dl.bunnyVideoId) {
                rawVideo = 'https://iframe.mediadelivery.net/embed/691851/' + dl.bunnyVideoId + '?autoplay=false';
            }
            if (rawVideo && validSegs.length === 1) {
                var onlySegUrl = validSegs[0].bunnyVideoId
                    ? ('https://iframe.mediadelivery.net/embed/691851/' + validSegs[0].bunnyVideoId)
                    : (validSegs[0].videoUrl || '');
                if (normalizeVideoUrl(onlySegUrl) === normalizeVideoUrl(rawVideo)) rawVideo = onlySegUrl;
            }
            if (!rawVideo && validSegs.length > 0) {
                var firstS = validSegs[0];
                rawVideo = firstS.bunnyVideoId
                    ? ('https://iframe.mediadelivery.net/embed/691851/' + firstS.bunnyVideoId + '?autoplay=false')
                    : (firstS.videoUrl || '');
            }

            var hasVideo = Boolean(rawVideo || validSegs.length > 0);
            var hasPdf = Boolean(dl.pdfUrl && dl.pdfUrl.trim() !== '');
            var hasQuiz = Boolean(dl.quizId != null && dl.quizId !== '');
            var contentType = hasVideo ? 'video' : (hasQuiz ? 'quiz' : (hasPdf ? 'pdf' : 'video'));

            var pkgLessons = [];

            // Multiple video segments
            if (validSegs.length > 1) {
                validSegs.forEach(function (seg, si) {
                    var sUrl = seg.bunnyVideoId
                        ? ('https://iframe.mediadelivery.net/embed/691851/' + seg.bunnyVideoId + '?autoplay=false')
                        : (seg.videoUrl || '');
                    pkgLessons.push({
                        id: String(seg.id || (lessonId + '_seg_' + si)),
                        lessonId: lessonId,
                        title: seg.title || (dl.title + ' — Part ' + (si + 1)),
                        description: dl.description || '',
                        type: 'video',
                        duration: seg.duration || dl.duration || '—',
                        content: sUrl,
                        videoUrl: sUrl,
                        bunnyVideoId: seg.bunnyVideoId || '',
                        segments: validSegs,
                        pdfUrl: dl.pdfUrl || '',
                        pdfName: dl.pdfName || '',
                        quizId: dl.quizId || null,
                        isCompleted: false,
                        isLocked: !courseUnlocked && (idx > 0 || si > 0)
                    });
                });
            } else {
                // Single segment or standard lesson
                var singleTitle = dl.title || (validSegs[0] && validSegs[0].title) || ('Lesson ' + (idx + 1));
                var singleDuration = (validSegs[0] && validSegs[0].duration) || dl.duration || '—';
                pkgLessons.push({
                    id: lessonId,
                    lessonId: lessonId,
                    title: singleTitle,
                    description: dl.description || '',
                    type: contentType,
                    duration: singleDuration,
                    content: rawVideo || dl.pdfUrl || String(dl.quizId || ''),
                    videoUrl: rawVideo,
                    bunnyVideoId: dl.bunnyVideoId || (validSegs[0] ? validSegs[0].bunnyVideoId : ''),
                    segments: validSegs,
                    pdfUrl: dl.pdfUrl || '',
                    pdfName: dl.pdfName || '',
                    quizId: dl.quizId || null,
                    isCompleted: false,
                    isLocked: !courseUnlocked && idx > 0
                });
            }

            return {
                id: 'pkg_' + lessonId,
                title: dl.title || ('Lesson ' + (idx + 1)),
                description: dl.description || '',
                lessons: pkgLessons
            };
        });

        if (pkgs.length > 0) return pkgs;
    }

    // ── 2. Bridge dashboard courses (getDashCoursePackages) ──
    if (typeof window.getDashCoursePackages === 'function') {
        var dashPkgs = window.getDashCoursePackages(course.id);
        if (dashPkgs && dashPkgs.length > 0) {
            return dashPkgs.map(function (pkg, pIdx) {
                return Object.assign({}, pkg, {
                    lessons: (pkg.lessons || []).map(function (l, idx) {
                        return Object.assign({}, l, {
                            isLocked: !courseUnlocked && (pIdx > 0 || idx > 0)
                        });
                    })
                });
            });
        }
    }

    // ── 3. Packages embedded in course ──
    if (Array.isArray(course.packages) && course.packages.length > 0) {
        return course.packages.map(function (pkg, pIdx) {
            return Object.assign({}, pkg, {
                lessons: (pkg.lessons || []).map(function (l, idx) {
                    return Object.assign({}, l, {
                        isLocked: l.isLocked || (!courseUnlocked && (pIdx > 0 || idx > 0))
                    });
                })
            });
        });
    }

    // ── 4. Dynamic local storage lessons (fallback) ──
    var dynamicLessons = typeof getCourseLessons === 'function' ? getCourseLessons(course.id) : [];
    if (dynamicLessons && dynamicLessons.length > 0) {
        return dynamicLessons.map(function (dl, idx) {
            var contents = typeof getLessonContents === 'function' ? getLessonContents(dl.lessonId) : [];
            return {
                id: dl.lessonId,
                title: dl.title || ('Lesson ' + (idx + 1)),
                description: dl.description || '',
                lessons: contents.length > 0
                    ? contents.map(function (c, cIdx) {
                        return {
                            id: c.contentId,
                            lessonId: dl.lessonId,
                            title: c.title || ('Content ' + (cIdx + 1)),
                            type: c.type || 'video',
                            duration: c.duration || '—',
                            content: c.content || '',
                            videoUrl: c.type === 'video' ? c.content : '',
                            pdfUrl: c.type === 'pdf' ? c.content : '',
                            quizId: c.type === 'quiz' ? c.content : null,
                            isCompleted: false,
                            isLocked: !courseUnlocked && (idx > 0 || cIdx > 0)
                        };
                    })
                    : [{
                        id: dl.lessonId,
                        lessonId: dl.lessonId,
                        title: dl.title || 'محتوى الدرس',
                        type: 'video',
                        duration: '—',
                        content: '',
                        isCompleted: false,
                        isLocked: !courseUnlocked && idx > 0
                    }]
            };
        });
    }

    return [];
}


// ── getAllCourses: fallback إذا لم يُحمَّل dashboard-bridge.js ──
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    // ⚠️ إصلاح جذري: COURSES_DATA غير معرّف في هذا المشروع (الكورسات تأتي من Firestore عبر dashboard-bridge).
    // السطر القديم `window.COURSES_DATA = COURSES_DATA` كان يرمي ReferenceError فيتوقف تنفيذ data.js هنا،
    // ولا تُعرَّف أبداً دوال نظام التقدّم (markLessonCompleted / getLessonAccessStatus / enrichLessonsWithProgress)
    // ولذلك لم يكن قفل الدرس التالي بعد الاختبار يعمل من الأساس.
    window.COURSES_DATA = (typeof COURSES_DATA !== 'undefined') ? COURSES_DATA : [];
    window.STAGES_DATA = STAGES_DATA;
    window.FAQ_DATA = typeof FAQ_DATA !== 'undefined' ? FAQ_DATA : [];
    window.FEATURES_DATA = typeof FEATURES_DATA !== 'undefined' ? FEATURES_DATA : [];
    if (typeof window.getAllCourses !== 'function') {
        window.getAllCourses = function () { return window.COURSES_DATA; };
    }
}

// ================================================================
// Lesson Progress & Quiz-Gate System
// ================================================================
(function () {
    var PROGRESS_KEY = 'iraqi_lesson_progress';

    function getProgress() {
        try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch(e) { return {}; }
    }

    window.isLessonCompleted = function(userId, courseId, lessonId) {
        if (!userId || !courseId || !lessonId) return false;
        return !!getProgress()[userId + '_' + courseId + '_' + lessonId];
    };

    window.markLessonCompleted = function(userId, courseId, lessonId) {
        if (!userId || !courseId || !lessonId) return;
        var p = getProgress();
        var k = userId + '_' + courseId + '_' + lessonId;
        if (p[k]) return;
        p[k] = true;
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
        if (window.db) {
            window.db.collection('lesson_progress').doc(k).set(
                { userId: userId, courseId: courseId, lessonId: lessonId, completedAt: new Date().toISOString() },
                { merge: true }
            ).catch(function() {});
        }
        try { window.dispatchEvent(new CustomEvent('lessonCompleted', { detail: { userId: userId, courseId: courseId, lessonId: lessonId } })); } catch(_) {}
    };

    // Returns { canAccess:bool, reason?:string, quizId?:string, passRate?:number, achieved?:number }
    window.getLessonAccessStatus = function(userId, courseId, allLessons, targetLesson) {
        if (!allLessons || !allLessons.length || !targetLesson) return { canAccess: true };
        var idx = allLessons.findIndex(function(l) { return String(l.id) === String(targetLesson.id); });
        if (idx <= 0) return { canAccess: true };
        var prev = allLessons[idx - 1];
        if (!prev || !prev.quizId) return { canAccess: true };
        var quizId  = prev.quizId;
        var quiz    = (typeof window.getQuizById === 'function') ? window.getQuizById(quizId) : null;
        var passRate = quiz ? (quiz.averageGrade || quiz.passingGrade || 50) : 50;
        var attempt  = (typeof window.getQuizAttempt === 'function' && userId)
            ? window.getQuizAttempt(userId, quizId) : null;
        if (!attempt) return { canAccess: false, reason: 'quiz_required', quizId: quizId, passRate: passRate, prevLessonTitle: prev.title };
        var pct = attempt.percentage !== undefined ? attempt.percentage
            : (attempt.total > 0 ? Math.round(attempt.score / attempt.total * 100) : 0);
        if (pct < passRate) return { canAccess: false, reason: 'quiz_failed', quizId: quizId, passRate: passRate, achieved: pct, prevLessonTitle: prev.title };
        return { canAccess: true, quizPassed: true };
    };

    window.enrichLessonsWithProgress = function(userId, courseId, lessons) {
        if (!lessons || !lessons.length) return lessons;
        return lessons.map(function(lesson, idx) {
            var completed = userId ? window.isLessonCompleted(userId, courseId, lesson.id) : false;
            var access    = window.getLessonAccessStatus(userId, courseId, lessons, lesson);
            return Object.assign({}, lesson, {
                isCompleted: completed,
                isLocked: !access.canAccess,
                _accessStatus: access
            });
        });
    };

    console.info('[Progress] Lesson progress & quiz-gate system ready.');
})();

// ═══════════════════════════════════════════════════════════════
// نظام تتبع تقدم الطالب وربط الاختبارات بفتح الدروس
// Lesson Progress & Quiz-Gate System
// ═══════════════════════════════════════════════════════════════
(function () {
    var PROGRESS_KEY = 'iraqi_lesson_progress'; // { userId_courseId_lessonId: true }

    // ── جلب تقدم الطالب ─────────────────────────────────────────
    function getLessonProgress() {
        try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
        catch (e) { return {}; }
    }

    // ── هل أتم الطالب الدرس؟ ────────────────────────────────────
    window.isLessonCompleted = function (userId, courseId, lessonId) {
        if (!userId || !courseId || !lessonId) return false;
        var key = userId + '_' + courseId + '_' + lessonId;
        return !!getLessonProgress()[key];
    };

    // ── تسجيل إتمام الدرس ───────────────────────────────────────
    window.markLessonCompleted = function (userId, courseId, lessonId) {
        if (!userId || !courseId || !lessonId) return;
        var progress = getLessonProgress();
        var key = userId + '_' + courseId + '_' + lessonId;
        if (progress[key]) return; // already marked
        progress[key] = true;
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
        // مزامنة مع Firebase إذا متاح
        if (window.db) {
            window.db.collection('lesson_progress').doc(key).set({
                userId: userId, courseId: courseId, lessonId: lessonId,
                completedAt: new Date().toISOString()
            }, { merge: true }).catch(function () {});
        }
        // أطلق حدث عشان الواجهة تتحدث
        window.dispatchEvent(new CustomEvent('lessonCompleted', {
            detail: { userId: userId, courseId: courseId, lessonId: lessonId }
        }));
    };

    // ── هل يحق للطالب الوصول للدرس؟ (مع منطق الاختبار) ─────────
    // يعود بـ { canAccess: bool, reason: string, quizId: string|null }
    window.getLessonAccessStatus = function (userId, courseId, allLessons, targetLesson) {
        if (!allLessons || !allLessons.length || !targetLesson) return { canAccess: true };
        var idx = allLessons.findIndex(function (l) {
            return String(l.id) === String(targetLesson.id);
        });
        if (idx <= 0) return { canAccess: true }; // أول درس دايمًا متاح

        // فحص الدرس السابق
        var prevLesson = allLessons[idx - 1];
        if (!prevLesson) return { canAccess: true };

        // إذا الدرس السابق مش مرتبط باختبار → الوصول مفتوح (ولكن بعد الإتمام)
        if (!prevLesson.quizId) {
            // إذا في tracking للإتمام — نتحقق، وإلا نسمح
            var completed = userId ? window.isLessonCompleted(userId, courseId, prevLesson.id) : false;
            // للدروس بدون اختبار → السماح بالوصول تلقائيًا (لا نقفل)
            return { canAccess: true };
        }

        // الدرس السابق مرتبط باختبار → نتحقق من النتيجة
        var quizId = prevLesson.quizId;
        if (window.QuizService && userId) {
            // النتيجة المحفوظة في قاعدة البيانات هي التي تقرر فتح/قفل الدرس التالي
            var g = window.QuizService.evaluateGate(userId, quizId);
            if (!g.locked) return { canAccess: true, quizPassed: g.state === 'passed' };
            return {
                canAccess: false,
                reason: g.state === 'failed' ? 'quiz_failed' : 'quiz_required',
                quizId: quizId, passRate: g.passRate, achieved: g.achieved, prevLessonTitle: prevLesson.title
            };
        }
        var quiz = (typeof window.getQuizById === 'function') ? window.getQuizById(quizId) : null;
        var passRate = quiz ? (quiz.averageGrade || quiz.passingGrade || 50) : 50;
        var attempt = (typeof window.getQuizAttempt === 'function' && userId)
            ? window.getQuizAttempt(userId, quizId) : null;

        if (!attempt) {
            return {
                canAccess: false,
                reason: 'quiz_required',
                quizId: quizId,
                passRate: passRate,
                prevLessonTitle: prevLesson.title
            };
        }

        var pct = attempt.percentage !== undefined ? attempt.percentage
            : (attempt.total > 0 ? Math.round(attempt.score / attempt.total * 100) : 0);

        if (pct < passRate) {
            return {
                canAccess: false,
                reason: 'quiz_failed',
                quizId: quizId,
                passRate: passRate,
                achieved: pct,
                prevLessonTitle: prevLesson.title
            };
        }

        return { canAccess: true, quizPassed: true };
    };

    // ── تحديث isCompleted و isLocked على قائمة الدروس ────────────
    window.enrichLessonsWithProgress = function (userId, courseId, lessons) {
        if (!userId || !courseId || !lessons || !lessons.length) return lessons;
        return lessons.map(function (lesson, idx) {
            var completed = window.isLessonCompleted(userId, courseId, lesson.id);
            var access = window.getLessonAccessStatus(userId, courseId, lessons, lesson);
            return Object.assign({}, lesson, {
                isCompleted: completed,
                isLocked: lesson.isLocked || !access.canAccess,
                _accessStatus: access
            });
        });
    };

    console.info('[Progress System] ✅ Lesson progress & quiz-gate system loaded');
})();
