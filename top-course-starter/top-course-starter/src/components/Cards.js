import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  const allCourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      //   console.log(courseCategory);
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    // console.log(allCourses);
    return allCourses;
  };
  return (
    <div>
      {!courses ? (
        <div>
          <h1>No Data Found</h1>
        </div>
      ) : (
        getCourses().map((course) => {
          return <Card key={course.id} course={course} />;
        })
      )}
    </div>
  );
};

export default Cards;
