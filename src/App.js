import { useState } from "react"
import { courses } from "./data"
import "./App.css"

export const App = () => {
	const [filteredCourses, setFilteredCourses] = useState(null)

	function filter(selectValue) {
		switch (selectValue) {
			case "from_100_to_200":
				setFilteredCourses(courses.filter(course =>
					course.prices[0] >= 100 && course.prices[0] <= 200 && course.prices[1] <= 200))
				break
			case "from_500":
				setFilteredCourses(courses.filter(course =>
					course.prices[0] >= 500))
				break
			case "up_to_400":
				setFilteredCourses(courses.filter(course =>
					course.prices[1] !== null && course.prices[1] <= 400))
				break
			default:
				setFilteredCourses(courses)
		}
	}

	return (
		<div className="App">
			<div className="author">
				<a href="https://github.com/marc1k3y"
					target="_blank" rel="noreferrer">author</a>
			</div>
			<h1>NewGen Vision</h1>
			<h2>Тестовое задание</h2>
			<select
				defaultValue="default"
				onChange={(e) => filter(e.target.value)}>
				<option value="default">
					Выберите фильтр
				</option>
				<option value="from_100_to_200">
					от 100 до 200 рублей
				</option>
				<option value="from_500">
					от 500 рублей
				</option>
				<option value="up_to_400">
					400 рублей
				</option>
			</select>
			<div className="coursesList">
				{filteredCourses
					? filteredCourses.map(course =>
						<div key={course.name} className="courseLine">
							<div className="courseName">
								{course.name}
							</div>
							<div className="coursePrices">
								{(course.prices[0] || course.prices[0] === 0) &&
									`от ${course.prices[0]}`}
								{course.prices[1] && ` до ${course.prices[1]}`}
								{!course.prices[0] && !course.prices[1]
									? "цена не указана" : " руб."}
							</div>
						</div>)
					: courses.map(course =>
						<div key={course.name} className="courseLine">
							<div className="courseName">
								{course.name}
							</div>
							<div className="coursePrices">
								{(course.prices[0] || course.prices[0] === 0) &&
									`от ${course.prices[0]}`}
								{course.prices[1] && ` до ${course.prices[1]}`}
								{!course.prices[0] && !course.prices[1]
									? "цена не указана" : " руб."}
							</div>
						</div>)}
			</div>
		</div>
	)
}