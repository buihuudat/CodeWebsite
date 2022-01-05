import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/259137626_2058943460937211_6852417692257620846_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=t359aDV0z-4AX_qx64d&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-gcLEqJnGV-uw_vskSX9Y7RiIl9BcLHAz03AnOHRhUQQ&oe=61D014EB" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Truong Thi Quynh Hoa</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/269740585_327626722540587_183626642543773672_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=m2XZsI3AEAYAX9frUba&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9-hqjIz72KgyJxpiLU3Be8v0U5yWuShftJ70jln4U8Iw&oe=61D163BD" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Truong Gia Boi</span>
            <span className="widgetSmUserTitle">Fresher</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/p526x296/269769020_1277971729346092_2060339303591807091_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=e2Oeof-nEC0AX9GjtMN&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8FQHo4TdJrlXYhZlNjdK9pFEpZHnXpZMq-YrLs59CQOg&oe=61D000EC" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nguyen Thuy Nga</span>
            <span className="widgetSmUserTitle">Business Administration</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t39.30808-6/267738203_1093002241240339_242062946383471914_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EFpTr1OTuwAAX9mSZCb&_nc_ht=scontent.fdad3-2.fna&oh=00_AT9SEjMp-m4sSFV_3q9uBxrHVN1Sm3ySEV2i_CH6Y225AQ&oe=61D00DAF" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tran Ngoc</span>
            <span className="widgetSmUserTitle">Full Stack</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t39.30808-1/p200x200/265852272_1802943866759861_7419977595672275435_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YG0g8_2t2eAAX_f0hGE&_nc_ht=scontent.fdad3-2.fna&oh=00_AT9Giueo_0mehNoTIxgykv3bZd45XM-R1_rfn5Wy_QqItA&oe=61D0D80F" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tran Vo Tin</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
