import UnicumLogo from "../../assets/logos/unicum_logo_pink.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { setTelegramId } from "../../features/telegramId/telegramIdSlice";
import { submitForm } from "../../features/formSubmit/formSlice";
const Questionnaire = () => {
  const [selected, setSelected] = useState("");
  const [gender, setGender] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [educationType, setEducationType] = useState("");
  const [educationDirection,setEducationDirection] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [englishGoal, setEnglishGoal] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [learningExperience, setLearningExperience] = useState("");
  const [startLearning_importance, setStartLearning_importance] = useState("");
  const [englishProficiency, setEnglishProficiency] = useState("");
  const [courseType, setCourseType] = useState("");
  const [considerEnrollment, setConsiderEnrollment] = useState("");
  const [selectedKey, setSelectedKey] = useState("age");
  const [arr, setArr] = useState([]);
  const [cond, setCond] = useState([]);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
  });
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
  const dispatch=useDispatch();
  const {status} = useSelector((state) => state.formSubmit);
  
  useEffect(() => {
     const searchParams = new URLSearchParams(window.location.search);
      const idFromUrl = searchParams.get('telegramId');
      if (idFromUrl) {
      // Redux state'ga telegramId ni yozish
      dispatch(setTelegramId(idFromUrl));
    }
  },[dispatch])
   const telegramId = useSelector((state) => state.telegram.telegramId); //telegram id
   
  const notClicked = (e) => {
    e.stopPropagation();
  };
  const handleClick = (e, value) => {
    setSelectedKey(e.target.parentElement.parentElement.getAttribute("name"));
    setSelected(value);
  };
  useEffect(() => {
    if (selectedKey === "obstacles") {

      arr.includes(selected)
        ? arr.splice(arr.indexOf(selected), 1)
        : arr.push(selected);
      setArr(arr);

      setFormData({
        ...formData,
        [selectedKey]: arr,
      });
    } else if (selectedKey === "conditions") {

      cond.includes(selected)
        ? cond.splice(cond.indexOf(selected), 1)
        : cond.push(selected);
      setCond(cond);

      setFormData({
        ...formData,
        [selectedKey]: cond,
      });
    } else {
      setFormData({
        ...formData,
        [selectedKey]: selected,
      });
    }
  }, [selectedKey, selected, count]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitForm({...formData,user:telegramId}));
    if(status === 'succeeded'){
      window.Telegram.WebApp.close();
    }
  };
  return (
    <div className="questionnaire">
      <img className="questionnaire_img" src={UnicumLogo} alt="Unicum logo" />
      <div style={{ width: "100%", margin: "0 auto" }}>
        <h1 className="questionnaire_title">Foydalanuvchi Ma'lumotlari</h1>
        <form
          style={{ display: "block", width: "100%", margin: "0 auto" }}
          onSubmit={handleSubmit}
        >
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Yoshingiz:</p>
              <input
                type="number"
                name="age"
                onChange={handleChange}
                required
                className="form_input other_input"
                style={{ marginTop: "10px" }}
                placeholder="Your Answer"
              />
            </label>
          </div>

          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Jinsingiz:</p>
              <ul
                name="gender"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="male">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        gender === "male"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setGender("male");
                      return handleClick(e, "male");
                    }}
                  >
                    Erkak
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="female">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        gender === "female"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setGender("female");
                      return handleClick(e, "female");
                    }}
                  >
                    Ayol
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Qaysi kursda tahsil olasiz?</p>
              <ul
                name="courseNumber"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="1">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        courseNumber === "1"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCourseNumber("1");
                      return handleClick(e, "1");
                    }}
                  >
                    1
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="2">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        courseNumber === "2"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCourseNumber("2");
                      return handleClick(e, "2");
                    }}
                  >
                    2
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="3">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        courseNumber === "3"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCourseNumber("3");
                      return handleClick(e, "3");
                    }}
                  >
                    3
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="4">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        courseNumber === "4"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCourseNumber("4");
                      return handleClick(e, "4");
                    }}
                  >
                    4
                  </p>
                </li>
              </ul>
            </label>
          </div>

          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Ta'lim shakli:</p>
              <ul
                name="educationType"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="daytime">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationType === "daytime"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setEducationType("daytime");
                      return handleClick(e, "daytime");
                    }}
                  >
                    Kunduzgi
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="externally">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationType === "externally"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setEducationType("externally");
                      return handleClick(e, "externally");
                    }}
                  >
                    Sirtqi
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="evening">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationType === "evening"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setEducationType("evening");
                      return handleClick(e, "evening");
                    }}
                  >
                    Kechki
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Ta'lim yo'nalishingizni belgilang:</p>
              <ul
                name="educationDirection"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="software_engineering"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "software_engineering"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setEducationDirection("software_engineering");
                    return handleClick(e, "software_engineering");
                  }}>
                    Dasturiy injiniring
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="computer_engineering"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "computer_engineering"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("computer_engineering");
                    return handleClick(e, "computer_engineering");
                  }}>
                    Kompyuter injiniringi
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="banking">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "banking"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("banking");
                    return handleClick(e, "banking");
                  }}>Bank ishi</p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="finance_and_financial_technologies"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "finance_and_financial_technologies"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) =>
                     {
                      setEducationDirection("finance_and_financial_technologies");
                      return handleClick(e,"finance_and_financial_technologies");
                     }
                    }
                  >
                    Moliya va moliyaviy texnologiyalar
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="logistics">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "logistics"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("logistics");
                    return handleClick(e, "logistics");
                  }}>Logistika</p>
                </li>
                <li className="form_li" onClick={notClicked} value="economics">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "economics"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("economics");
                    return handleClick(e, "economics");
                  }}>
                    Iqtisodiyot
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="accounting">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "accounting"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("accounting");
                    return handleClick(e, "accounting");
                  }}>
                    Buxgalteriya hisobi
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="tourism_and_hospitality"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "tourism_and_hospitality"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("tourism_and_hospitality");
                    return handleClick(e, "tourism_and_hospitality");
                  }}>
                    Turizm va mehmondo'stlik
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="preschool_education"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "preschool_education"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("preschool_education");
                    return handleClick(e, "preschool_education");
                  }}>
                    Maktabgacha taʼlim
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="primary_education"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "primary_education"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("primary_education");
                    return handleClick(e, "primary_education");
                  }}>
                    Boshlangʻich taʼlim
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="special_pedagogy"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "special_pedagogy"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setEducationDirection("special_pedagogy");
                    return handleClick(e, "special_pedagogy");
                  }}>
                    Maxsus pedagogika
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="native_language_and_literature"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "native_language_and_literature"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) =>{
                      setEducationDirection("native_language_and_literature");
                      return handleClick(e, "native_language_and_literature");
                    }
                      
                    }
                  >
                    Ona tili va adabiyot
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="foreign_language_and_literature"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "foreign_language_and_literature"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p
                    onClick={(e) =>
                    {
                      setEducationDirection("foreign_language_and_literature");
                      return handleClick(e, "foreign_language_and_literature");
                    }
                    }
                  >
                    Xorijiy til va adabiyoti
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="history">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "history"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("history");
                    return handleClick(e, "history");
                  }}>Tarix</p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="mathematics"
                >
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "mathematics"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setEducationDirection("mathematics");
                    return handleClick(e, "mathematics");
                  }}>
                    Matematika
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="psychology">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "psychology"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("psychology");
                    return handleClick(e, "psychology");
                  }}>
                    Psixologiya
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="architecture"
                >
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "architecture"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("architecture");
                    return handleClick(e, "architecture");
                  }}>
                    Arxitektura
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="social_work"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        educationDirection === "social_work"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEducationDirection("social_work");
                    return handleClick(e, "social_work");
                  }}>
                    Ijtimoiy ish
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Ingliz tilini qay darajada bilasiz?</p>
              <ul
                name="englishLevel"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="none">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishLevel === "none"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishLevel("none");
                    return handleClick(e, "none");
                  }}>
                    Umuman bilmayman
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="little">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishLevel === "little"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishLevel("little");
                    return handleClick(e, "little");
                  }}>
                    Ozgina bilaman
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="average">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishLevel === "average"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishLevel("average");
                    return handleClick(e, "average");
                  }}>
                    O'rtacha bilaman
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="good">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishLevel === "good"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishLevel("good");
                    return handleClick(e, "good");
                  }}>
                    Bilimim yaxshi (intermediate va yuqori)
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Ingliz tilini o'rganishingizdan maqsad nima?</p>
              <ul name="englishGoal" className="form_ul" style={{ marginTop: "10px" }}>
                <li className="form_li" onClick={notClicked} value="career">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishGoal === "career"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>{" "}
                  <p onClick={(e) =>{
                    setEnglishGoal("career");
                    return handleClick(e, "career");
                  }}>
                    Kelajakda yaxshi karyera qilish
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="knowledge">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishGoal === "knowledge"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>{" "}
                  <p onClick={(e) => {
                    setEnglishGoal("knowledge");
                    return handleClick(e, "knowledge");
                  }}>
                    Ingliz tilida ma'lumot topib, bilim olish
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="abroad">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishGoal === "abroad"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>{" "}
                  <p onClick={(e) => {
                    setEnglishGoal("abroad");
                    return handleClick(e, "abroad");
                  }}>
                    Chet elda ishlash yoki ta'lim olish
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="entertainment"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishGoal === "entertainment"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishGoal("entertainment");
                    return handleClick(e, "entertainment");
                  }}>
                    Kino va musiqalarni tushunib ko'rish
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="certificate"
                >
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishGoal === "certificate"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>{" "}
                  <p onClick={(e) => {
                    setEnglishGoal("certificate");
                    return handleClick(e, "certificate");
                  }}>
                    Magistraturaga kirish uchun sertifikat olish
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
                Ingliz tilini o'rganishga haftada necha kun ajratishga
                tayyorsiz?
              </p>
              <ul
                name="daysPerWeek"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="1">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        daysPerWeek === "1"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setDaysPerWeek("1");
                    return handleClick(e, "1");
                  }}>1-2 kun</p>
                </li>
                <li className="form_li" onClick={notClicked} value="2">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        daysPerWeek === "2"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setDaysPerWeek("2");
                    return handleClick(e, "2");
                  }}>3 kun</p>
                </li>
                <li className="form_li" onClick={notClicked} value="3">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        daysPerWeek === "3"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setDaysPerWeek("3");
                    return handleClick(e, "3");
                  }}>
                    Deyarli har kuni o'rganishga tayyorman
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
                Ingliz tilini mustaqil yoki o'quv markaziga borib
                o'rganganmisiz?
              </p>
              <ul
                name="learningExperience"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="offline">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        learningExperience === "offline"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setLearningExperience("offline");
                    return handleClick(e, "offline");
                  }}>
                    O'quv markazida (Oflayn)
                  </p>{" "}
                </li>
                <li className="form_li" onClick={notClicked} value="online">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        learningExperience === "online"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setLearningExperience("online");
                    return handleClick(e, "online");
                  }}>
                    Onlayn platformalarda
                  </p>{" "}
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="self_taught"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        learningExperience === "self_taught"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setLearningExperience("self_taught");
                    return handleClick(e, "self_taught");
                  }}>
                    Mustaqil o'rganganman
                  </p>{" "}
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="no_experience"
                >
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        learningExperience === "no_experience"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setLearningExperience("no_experience");
                    return handleClick(e, "no_experience");
                  }}>
                    O'rganishga imkoniyatim bo'lmagan
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
                Ingliz tilini o'quv markazda yoki mustaqil o'rganishingizga
                nimalar to'sqinlik qilgan?
              </p>
              <ul
                name="obstacles"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="no_time">
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "no_time");
                    }}
                  >
                    Yetarli vaqt ajrata olmaganman
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="no_qualified_teachers"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "no_qualified_teachers");
                    }}
                  >
                    Malakali ustozlar bo'lmagan
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="no_motivation"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>{" "}
                  <p
                    onClick={(e) => {
                      setCount(count + 1);

                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "no_motivation");
                    }}
                  >
                    Motivatsiya yetishmagan
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="too_expensive"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>{" "}
                  <p
                    onClick={(e) => {
                      setCount(count + 1);

                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "too_expensive");
                    }}
                  >
                    Qimmat bo'lgan
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="center_too_far"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>{" "}
                  <p
                    onClick={(e) => {
                      setCount(count + 1);

                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "center_too_far");
                    }}
                  >
                    O'quv markazi uzoq edi
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="no_obstacles"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);

                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "no_obstacles");
                    }}
                  >
                    Hech qanday to'sqinlik bo'lmagan
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
                Ingliz tilini o'rganishni hozirdan boshlash siz uchun qanchalik
                muhim?
              </p>
              <ul
                name="startLearning_importance"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="start_now">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        startLearning_importance === "start_now"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setStartLearning_importance("start_now");
                    return handleClick(e, "start_now");
                  }}>
                    Hoziroq boshlashga tayyorman
                  </p>{" "}
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="study_later"
                >
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        startLearning_importance === "study_later"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setStartLearning_importance("study_later");
                    return handleClick(e, "study_later");
                  }}>
                    Keyinchalik o'qishim mumkin
                  </p>{" "}
                </li>
                <li className="form_li" onClick={notClicked} value="self_study">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        startLearning_importance === "self_study"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setStartLearning_importance("self_study");
                    return handleClick(e, "self_study");
                  }}>
                    Mustaqil o'rganmoqchiman
                  </p>{" "}
                </li>
                <li className="form_li" onClick={notClicked} value="not_needed">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        startLearning_importance=== "not_needed"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setStartLearning_importance("not_needed");
                    return handleClick(e, "not_needed");
                  }}>
                    Menga hozircha ingliz tili kerak emas
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
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
              <input
                type="text"
                name="importanceRanking"
                onChange={handleChange}
                required
                className="form_input other_input"
                style={{ marginTop: "10px" }}
                placeholder="Your Answer"
              />
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Ingliz tilini qay darajada bilish siz uchun yetarli?</p>
              <ul
                name="englishProficiency"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="ielts">
                  {" "}
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishProficiency === "ielts"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishProficiency("ielts");
                    return handleClick(e, "ielts");
                  }}>
                    IELTS sertifikatini olmoqchiman
                  </p>{" "}
                </li>
                <li className="form_li" onClick={notClicked} value="fluent">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishProficiency === "fluent"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishProficiency("fluent");
                    return handleClick(e, "fluent");
                  }}>
                    Ingliz tilida ravon gaplashmoqchiman
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="academic">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishProficiency === "academic"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setEnglishProficiency("academic");
                    return handleClick(e, "academic");
                  }}>
                    Ingliz tilida ilmiy kitoblarni o'qimoqchiman
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="career">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        englishProficiency === "career"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) => {
                    setEnglishProficiency("career");
                    return handleClick(e, "career");
                  }}>
                    Karyera qilishim uchun yetarli bo'lsa bo'ldi
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>Sizga qaysi ta'lim turi qulay?</p>
              <ul
                name="courseType"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="offline">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        courseType === "offline"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setCourseType("offline");
                    return handleClick(e, "offline");
                  }}>
                    O'quv markazida (oflayn)
                  </p>{" "}
                </li>
                <li className="form_li" onClick={notClicked} value="online">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        courseType === "online"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setCourseType("online");
                    return handleClick(e, "online");
                  }}>Onlayn</p>{" "}
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
                Unicum Academy'da qanday sharoitlar bo'lganda, o'qigan
                bo'lardingiz? (Bir nechta variantni tanlash mumkin)
              </p>
              <ul
                name="conditions"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="quality_teaching"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "quality_teaching");
                    }}
                  >
                    Sifatli ta'lim va malakali ustozlar bo'lsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="additional_tutor"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "additional_tutor");
                    }}
                  >
                    Qo'shimcha shug'ullanadigan ikkinchi ustoz bo'lsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="free_materials"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "free_materials");
                    }}
                  >
                    Oxford tizimidagi kitob va daftarlar bepul berilsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="close_location"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "close_location");
                    }}
                  >
                    Lokatsiya yaqin bo'lsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="modern_conditions"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "modern_conditions");
                    }}
                  >
                    Zamonaviy sharoit va do'stona muhit bo'lsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="friendly_environment"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "friendly_environment");
                    }}
                  >
                    Do'stona muhitda hamfikr talabalar bilan o'rganilsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="regular_events"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "regular_events");
                    }}
                  >
                    Ingliz tilida muntazam tadbirlar va musobaqalar uyushtirilsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="english_only"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "english_only");
                    }}
                  >
                    Faqat ingliz tilida gaplashiladigan muhit bo'lsa
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="tours">
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "tours");
                    }}
                  >
                    Turistik joylarga ekskursiyalar uyushtirilsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="study_abroad_support"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "study_abroad_support");
                    }}
                  >
                    Chet elda o'qishga hujjat topshirishga yordam berilsa
                  </p>
                </li>
                <li
                  className="form_li"
                  onClick={notClicked}
                  value="affordable_prices"
                >
                  <div onClick={notClicked} className="square">
                    <div onClick={notClicked} className="child_div"></div>
                  </div>
                  <p
                    onClick={(e) => {
                      setCount(count + 1);
                      e.target.previousElementSibling.children[0].classList.toggle(
                        "active",
                      );
                      return handleClick(e, "affordable_prices");
                    }}
                  >
                    Narxlari to'g'ri kelsa
                  </p>
                </li>
              </ul>
            </label>
          </div>
          <div className="form_div" style={{ marginBottom: "10px" }}>
            <label>
              <p>
                Agar siz kutgan talablar Unicum Academy'da bo'lsa, o'qish
                imkoniyatini ko'rib chiqqan bo'larmidingiz?
              </p>
              <ul
                name="considerEnrollment"
                className="form_ul"
                style={{ marginTop: "10px" }}
              >
                <li className="form_li" onClick={notClicked} value="yes">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        considerEnrollment === "yes"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setConsiderEnrollment("yes");
                    return handleClick(e, "yes");
                  }}>
                    Qatnashib ko'rgan bo'lardim
                  </p>
                </li>
                <li className="form_li" onClick={notClicked} value="no">
                  <div onClick={notClicked} className="circle">
                    <div
                      onClick={notClicked}
                      style={
                        considerEnrollment === "no"
                          ? { background: "#1907EC" }
                          : { background: "white" }
                      }
                    ></div>
                  </div>
                  <p onClick={(e) =>{
                    setConsiderEnrollment("no");
                    return handleClick(e, "no");
                  }}>
                    Yo'q, hozircha qiziq emas
                  </p>
                </li>
              </ul>
            </label>
          </div>

          <button className="form_button" type="submit">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
