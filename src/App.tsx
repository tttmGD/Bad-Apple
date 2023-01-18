import { useEffect, useState } from "react"

const App = () => {
	const [frame, setFrame] = useState("")
	const [data, setData] = useState("")
	useEffect(() => {
		fetch("https://cdn.emancial.me/badapple.json")
			.then(res => res.json())
			.then(setData)
	}, [])
	useEffect(() => {
		let i = 0
		const interval = setInterval(() => {
			setFrame(data[i])
			i++
		}, 20)
		return () => clearInterval(interval)
	}, [data])
	return <p>{frame}</p>
}

export default App