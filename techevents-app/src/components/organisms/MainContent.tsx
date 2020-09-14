import React, { FC } from "react";
import EventList from "../molecules/EventList";

const dummyEvents = [
  {
    "id":0,
    "isFree":true,
    "name":"CSS Grids: fact or fiction",
    "city":9,
    "startDate":"2019-07-14T02:00:00+00:00",
    "endDate":"2019-07-14T03:00:00+00:00"
 },
 {
    "id":1,
    "isFree":true,
    "name":"Git Deep: A look at some of Git's powerful, underused features",
    "city":1,
    "startDate":"2019-06-09T21:30:00+00:00",
    "endDate":"2019-06-09T23:50:00+00:00"
 },
 {
    "id":2,
    "isFree":false,
    "name":"Refactoring to clean code",
    "city":7,
    "startDate":"2019-08-17T09:00:00+00:00",
    "endDate":"2019-08-17T10:00:00+00:00"
 },
 {
    "id":3,
    "isFree":true,
    "name":"CSS VS SASS",
    "city":8,
    "startDate":"2019-07-03T17:00:00+00:00",
    "endDate":"2019-07-03T18:30:00+00:00"
 },
 {
    "id":4,
    "isFree":true,
    "name":"CSS VS SASS",
    "city":3,
    "startDate":"2019-07-07T13:00:00+00:00",
    "endDate":"2019-07-07T15:00:00+00:00"
 },
 {
    "id":5,
    "isFree":false,
    "name":"Leadership in Tech",
    "city":5,
    "startDate":"2019-08-26T14:00:00+00:00",
    "endDate":"2019-08-26T15:30:00+00:00"
 }
];
const MainContent: FC = () => {
  return(
    <div className="column is-9">
      <EventList techEvents={dummyEvents} />
    </div>
  );
}

export default MainContent;