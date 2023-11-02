import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://img.freepik.com/free-photo/selective-focus-of-miniature-tourist-on-compass-over-map-with-plastic-toy-airplane-abstract-background-to-travel-concept_1423-180.jpg?w=2000",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first Meetup!!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://img.freepik.com/free-photo/selective-focus-of-miniature-tourist-on-compass-over-map-with-plastic-toy-airplane-abstract-background-to-travel-concept_1423-180.jpg?w=2000",
    address: "Some Address 5, 12345 Some City",
    description: "This is a second Meetup!!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image: "https://img.freepik.com/free-photo/selective-focus-of-miniature-tourist-on-compass-over-map-with-plastic-toy-airplane-abstract-background-to-travel-concept_1423-180.jpg?w=2000",
    address: "Some Address 5, 12345 Some City",
    description: "This is a third Meetup!!",
  },
];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // /**
  //  * useEffect()
  //  * 페이지가 렌더링될 때 http 요청을 보내려면, 이를 처리하기 위해 일반적으로 useEffect() 훅을 사용한다.
  //  *
  //  * 초기 렌더링 한번 한 후에 데이터를 읽어오고 재렌더링을 한다. -> 검색엔진에 문제가 발생함
  //  * 이를 해결하기 위해 NextJS에는 사전에 렌더링하는 기능이 있다.
  //  * [정적생성 vs 서버 사이드 렌더링]
  //  */
  // useEffect(() => {
  //   // send to http requrest and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  //   return <MeetupList meetups={loadedMeetups} />;
  return <MeetupList meetups={props.meetups} />;
};

/**
 * pages 폴더 안에 있는 컴포넌트 파일들에서만 가능 !!
 * export 할 함수명은 무조건 getStaticProps 으로 설정할것.(NextJS에서 정한 규칙)
 */
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      // 키값명은 props 고정 & 나머지는 자유
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
