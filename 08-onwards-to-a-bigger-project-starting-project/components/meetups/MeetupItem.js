import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {

  const router = useRouter();
  const showDetailsHandler = () => {
    // router.query : 동적 페이지를 다룰 때 URL의 일부 데이터를 받아오는 속성

    /**
     * push() : 프로그래밍 방식으로 검색하는 메소드
     * 새로운 페이지를 페이지 더미에 연결
     * Link 컴포넌트 사용하는 것과 동일
     */
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
