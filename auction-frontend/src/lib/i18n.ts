import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    main: {
                        title1: "Bid on what matters.",
                        title2: "Win with confidence.",
                        description:
                            "The fastest, most transparent auction house on the web. Authenticated items, instant settlement, and industry-leading buyer protection.",
                        button: {
                            explore: "Explore live auctions",
                            start: "Start selling",
                        },
                        perks: {
                            first: {
                                title: "Real-time bidding",
                                desc: "Sub-millisecond updates powered by WebSockets.",
                            },
                            second: {
                                title: "Verified sellers",
                                desc: "Every high-value item is authenticated by our partners.",
                            },
                            third: {
                                title: "Zero-fee first month",
                                desc: "Sell without commission for 30 days when you sign up today.",
                            },
                        },
                        footer: {
                            title: "Auctionhouse",
                            view_current_item: "View current item",
                        },
                    },
                    header: {
                        home: "Home",
                        auction: "Auction",
                        profile: "My profile",
                        theme_dark: "Dark",
                        theme_light: "Light",
                    },
                    auth: {
                        login: "Login",
                        register: "Register",
                        username: "Username",
                        password: "Password",
                        already_registered:
                            "Already have an account? Login here",
                        dont_have_account:
                            "Don't have an account? Register here",
                        toast: {
                            login: {
                                success: "Successfully logged in!",
                                error: "Invalid credentials.",
                            },
                            register: {
                                success: "Successfully registered!",
                                error: "User already exists.",
                            },
                        },
                    },
                    auction: {
                        bid: "Bid",
                        waiting: "Waiting for items...",
                        live_bids: "Live bids",
                        no_bids: "No bids yet",
                        bid_increments: "Bid increments",
                        current_bid: "Current bid",
                        toast: {
                            outbid: "You've been outbid!",
                            win: "You've won ",
                        },
                    },
                    profile: {
                        title: "Welcome back, ",
                        list_new_item: "List new item",
                    },
                    additemform: {
                        item_title: "Item title",
                        item_image: "Item image",
                        item_description: "Item description",
                        item_desc_placeholder: "Add your description here",
                        starting_price: "Starting price",
                        bid_increment: "Bid increment",
                        add_item: "Add item",
                        toast: {
                            success: "Item added successfully!",
                            error: "Failed to add item.",
                        },
                    },
                },
            },
            ja: {
                translation: {
                    main: {
                        title1: "大切なものに入札しよう。",
                        title2: "自信を持って勝ち取ろう。",
                        description:
                            "最速で最も透明なオンラインオークションハウス。認証済みのアイテム、即時決済、業界最高水準の購入者保護を提供します。",
                        button: {
                            explore: "ライブオークションを見る",
                            start: "出品を始める",
                        },
                        perks: {
                            first: {
                                title: "リアルタイム入札",
                                desc: "WebSocket によるミリ秒単位の更新。",
                            },
                            second: {
                                title: "認証済みセラー",
                                desc: "すべての高額商品は提携パートナーによって認証されています。",
                            },
                            third: {
                                title: "初月手数料無料",
                                desc: "今すぐ登録して30日間コミッションなしで販売できます。",
                            },
                        },
                        footer: {
                            title: "オークションハウス",
                            view_current_item: "現在の商品を見る",
                        },
                    },
                    header: {
                        home: "ホーム",
                        auction: "オークション",
                        profile: "マイページ",
                        theme_dark: "ダーク",
                        theme_light: "ライト",
                    },
                    auth: {
                        login: "ログイン",
                        register: "登録",
                        username: "ユーザー名",
                        password: "パスワード",
                        already_registered:
                            "すでにアカウントをお持ちですか？こちらからログイン",
                        dont_have_account:
                            "アカウントをお持ちでない方はこちらから登録",
                        toast: {
                            login: {
                                success: "ログインに成功しました！",
                                error: "認証情報が無効です。",
                            },
                            register: {
                                success: "登録が完了しました！",
                                error: "ユーザーはすでに存在します。",
                            },
                        },
                    },
                    auction: {
                        bid: "入札",
                        waiting: "アイテムを待っています...",
                        live_bids: "ライブ入札",
                        no_bids: "まだ入札がありません",
                        bid_increments: "入札単位",
                        current_bid: "現在の入札",
                        toast: {
                            outbid: "他の入札者に上回られました！",
                            win: "あなたが落札しました ",
                        },
                    },
                    profile: {
                        title: "お帰りなさい、",
                        list_new_item: "新しいアイテムを出品する",
                    },
                    additemform: {
                        item_title: "アイテム名",
                        item_image: "アイテム画像",
                        item_description: "アイテム説明",
                        item_desc_placeholder: "説明をここに入力",
                        starting_price: "開始価格",
                        bid_increment: "入札単位",
                        add_item: "アイテムを追加",
                        toast: {
                            success: "アイテムが正常に追加されました！",
                            error: "アイテムの追加に失敗しました。",
                        },
                    },
                },
            },

            ar: {
                translation: {
                    main: {
                        title1: "قدّم عرضك على ما يهمك.",
                        title2: "اربح بثقة.",
                        description:
                            "أسرع دار مزادات وأكثرها شفافية على الويب. عناصر موثقة، تسوية فورية، وحماية رائدة للمشترين.",
                        button: {
                            explore: "استكشف المزادات المباشرة",
                            start: "ابدأ البيع",
                        },
                        perks: {
                            first: {
                                title: "مزايدة في الوقت الفعلي",
                                desc: "تحديثات فائقة السرعة مدعومة بـ WebSockets.",
                            },
                            second: {
                                title: "بائعون موثوقون",
                                desc: "كل عنصر عالي القيمة يتم توثيقه من قبل شركائنا.",
                            },
                            third: {
                                title: "شهر مجاني من العمولات",
                                desc: "بع دون أي عمولة لمدة 30 يومًا عند التسجيل اليوم.",
                            },
                        },
                        footer: {
                            title: "دار المزادات",
                            view_current_item: "عرض العنصر الحالي",
                        },
                    },
                    header: {
                        home: "الرئيسية",
                        auction: "المزاد",
                        profile: "ملفي الشخصي",
                        theme_dark: "داكن",
                        theme_light: "فاتح",
                    },
                    auth: {
                        login: "تسجيل الدخول",
                        register: "إنشاء حساب",
                        username: "اسم المستخدم",
                        password: "كلمة المرور",
                        already_registered: "لديك حساب بالفعل؟ سجل الدخول هنا",
                        dont_have_account: "ليس لديك حساب؟ سجل هنا",
                        toast: {
                            login: {
                                success: "تم تسجيل الدخول بنجاح!",
                                error: "بيانات اعتماد غير صحيحة.",
                            },
                            register: {
                                success: "تم إنشاء الحساب بنجاح!",
                                error: "المستخدم موجود بالفعل.",
                            },
                        },
                    },
                    auction: {
                        bid: "مُنَاقَصَة",
                        waiting: "في انتظار العناصر...",
                        live_bids: "العطاءات المباشرة",
                        no_bids: "لا توجد عروض حتى الآن",
                        bid_increments: "زيادات المزايدة",
                        current_bid: "العطاء الحالي",
                        toast: {
                            outbid: "تمت المزايدة عليك!",
                            win: "لقد فزت بـ ",
                        },
                    },
                    profile: {
                        title: "مرحبًا بعودتك، ",
                        list_new_item: "أضف عنصرًا جديدًا",
                    },
                    additemform: {
                        item_title: "عنوان العنصر",
                        item_image: "صورة العنصر",
                        item_description: "وصف العنصر",
                        item_desc_placeholder: "أضف وصفك هنا",
                        starting_price: "السعر الابتدائي",
                        bid_increment: "زيادة المزايدة",
                        add_item: "أضف العنصر",
                        toast: {
                            success: "تمت إضافة العنصر بنجاح!",
                            error: "فشل في إضافة العنصر.",
                        },
                    },
                },
            },
        },
    });

export default i18n;
