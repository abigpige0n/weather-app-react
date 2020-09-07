import React from "react";

export default function FormattedDate(props) {
    let days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat"
    ]
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    return(
        <div>
            {day}. {date} {month} {year}
        </div>
    );
}