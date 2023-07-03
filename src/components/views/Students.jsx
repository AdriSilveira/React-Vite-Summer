import { CardContainer, Card } from "../UI/Card.jsx";
import "./Students.scss";

function Students() {
  const studentlist = [
    {
      UserID: 275,
      UserFirstname: "Shole",
      UserLastname: "Parker",
      UserEmail: "K2955214@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?w=1380&t=st=1687795689~exp=1687796289~hmac=67f2bc6eccf5fafbffc22d50c70f6be7a9c3c6a8353eb5ab8207b0987b4db380",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 276,
      UserFirstname: "Felix",
      UserLastname: "Jhonson",
      UserEmail: "K1083353@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1687796202~exp=1687796802~hmac=4b74426c2074e604181d973311ea7ed7af247987f8e15291d836fbec1f0d1d1b",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 277,
      UserFirstname: "Mark",
      UserLastname: "Andrejeski",
      UserEmail: "K2990629@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/portrait-masculinity-portrait-handsome-young-bearded-man-while-standing-against-grey-wall_231208-7829.jpg?w=1380&t=st=1687796382~exp=1687796982~hmac=816c9499f2e360a812f5c76322bee8207f921d6c670b24cd57f956da263e4833",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 278,
      UserFirstname: "Thomas",
      UserLastname: "Smith",
      UserEmail: "K8536850@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/half-length-shot-cheerful-senior-man-smiles-happily-with-white-teeth-wears-optical-glasses-sweater-isolated-brown-wall_273609-44148.jpg?17&w=1380&t=st=1687796911~exp=1687797511~hmac=cf46e3a39217fab1200e3b76cb9eb55cfaf5207523f37177acfc04b781cf9ffc",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },
    {
      UserID: 279,
      UserFirstname: "Luisa",
      UserLastname: "Gray",
      UserEmail: "K5638915@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg?w=1380&t=st=1687796758~exp=1687797358~hmac=c631a81e483365ac3d7df0e533865d6a82e9dcb082f328f7ac071d47432d5394",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 280,
      UserFirstname: "Ricardo",
      UserLastname: "Royles",
      UserEmail: "K1035263@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/portrait-handsome-bearded-man_23-2149880047.jpg?w=1380&t=st=1687797264~exp=1687797864~hmac=caeeb7559104b20ac37d2449c8cb9d18e47bb3bb38d83a43829de8bb02ae550c",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 281,
      UserFirstname: "Mia",
      UserLastname: "Silveira",
      UserEmail: "K2866646@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/cheerful-gorgeous-young-woman-wearing-her-ginger-hair-knot-smiling-happily-while-receiving-some-positive-news-pretty-girl-dressed-white-blouse-looking-with-excited-joyful-smile_273609-506.jpg?w=1380&t=st=1687796307~exp=1687796907~hmac=0fb582330c783ecea6fc8bd54c6ffc525db381aaecdbd883903c6b9506186774",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 282,
      UserFirstname: "Amelia",
      UserLastname: "Milton",
      UserEmail: "K7727337@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/portrait-good-looking-middle-aged-woman-with-wrinkled-face-natural-beauty-blonde-hair-looks-directly-camera-has-calm-expression-dressed-white-casual-jumper_273609-44994.jpg?w=1380&t=st=1687797325~exp=1687797925~hmac=478480031eec79c6363e07d7f28742a5642da445acbf8747e8ee18988cc99471",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 283,
      UserFirstname: "Danish",
      UserLastname: "Phillips",
      UserEmail: "K3008749@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/portrait-handsome-brunet-unshaven-adult-man-looks-with-calm-confident-expression-has-serious-look-wears-casual-jumper-poses-making-photo-against-white-background-being-hard-impress_273609-57668.jpg?w=1380&t=st=1687796043~exp=1687796643~hmac=10b40c6fbdc9cbf9c23ba05bbbf19e03f7723dadd6d0a1c7038f636a68045251",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },

    {
      UserID: 284,
      UserFirstname: "Molly",
      UserLastname: "Ferreira",
      UserEmail: "K8319360@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=1380&t=st=1687795888~exp=1687796488~hmac=05507fd09efd26f4267d0d8cc94896f8499b87bc7ab2e7f3cf7d67cfc30467e0",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    },
  ];

  // View --------------------------------------

  return (
    <>
      <h1>Students</h1>
      <CardContainer>
        {studentlist.map((student) => {
          return (
            <div className="studentCard" key={student.UserEmail}>
              <Card>
                <div className="studentImage">
                  <img src={student.UserImageURL} />
                </div>
                <p>{student.UserEmail.substring(0, 8)}</p>
                <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
              </Card>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
}

export default Students;
