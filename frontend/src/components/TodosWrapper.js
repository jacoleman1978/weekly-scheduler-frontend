// import React from 'react';
// import {useParams} from 'react-router-dom';
// import Todos from './Todos';

// function TodosWrapper(props) {
//     const params = useParams();
//     let week = props.week || false;
//     let today = props.today || false;
//     let todosDaysMap = []
//     let todosWrapperStyle = {};

//     if (week) {
//         let days = ["" , "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

//         todosWrapperStyle = {
//             display: "grid",
//             gridTemplateColumns: "repeat(7, 1fr)"
//         }

//         todosDaysMap = days.map((day, i) => {
//             return <Todos day={day} key={i} style={todosWrapperStyle}/> 
//         })
//     } else if (today) {
//         //Need logic to determine day
//         todosDaysMap = [<Todos day={"Friday"} style={todosWrapperStyle} />]
//     } else {
//         todosDaysMap = [<Todos day={[params.day]} style={todosWrapperStyle} />]
//     }

//     return (
//         <div className="todos-wrapper" style={todosWrapperStyle}>
//             {todosDaysMap}
//         </div>
//     )
// }

// export default TodosWrapper;