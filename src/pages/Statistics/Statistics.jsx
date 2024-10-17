import UnicumLogo from "../../assets/logos/unicum_logo_pink.svg";
import "./App.css";
import { useEffect } from "react";
const StatisticsPage = () => {
  const progressPercentage = (54 / 100) * 100;
   const handleClose = () => {
        window.Telegram.WebApp.close();
    };

    // Skriptni qo'shish
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        document.body.appendChild(script);

        // O'chirish uchun tozalash funksiyasi
        return () => {
            document.body.removeChild(script);
        };
    }, []);
  return (
    <div className="statistics">
      <img className="statistics_img" src={UnicumLogo} alt="Unicum logo" />
      <div style={{ width: "100%", margin: "0 auto" }}>
        <h1 className="statistics_title">So'rovnoma javoblari</h1>
        <ul className="statictics_list">
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">Yoshingiz:</p>
            <span className="statics_list_item_answers_count">51 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item">16</li>
              <li className="statics_list_item_answers_list_item">22</li>
              <li className="statics_list_item_answers_list_item">17</li>
              <li className="statics_list_item_answers_list_item">20</li>
              <li className="statics_list_item_answers_list_item">16</li>
              <li className="statics_list_item_answers_list_item">22</li>
              <li className="statics_list_item_answers_list_item">17</li>
              <li className="statics_list_item_answers_list_item">20</li>
              <li className="statics_list_item_answers_list_item">16</li>
              <li className="statics_list_item_answers_list_item">22</li>
              <li className="statics_list_item_answers_list_item">17</li>
              <li className="statics_list_item_answers_list_item">20</li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">Jinsingiz:</p>
            <span className="statics_list_item_answers_count">2 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Erkak</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>

              <li className="statics_list_item_answers_list_item_percent">
                <p>Ayol</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Qaysi kursda tahsil olasiz?
            </p>
            <span className="statics_list_item_answers_count">4 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>1</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>2</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>3</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>4</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">Ta'lim shakli:</p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Kunduzgi</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Kechki</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Sirtqi</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ta'lim yo'nalishingizni belgilang:
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Dasturiy injiniring</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Kompyuter injiniring</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Bank ishi</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Moliya va moliyaviy texnologiyalar</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Logistika</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Iqtisodiyot</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Buxgalteriya hisobi</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Turizm va mehmondo'stlik</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Maktabgacha taʼlim</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Boshlangʻich taʼlim</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Maxsus pedagogika</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Ona tili va adabiyot</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p> Xorijiy til va adabiyoti</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Tarix</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Matematika</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Psixologiya</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Arxitektura</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Ijtimoiy ish</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini qay darajada bilasiz?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Umuman bilmayman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Ozgina bilaman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>O'rtacha bilaman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Bilimim yaxshi (intermediate va yuqori)</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishingizdan maqsad nima?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Kelajakda yaxshi karyera qilish</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Ingliz tilida ma'lumot topib, bilim olish</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p>Chet elda ishlash yoki ta'lim olish</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                {" "}
                <p> Kino va musiqalarni tushunib ko'rish</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Magistraturaga kirish uchun sertifikat olish</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishga haftada necha kun ajratishga tayyorsiz?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p> 1-2 kun</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>3 kun</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Deyarli har kuni o'rganishga tayyorman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini mustaqil yoki o'quv markaziga borib o'rganganmisiz?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p> O'quv markazida (Oflayn)</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Onlayn platformalarda</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Mustaqil o'rganganman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>O'rganishga imkoniyatim bo'lmagan</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'quv markazda yoki mustaqil o'rganishingizga
              nimalar to'sqinlik qilgan? (Bir nechta variantni tanlash mumkin)
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Yetarli vaqt ajrata olmaganman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Malakali ustozlar bo'lmagan</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Motivatsiya yetishmagan</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p> Qimmat bo'lgan</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>O'quv markazi uzoq edi</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Hech qanday to'sqinlik bo'lmagan</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishni hozirdan boshlash siz uchun qanchalik
              muhim?
            </p>
            <span className="statics_list_item_answers_count">
              100 javoblar
            </span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p> Hoziroq boshlashga tayyorman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Keyinchalik o'qishim mumkin</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Mustaqil o'rganmoqchiman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Menga hozircha ingliz tili kerak emas</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishda siz uchun muhim bo'lgan omillarni
              muhimlilik darajasi bo'yicha sanab bersangiz? (Masalan: 3, 2, 1,
              5, 4)
            </p>
            <div style={{ marginTop: "10px" }}>
              <p>1. Sifatli ta'lim va malakali ustozlar</p>
              <p>2. Joylashuv (Qulay lokatsiya)</p>
              <p>3. Zamonaviy sharoit va do'stona muhit</p>
              <p>4. Tadbirlar (Movie day, Speaking club, Musobaqalar)</p>
              <p>5. Narx arzonligi</p>
            </div>
            <span className="statics_list_item_answers_count">51 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item">5,2,3,1,4</li>
              <li className="statics_list_item_answers_list_item">5,4,3,1,2</li>
              <li className="statics_list_item_answers_list_item">5,2,4,1,3</li>
              <li className="statics_list_item_answers_list_item">5,1,3,2,4</li>
              <li className="statics_list_item_answers_list_item">3,2,5,1,4</li>
              <li className="statics_list_item_answers_list_item">4,2,3,1,5</li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini qay darajada bilish siz uchun yetarli?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p> IELTS sertifikatini olmoqchiman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Ingliz tilida ravon gaplashmoqchiman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Ingliz tilida ilmiy kitoblarni o'qimoqchiman</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Karyera qilishim uchun yetarli bo'lsa bo'ldi</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Sizga qaysi ta'lim turi qulay?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p> O'quv markazida (oflayn)</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Onlayn</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Unicum Academy'da qanday sharoitlar bo'lganda, o'qigan
              bo'lardingiz? (Bir nechta variantni tanlash mumkin)
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p>Sifatli ta'lim va malakali ustozlar bo'lsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p> Qo'shimcha shug'ullanadigan ikkinchi ustoz bo'lsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Oxford tizimidagi kitob va daftarlar bepul berilsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Lokatsiya yaqin bo'lsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p> Zamonaviy sharoit va do'stona muhit bo'lsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Do'stona muhitda hamfikr talabalar bilan o'rganilsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>
                  Ingliz tilida muntazam tadbirlar va musobaqalar uyushtirilsa
                </p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p> Faqat ingliz tilida gaplashiladigan muhit bo'lsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Turistik joylarga ekskursiyalar uyushtirilsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Chet elda o'qishga hujjat topshirishga yordam berilsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p> Narxlari to'g'ri kelsa</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Agar siz kutgan talablar Unicum Academy'da bo'lsa, o'qish
              imkoniyatini ko'rib chiqqan bo'larmidingiz?
            </p>
            <span className="statics_list_item_answers_count">16 javoblar</span>
            <ul className="statics_list_item_answers_list">
              <li className="statics_list_item_answers_list_item_percent">
                <p> Qatnashib ko'rgan bo'lardim</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
              <li className="statics_list_item_answers_list_item_percent">
                <p>Yo'q, hozircha qiziq emas</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <span>---{"count"} (65%)</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <button onClick={()=>handleClose()} className="statistics_button" type="submit">
          Yopish
        </button>
      </div>
    </div>
  );
};

export default StatisticsPage;
