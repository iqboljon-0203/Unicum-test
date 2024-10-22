import UnicumLogo from "../../assets/logos/unicum_logo_pink.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { fetchQuestionAnswers } from "../../features/getAllAnswers/getAllQuestionAnswersSlice";
const StatisticsPage = () => {
  const dispatch = useDispatch();
  const progressPercentage=0;
   const handleClose = () => {
        window.Telegram.WebApp.close();
    };
  useEffect(() => {
     dispatch(fetchQuestionAnswers());
    
  }, [dispatch]);

  const {answers}=useSelector((state)=>state.getAllAnswers);
  console.log(answers);
  
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
            <span className="statics_list_item_answers_count">{answers&&answers?.age?.values.length} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers&&answers?.age?.values.map((item,index) => (
                <li key={index} className="statics_list_item_answers_list_item">{item}</li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">Jinsingiz:</p>
            <span className="statics_list_item_answers_count">{answers&&answers?.gender?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
               {answers?.gender&&answers?.gender?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
           
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Qaysi kursda tahsil olasiz?
            </p>
            <span className="statics_list_item_answers_count">{answers?.courseNumber&&answers?.courseNumber?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.courseNumber&&answers?.courseNumber?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
             
             
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">Ta'lim shakli:</p>
            <span className="statics_list_item_answers_count">{answers?.educationType&&answers?.educationType?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.educationType&&answers?.educationType?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ta'lim yo'nalishingizni belgilang:
            </p>
            <span className="statics_list_item_answers_count">{answers?.educationDirection&&answers?.educationDirection?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
               {answers?.educationDirection&&answers?.educationDirection?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini qay darajada bilasiz?
            </p>
            <span className="statics_list_item_answers_count">{answers?.englishLevel&&answers?.englishLevel?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.englishLevel&&answers?.englishLevel?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishingizdan maqsad nima?
            </p>
            <span className="statics_list_item_answers_count">{answers?.englishGoal&&answers?.englishGoal?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
             {answers?.englishGoal&&answers?.englishGoal?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishga haftada necha kun ajratishga tayyorsiz?
            </p>
            <span className="statics_list_item_answers_count">{answers?.daysPerWeek&&answers?.daysPerWeek?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
               {answers?.daysPerWeek&&answers?.daysPerWeek?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini mustaqil yoki o'quv markaziga borib o'rganganmisiz?
            </p>
            <span className="statics_list_item_answers_count">{answers?.learningExperience&&answers?.learningExperience?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.learningExperience&&answers?.learningExperience?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'quv markazda yoki mustaqil o'rganishingizga
              nimalar to'sqinlik qilgan? (Bir nechta variantni tanlash mumkin)
            </p>
            <span className="statics_list_item_answers_count">{answers?.obstacles&&answers?.obstacles?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
               {answers?.obstacles&&answers?.obstacles?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini o'rganishni hozirdan boshlash siz uchun qanchalik
              muhim?
            </p>
            <span className="statics_list_item_answers_count">
              {answers?.startLearning_importance&&answers?.startLearning_importance?.totalCount} javoblar
            </span>
            <ul className="statics_list_item_answers_list">
              {answers?.startLearning_importance&&answers?.startLearning_importance?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
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
            <span className="statics_list_item_answers_count">{answers&&answers?.importanceRanking?.values.length} javoblar</span>
            <ul className="statics_list_item_answers_list">
                 {answers&&answers?.importanceRanking?.values.map((item,index) => (
                <li key={index} className="statics_list_item_answers_list_item">{item}</li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Ingliz tilini qay darajada bilish siz uchun yetarli?
            </p>
            <span className="statics_list_item_answers_count">{answers?.englishProficiency&&answers?.englishProficiency?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.englishProficiency&&answers?.englishProficiency?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Sizga qaysi ta'lim turi qulay?
            </p>
            <span className="statics_list_item_answers_count">{answers?.courseType&&answers?.courseType?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.courseType&&answers?.courseType?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Unicum Academy'da qanday sharoitlar bo'lganda, o'qigan
              bo'lardingiz? (Bir nechta variantni tanlash mumkin)
            </p>
            <span className="statics_list_item_answers_count">{answers?.conditions&&answers?.conditions?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.conditions&&answers?.conditions?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
            </ul>
          </li>
          <li className="statictics_list_item">
            <p className="statictics_list_item_question">
              Agar siz kutgan talablar Unicum Academy'da bo'lsa, o'qish
              imkoniyatini ko'rib chiqqan bo'larmidingiz?
            </p>
            <span className="statics_list_item_answers_count">{answers?.considerEnrollment&&answers?.considerEnrollment?.totalCount} javoblar</span>
            <ul className="statics_list_item_answers_list">
              {answers?.considerEnrollment&&answers?.considerEnrollment?.stats?.map((item,index) => (
                 <li key={index} className="statics_list_item_answers_list_item_percent">
                <p>{item.name?item.name:"Boshqa"}</p>
                <div className="progress-wrapper">
                  <div
                    className="progress-inner"
                    style={{ width: `${item&&item.percentage}%` }}
                  ></div>
                  <span>---{item&&item.count} ({item&&item.percentage}%)</span>
                </div>
              </li>
              ))}
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
